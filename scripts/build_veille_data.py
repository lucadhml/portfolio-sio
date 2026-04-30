from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
json_path = ROOT / 'assets' / 'data' / 'veille.json'
js_path = ROOT / 'assets' / 'data' / 'veille-data.js'

data = json.loads(json_path.read_text())
js_path.write_text('window.VEILLE_DATA = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')
print(f'Updated {js_path}')
