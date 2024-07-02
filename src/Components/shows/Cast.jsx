import styled from 'styled-components';
import image_not_found from '../../lib/image_not_found.png';

const Cast = ({ cast }) => {
  return (
    <CastList>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key} className="cast-item">
          <div className="pic-wrapper">
            <img
              src={person.image ? person.image.medium : image_not_found}
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
    </CastList>
  );
};

export default Cast;
const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  .cast-item {
    flex: 1 0 50%;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    @media only screen and (max-width: 768px) {
      flex: 1 0 100%;
    }
  }
  .pic-wrapper {
    width: 50px;
    min-width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .actor {
    margin-left: 25px;
  }
`;
