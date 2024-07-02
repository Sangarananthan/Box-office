import styled from 'styled-components';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
import { StarIcon } from '../common/StarIcon';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import image_not_found from '../../lib/image_not_found.png';

const ShowCard = ({ show, onStarClick, isStarred }) => {
  const { name, image, summary, id } = show;
  const summaryStriped = summary
    ? summary
        .replace(/<\/?[^>]+(>|$)/g, '')
        .split(' ')
        .slice(0, 10)
        .join(' ') + '...'
    : 'No description';

  const starBtn = useRef();
  const handleStarClick = () => {
    onStarClick(id);
    const starBtnElement = starBtn.current;
    if (!starBtnElement) return;
    if (isStarred) {
      starBtnElement.classList.remove('animate');
    } else {
      starBtnElement.classList.add('animate');
    }
  };
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image ? image.medium : image_not_found} alt={name} />
      </SearchImgWrapper>
      <h1>{name}</h1>
      <p>{summaryStriped}</p>
      <ActionSection id={id}>
        <Link to={`/shows/${id}`} target="_blank" rel="noreferrer">
          Read more
        </Link>
        <StarBtn ref={starBtn} type="button" onClick={handleStarClick}>
          <StarIcon active={isStarred} />
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};

export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;
