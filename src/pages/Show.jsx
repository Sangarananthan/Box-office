import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getShowByID } from '../api/Tvmaze';
import ShowMainData from '../Components/shows/ShowMainData';
import Details from '../Components/shows/Details';
import Season from '../Components/shows/Season';
import Cast from '../Components/shows/Cast';
import styled from 'styled-components';
import { TextCenter } from '../Components/common/TextCenter';
const Show = () => {
  const { showid } = useParams();
  const { data: showdata, error: showError } = useQuery({
    queryKey: ['show', showid],
    queryFn: () => getShowByID(showid),
  });
  if (showError) {
    return <TextCenter>We have an error: {showdata}</TextCenter>;
  }
  if (showdata) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to={'/'}>Home</Link>
        </BackHomeWrapper>

        <ShowMainData
          image={showdata.image}
          name={showdata.name}
          rating={showdata.rating}
          summary={showdata.summary}
          genres={showdata.genres}
        />
        <InfoBlock>
          <h2>Details</h2>
          <Details
            status={showdata.status}
            premiered={showdata.premiered}
            network={showdata.network}
          />
        </InfoBlock>

        <InfoBlock>
          <h2>Seasons</h2>
          <Season seasons={showdata._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
          {showdata._embedded.cast.length > 0 ? <h2>Cast</h2> : <></>}
          <Cast cast={showdata._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }
  console.log(showdata);
  return <strong>Loading..</strong>;
};

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
