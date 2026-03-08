# GROUND Corporate Website — デプロイ手順

## 前提

- Git が初期化済み（`main` ブランチに初回コミット完了）
- 静的HTMLサイト（ビルド不要）

---

## Step 1: GitHub リポジトリの作成

1. https://github.com/new にアクセス
2. リポジトリ名: `ground-corporate-website`（任意）
3. **Private** を選択（社内サイトのため）
4. 「Create repository」をクリック

ターミナルで以下を実行:

```bash
cd /path/to/website
git remote add origin git@github.com:GROUND-Inc/ground-corporate-website.git
git push -u origin main
```

> GitHub組織アカウントがない場合は個人アカウントでも可。
> SSH鍵の設定がまだであれば `https://` URLも使えます:
> `git remote add origin https://github.com/USERNAME/ground-corporate-website.git`

---

## Step 2: ホスティング（2つの選択肢）

### Option A: Netlify（推奨・最も簡単）

1. https://app.netlify.com にログイン（GitHub連携）
2. 「Add new site」→「Import an existing project」
3. GitHub を選択 → `ground-corporate-website` を選択
4. 設定:
   - **Branch to deploy**: `main`
   - **Build command**: （空欄のまま）
   - **Publish directory**: `.`（ルート）
5. 「Deploy site」をクリック

完了後:
- `https://xxxx.netlify.app` で即座に公開
- カスタムドメイン（groundinc.co.jp）の設定も可能

### Option B: Vercel

1. https://vercel.com にログイン（GitHub連携）
2. 「Add New」→「Project」
3. GitHub リポジトリを選択
4. Framework Preset: `Other`
5. 「Deploy」

---

## Step 3: カスタムドメインの設定

### Netlify の場合:
1. Site settings → Domain management → Add custom domain
2. `groundinc.co.jp` を入力
3. DNSレコードを設定:
   - `A` レコード → Netlifyの指定IP
   - または `CNAME` → `xxxx.netlify.app`
4. SSL証明書は自動発行（Let's Encrypt）

### Vercel の場合:
1. Project Settings → Domains
2. ドメインを追加し、DNS設定を反映

---

## 日常の更新フロー

### メンバーが編集する場合:

```bash
# 1. 最新を取得
git pull origin main

# 2. ファイルを編集（HTML/CSS/画像など）

# 3. 変更をコミット
git add -A
git commit -m "Update: ニュースを追加"

# 4. push → 自動で本番反映
git push origin main
```

**push するだけで本番サイトが自動更新されます。**

---

## ブランチ運用（推奨）

本番を壊さないために、作業ブランチを使う運用:

```bash
# 作業ブランチを作成
git checkout -b feature/update-news

# 編集 → コミット
git add -A
git commit -m "Add: 2026年3月のニュース"

# push
git push origin feature/update-news

# GitHub上でPull Requestを作成 → レビュー → main にマージ
# マージ後、自動デプロイ
```

---

## Netlify Deploy Preview（プレビュー機能）

Pull Requestを作成すると、Netlifyが自動でプレビューURLを生成します。
本番反映前に変更内容を確認できる便利な機能です。

---

## チームメンバーの追加

### GitHub:
- Settings → Collaborators → メンバーのGitHubアカウントを招待
- `Write` 権限を付与

### Netlify:
- Team settings → Members → メンバーを招待

---

## トラブルシューティング

| 問題 | 対処 |
|------|------|
| push できない | `git pull --rebase origin main` してから再push |
| デプロイが反映されない | Netlify Dashboard → Deploys で状態を確認 |
| 画像が表示されない | パスが相対パスか確認（`img/xxx.png`） |
| CSSが古いまま | `style.css?v=XX` のバージョン番号を上げる |
