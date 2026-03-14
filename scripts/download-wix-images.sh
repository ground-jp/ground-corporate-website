#!/bin/bash
# Wix画像をローカルにダウンロードするスクリプト
# 実行方法: cd ~/Desktop/website && bash scripts/download-wix-images.sh

set -e
mkdir -p img/ext

echo "🔽 Wix画像をダウンロード中..."

# Solutions セクション
curl -sL -o img/ext/digital-integration-hero.jpg \
  "https://static.wixstatic.com/media/409c45_5f51acbc19d94f159cc6e79e51b7a3d4~mv2.jpg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_2248569299.jpg"
echo "✅ digital-integration-hero.jpg"

curl -sL -o img/ext/consulting-hero.png \
  "https://static.wixstatic.com/media/409c45_93aa413af5d14454850d52ffb59c4858~mv2.png/v1/fill/w_560,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2.png"
echo "✅ consulting-hero.png"

# Case Study サムネイル（大サイズ版）
curl -sL -o img/ext/case-kao-thumb.jpg \
  "https://static.wixstatic.com/media/409c45_c300f81972a74c508a942cbace3f2a0a~mv2.jpg/v1/fill/w_960,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/top_btn_04.jpg"
echo "✅ case-kao-thumb.jpg"

curl -sL -o img/ext/case-nittsu-thumb.jpg \
  "https://static.wixstatic.com/media/409c45_19b50ef0b88e4ff1932e3cfb32c88bf5~mv2.jpg/v1/fill/w_960,h_640,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20240426tokyosoko.jpg"
echo "✅ case-nittsu-thumb.jpg"

curl -sL -o img/ext/case-cxcargo-thumb.png \
  "https://static.wixstatic.com/media/409c45_e1a5fe12ef164bfc974365b12ade8432~mv2.png/v1/fill/w_960,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/20250520_thumb.png"
echo "✅ case-cxcargo-thumb.png"

curl -sL -o img/ext/case-autobacs-thumb.jpg \
  "https://static.wixstatic.com/media/409c45_d3b03473c6ae4fd09580b967709279c8~mv2.jpg/v1/fill/w_960,h_640,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/casestudy_peer_int001_img006.jpg"
echo "✅ case-autobacs-thumb.jpg"

# Careers ヒーロー背景
curl -sL -o img/ext/careers-hero.jpg \
  "https://static.wixstatic.com/media/409c45_3bd21b67c3a24f138b09e3dfbed8ebc9~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/409c45_3bd21b67c3a24f138b09e3dfbed8ebc9~mv2.jpg"
echo "✅ careers-hero.jpg"

# クライアントロゴ等
curl -sL -o img/ext/client-kao.png \
  "https://static.wixstatic.com/media/409c45_cbae4d0d64e44c45baca97f2d5844e6b~mv2.png/v1/fill/w_460,h_384,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kao.png"
echo "✅ client-kao.png"

curl -sL -o img/ext/client-other.jpg \
  "https://static.wixstatic.com/media/409c45_6ae95031cbfa4ddc8b4c8bb97a042347~mv2.jpg/v1/fill/w_376,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b-10.jpg"
echo "✅ client-other.jpg"

curl -sL -o img/ext/logo-ogp.png \
  "https://static.wixstatic.com/media/409c45_87dd8c4aa6d04727bc28f8f3cef31297~mv2.png/v1/fill/w_300,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-ogp.png"
echo "✅ logo-ogp.png"

curl -sL -o img/ext/ogp-ground.png \
  "https://static.wixstatic.com/media/409c45_f771abe4c8824df79f9bbfb88b4f9111~mv2.png/v1/fill/w_392,h_342,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ogp-5.png"
echo "✅ ogp-ground.png"

curl -sL -o img/ext/calendar-icon.png \
  "https://static.wixstatic.com/media/409c45_d0cd673ba0db4411858ad073b9849de3~mv2.png/v1/fill/w_280,h_292,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3-3.png"
echo "✅ calendar-icon.png"

# groundinc.co.jp の dcms_media 画像
curl -sL -o img/ext/peer100-robot.jpg \
  "https://www.groundinc.co.jp/dcms_media/image/service_robot_peer100.jpg"
echo "✅ peer100-robot.jpg"

curl -sL -o img/ext/peer-mv.jpg \
  "https://www.groundinc.co.jp/dcms_media/image/services-robot-peer_speedmaplus_mv.jpg"
echo "✅ peer-mv.jpg"

curl -sL -o img/ext/news-image01.png \
  "https://www.groundinc.co.jp/dcms_media/image/20260220_image01.png"
echo "✅ news-image01.png"

curl -sL -o img/ext/news-dummy.jpg \
  "https://www.groundinc.co.jp/dcms_media/image/mcard_dummy_img001.jpg"
echo "✅ news-dummy.jpg"

echo ""
echo "🎉 全画像のダウンロード完了！"
echo "📁 保存先: img/ext/"
ls -lh img/ext/
echo ""
echo "次のステップ: git add img/ext/ && git commit -m 'Wix画像をローカル化' && git push"
