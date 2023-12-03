# kazuhe.github.io

My website.

## Getting Started

### packages

WebAssembly パッケージ

```bash
cargo install wasm-pack
```

npm で利用するためにコンパイルする。

```bash
wasm-pack build --target bundler
```

npm へ公開する。

```bash
wasm-pack login
wasm-pack publish
```
