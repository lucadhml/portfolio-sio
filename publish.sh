#!/bin/zsh
set -e

cd /Users/luca_dhml/Documents/portfolio

git add .
if git diff --cached --quiet; then
  echo "Aucun changement à publier."
  exit 0
fi

git commit -m "Update portfolio $(date '+%Y-%m-%d %H:%M')"
git push origin main

echo "Publication terminée." 
