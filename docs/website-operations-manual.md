# GROUND Inc. コーポレートサイト 運用マニュアル

**最終更新: 2026年3月15日**

---

## 1. サイト概要

| 項目 | 内容 |
|------|------|
| URL | https://groundinc.co.jp |
| ホスティング | Netlify |
| Netlify サイト名 | super-pastelito-06a52d |
| リポジトリ | https://github.com/ground-jp/website |
| 技術スタック | HTML / CSS / JavaScript（静的サイト） |
| お問い合わせフォーム | Netlify Forms |
| デプロイ方法 | `git push` で自動デプロイ |

---

## 2. 環境構築（新しいPCでの初回セットアップ）

### 2.1 必要なソフトウェア

- **Git**: https://git-scm.com/
- **テキストエディタ**: Visual Studio Code 推奨（https://code.visualstudio.com/）
- **ブラウザ**: Chrome または Firefox（開発ツール使用のため）

### 2.2 リポジトリのクローン

```bash
cd ~/Desktop
git clone https://github.com/ground-jp/website.git
cd website
```

### 2.3 ローカルでの確認方法

HTMLファイルをブラウザで直接開くか、VS Code の「Live Server」拡張機能を使用します。

1. VS Code でフォルダを開く
2. 拡張機能「Live Server」をインストール
3. `index.html` を右クリック → 「Open with Live Server」
4. ブラウザで `http://localhost:5500` が開く

---

## 3. サイト更新の基本フロー

### 3.1 更新手順

```bash
# 1. 最新の状態を取得
git pull

# 2. ファイルを編集（テキストエディタで）

# 3. 変更を確認
git status
git diff

# 4. 変更をステージング
git add -A

# 5. コミット（変更内容を記録）
git commit -m "変更内容の説明"

# 6. デプロイ（Netlifyに自動反映）
git push
```

デプロイは通常1〜2分で完了します。Netlify ダッシュボード（https://app.netlify.com/）で進捗を確認できます。

### 3.2 デプロイ前のチェックリスト

- [ ] ローカルでページを確認（レイアウト崩れがないか）
- [ ] リンクが正しいか確認
- [ ] スマホ表示を確認（Chrome DevTools → デバイスモード）
- [ ] 画像が正しく表示されるか確認

---

## 4. よくある更新作業

### 4.1 ニュース記事の追加

**ファイル**: `news.html`

1. `news.html` を開く
2. 既存のニュース項目をコピーして、日付と内容を変更
3. 古いニュースは下に移動（新しい順に並べる）

ニュースカードのHTMLテンプレート:

```html
<article class="news-card fade-in">
  <time class="news-card__date">2026.04.01</time>
  <span class="news-card__tag">プレスリリース</span>
  <h3 class="news-card__title">ニュースのタイトル</h3>
  <p class="news-card__excerpt">ニュースの概要テキスト...</p>
</article>
```

タグの種類: `プレスリリース` / `お知らせ` / `メディア掲載` / `イベント`

### 4.2 ブログ記事の追加

**手順**:

1. 既存のブログ記事ファイル（例: `blog-weekly-051.html`）をコピー
2. ファイル名を変更（例: `blog-weekly-052.html`）
3. 内容を編集（タイトル、本文、日付、OGP情報）
4. `blog.html` にカードを追加
5. `sitemap.xml` に新しいURLを追加
6. `_redirects` にクリーンURL設定を追加

### 4.3 導入事例の追加

**手順**:

1. 既存の事例ファイル（例: `case-kao.html`）をコピー
2. ファイル名を変更（例: `case-newclient.html`）
3. 内容を編集
4. `works.html` にカードを追加
5. `index.html` のCase Studyセクションに追加（4件まで）
6. `sitemap.xml` に追加
7. `_redirects` に追加

### 4.4 チームメンバーの追加・変更

**ファイル**: `team.html`

メンバーカードのHTMLテンプレート:

```html
<div class="team-card fade-in">
  <div class="team-card__photo-wrap">
    <img src="img/team/member-name.jpg" alt="名前" class="team-card__photo" loading="lazy">
  </div>
  <h3 class="team-card__name">氏名</h3>
  <p class="team-card__title">役職</p>
</div>
```

写真サイズ: 正方形、400x400px 以上推奨、`img/team/` に保存

### 4.5 画像の追加

- **保存先**: `img/` フォルダ内の適切なサブフォルダ
- **フォーマット**: JPG（写真）、PNG（ロゴ・アイコン）、SVG（ベクター）
- **最適化**: TinyPNG（https://tinypng.com/）で圧縮してからアップロード
- **命名規則**: 半角英数字、ハイフン区切り（例: `case-client-hero.jpg`）

---

## 5. ディレクトリ構成

```
website/
├── index.html          # トップページ
├── about.html          # 会社概要
├── service.html        # サービス一覧
├── gwes.html           # GWES製品ページ
├── gwes-detail.html    # GWES詳細
├── gwes-modules.html   # GWESモジュール
├── gwes-technology.html # GWES技術
├── gwes-implementation.html # GWES導入
├── gwes-simulation.html # GWESシミュレーション
├── gpim.html           # GPIM製品ページ
├── gpim-detail.html    # GPIM詳細
├── gpim-consulting.html # GPIMコンサルティング
├── peer.html           # PEER製品ページ
├── digital-integration.html # DXインテグレーション
├── consulting.html     # コンサルティング
├── works.html          # 導入事例一覧
├── case-*.html         # 個別導入事例
├── news.html           # ニュース一覧
├── blog.html           # ブログ一覧
├── blog-weekly-*.html  # 個別ブログ記事
├── careers.html        # 採用情報
├── team.html           # チーム紹介
├── contact.html        # お問い合わせ
├── history.html        # 沿革
├── privacy.html        # プライバシーポリシー
├── 404.html            # 404エラーページ
├── sitemap.xml         # サイトマップ
├── _redirects          # リダイレクト設定
├── css/
│   └── style.css       # メインCSS
├── js/
│   └── main.js         # メインJavaScript
├── img/                # 画像ファイル
│   ├── team/           # チーム写真
│   └── ext/            # 外部から移行した画像
├── en/                 # 英語版ページ
│   ├── index.html
│   ├── about.html
│   ├── gwes.html
│   ├── contact.html
│   └── history.html
├── admin/
│   ├── design-editor.html  # ビジュアルデザインエディタ（GDE）
│   └── leads.html          # お問い合わせ管理
├── scripts/            # ユーティリティスクリプト
└── docs/               # ドキュメント
```

---

## 6. お問い合わせフォーム管理

### 6.1 フォーム送信の確認

Netlify Forms に送信されたデータは以下で確認できます:

1. https://app.netlify.com/ にログイン
2. サイトを選択
3. 「Forms」タブをクリック
4. 「contact」フォームを選択

### 6.2 メール通知設定

Netlify の Forms 設定から通知先メールアドレスを追加できます:

1. Site settings → Forms → Form notifications
2. 「Add notification」→「Email notification」
3. 通知先メールアドレスを設定（例: info@groundinc.co.jp）

---

## 7. ビジュアルデザインエディタ（GDE）

### 7.1 概要

GDE（GROUND Design Editor）は、HTMLの知識がなくてもブラウザ上でサイトのコンテンツを編集できるツールです。

**URL**: `/admin/design-editor.html`

### 7.2 使い方

1. ブラウザで `http://localhost:5500/admin/design-editor.html` を開く（Live Server使用時）
2. 左側のサイドバーから編集したいページを選択
3. ページ上の要素をクリックして編集
4. テキスト：直接クリックして編集
5. 画像：クリックして画像URLを変更
6. 色・サイズ：右側のプロパティパネルで調整
7. 「保存」ボタンでHTMLファイルに反映

### 7.3 注意事項

- GDEでの変更は即座にHTMLファイルに保存されます
- 変更後は必ず `git commit` & `git push` でデプロイしてください
- 大きなレイアウト変更はHTMLファイルを直接編集する方が安全です

---

## 8. DNS設定（ドメイン移行時）

### 8.1 Netlifyへのカスタムドメイン設定

1. Netlify ダッシュボード → Site settings → Domain management
2. 「Add custom domain」→ `groundinc.co.jp` を入力
3. DNS設定を変更:

| レコード | 名前 | 値 |
|---------|------|-----|
| A | @ | 75.2.60.5 |
| CNAME | www | super-pastelito-06a52d.netlify.app |

4. Netlifyで「Verify DNS configuration」を確認
5. SSL証明書は自動で発行されます（Let's Encrypt）

### 8.2 DNS切り替え時の注意

- DNS変更の反映には最大48時間かかる場合があります
- 事前にTTLを短く（300秒）設定しておくと切り替えがスムーズです
- 切り替え中は旧サイトと新サイトが混在して表示される可能性があります

---

## 9. トラブルシューティング

### 9.1 デプロイが失敗する場合

1. Netlifyのデプロイログを確認
2. よくある原因: HTMLの構文エラー、ファイル名の大文字小文字の不一致
3. `git log` で最後のコミットを確認し、問題があれば修正してpush

### 9.2 画像が表示されない場合

- ファイルパスの大文字小文字を確認（Linuxサーバーは区別する）
- ファイルが `img/` フォルダ内に存在するか確認
- ブラウザのキャッシュをクリア（Ctrl + Shift + R）

### 9.3 フォームが送信できない場合

- Netlifyのフォーム設定を確認
- `data-netlify="true"` がformタグに含まれているか確認
- hidden inputの `name="form-name"` が正しいか確認

### 9.4 CSSが反映されない場合

- `css/style.css` のキャッシュバスターを更新: `?v=61` → `?v=62`
- ブラウザの開発ツールでCSSが読み込まれているか確認

---

## 10. 定期メンテナンス

| 頻度 | 作業内容 |
|------|----------|
| 随時 | ニュース・お知らせの追加 |
| 月次 | お問い合わせフォームの送信確認 |
| 月次 | リンク切れチェック |
| 四半期 | セキュリティ（依存関係）の確認 |
| 年次 | ドメイン更新の確認 |
| 年次 | SSL証明書の確認（Netlifyは自動更新） |
| 年次 | チームメンバー情報の更新 |

---

## 11. 連絡先・アカウント情報

| サービス | URL | 備考 |
|---------|-----|------|
| GitHub Organization | https://github.com/ground-jp | リポジトリ管理 |
| Netlify | https://app.netlify.com/ | ホスティング・フォーム |
| Google Analytics | https://analytics.google.com/ | アクセス解析（設定後） |

---

*このマニュアルは `docs/website-operations-manual.md` に保存されています。*
