import { useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from "../firebase/useAuth";
import Swal from "sweetalert2";
const LoginWith = () => {
  const { googleLogin, gitHubLogin } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleLogin = (scocialProvider) => {
    scocialProvider().then((result) => {
      if (result.user) {
        Swal.fire({
            title: "Good job!",
            text: "logged in successfully",
            icon: "success"
          });
        // Delay the navigation to allow the toast to display
        setTimeout(() => {
          navigate(from);
        }, 2000);
      }
    });
  };

  return (
    <>
    
      <div  className="p-2
       flex justify-evenly rounded-2xl">
        <button
          onClick={() => handleLogin(googleLogin)}
          className="btn bg-zinc-400  btn-circle"
        >
          <FcGoogle />
        </button>
        <button
          onClick={() => handleLogin(gitHubLogin)}
          className="btn bg-stone-500  btn-circle"
        >
          <FaGithub />
        </button>
      </div>
    </>
  );
};

export default LoginWith;