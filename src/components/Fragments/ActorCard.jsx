const ActorCard = (props) => {
  const { image, name, character } = props;
  return (
    <div className="max-w-xs mx-4">
      <img src={image} alt={name} className="w-full" />
      <p className="text-white text-center font-medium">{name}</p>
      <p className="text-white text-center text-sm">({character})</p>
    </div>
  );
};

export default ActorCard;
