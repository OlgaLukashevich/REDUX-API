import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionUsers } from '../redux/action';
import { selectUsers } from '../redux/selector';
import useFetch from './utils/useFetch';
export default function Users() {
  useFetch(actionUsers());

  const users = useSelector(selectUsers);

  return (
    <div>
      {users.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <div className=" mb-2 underline hover:decoration-2">{user.name}</div>
        </Link>
      ))}
    </div>
  );
}
