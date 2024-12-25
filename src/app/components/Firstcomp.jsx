const Fcomp = (props) => {
  return (
    <div className="fcomp">
      <img src={props.image} alt="" />
      <p>{props.text}</p>
    </div>
  );
};

export default Fcomp;
