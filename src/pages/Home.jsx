import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to={'/starred'}>Starred</Link>
    </div>
  );
};

export default Home;
