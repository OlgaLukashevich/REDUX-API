import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import useFetch from './utils/useFetch';
import { actionAlbum, actionPhotos } from '../redux/action';
import { selectAlbum, selectPhotos, selectUser } from '../redux/selector';

export default function Album() {
  const { id } = useParams();
  useFetch(actionAlbum(id));
  const album = useSelector(selectAlbum);
  const user = useSelector(selectUser);
  useFetch(actionPhotos(id));
  const photos = useSelector(selectPhotos);
  if (!photos || !user || !album) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div>
          <span>Title:</span>
          {album.title}
          <div>
            <span>Created by:</span>
            <Link key={user.id} to={`/users/${user.id}`}>
              <span className="underline hover:decoration-2"> {user.name}</span>
            </Link>
          </div>
        </div>
        <div className="pt-3 grid grid-cols-4 gap-4">
          {photos.map((photo) => (
            <img key={photo.id} src={photo.thumbnailUrl} alt="photos" />
          ))}
        </div>
      </div>
    );
  }
}
