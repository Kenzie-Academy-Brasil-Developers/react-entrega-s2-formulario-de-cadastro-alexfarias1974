import { useContext, useEffect, useState } from "react";
import { Dashboard } from "./styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import "../Home/styles.css";
import { GrayButton } from "../../components/GrayButton/styles";
import { SectionUser } from "../../components/SectionUser/styles";
import { Footer } from "../../components/Footer/styles";
import { H2 } from "../../components/Titles/styles";
import { UserContext } from "../../contexts/UserContext";

const DashboardPage = () => {
  const { userData, navigate } = useContext(UserContext);
  const logout = () => {
    window.localStorage.clear();
    navigate("/", { replace: true });
    toast.success("Logout efetuado com sucesso");
    setTimeout(() => {}, 3000);
  };

  return (
    <div>
      <div className="divDash">
        <Dashboard>
          <h1 className="logoKhLogin">Kenzie Hub</h1>
          <GrayButton onClick={() => logout()} type="submit">
            Sair
          </GrayButton>
        </Dashboard>
        <SectionUser>
          <H2>{userData.name}</H2>
          <p className="pMsgReg">{userData.course_module}</p>
        </SectionUser>
        <Footer>
          <H2>Que pena! Estamos em desenvolvimento :(</H2>
          <h3 className="h3Footer">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades.
          </h3>
        </Footer>
      </div>
    </div>
  );
};

export default DashboardPage;
