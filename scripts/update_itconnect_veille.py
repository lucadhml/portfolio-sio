from __future__ import annotations

from bs4 import BeautifulSoup
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path
from urllib.parse import urljoin
import json
import re
import requests
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
JSON_PATH = ROOT / 'assets' / 'data' / 'veille.json'
JS_PATH = ROOT / 'assets' / 'data' / 'veille-data.js'

SOURCE_DEFINITIONS = {
    'it-connect': {
        'name': 'IT-Connect',
        'type': 'Presse technique',
        'mode': 'html',
        'url': 'https://www.it-connect.fr/actualites/'
    },
    'anssi': {
        'name': 'ANSSI',
        'type': 'Source institutionnelle',
        'mode': 'rss',
        'url': 'https://cyber.gouv.fr/actualites/rss/'
    },
    'cert-fr': {
        'name': 'CERT-FR',
        'type': 'Bulletins et alertes',
        'mode': 'rss',
        'url': 'https://www.cert.ssi.gouv.fr/actualite/feed/'
    },
    'mit-tech-review': {
        'name': 'MIT Technology Review',
        'type': 'Revue spécialisée IA',
        'mode': 'rss',
        'url': 'https://www.technologyreview.com/feed/'
    },
    'korben': {
        'name': 'Korben',
        'type': 'Blog tech & IA',
        'mode': 'rss',
        'url': 'https://korben.info/feed'
    }
}

TOPICS = {
    'cybersecurite': {
        'title': 'Cybersécurité',
        'subtitle': 'Menaces, vulnérabilités et recommandations suivies à partir de sources techniques et institutionnelles.',
        'objective': 'Cette veille me permet de suivre les vulnérabilités critiques, les recommandations de sécurité et les tendances de la menace afin d’alimenter ma culture sécurité sur les systèmes et les réseaux dans un cadre cohérent avec l’option SISR.',
        'interest': 'L’intérêt de ce sujet est de relier des publications techniques à des situations concrètes : gestion des vulnérabilités, correctifs, sécurité des postes, sécurisation des services et compréhension de la menace actuelle.',
        'allowed_sources': ['it-connect', 'anssi', 'cert-fr'],
        'source_bonus': {
            'it-connect': 2,
            'anssi': 4,
            'cert-fr': 5
        },
        'keywords': {
            'cybersécurité': 8,
            'cybersecurite': 8,
            'cybermenace': 8,
            'faille': 8,
            'vulnérabilité': 8,
            'vulnerabilite': 8,
            'cve': 10,
            'attaque': 7,
            'ransomware': 9,
            'correctif': 6,
            'patch': 6,
            'active directory': 6,
            'windows server': 5,
            'secure boot': 7,
            'github': 3,
            'serveur': 4,
            'sécurité': 5,
            'securite': 5,
            'nis 2': 6,
            'remédiation': 6,
            'remediation': 6,
            'zero-day': 9,
            'zero day': 9,
            'exploit': 7,
            'panorama de la cybermenace': 10
        },
        'negative_keywords': {
            'intelligence artificielle': 3,
            'chatgpt': 2,
            'openai': 2
        },
        'min_score': 8,
        'fallback_interest': 'Cette publication alimente ma veille cybersécurité car elle met en avant un risque, une recommandation ou une pratique directement utile à connaître dans l’administration des systèmes et réseaux.'
    },
    'intelligence-artificielle': {
        'title': 'Intelligence artificielle',
        'subtitle': 'Usages, risques et enjeux de l’IA suivis depuis des sources spécialisées françaises et internationales.',
        'objective': 'Cette veille me permet de suivre les évolutions de l’intelligence artificielle dans un cadre professionnel : nouveaux usages, risques de sécurité, agents autonomes, conformité et impacts sur les outils informatiques.',
        'interest': 'L’intérêt de ce sujet est de garder une vision réaliste de l’IA : à la fois ses apports pour les métiers de l’IT et les nouveaux risques qu’elle introduit en matière de sécurité, d’automatisation et de gouvernance.',
        'allowed_sources': ['it-connect', 'mit-tech-review', 'korben'],
        'source_bonus': {
            'it-connect': 3,
            'mit-tech-review': 5,
            'korben': 4
        },
        'keywords': {
            'intelligence artificielle': 12,
            'artificial intelligence': 12,
            'ia générative': 12,
            'generative ai': 12,
            'ia agentique': 12,
            'agentic ai': 12,
            'chatgpt': 10,
            'openai': 9,
            'claude': 9,
            'gemini': 8,
            'mistral': 8,
            'copilot': 8,
            'llm': 10,
            'large language model': 10,
            'agent': 4,
            'agentique': 8,
            'deepfake': 8,
            'générative': 7,
            'generative': 7,
            'machine learning': 8,
            'deep learning': 8,
            'modèle d’ia': 8,
            'ai model': 8,
            'gpt': 7,
            'ai ': 4,
            ' ai': 4,
            'ia ': 4,
            ' ia': 4,
            'regulation ia': 8,
            'ai regulation': 8,
            'eu ai act': 10,
            'act ia': 8
        },
        'negative_keywords': {
            'cve': 8,
            'vulnérabilité': 6,
            'vulnerabilite': 6,
            'faille': 6,
            'ransomware': 8,
            'windows server': 4,
            'docker et kubernetes': 10,
            'serveur web': 5
        },
        'min_score': 8,
        'fallback_interest': 'Cette publication alimente ma veille IA car elle montre un usage, un risque ou un impact professionnel lié à l’intelligence artificielle.'
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
    # English months
    'january': 1,
    'february': 2,
    'march': 3,
    'april': 4,
    'may': 5,
    'june': 6,
    'july': 7,
    'august': 8,
    'september': 9,
    'october': 10,
    'november': 11,
    'december': 12,
}

HEADERS = {'User-Agent': 'portfolio-veille-bot/2.0'}


def slugify(text: str) -> str:
    return re.sub(r'\s+', ' ', text.strip().lower())


def normalize_datetime(dt: datetime) -> datetime:
    if dt.tzinfo is not None:
        return dt.astimezone(timezone.utc).replace(tzinfo=None)
    return dt


def parse_date(value: str | None) -> datetime | None:
    if not value:
        return None
    value = value.strip()
    try:
        return normalize_datetime(datetime.fromisoformat(value.replace('Z', '+00:00')))
    except Exception:
        pass
    try:
        return normalize_datetime(parsedate_to_datetime(value))
    except Exception:
        pass

    match = re.search(r'(\d{1,2})/(\d{1,2})/(\d{4})', value)
    if match:
        day, month, year = map(int, match.groups())
        return datetime(year, month, day)

    match = re.search(r'(\d{1,2})\s+([A-Za-zéèêëàâäîïôöùûüç\-]+)\s+(\d{4})', value.lower())
    if match:
        day = int(match.group(1))
        month = MONTHS.get(match.group(2))
        year = int(match.group(3))
        if month:
            return datetime(year, month, day)
    return None


def strip_html(text: str) -> str:
    return ' '.join(BeautifulSoup(text or '', 'html.parser').get_text(' ', strip=True).split())


def extract_itconnect_articles() -> list[dict]:
    url = SOURCE_DEFINITIONS['it-connect']['url']
    response = requests.get(url, timeout=20, headers=HEADERS)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, 'html.parser')
    results = []

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
        excerpt = strip_html(excerpt_node.get_text(' ', strip=True) if excerpt_node else '')

        date_value = None
        time_node = article.select_one('time')
        if time_node:
            date_value = time_node.get('datetime') or time_node.get_text(' ', strip=True)
        if not date_value:
            text_blob = article.get_text(' ', strip=True)
            match = re.search(r'\b\d{2}/\d{2}/\d{4}\b', text_blob)
            if match:
                date_value = match.group(0)

        results.append({
            'source_key': 'it-connect',
            'title': title,
            'url': urljoin(url, href),
            'excerpt': excerpt,
            'date': parse_date(date_value)
        })
    return results


def extract_rss_articles(source_key: str) -> list[dict]:
    source = SOURCE_DEFINITIONS[source_key]
    response = requests.get(source['url'], timeout=20, headers=HEADERS)
    response.raise_for_status()
    root = ET.fromstring(response.content)
    results = []

    for item in root.findall('.//item'):
        title = (item.findtext('title') or '').strip()
        link = (item.findtext('link') or '').strip()
        description = strip_html(item.findtext('description') or '')
        pub_date = parse_date(item.findtext('pubDate'))

        if not title or not link:
            continue

        results.append({
            'source_key': source_key,
            'title': title,
            'url': link,
            'excerpt': description,
            'date': pub_date
        })
    return results


def collect_articles() -> list[dict]:
    collected: list[dict] = []
    try:
        collected.extend(extract_itconnect_articles())
    except Exception as exc:
        print(f'Warning: unable to fetch IT-Connect: {exc}')

    for source_key in ['anssi', 'cert-fr', 'mit-tech-review', 'korben']:
        try:
            collected.extend(extract_rss_articles(source_key))
        except Exception as exc:
            print(f'Warning: unable to fetch {source_key}: {exc}')
    return collected


def dedupe(items: list[dict]) -> list[dict]:
    seen = set()
    output = []
    for item in items:
        if item['url'] in seen:
            continue
        seen.add(item['url'])
        output.append(item)
    return output


def keyword_score(haystack: str, keyword: str, weight: int) -> int:
    if keyword.strip() in ('ia', 'ai'):
        return weight if re.search(r'\b' + re.escape(keyword.strip()) + r'\b', haystack) else 0
    return weight if keyword in haystack else 0


def score_item(item: dict, topic_key: str) -> int:
    config = TOPICS[topic_key]
    if item['source_key'] not in config['allowed_sources']:
        return -999

    haystack = slugify(f"{item['title']} {item['excerpt']}")
    score = config['source_bonus'].get(item['source_key'], 0)

    for keyword, weight in config['keywords'].items():
        score += keyword_score(haystack, keyword, weight)

    for keyword, penalty in config['negative_keywords'].items():
        score -= keyword_score(haystack, keyword, penalty)

    return score


def build_summary(excerpt: str, title: str) -> str:
    text = excerpt.strip() or title.strip()
    text = re.sub(r'\s+', ' ', text)
    if len(text) <= 240:
        return text
    return text[:237].rstrip() + '...'


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
    scored: list[tuple[int, dict]] = []
    for item in items:
        score = score_item(item, topic_key)
        if score < config['min_score']:
            continue
        scored.append((score, item))

    scored.sort(key=lambda pair: (pair[0], pair[1]['date'] or datetime.min), reverse=True)
    top = [item for _, item in scored[:4]]

    entries = []
    for item in top:
        source = SOURCE_DEFINITIONS[item['source_key']]
        entries.append({
            'date': format_date_fr(item['date']),
            'title': item['title'],
            'source': source['name'],
            'url': item['url'],
            'summary': build_summary(item['excerpt'], item['title']),
            'interest': config['fallback_interest']
        })
    return entries


def build_sources(topic_key: str) -> list[dict]:
    config = TOPICS[topic_key]
    return [
        {
            'name': SOURCE_DEFINITIONS[key]['name'],
            'type': SOURCE_DEFINITIONS[key]['type'],
            'url': SOURCE_DEFINITIONS[key]['url']
        }
        for key in config['allowed_sources']
    ]


def main() -> None:
    items = dedupe(collect_articles())
    updated = datetime.now(timezone.utc).astimezone().date().isoformat()

    data = {
        'updatedAt': updated,
        'methodologie': {
            'title': 'Méthodologie de veille',
            'summary': 'Ma veille technologique repose sur plusieurs sources complémentaires : IT-Connect et le CERT-FR pour la cybersécurité, MIT Technology Review et Korben pour l’IA. Chaque jour, un script récupère automatiquement les nouvelles publications, calcule un score de pertinence par mots-clés, et sélectionne les 4 meilleures entrées par thème.',
            'frequency': 'Mise à jour automatique quotidienne',
            'tooling': [
                'IT-Connect, ANSSI, CERT-FR (cybersécurité)',
                'MIT Technology Review, Korben (IA)',
                'Collecte automatique quotidienne',
                'Score de pertinence par mots-clés',
                'Sélection des 4 meilleures entrées par thème'
            ],
            'steps': [
                {
                    'title': '1. Collecte multi-sources',
                    'description': 'Un script interroge chaque jour plusieurs sources fiables : presse technique, sources institutionnelles et revues spécialisées IA.'
                },
                {
                    'title': '2. Score de pertinence',
                    'description': 'Chaque publication reçoit un score basé sur ses mots-clés, sa source et son thème. Les scores négatifs permettent d’exclure les hors-sujets.'
                },
                {
                    'title': '3. Sélection des meilleures entrées',
                    'description': 'Le système conserve les 4 publications avec le score le plus élevé par thème, adaptées au parcours SISR.'
                },
                {
                    'title': '4. Publication automatique',
                    'description': 'Les entrées retenues sont publiées automatiquement sur le portfolio avec leur date, leur source et un résumé.'
                }
            ],
            'criteria': [
                'Sources identifiées et crédibles',
                'Mise à jour quotidienne automatisée',
                'Score de pertinence adapté à l’option SISR',
                'Synthèses réutilisables devant le jury'
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
            'sources': build_sources(key),
            'entries': build_entries(items, key)
        }

    JSON_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    JS_PATH.write_text('window.VEILLE_DATA = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')
    print(f'Updated {JSON_PATH}')
    print(f'Updated {JS_PATH}')


if __name__ == '__main__':
    main()
