import ReactImageMagnify from "react-magnifier";

const MyReactImageMagnify = ({img}) => {
  return (
    <div>
      <ReactImageMagnify src={img} width={500} />
    </div>
  );
};

export default MyReactImageMagnify;