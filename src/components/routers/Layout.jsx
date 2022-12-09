import { Outlet, NavLink } from 'react-router-dom';
export default function Layout() {
  return (
    <div>
      <header className="flex gap-6 justify-center p-6 bg-gray-300 text-xl">
        <NavLink
          to="/albums"
          end={true}
          className="text-black-500 hover:text-red-700 underline hover:decoration-2"
        >
          Albums
        </NavLink>
        <NavLink
          to="/users"
          className="text-black-500 hover:text-red-700 underline hover:decoration-2"
        >
          Users
        </NavLink>
      </header>
      <main>
        <div className="flex p-4">
          <Outlet />
        </div>
      </main>
      <footer>
        <div className="flex gap-2 justify-center p-4 bg-gray-300">
          <span>Createb by: Lykashevich Olya</span>
          <span> 2022</span>
        </div>
      </footer>
    </div>
  );
}
