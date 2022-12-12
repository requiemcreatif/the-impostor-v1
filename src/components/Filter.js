import React from "react";

const articleList = [
  "All",
  "mine",
  "Motivation",
  "Mentor",
  "Experience",
  "Help",
  "Information",
  "Advice",
  "Tesimonial",
];

const Filter = ({ filter, changeFilter }) => {
  const handleClick = (newArticle) => {
    console.log(newArticle);
    changeFilter(newArticle);
    //setFilter(newArticle);
  };
  return (
    <div>
      <p>Filter by:</p>
      <nav>
        {articleList.map((article) => (
          <button
            key={article}
            onClick={() => handleClick(article)}
            className={filter === article ? "active" : ""}>
            {article}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Filter;
