import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ActorCard = ({ actor }) => {
  const { name, image, country, birthday, deathday, gender } = actor;
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img
          src={image ? image.medium : '/image_not_found.png'}
          alt={name}
          //   style={{ width: '210px', height: '295px' }}
        />
      </SearchImgWrapper>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from : ${country}` : ''}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : `Alive`}</p>
    </SearchCard>
  );
};

export default ActorCard;
