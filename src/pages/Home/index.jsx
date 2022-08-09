import { useForm } from "react-hook-form";
import { FormLogin } from "../../components/FormLogin";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Label } from "../../components/Label/styles";
import { Button } from "../../components/Button/styles";
import { Input } from "../../components/Input/styles";
import "../../index.css";
import "./styles.css";
import { P } from "../../components/ErrorMessage/styles";
import { H2 } from "../../components/Titles/styles";

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Campo obrigatório")
    .email("Email Inválido!"),
  password: yup.string().required("Campo obrigatório"),
});

const Home = () => {
  useEffect(() => {
    if (localStorage.getItem("@userToken") && localStorage.getItem("@userID")) {
      navigate("/dashboard", { replace: true });
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const loginData = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        console.log(response.data);
        window.localStorage.clear();
        window.localStorage.setItem("@userToken", response.data.token);
        window.localStorage.setItem("@userID", response.data.user.id);
        toast.success("Login efetuado com sucesso!");
        navigate("/dashboard", { replace: true });
      })
      .catch((error) =>
        toast.error("Email ou senha não cadastrados na nossa base!")
      );
  };

  const toRegister = () => {
    navigate("/register", { replace: true });
  };

  return (
    <div>
      <h1 className="logoKhLogin">Kenzie Hub</h1>
      <FormLogin onSubmit={handleSubmit(loginData)}>
        <H2>Login</H2>

        <Label htmlFor="email">Email</Label>

        <Input
          type="text"
          id="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <P>{errors.email?.message}</P>

        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <P>{errors.password?.message}</P>

        <Button type="submit">Entrar</Button>
        <p className="pMsgReg">Ainda não possui uma conta?</p>

        <button
          className="buttonToRegister"
          onClick={() => toRegister()}
          type="submit"
        >
          Cadastre-se
        </button>
      </FormLogin>
    </div>
  );
};

export default Home;
