import RItemsSummary from './RItemsSummary';

const RItemsList= (props) => {
  return (
    <div className="grid grid-cols-2 gap-5 justify-center items-center">
      {props.items.map((p) => (
        <RItemsSummary item={p} key={p._id} />
      ))}
    </div>
  );
};

export default RItemsList;
