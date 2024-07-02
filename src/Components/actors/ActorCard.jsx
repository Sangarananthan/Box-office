import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
import image_not_found from '../../lib/image_not_found.png';
const ActorCard = ({ actor }) => {
  const { name, image, country, birthday, deathday, gender } = actor;
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img
          src={image ? image.medium : image_not_found}
          alt={name}
          //   style={{ width: '210px', height: '295px' }}
        />
      </SearchImgWrapper>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from : ${country.name}` : ''}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : `Alive`}</p>
    </SearchCard>
  );
};

export default ActorCard;
