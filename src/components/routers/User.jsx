import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectUser, selectAlbums } from '../redux/selector';
import useFetch from './utils/useFetch';
import { actionAlbum, actionUser } from '../redux/action';

export default function User() {
  const { id } = useParams();
  useFetch(actionUser(id));
  useFetch(actionAlbum(id));
  const user = useSelector(selectUser);
  const albums = useSelector(selectAlbums);
  if (!user || !albums) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div>
          <div>Name:{user.name}</div>
          <div>Username:{user.username}</div>
          <div>Email:{user.email}</div>
        </div>

        <div className="pt-4">
          <div>
            {albums.map((album) => (
              <Link key={album.id} to={`/albums/${album.id}`}>
                <div className="mb-2 underline hover:decoration-2">
                  {album.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
