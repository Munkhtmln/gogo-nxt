const List = (List) => {
  return (
    <div className="Lists">
      <img src={List.image} alt="" />
      <div className="text">
        <h1>{List.title}</h1>
        <p>{List.description}</p>
      </div>
    </div>
  );
};
export default List;
