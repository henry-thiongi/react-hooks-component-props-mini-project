import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes}) {
    const isLessthan = ()=>{
        if (minutes >0 && minutes <=5   ) {
            return `.  ☕️ ${minutes}`
        } else if (minutes > 5 && minutes <=10) {
            return `.  ☕️☕️ ${minutes}`
        } else if (minutes > 10 && minutes <=15) {
            return `.  ☕️☕️☕️ ${minutes}`
        } else if (minutes > 15 && minutes <=20) {
            return `.  ☕️☕️☕️☕️ ${minutes}`
        } else if (minutes > 20 && minutes <=25) {
             return `.  ☕️☕️☕️☕️☕️ ${minutes}`
        } else if (minutes >= 30 && minutes <=40) {
            return `.  🍱 ${minutes}`
        } else if (minutes >= 41 && minutes <=40) {

        } else {
            return  `.  🍱🍱 ${minutes}`
        }
    }
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}
        {isLessthan()}
      </small>
      <p>{preview}</p>


    </article>
  );
}

export default Article;