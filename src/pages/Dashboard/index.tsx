import { useContext, useState } from "react";
import { Dashboard } from "./styles";
import { toast } from "react-toastify";
import "../Home/styles.css";
import { GrayButton } from "../../components/GrayButton/styles";
import { SectionUser } from "../../components/SectionUser/styles";
import { Footer } from "../../components/Footer/styles";
import { H2 } from "../../components/Titles/styles";
import { UserContext } from "../../contexts/UserContext";
import Modal from "../../components/Modal";
import { TechsContext } from "../../contexts/Techs";
import { UlTechs } from "../../components/Techs/styles";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { userData } = useContext(UserContext);

  const { techs } = useContext(TechsContext);

  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.clear();
    navigate("/", { replace: true });
    toast.success("Logout efetuado com sucesso");
    setTimeout(() => {}, 3000);
  };

  console.log(techs);

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
          <h2>Tecnologias</h2>
          <button type="button" onClick={() => setShowModal(true)}>
            +
          </button>
        </Footer>
        <section>
          <UlTechs>
            {techs?.map((item) => (
              <li>
                <span>{item.title}</span>
                <p>{item.status}</p>
                <img src="./Vector.png" alt="" />
              </li>
            ))}
          </UlTechs>
        </section>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default DashboardPage;
