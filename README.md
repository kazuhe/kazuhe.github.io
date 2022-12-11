# kazuhe.github.io

## Setup

pnpm を利用して依存関係をインストールする

```bash
pnpm i
```

## Development Server

```bash
pnpm run dev
```

## Generate

Nuxt プロジェクト全体を生成する

```bash
pnpm run generate
```

GitHub API を実行してレスポンスを `json/github-pulls.json` ファイルに生成する

```bash
pnpm run generate:github-pulls
```

## Directory structure

基本は Nuxt のディレクトリ構成に沿っているが、以下コメントしているディレクトリはその限りではない

```bash
.
├── content # @nuxt/content で管理しているコンテンツ
├── dist
├── json # ローカルで実行した API のレスポンス
├── scripts # ローカルで実行されるスクリプト
└── src
    ├── components
    ├── domain # ドメインオブジェクトとルール
    ├── infrastructures # システムの外部とやりとりするロジック
    ├── layouts
    ├── pages
    ├── plugins
    └── public
```
