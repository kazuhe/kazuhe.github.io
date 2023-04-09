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

## Generate

Nuxt プロジェクト全体を生成する

```bash
npm run generate
```

GitHub API を実行してレスポンスを `json/github-pulls.json` ファイルに生成する

```bash
npm run generate:github-pulls
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

## TODO

- [ ] GitHub Actions
  - [ ] Check
  - [ ] deploy
- [ ] Blog を取得
  - [ ] RSS からコンテンツを取得する
    - [ ] Zenn
    - [ ] はてな
  - [ ] 最新順に並び替える
- [ ] Gtag
  - [ ] ID `G-GFL5N1DYX9`
