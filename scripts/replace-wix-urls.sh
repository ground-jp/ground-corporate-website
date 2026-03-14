#!/bin/bash
# Wix画像URLをローカルパスに置換するスクリプト
# 実行方法: cd ~/Desktop/website && bash scripts/replace-wix-urls.sh
# ※先に download-wix-images.sh を実行してください

set -e

echo "🔄 HTMLファイル内のWix画像URLを置換中..."

# Solutions カード（index.html）- デジタルインテグレーション
find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://static.wixstatic.com/media/409c45_5f51acbc19d94f159cc6e79e51b7a3d4~mv2.jpg[^"]*|img/ext/digital-integration-hero.jpg|g' {} +
echo "✅ デジタルインテグレーション画像"

# コンサルティング
find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://static.wixstatic.com/media/409c45_93aa413af5d14454850d52ffb59c4858~mv2.png[^"]*|img/ext/consulting-hero.png|g' {} +
echo "✅ コンサルティング画像"

# Case Study: 花王（2サイズ）
find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://static.wixstatic.com/media/409c45_c300f81972a74c508a942cbace3f2a0a~mv2.jpg[^"]*|img/ext/case-kao-thumb.jpg|g' {} +
echo "✅ 花王サムネイル"

# Case Study: 日通（2サイズ）
find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://static.wixstatic.com/media/409c45_19b50ef0b88e4ff1932e3cfb32c88bf5~mv2.jpg[^"]*|img/ext/case-nittsu-thumb.jpg|g' {} +
echo "✅ 日通サムネイル"

# Case Study: CXカーゴ（2サイズ）
find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://static.wixstatic.com/media/409c45_e1a5fe12ef164bfc974365b12ade8432~mv2.png[^"]*|img/ext/case-cxcargo-thumb.png|g' {} +
echo "✅ CXカーゴサムネイル"

# Case Study: オートバックス（2サイズ）
find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://static.wixstatic.com/media/409c45_d3b03473c6ae4fd09580b967709279c8~mv2.jpg[^"]*|img/ext/case-autobacs-thumb.jpg|g' {} +
echo "✅ オートバックスサムネイル"

# Careers ヒーロー背景
find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://static.wixstatic.com/media/409c45_3bd21b67c3a24f138b09e3dfbed8ebc9~mv2.jpg[^"]*|img/ext/careers-hero.jpg|g' {} +
echo "✅ Careersヒーロー"

# クライアントロゴ: 花王
find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://static.wixstatic.com/media/409c45_cbae4d0d64e44c45baca97f2d5844e6b~mv2.png[^"]*|img/ext/client-kao.png|g' {} +
echo "✅ 花王ロゴ"

# クライアントその他
find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://static.wixstatic.com/media/409c45_6ae95031cbfa4ddc8b4c8bb97a042347~mv2.jpg[^"]*|img/ext/client-other.jpg|g' {} +
echo "✅ その他クライアント画像"

# OGPロゴ
find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://static.wixstatic.com/media/409c45_87dd8c4aa6d04727bc28f8f3cef31297~mv2.png[^"]*|img/ext/logo-ogp.png|g' {} +
echo "✅ OGPロゴ"

# OGP画像
find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://static.wixstatic.com/media/409c45_f771abe4c8824df79f9bbfb88b4f9111~mv2.png[^"]*|img/ext/ogp-ground.png|g' {} +
echo "✅ OGP画像"

# カレンダーアイコン
find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://static.wixstatic.com/media/409c45_d0cd673ba0db4411858ad073b9849de3~mv2.png[^"]*|img/ext/calendar-icon.png|g' {} +
echo "✅ カレンダーアイコン"

# groundinc.co.jp/dcms_media 画像
find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://www.groundinc.co.jp/dcms_media/image/service_robot_peer100.jpg|img/ext/peer100-robot.jpg|g' {} +
echo "✅ PEER100ロボット"

find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://www.groundinc.co.jp/dcms_media/image/services-robot-peer_speedmaplus_mv.jpg|img/ext/peer-mv.jpg|g' {} +
echo "✅ PEERメインビジュアル"

find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://www.groundinc.co.jp/dcms_media/image/20260220_image01.png|img/ext/news-image01.png|g' {} +
echo "✅ ニュース画像"

find . -maxdepth 1 -name "*.html" -exec sed -i '' \
  's|https://www.groundinc.co.jp/dcms_media/image/mcard_dummy_img001.jpg|img/ext/news-dummy.jpg|g' {} +
echo "✅ ニュースダミー画像"

# en/ ディレクトリも処理
find ./en -name "*.html" -exec sed -i '' \
  's|https://static.wixstatic.com/media/409c45_[^"]*|img/ext/\0|g' {} + 2>/dev/null || true

echo ""
echo "🎉 全URLの置換完了！"
echo ""
echo "確認: 残りのWix参照があるかチェック..."
REMAINING=$(grep -rn "static.wixstatic.com\|groundinc.co.jp/dcms_media" *.html en/*.html 2>/dev/null | grep -v "ground-website\|GROUND_Website" | wc -l)
echo "残り: ${REMAINING}件"
if [ "$REMAINING" -gt 0 ]; then
  echo "⚠️  以下に残りの参照があります:"
  grep -rn "static.wixstatic.com\|groundinc.co.jp/dcms_media" *.html en/*.html 2>/dev/null | grep -v "ground-website\|GROUND_Website"
fi
echo ""
echo "次のステップ: git add -A && git commit -m 'Wix画像URLをローカルパスに置換' && git push"
