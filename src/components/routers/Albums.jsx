import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { actionAlbums } from '../redux/action';
import { selectAlbums } from '../redux/selector';
import useFetch from './utils/useFetch';
export default function Albums() {
  useFetch(actionAlbums());
  const albums = useSelector(selectAlbums);

  return (
    <div>
      {albums.map((album) => (
        <Link key={album.id} to={`/albums/${album.id}`}>
          <div className=" mb-2 underline hover:decoration-2">
            {album.title}
          </div>
        </Link>
      ))}
    </div>
  );
}
