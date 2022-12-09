import { Link } from 'react-router-dom';
export default function Main() {
  return (
    <div className="p-12">
      <h1 className="text-xl text-center font-medium">Welcome to Main page </h1>
      <div className="pt-2 flex justify-around ">
        <Link to={`/albums`}>
          <div className="underline hover:decoration-2">Go to albums</div>
        </Link>
        <Link to={`/users`}>
          <div className="underline hover:decoration-2">Go to users</div>
        </Link>
      </div>
    </div>
  );
}
