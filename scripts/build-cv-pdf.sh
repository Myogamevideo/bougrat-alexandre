#!/usr/bin/env bash
# Régénère le PDF du CV depuis cv.html et vérifie qu'il tient sur une page A4.
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
pdf="$root/assets/pdf/BOUGRAT Alexandre CV.pdf"

chrome="$(command -v google-chrome || command -v chromium || command -v chromium-browser || true)"
[ -n "$chrome" ] || { echo "Chrome ou Chromium introuvable" >&2; exit 1; }
command -v pdfinfo >/dev/null || { echo "pdfinfo introuvable (paquet poppler-utils)" >&2; exit 1; }

tmp="$(mktemp --suffix=.pdf)"
trap 'rm -f "$tmp"' EXIT

"$chrome" --headless --no-sandbox --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$tmp" "file://$root/cv.html" >/dev/null 2>&1

info="$(pdfinfo "$tmp")"
pages="$(awk '/^Pages:/ {print $2}' <<<"$info")"
size="$(awk -F': *' '/^Page size:/ {print $2}' <<<"$info")"

if [ "$pages" != "1" ]; then
  echo "Échec : $pages pages (1 attendue). PDF non remplacé." >&2
  exit 1
fi
if [[ "$size" != *"(A4)"* ]]; then
  echo "Échec : format $size (A4 attendu). PDF non remplacé." >&2
  exit 1
fi

mv "$tmp" "$pdf"
trap - EXIT
echo "OK : $pdf (1 page, $size)"
