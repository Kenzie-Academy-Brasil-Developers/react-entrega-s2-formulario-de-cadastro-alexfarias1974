// import { useForm } from "react-hook-form";
// import { FormLogin } from "../../components/FormLogin";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { Label } from "../../components/Label/styles";
// import { Button } from "../../components/Button/styles";
// import { Input } from "../../components/Input/styles";
// import "../../index.css";
// import "./styles.css";
// import { P } from "../../components/ErrorMessage/styles";
// import { H2 } from "../../components/Titles/styles";
// import Home from "../pages/Home";
import { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [dataUserID, setDataUserID] = useState(null);
  const [dataUserModule, setDataUserModule] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("@userToken") && localStorage.getItem("@userID")) {
      navigate("/dashboard", { replace: true });
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
