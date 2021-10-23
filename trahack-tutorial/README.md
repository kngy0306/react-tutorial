# trahack-tutorial

[新・日本一わかりやすいReact入門【基礎編】](https://youtube.com/playlist?list=PLX8Rsrpnn3IWPoM7-1YPDksRRkamRY25k)

## #1

## #2

## #3 create-react-appで環境構築

### create-react-appとは

簡単にReactの開発環境を構築できるツールチェイン。  
本来の環境構築では、**トランスパイラのBabel**、**バンドラーのWebpack**などを設定する必要があるが、それらを担ってくれる。今後自分で設定できる必要あり。  

### craに必要なもの

- Node.js: >=10.16
- npm: >=5.6

### 実行

```bash
npx create-react-app trahack-tutorial
```

npxを使う理由 ... npmの場合、事前にpackage.jsonにscriptsを記載しておく必要があるが、npxを使用すれば、自動的に必要なスクリプトを探してくれ、実行できる。  

以下はpackage.jsonが無い場合の実行ログ  
```bash
❯ npm create-react-app test
npm ERR! code ENOENT
npm ERR! syscall open
npm ERR! path /Users/~~
npm ERR! errno -2
npm ERR! enoent ENOENT: no such file or directory, open '/Users/~~/react-tutorial/package.json'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/~~/.npm/_logs/2021-10-23T00_45_42_620Z-debug.log
```

### 環境

ディレクトリ構成

- src
  - 開発用ファイルが格納されている
- public
  - 静的ファイル置き場
- build
  - 本番用ファイルが格納されている
  - npm run buildコマンドで生成される

`yarn start` もしくは `npm start` で プロジェクトを起動。  

### スクリプト

package.jsonのscriptsに記載されている。  
"start"は、"react-scripts start"を実行するもの。  

- npm start(yarn start)
  - ローカルサーバーを起動してアプリを立ち上げる
  - ホットリロード
- npm run build
  - 本番用ファイルを生成 -> buildディレクトリに出力
  - src, publicファイルを1つにまとめる。(バンドル)
- npm run eject
  - BabelやWebpackの設定を変えたい時に使用

プロジェクトの起動

```bash
yarn start
```

## #4