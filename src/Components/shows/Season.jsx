const Season = ({ seasons }) => {
  return (
    <div>
      <p>Seasons in Total : {seasons.length}</p>
      <p>
        Episodes in Total :{' '}
        {seasons.reduce((acc, cur) => {
          return acc + cur.episodeOrder;
        }, 0)}
      </p>
      <div>
        {seasons.map(season => (
          <div key={season.id}>
            <p>SeasonID : {season.id}</p>
            <p>Episodes : {season.episodeOrder}</p>
            <div>
              Aired : {season.premiered} - {season.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Season;
