import RequestSummary from './RequestSummary';

const RequestList = (props) => {
  return (
    <div className="grid grid-cols-2 gap-5 justify-center items-center">
      {props.products?.map((p) => (
        <RequestSummary products={p} key={p._id} />
      ))}
    </div>
  );
};

export default RequestList;
