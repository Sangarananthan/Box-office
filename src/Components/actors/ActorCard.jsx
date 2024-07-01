const ActorCard = ({ actor }) => {
  const { name, image, country, birthday, deathday, gender } = actor;
  return (
    <div>
      <div>
        <img
          src={image ? image.medium : '/image_not_found.png'}
          alt={name}
          //   style={{ width: '210px', height: '295px' }}
        />
      </div>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from : ${country}` : ''}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : `Alive`}</p>
    </div>
  );
};

export default ActorCard;
