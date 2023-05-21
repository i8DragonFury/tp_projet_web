import React from "react";
import './CardFAQ.css'

function CardFAQ({ question, rep }) {
  return (
    <div className="FAQ__question">
      <input id={question} type="checkbox" className="panel" />
      <div className="plus">*</div>
      <label htmlFor={question} className="panel-title">
        {question}
      </label>
      <div className="panel-content">{rep}</div>
    </div>
  );
}

export default CardFAQ;
