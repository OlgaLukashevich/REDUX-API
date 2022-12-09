import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="p-12">
      <h1 className="text-4xl text-center pb-3"> ¯\_(ツ)_/¯</h1>
      <Link to={`/`}>
        <div className="underline hover:decoration-2">Go to main</div>
      </Link>
    </div>
  );
}
