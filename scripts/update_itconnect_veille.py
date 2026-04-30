from __future__ import annotations

from bs4 import BeautifulSoup
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path
import json
import re
import requests
from urllib.parse import urljoin

ROOT = Path(__file__).resolve().parents[1]
JSON_PATH = ROOT / 'assets' / 'data' / 'veille.json'
JS_PATH = ROOT / 'assets' / 'data' / 'veille-data.js'

SOURCES = [
    'https://www.it-connect.fr/actualites/',
    'https://www.it-connect.fr/'
]

TOPICS = {
    'cybersecurite': {
        'title': 'Cybersécurité',
        'subtitle': 'Menaces, vulnérabilités et bonnes pratiques repérées automatiquement depuis IT-Connect.',
        'objective': 'Cette veille me permet de suivre les alertes, les vulnérabilités et les bonnes pratiques publiées par IT-Connect, afin d’alimenter ma culture sécurité sur les systèmes et les réseaux dans un cadre directement lié à l’option SISR.',
        'interest': 'L’intérêt de cette veille est d’identifier rapidement des sujets concrets : failles, correctifs, sécurisation Windows, administration de serveurs et réactions à adopter face aux risques. Elle me permet de relier des actualités techniques à des réflexes professionnels.',
        'source_label': 'IT-Connect',
        'source_type': 'Actualités IT & cybersécurité',
        'source_url': 'https://www.it-connect.fr/actualites/',
        'keywords': {
            'cybersécurité': 8,
            'cybersecurite': 8,
            'faille': 8,
            'vulnérabilité': 8,
            'vulnerabilite': 8,
            'cve': 9,
            'attaque': 7,
            'attaques': 7,
            'patch': 6,
            'correctif': 6,
            'ransomware': 9,
            'zero-day': 9,
            'active directory': 6,
            'windows server': 5,
            'microsoft defender': 5,
            'sécurité': 5,
            'securite': 5,
            'mot de passe': 5,
            'authentification': 5,
            'serveur': 4
        },
        'fallback_interest': 'Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une mesure de protection ou une pratique utile à connaître dans l’administration des systèmes et réseaux.'
    },
    'intelligence-artificielle': {
        'title': 'Intelligence artificielle',
        'subtitle': 'Usages, outils et impacts de l’IA repérés automatiquement depuis IT-Connect.',
        'objective': 'Cette veille me permet de suivre les évolutions de l’intelligence artificielle au travers d’articles IT-Connect portant sur les nouveaux outils, les usages en entreprise et les impacts potentiels sur les environnements techniques.',
        'interest': 'L’intérêt de cette veille est de comprendre comment l’IA influence déjà les outils, la sécurité et les méthodes de travail en informatique. Cela m’aide à garder un regard concret sur les apports comme sur les limites de ces solutions.',
        'source_label': 'IT-Connect',
        'source_type': 'Actualités IT & IA',
        'source_url': 'https://www.it-connect.fr/actualites/',
        'keywords': {
            'ia': 9,
            'intelligence artificielle': 10,
            'chatgpt': 10,
            'openai': 9,
            'claude': 8,
            'llm': 8,
            'modèle': 4,
            'modele': 4,
            'agent': 6,
            'agents': 6,
            'copilot': 8,
            'génératif': 7,
            'generatif': 7,
            'deepfake': 8,
            'prompt': 5,
            'automatisation': 4,
            'autonome': 4
        },
        'fallback_interest': 'Cette publication alimente ma veille IA car elle montre une évolution d’outil, d’usage ou d’impact professionnel lié à l’intelligence artificielle.'
    }
}

MONTHS = {
    'janvier': 1,
    'février': 2,
    'fevrier': 2,
    'mars': 3,
    'avril': 4,
    'mai': 5,
    'juin': 6,
    'juillet': 7,
    'août': 8,
    'aout': 8,
    'septembre': 9,
    'octobre': 10,
    'novembre': 11,
    'décembre': 12,
    'decembre': 12,
}


def slugify(text: str) -> str:
    return re.sub(r'\s+', ' ', text.strip().lower())


def parse_date(value: str | None) -> datetime | None:
    if not value:
        return None
    value = value.strip()
    try:
        return datetime.fromisoformat(value.replace('Z', '+00:00'))
    except Exception:
        pass
    try:
        return parsedate_to_datetime(value)
    except Exception:
        pass

    match = re.search(r'(\d{1,2})/(\d{1,2})/(\d{4})', value)
    if match:
        day, month, year = map(int, match.groups())
        return datetime(year, month, day)

    match = re.search(r'(\d{1,2})\s+([A-Za-zéèêëàâäîïôöùûüç-]+)\s+(\d{4})', value.lower())
    if match:
        day = int(match.group(1))
        month = MONTHS.get(match.group(2))
        year = int(match.group(3))
        if month:
            return datetime(year, month, day)
    return None


def extract_articles(url: str) -> list[dict]:
    response = requests.get(url, timeout=20, headers={'User-Agent': 'portfolio-veille-bot/1.0'})
    response.raise_for_status()
    soup = BeautifulSoup(response.text, 'html.parser')
    results: list[dict] = []

    for article in soup.select('article'):
        title_anchor = None
        for selector in ['h2 a', 'h3 a', 'h4 a']:
            title_anchor = article.select_one(selector)
            if title_anchor:
                break
        if not title_anchor:
            continue

        title = ' '.join(title_anchor.get_text(' ', strip=True).split())
        href = title_anchor.get('href')
        if not title or not href:
            continue

        excerpt_node = article.select_one('p')
        excerpt = ''
        if excerpt_node:
            excerpt = ' '.join(excerpt_node.get_text(' ', strip=True).split())

        date_value = None
        time_node = article.select_one('time')
        if time_node:
            date_value = time_node.get('datetime') or time_node.get_text(' ', strip=True)
        if not date_value:
            text_blob = article.get_text(' ', strip=True)
            match = re.search(r'\b\d{2}/\d{2}/\d{4}\b', text_blob)
            if match:
                date_value = match.group(0)

        parsed = parse_date(date_value)

        results.append({
            'title': title,
            'url': urljoin(url, href),
            'excerpt': excerpt,
            'date': parsed,
        })
    return results


def dedupe(items: list[dict]) -> list[dict]:
    seen = set()
    output = []
    for item in items:
        if item['url'] in seen:
            continue
        seen.add(item['url'])
        output.append(item)
    return output


def score_item(item: dict, keywords: dict[str, int]) -> int:
    haystack = slugify(f"{item['title']} {item['excerpt']}")
    score = 0
    for keyword, weight in keywords.items():
        if keyword in haystack:
            score += weight
    return score


def build_summary(excerpt: str, title: str) -> str:
    text = excerpt.strip() or title.strip()
    text = re.sub(r'\s+', ' ', text)
    if len(text) <= 220:
        return text
    return text[:217].rstrip() + '...'


def format_date_fr(dt: datetime | None) -> str:
    if not dt:
        return 'Date non précisée'
    months = [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ]
    return f"{dt.day} {months[dt.month - 1]} {dt.year}"


def build_entries(items: list[dict], topic_key: str) -> list[dict]:
    config = TOPICS[topic_key]
    scored = []
    for item in items:
        score = score_item(item, config['keywords'])
        if score <= 0:
            continue
        scored.append((score, item))

    scored.sort(key=lambda pair: (pair[0], pair[1]['date'] or datetime.min), reverse=True)
    top = [item for _, item in scored[:4]]

    entries = []
    for item in top:
        entries.append({
            'date': format_date_fr(item['date']),
            'title': item['title'],
            'source': 'IT-Connect',
            'url': item['url'],
            'summary': build_summary(item['excerpt'], item['title']),
            'interest': config['fallback_interest']
        })
    return entries


def main() -> None:
    all_items: list[dict] = []
    for source in SOURCES:
        try:
            all_items.extend(extract_articles(source))
        except Exception as exc:
            print(f'Warning: unable to fetch {source}: {exc}')

    items = dedupe(all_items)

    updated = datetime.now(timezone.utc).astimezone().date().isoformat()

    data = {
        'updatedAt': updated,
        'methodologie': {
            'title': 'Méthodologie de veille',
            'summary': 'Ma veille technologique s’appuie sur une source unique, IT-Connect. Chaque semaine, je récupère automatiquement les dernières actualités du site, je filtre les contenus les plus pertinents pour mes thèmes, puis je conserve uniquement les entrées utiles pour le BTS SIO SISR. Cela me permet d’avoir une veille régulière, ciblée et facile à exploiter.',
            'frequency': '1 mise à jour automatique par semaine',
            'tooling': [
                'IT-Connect comme source unique',
                'Récupération automatique des actualités',
                'Filtrage par mots-clés et pertinence',
                'Sélection des meilleures entrées',
                'Mise à jour du portfolio'
            ],
            'steps': [
                {
                    'title': '1. Collecte automatique',
                    'description': 'Un script récupère les dernières actualités publiées sur IT-Connect afin de centraliser les nouveautés sans saisie manuelle.'
                },
                {
                    'title': '2. Filtrage thématique',
                    'description': 'Les articles sont analysés selon des mots-clés liés à la cybersécurité et à l’intelligence artificielle pour ne conserver que les sujets utiles.'
                },
                {
                    'title': '3. Sélection des plus pertinents',
                    'description': 'Le système classe les contenus selon leur pertinence et leur fraîcheur afin d’afficher en priorité les entrées les plus intéressantes.'
                },
                {
                    'title': '4. Mise à jour du portfolio',
                    'description': 'Les synthèses retenues sont publiées automatiquement sur le portfolio, ce qui me permet de présenter une veille actualisée chaque semaine.'
                }
            ],
            'criteria': [
                'Une source clairement identifiée',
                'Une mise à jour régulière et automatisée',
                'Un tri cohérent avec l’option SISR',
                'Des entrées directement exploitables dans le portfolio'
            ]
        },
        'topics': {}
    }

    for key, config in TOPICS.items():
        data['topics'][key] = {
            'title': config['title'],
            'subtitle': config['subtitle'],
            'objective': config['objective'],
            'interest': config['interest'],
            'sources': [
                {
                    'name': config['source_label'],
                    'type': config['source_type'],
                    'url': config['source_url']
                }
            ],
            'entries': build_entries(items, key)
        }

    JSON_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    JS_PATH.write_text('window.VEILLE_DATA = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')
    print(f'Updated {JSON_PATH}')
    print(f'Updated {JS_PATH}')


if __name__ == '__main__':
    main()
