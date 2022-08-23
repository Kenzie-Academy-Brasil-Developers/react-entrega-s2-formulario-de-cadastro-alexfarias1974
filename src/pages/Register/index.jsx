import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { Label } from "../../components/Label/styles";
import { FormRegister } from "../../components/FormRegister/styles";
import "../../index.css";
import "../Home/styles.css";
import { Input } from "../../components/Input/styles";
import { H2 } from "../../components/Titles/styles";
import { P } from "../../components/ErrorMessage/styles";
import { GrayButton } from "../../components/GrayButton/styles";
import { Select } from "../../components/Select/styles";
import { Button } from "../../components/Button/styles";
import { schemaRegister } from "../../Validations";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const Register = () => {
  const { registerData, navigate } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const buttonBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <div>
      <div className="headerRegister">
        <h1 className="logoKhRegister">Kenzie Hub</h1>
        <GrayButton className="btnBack" onClick={() => buttonBack()}>
          Voltar
        </GrayButton>
      </div>
      <FormRegister onSubmit={handleSubmit(registerData)}>
        <H2>Crie sua conta</H2>
        <p className="pMsgReg">Rápido e grátis, vamos nessa</p>
        <Label htmlFor="name">Nome</Label>
        <Input
          type="text"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <P>{errors.name?.message}</P>

        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <P>{errors.email?.message}</P>

        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <P>{errors.password?.message}</P>

        <Label htmlFor="confirm-Password">Confirmar Senha</Label>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
        />
        <P>{errors.confirmPassword?.message}</P>

        <Label htmlFor="bio">Bio</Label>
        <Input
          type="text"
          id="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <P>{errors.bio?.message}</P>

        <Label htmlFor="contato">Contato</Label>
        <Input
          type="text"
          id="contato"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <P>{errors.contato?.message}</P>

        <Label htmlFor="modulo">Selecionar módulo</Label>
        <Select
          type="text"
          id="modulo"
          placeholder="Escolha o módulo"
          {...register("course_module")}
        >
          <option>Primeiro módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto Módulo (Backend Avançado)</option>
        </Select>
        <P>{errors.modulo?.message}</P>

        <Button type="submit">Cadastrar</Button>
      </FormRegister>
    </div>
  );
};

export default Register;
