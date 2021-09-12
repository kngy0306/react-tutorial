import React from "react";

const LANGUAGES = ["JavaScript", "C++", "Ruby", "PHP", "Go", "Python"];

export class List extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        {LANGUAGES.map((lang, index) => {
          return <div key={index}>{lang}</div>;
        })}
      </div>
    );
  }
}
