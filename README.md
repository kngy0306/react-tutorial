# react-tutorial
https://youtube.com/playlist?list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13

## #1 プロジェクトの立ち上げ
#### プロジェクトの作成と立ち上げ
```bash
npx create-react-app react-tutorial

yarn start
```

#### フォルダ構成
- publicはビルド時にコピーされる
- srcはビルド時にまとめられる(重要)

#### JSX
JavaScriptにHTMLのようなものを入れ込んだ記法
```bash
class => className
{}を使用することでJSの要素を代入可能
onclick のような2つの言葉の属性は onClick のようにcamelCaseになる
```

## #2 コンポーネントのプロパティ
#### コンポーネントの作り方、子コンポーネントへのプロパティの渡し方
```js
export const ComponentFunc = () => {
  return <div></div>
}

<List title="値">
```

#### 子コンポーネントからプロパティの参照方法
```js
const ComponentFunc = (props) => {}
```

#### stateによるコンポーネントの状態変更
1つ目の返り値が、実際の状態  
2つ目が状態を変更させる関数  
```js
const [value, setValue] = useState('initial');
```

## #3 Class Components、Function Componentsについて
```js

// Class Componentsの場合
class ClassCompontn extends React.Component {
  render() {
    return (
      <div>クラスです</div>
    )
  }
}

// Function Componentsの場合
function FunctionComponent {
  return (
    <div>ファンクションです</div>
  )
}
```

### プロパティ、ステートは
```js
// props
this.props

// state
this.state

this.setState({key: value})
```

## #4
条件分岐
```js
function Test() {
  return (
    <div>
      {tab === 'list' ? <List /> : <Form />}
    </div>
  )
}
```

繰り返し  
div要素のkeyは一意である必要がある。
```js
function Test() {
  return (
    <div>
      {
        list.map(val, index) => {
          return <div key={index}>{val}</div>
        }
      }
    </div>
  )
}
```

## #5 親子間(コンポーネント)の値の受け渡し
フォームの利用
```js
<form onSubmit={submitFunc}>
  <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
  <button>ボタン</button>
</fom>
```

### 子コンポーネント → 親コンポーネント
親コンポーネントで関数を定義し、子コンポーネントを呼び出す際に関数を渡す。
```js
function Parent() {
  const testFunc = () => {}
  return <Child parentFunc={testFunc} />
}

function Child({parentFunc}) {
  return <div onClick={() => parentFunc(text)}>テスト</div>
}
```

### 親 → 子
親からプロパティとして値を渡す。
```js
function Parent() {
  const test = "テストデータ";
  return <Child parentData={test} />
}

function Child({parentData}) {
  return <div>{parentData}</div>
}
```

## #6 コンポーネントのライフサイクル
Mouting → Updating → Unmountingと遷移していく。(クラスコンポーネントの場合)  
ファンクションコンポーネントの場合、`useEffect`がすべてを担う！？  

`useEffect(関数、配列)`のように入れる。まず最初にサイトを開いたら呼ばれる。（マウント時）  
その後、第2引数に入れた値が変更した際に呼ばれるようになる。空の配列を指定すると、マウント時のみに呼ばれるようになる。  

`useEffect(関数の返り値)`は、Unmount時に呼ばれる。

### まとめ
```js
useEffect(() => {
  // mounting時に呼ばれる
}, []);

useEffect(() => {
  // mouting時、langsの変更時に呼ばれる
}, [langs]);

useEffect(() => {
  // mounting時、langsの変更時に呼ばれる
  return () => {
    // unmounting時に呼ばれる
  }
})
```

## #7 Reactのスタイル
#### スタイルを利用する方法は1つに確立されていない

#### Inline CSS
styleをオブジェクトで表す
```js
const divStyle = {
  color: 'blue',
  backgroundColor: 'black',
};
function TestComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```

#### CSS Modules
cssをインポートし、classNameで割り当て
```js
import styes from ',/style.css'

function TestComponent() {
  return <div className={style.test}>Hello World!</div>;
}
```

#### styled-components
cssを加えたタグ要素を定義し、利用する
```js
import styled from 'styled-components'

const TestDiv = styled.dev`
  color: 'blue',
`

function TestComponent() {
  return <TestDiv>Hello World!</TestDiv>
}
```

```yarn add styled-components```でインストール
styled-compoentsの基礎
```js
import styled from 'styled-components';

const NewComp = styled.div`
  padding: 8px;

  &:focus {
    color: red;
  }
`
```

動的なスタイル
```js
const NewComp = styled.div`
  padding: 8px;
  color: ${props => props.warn ? 'red' : 'black'}
`
```

別で定義したコンポーネントを継承
```js
const NewButton = styled(Button)`
  color: red;
`
```