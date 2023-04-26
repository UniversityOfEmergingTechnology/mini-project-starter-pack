import React from "react";
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'
import Article from '../../components/article/Article'
import './Blog.css'

const Blog = () => {
  return (
    <div className="gpt3_blog section__padding">
      <div className="gpt3_blog-heading">
        <h1 className="gradient__text">
          A lot is happening,<br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3_blog-container">
        <div className="gpt3_blog-container_groupA">
          <Article imgUrl={blog01} date="April 26, 2023" text="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt3_blog-container_groupB">
          <Article imgUrl={blog02} date="April 26, 2023" text="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog03} date="April 26, 2023" text="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog04} date="April 26, 2023" text="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog05} date="April 26, 2023" text="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
