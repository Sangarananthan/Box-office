const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key} className="cast-item">
          <div className="pic-wrapper">
            <img
              src={person.image ? person.image.medium : '/image_not_found.png'}
              alt={person.name}
            />
          </div>
          <div className="actor">
            <span>
              <span className="bold">{person.name}</span> | {character.name}{' '}
              {voice ? '| Voice' : ''}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
