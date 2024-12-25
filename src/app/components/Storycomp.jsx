const Scomp = (trops) => {
  return (
    <div
      className="scomp"
      style={{ backgroundImage: `url(${trops.backgroundimage})` }}
    >
      <h1>{trops.logo}</h1>
      <p>{trops.text}</p>
    </div>
  );
};

export default Scomp;
