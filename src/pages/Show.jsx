import { useParams } from 'react-router-dom';
const Show = () => {
  const { showid } = useParams();
  console.log(showid);
  return <div>Show</div>;
};

export default Show;
