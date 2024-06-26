import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const userData = useSelector(state => state.auth.userData);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "My Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
    <div className="mr-4">
      <Link to="/">
        <Logo width="70px" />
      </Link>
    </div>
      <nav className="flex items-center w-full">
        <ul className="flex md:ml-auto justify-end w-full">   
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="inline-bock px-1 md:px-6 py-2 duration-200 hover:bg-blue-100 rounded-full max-sm:text-sm mx-1 font-bold text-blue-700 underline"
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
      <div>
      {authStatus && (
            <div className="font-bold flex justify-end pr-4">
              👤 {userData.name}
            </div>
          )}
      </div>
    </header>
  );
};
export default Header;
