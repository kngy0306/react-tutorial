const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <button onClick={() => props.clickFunc()}>{props.state.toString()}</button>
    </div>
  );
};

export default Article;
