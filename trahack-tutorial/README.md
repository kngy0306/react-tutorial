# trahack-tutorial

## #1

### Reactとは

UIを作るためのコンポーネントという概念が特徴的 = 見た目 + 機能  
コンポーネントを組み合わせて画面を構成  

### HTML

ブラウザはHTMLという文書を描画している。
DOM ... 文書のコンテンツと構造からなるオブジェクトのデータ表現。HTMLやXMLのためのプログラミングインターフェース。  

### 仮想DOMを使うことで

ブラウザのDOMツリーをJSのオブジェクトとして扱うことで、ブラウザに負荷をかけずにJSエンジンを使い、効率の良いレンダリングを行う。  

Reactで仮想DOMを作成し、差分のみのDOMを再描画する。実際のDOMの中では変更した部分と、その子要素だけを再描画する。

## #2

### JSXとは

テンプレート言語。最終的にReact要素を生成する。  

コンパイル時にReact.createElementに変換する

```js
<button className={'btn-blue'}>
  Click
</button>
↓
React.createElement(
  'button',
  {className: 'btn-blue'},
  'Click',
)
```

### React.Fragment

JSXは階層構造でreturnしなければいけないが、HTMLタグを使いたくないときのために、`React.Fragment`が使用できる。`<>`として省略可。

```js
return (
  <React.Fragment>
    <p>some text</p>
  </React.Fragment>
)
↓ 
return (
  <>
    <p>some text</p>
  </>
)
```

## #3 create-react-appで環境構築

### create-react-appとは

簡単にReactの開発環境を構築できるツールチェイン。  
本来の環境構築では、**トランスパイラのBabel**、**バンドラーのWebpack**などを設定する必要があるが、それらを担ってくれる。今後自分で設定できる必要あり。  

### CRAに必要なもの

- Node.js: >=10.16
- npm: >=5.6

### 実行

```bash
npx create-react-app trahack-tutorial
```

npxを使う理由 ... 
- npmの場合、事前にpackage.jsonにscriptsを記載しておく必要があるが、npxを使用すれば、自動的に必要なスクリプトを探してくれ、実行できる。  
- 本来インストールしなければ使用できないパッケージをwebを介して使用できる
  ```bash
  # ↓は本来npm install -g npm-check-updatesでインストールする必要あり
  npx npm-check-updates
  ```

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

## #4 コンポーネントとprops

### コンポーネントを使用する理由

- 再利用するため
- 変更しやすくするため
- 可読性の向上

### propsで値の受け渡し

```js
// App.js
import Article from './components/Article';

function App () => {
  const title = "サンプル!";
  return (
    <>
      <Article title={title} />
    </>
  );
}

export default App;

// components/Article.js
export const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
}
```

## #5 コンポーネントのimport、export

### コンポーネントは分ける

1ファイル = 1コンポーネントにするべき。

- 責務を明確にする
- 大規模なアプリでも管理しやすくするため
- 再利用するため

### JSのモジュール機能

プログラムをモジュールという単位に分割する。  
原則1ファイル = 1モジュール。  

### default export (名前なしexport)

推奨されているexport方法。  
正しくは、`default`という名前でexportしている。

```js
// アロー関数のdefault export
const Title = (props) => {
  return <h2>{props.title}</p>
};
export default Title;

// 名前付きの関数のdefault export
export default function Title(props) {
  return <h2>{props.title}</p>
}
```

### default import (名前なしimport)

default exportしたモジュールをそのまま読み込む。  

```js
import Title from './components/Title';
```

### 名前付きexport

1ファイルから複数モジュールをexportしたいとき。  
Reactではエントリポイントでよく使用される。  

以下のように、index.jsに各コンポーネントを読み込んで、名前をつけてexportすれば、複数モジュールの読み込み時でも、1行でimportできる。

**ユースケース**  
componentsフォルダにたくさんのコンポーネントがあるとき、componentsフォルダにindex.jsというエントリポイントになるファイルを1つ作成しておく。そのエントリポイントの中で名前付きexportを行えば、componentsフォルダ内のコンポーネントを呼び出すコンポーネントでは、1行で読み込むことができる。


```js
// index.js
export {default as Article} from './Article';
export {default as Content} from './Content';
export {default as Title} from './Title';
```

とすれば、読み込むファイルで1行で各モジュールを読み込み可能。  
**名前付きimportへ**

### 名前付きimportへ

1ファイルから複数モジュールを読み込む。

```js
import Title from './components/Title';
import Article from './components/Article';
import Content from './components/Content';

// ↑を↓で書ける

import {Content, Article, Title} from './components/index';
```

## #6 コンポーネントの状態管理

### stateを使う理由

stateを使用して値を変更すれば、仮想DOMの差分だけが更新されて再描画される。  
Reactがコンポーネントを再描画するきっかけは、
- stateが変更された時
- propsが変更されたとき

### useState

```js
// state は現在の状態
// setState は状態を更新するための関数
const [state, setState] = useState("初期値");
```

### propsへ関数を渡すときは関数を実行しないように気をつける

コンポーネントヘ値を渡す時にレンダリングするけどそのときに関数を実行してしまっているので、無限ループしてしまう。

```js
// OK
<Article onClick={()=>someFunc()} />
<Article onClick={someFunc} />

// NG
<Article onClick={someFunc()}>
```

## #7 頻出useState

### 引数を使って更新する

- 入力フォームなど
- onChangeイベントで関数に値を渡す

例↓

```js
import React, { useState } from "react";

export const Input = () => {
  const [name, setName] = useState("");

  const handleName = (event) => {
    console.log(name);
    setName(event.target.value);
  };

  return (
    <input onChange={(event) => handleName(event)} type="text" value={name} />
  );
};
```

### prevStateを活用する

- useStateの更新関数で使える特殊なprevState
- prevStateは更新前のstate

```js
import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };
  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div>
      <p>現在のカウント: {count}</p>
      <button onClick={countUp}>COUNT UP</button>
      <button onClick={()=>countDown()}>COUNT DOWN</button>
    </div>
  )
};
```

prevState ではなく、count + 1としてしまうと、useStateは非同期で処理が走るのでバグの温床になる。ダーティーリード的な感じかも

### ON/OFFの切り替え

```js
import React, { useState } from "react";

export const ToggleButton = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState)=>{return !prevState});
  }

  return (
    <div>
      <button onClick={()=>toggle()}>
        {open ? "OPEN" : "CLOSE"}
      </button>
    </div>
  )
};
```

## #8 ライフサイクル

- コンポーネントの生成 ~ 破棄まで
- 3種類のライフサイクル
  - Mounting 最初にコンポーネントが生まれるとき
  - Updating コンポーネントが変更されるとき
  - Unmounting コンポーネントが破棄されるとき

### 副作用(effect)フックを使う

副作用 = レンダリングによって引き起こされる処理。

### 第2引数が大事

- useEffectの第2引数に配列を渡せる
- 第2引数は`deps`と呼ばれ、依存関係を表す

```js
// Mount時
useEffect(() => {
    console.log(`Counter is ... ${count}`);
}, []);

// Update時
useEffect(() => {
    console.log(`Counter is ... ${count}`);
}, [count]);

// Unmount時
useEffect(() => {
    console.log(`Counter is ... ${count}`);
    return () => {
      console.log("this component is dead");
    }
});
```

### クリーンアップを理解する

Unmount時に呼ばれる関数のことをクリーンアップ関数という。

## #9