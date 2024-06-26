import { useDispatch } from "react-redux";
import authService from "../../services/appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout()));
  };

  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full max-sm:text-sm bg-gray-400 mx-1 font-bold"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}
export default LogoutBtn;
