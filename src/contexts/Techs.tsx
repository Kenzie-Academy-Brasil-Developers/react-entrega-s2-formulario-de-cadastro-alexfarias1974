import axios from "axios";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { IUserContextProvProps } from "./UserContext";

export const TechsContext = createContext<ITechsContextProviderProps>(
  {} as ITechsContextProviderProps
);

export interface ITechs {
  id: string;
  title: string;
  status: string;
  user?: {
    id: string;
  };
  created_at: string;
  updated_at: string;
}

// export interface ISetTechs {
//   setTechs: Dispatch<SetStateAction<ITechs>>;
// }

export interface IDataPost {
  title: string;
  status: string;
}

interface ITechsContextProviderProps {
  addTech: IDataPost;
  setAddTech: Dispatch<SetStateAction<IDataPost>>;
  techs: ITechs[];
  setTechs: Dispatch<SetStateAction<ITechs[]>>;
  sendTechs: (data: IDataPost) => void;
}

export const TechsProvider = ({ children }: IUserContextProvProps) => {
  const [addTech, setAddTech] = useState<IDataPost>({} as IDataPost);
  const [techs, setTechs] = useState<ITechs[]>([]);

  const token = localStorage.getItem("@userToken");

  const sendTechs = (data: IDataPost) => {
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
