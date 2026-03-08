# GROUND Inc. — Webflow移行デザイン仕様書

**v1.0 | 2026年3月**

このドキュメントは、GROUNDコーポレートサイトをWebflowで再構築するための
全デザイン仕様をまとめたものです。

---

## 1. カラーシステム

### 1.1 コアブランドカラー

| 色見本 | HEX | 名前 | 用途 |
|--------|-----|------|------|
| ⬛ | `#1A1A1A` | Black | 見出しテキスト |
| ⬛ | `#0A0C14` | Dark BG | ヘッダー・ヒーロー背景 |
| ⬛ | `#161822` | Dark Card | ダークモードカード |
| ⬜ | `#FFFFFF` | White | ページ背景 |
| 🔲 | `#F5F5F8` | Off-White | セクション背景（交互） |
| 🔲 | `#EEEEF2` | Light Gray | 薄い背景 |
| 🔲 | `#E0E0E5` | Border Gray | ボーダー・区切り線 |

### 1.2 テキストカラー（Titanium Palette）

| HEX | 名前 | 用途 |
|-----|------|------|
| `#3F4250` | Titanium Dark | 見出し・重要テキスト |
| `#545867` | Titanium Mid | 本文テキスト（メイン） |
| `#636A78` | Titanium Light | 二次テキスト |
| `#8A8C9A` | Titanium Pale | キャプション・日付 |

### 1.3 アクセントカラー

| HEX | 用途 |
|-----|------|
| `#3B82F6` | プライマリアクセント（CTA、リンク） |
| `#2563EB` | アクセントホバー |
| `#C4A35A` | ゴールド（Weekly Bar専用） |

---

## 2. タイポグラフィ

### 2.1 フォントファミリー

**Webflowでの設定方法:** Project Settings → Fonts → Google Fontsから追加

| フォント | ウェイト | 用途 |
|----------|----------|------|
| **Inter** | 400, 500, 600, 700 | 見出し・本文（英数字） |
| **Noto Sans JP** | 400, 500, 600, 700 | 本文（日本語） |
| **JetBrains Mono** | 400, 500 | ラベル・コード・日付 |

### 2.2 タイプスケール

| 要素 | サイズ | ウェイト | 行間 | 字間 |
|------|--------|----------|------|------|
| ヒーロータイトル | 56px〜120px | 700 | 1.0 | -0.04em |
| ヒーローサブタイトル | 16px〜22px | 500 | 1.5 | 0.08em |
| セクションタイトル | 28px | 700 | 1.3 | -0.01em |
| カードタイトル | 15px | 600 | 1.65 | normal |
| 本文テキスト | 15px | 400 | 1.7 | normal |
| タグ・ラベル | 11px | 600 | 1.4 | 0.02em |
| モノスペースラベル | 11px | 500 | 1.4 | 0.14em |
| 日付・キャプション | 12px | 400 | 1.5 | 0.02em |

---

## 3. レイアウト＆スペーシング

### 3.1 グリッドシステム

| プロパティ | 値 | Webflow設定 |
|------------|-----|-------------|
| 最大幅 | 1200px | Container max-width: 1200px |
| 左右パディング | 40px | Container padding: 0 40px |
| ヘッダー高さ | 64px | Navbar height: 64px (fixed) |
| セクション上下 | 80px | Section padding: 80px 0 |
| ゆったりセクション | 100px | Padding: 100px 0 |

### 3.2 スペーシングスケール

| トークン | 値 | 用途 |
|----------|-----|------|
| xs | 4px | 極小間隔 |
| sm | 8px | 小間隔 |
| md | 16px | デフォルトギャップ |
| lg | 24px | セクション内間隔 |
| xl | 40px | コンテナパディング |
| 2xl | 64px | 大セクション |
| 3xl | 96px | ヒーロー間隔 |

---

## 4. 主要コンポーネント

### 4.1 ヘッダー（ダーク・固定）

- **背景:** `#0A0C14`、高さ `64px`、`position: fixed`
- **ロゴ:** 左寄せ、高さ `26px`（`ground-logo-v2.svg`白ロゴ）
- **ハンバーガー:** 右寄せ、3本線（白、幅26px、間隔6px）
- **スクロール時:** `rgba(26,29,43,0.97)` + `backdrop-filter: blur(16px)`

### 4.2 オーバーレイメニュー（3カラム）

- **背景:** `#0A0C14`、全画面
- **レイアウト:** CSS Grid 3列（280px / 1fr / 340px）
- **ラベル:** JetBrains Mono 11px、`rgba(255,255,255,0.35)`、大文字
- **ナビ項目:** 17px/500、パディング 14px 16px
- **CTA:** ボーダーボタン、JetBrains Mono 12px/500、大文字

### 4.3 ヒーローセクション

- **高さ:** 100vh、背景 `#060810`
- **背景動画:** `object-fit: cover`、`object-position: center 80%`
- **グラデーション:** 上30% + 下20%の暗いオーバーレイ
- **タイトル:** Inter 700、白、56px〜120px
- **サブタイトル:** Inter 500、白、16px〜22px、`text-shadow`付き
- **CTA:** 14px/600、透明 + 白ボーダー、大文字

### 4.4 ニュースカード（3列グリッド）

- **グリッド:** 3列、ギャップ 24px
- **カード:** ボーダー `1px #E0E0E5`、背景 白
- **画像エリア:** アスペクト比 16:9
- **本文:** パディング 24px
- **タグ:** 11px/600、青 `#3B82F6`、背景 `rgba(59,130,246,0.06)`
- **タイトル:** 15px/600、2行制限
- **日付:** JetBrains Mono 12px
- **ホバー:** `translateY(-2px)` + `box-shadow: 0 8px 30px rgba(0,0,0,0.08)`

### 4.5 サービスローカード（2列）

- **グリッド:** 2列、ギャップなし
- **画像:** アスペクト比 4:3
- **本文:** パディング 40px
- **交互配置:** 偶数行で左右反転
- **ボーダー:** `1px #E0E0E5`

### 4.6 CTAボタンスタイル

| タイプ | デフォルト | ホバー |
|--------|-----------|--------|
| ゴースト（暗い背景） | 透明 + ボーダー `rgba(255,255,255,0.3)` | 背景 `rgba(255,255,255,0.06)` |
| プライマリ | 背景 `#3B82F6` | 背景 `#2563EB` |
| 矢印リンク | 色 `#3B82F6`、14px/600 | ギャップ 6px→10px |

### 4.7 フッター（ダーク）

- **背景:** `#0A0C14`
- **ロゴ:** `combined-lockup-dark.svg`、高さ 44px
- **テキスト:** 白の各透明度（0.85, 0.5, 0.3, 0.12）

---

## 5. サイトマップ（全20ページ）

| ページ | ファイル | 内容 |
|--------|----------|------|
| ホーム | index.html | ヒーロー動画 + ニュース + サービス + CTA |
| 会社情報 | about.html | CEOメッセージ + 会社概要 + Google Map |
| GPIM | gpim.html | プラットフォーム概要 |
| GPIMコンサルティング | gpim-consulting.html | コンサル詳細 |
| GWES | gwes.html | 倉庫実行管理システム |
| GWES詳細 | gwes-detail.html | 機能詳細 |
| GWESモジュール | gwes-modules.html | モジュール一覧 |
| GWESテクノロジー | gwes-technology.html | AI・最適化技術 |
| GWES導入 | gwes-implementation.html | 導入フロー |
| サービス | service.html | サービス一覧 |
| コンサルティング | consulting.html | コンサル詳細 |
| DX | digital-integration.html | デジタル統合 |
| PEER | peer.html | ロボットプラットフォーム |
| 導入事例 | works.html | ケーススタディ |
| ニュース | news.html | ニュース一覧 |
| ブログ | blog.html | Warehouse Tech Weekly |
| ブログ記事 | blog-weekly-050.html | 個別記事 |
| 採用 | careers.html | 採用情報 |
| お問い合わせ | contact.html | コンタクトフォーム |
| チーム | team.html | メンバー紹介 |

---

## 6. アセット一覧

### 6.1 ロゴファイル

| ファイル | 用途 |
|----------|------|
| `ground-logo-v2.svg` | ヘッダー（白ロゴ・ダーク背景用） |
| `ground-logo-dark.svg` | ライト背景用 |
| `combined-lockup-dark.svg` | フッターロゴ（44px） |
| `gwes-lockup-vertical.svg` | GWES製品ロゴ |
| `favicon.ico` / `favicon-32.png` | ブラウザタブアイコン |

### 6.2 動画ファイル

| ファイル | 詳細 |
|----------|------|
| `hero-video-2026.mp4` | 緑の波、960×540、20秒、2.1MB |
| `hero-video-neural-v2.mp4` | ニューラルパターン、1920×1080、51秒、12.9MB |

### 6.3 画像

| ファイル | 用途 |
|----------|------|
| `ceo.jpg` | CEO写真（会社情報ページ） |
| `gwes-dashboard.png` | GWES製品スクリーンショット |
| `gwes-login.png` / `.webp` | GWESログイン画面 |
| `gwes-particle-grid.svg` | 装飾パーティクルグリッド |
| `peer-robot.svg` | PEERロボットイラスト |
| `cases/` | 導入事例画像フォルダ |

---

## 7. Webflowセットアップ手順

### Step 1: フォント追加
Project Settings → Fonts → Google Fontsから3つ追加:
- Inter (400, 500, 600, 700)
- Noto Sans JP (400, 500, 600, 700)
- JetBrains Mono (400, 500)

### Step 2: グローバルスタイル設定
Body要素を選択して以下を設定:
- Font: Inter, Noto Sans JP
- Size: 15px
- Line Height: 1.7
- Color: #545867
- Background: #FFFFFF

### Step 3: ページ作成順序
1. **Home** — ヒーロー + ニュース + サービスカード + CTA
2. **About** — CEOメッセージ + 会社情報 + Google Map
3. **Service** — サービス一覧（ローカード）
4. **GWES** — 製品詳細（サブページ4枚含む）
5. **GPIM** — プラットフォーム概要
6. **News / Blog** — CMSコレクションで管理
7. **Works** — 導入事例
8. **Careers / Contact** — フォーム付き

### Step 4: チームメンバー招待
Project Settings → Members → Invite でチームメンバーを招待。
- **Editor権限:** コンテンツ編集が可能
- **Designer権限:** レイアウト変更も可能

### Step 5: カスタムドメイン接続
Project Settings → Publishing → Custom Domain で `groundinc.co.jp` を接続。
DNS設定が必要。現在のNetlifyサイトからの移行は、DNS切り替えで完了。

---

## 8. 現行サイトURL

- **GitHub:** https://github.com/hiratomomiyata/ground-corporate-website
- **Netlify:** https://super-pastelito-06a52d.netlify.app
- **Webflow:** ground-inc.design.webflow.com

---

*作成: 2026年3月 | GROUND Inc. Webflow移行プロジェクト*
