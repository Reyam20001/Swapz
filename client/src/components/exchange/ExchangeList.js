import React from 'react'
import ExchangeSummary from './ExchangeSummary';

const ExchangeList = (props) => {
  return (
    <div className="grid grid-cols-2 gap-5 justify-center items-center">
      {props.items.map((p) => (
        <ExchangeSummary items={p} key={p._id} />
      ))}
    </div>
  );
};

export default ExchangeList;