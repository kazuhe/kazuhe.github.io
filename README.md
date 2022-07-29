# kazuhe.github.io

## Setup

pnpm を利用して依存関係をインストールする

```bash
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## ディレクトリ構成

```bash
.
├── app.vue
├── src
│   ├── components # Vue コンポーネントを配置する
│   └── pages # 内部で Vue ルーターを使用してファイルベースのルートを作成する
└── tsconfig.json
```
