# kazuhe.github.io

## Setup

npm を利用して依存関係をインストールする

```bash
npm i
```

## Development Server

```bash
npm run dev
```

## Directory structure

基本は Nuxt のディレクトリ構成に沿っているが、以下コメントしているディレクトリはその限りではない

```bash
.
├── content # @nuxt/content で管理しているコンテンツ
├── dist
└── src
    ├── components
    ├── domain # ドメインオブジェクトとルール
    ├── infrastructures # システムの外部とやりとりするロジック
    ├── layouts
    ├── pages
    ├── plugins
    └── public
```
