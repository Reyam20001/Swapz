import WishlistSummary from './WishlistSummary';

const WishlistList = (props) => {
  return (
    <div className="grid grid-cols-2 gap-5 justify-center items-center">
      {props.prods?.map((p) => (
        <WishlistSummary prods={p} key={p._id} />
      ))}
    </div>
  );
};

export default WishlistList;
