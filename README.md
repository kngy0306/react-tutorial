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