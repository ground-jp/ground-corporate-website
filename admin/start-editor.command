#!/bin/bash
# GROUND Design Editor — ローカルサーバー起動スクリプト
# ダブルクリックで実行できます

cd "$(dirname "$0")/.."
PORT=8080

# 既にポートが使われている場合は別のポートを探す
while lsof -i :$PORT > /dev/null 2>&1; do
  PORT=$((PORT + 1))
done

echo ""
echo "  ┌─────────────────────────────────────────┐"
echo "  │  GROUND Design Editor                    │"
echo "  │  http://localhost:$PORT/admin/design-editor.html │"
echo "  │                                          │"
echo "  │  Ctrl+C で終了                            │"
echo "  └─────────────────────────────────────────┘"
echo ""

# ブラウザで自動的に開く
open "http://localhost:$PORT/admin/design-editor.html"

# Pythonサーバーを起動（Python 3）
python3 -m http.server $PORT
