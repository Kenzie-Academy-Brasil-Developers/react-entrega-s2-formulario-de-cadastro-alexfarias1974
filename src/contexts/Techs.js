import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const [addTech, setAddTech] = useState({});
  const [techs, setTechs] = useState([]);

  const token = localStorage.getItem("@userToken");

  const sendTechs = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setTechs(response.data.techs);
        toast.success("Tech cadastrada com sucesso");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Alguma coisa deu errado");
      });
  };

  useEffect(() => {
    if (token !== undefined) {
      axios
        .get("https://kenziehub.herokuapp.com/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.techs);
          setTechs(response.data.techs);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [techs]);

  return (
    <TechsContext.Provider
      value={{ addTech, setAddTech, techs, setTechs, sendTechs }}
    >
      {children}
    </TechsContext.Provider>
  );
};
