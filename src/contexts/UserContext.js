import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createContext } from "react";
import { TechsContext } from "./Techs";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const { setTechs } = useContext(TechsContext);

  const [dataUserID, setDataUserID] = useState(null);
  const [dataUserModule, setDataUserModule] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      axios
        .get("https://kenziehub.herokuapp.com/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserData(response.data);
          console.log(response);
          setTechs(response.data.techs);
          navigate("/dashboard", { replace: true });
        })
        .catch((error) => {});
    } else {
      navigate("/", { replace: true });
    }
  }, []);

  const loginData = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        console.log(response.data);
        window.localStorage.clear();
        window.localStorage.setItem("@userToken", response.data.token);
        window.localStorage.setItem("@userID", response.data.user.id);
        setUserData(response.data.user);
        toast.success("Login efetuado com sucesso!");
        navigate("/dashboard", { replace: true });
      })
      .catch((error) =>
        toast.error("Email ou senha não cadastrados na nossa base!")
      );
  };

  const registerData = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        console.log(response.data);
        toast.success("Usuário cadastrado com sucesso");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Alguma coisa deu errado");
      });
  };

  const toRegister = () => {
    navigate("/register", { replace: true });
  };

  return (
    <UserContext.Provider
      value={{ toRegister, loginData, registerData, navigate, userData }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
