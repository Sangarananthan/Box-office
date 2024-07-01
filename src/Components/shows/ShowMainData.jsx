const ShowMainData = ({ image, name, rating, summary, genres }) => {
  return (
    <>
      <div>
        <img src={image ? image.original : '/image_not_found.png'} alt={name} />
      </div>
      <div>
        <h1>{name}</h1>
        <div>{rating.average || ''}</div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div>
          Genres :{' '}
          <div>
            {genres.map(genre => (
              <span key={genre}>{`${genre} | `}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowMainData;
