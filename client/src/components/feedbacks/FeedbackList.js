import React from 'react'
import FeedbackSummary from "./FeedbackSummary";

const FeedbackList = (props) =>
{
    return (
        <div className="grid grid-cols-2 gap-5 justify-center items-center">
          {props.feed?.map((p) => (
            <FeedbackSummary feed={p} key={p._id} />
          ))}
        </div>
      );
};

export default FeedbackList;