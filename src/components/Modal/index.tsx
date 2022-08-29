import { schemaAddData } from "../../Validations";
import { H2 } from "../TitlesModal/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Label } from "../Label/styles";
import { Input } from "../Input/styles";
import { P } from "../ErrorMessage/styles";
import { Select } from "../Select/styles";
import { Button } from "../Button/styles";
import { FormTech } from "../FormTech";
import { Span } from "../CloseModal";
import { DivModal } from "./styles";
import { TechsContext, IDataPost } from "../../contexts/Techs";
import { useContext, Dispatch, SetStateAction } from "react";

interface IModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ showModal, setShowModal }: IModalProps) => {
  const { setAddTech, sendTechs } = useContext(TechsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataPost>({
    resolver: yupResolver(schemaAddData),
  });

  const closeModal = () => {
    setShowModal(false);
  };

  const onSubmitFn = (data: IDataPost) => {
    setAddTech(data);
    sendTechs(data);
    closeModal();
  };

  return (
    <DivModal showModal={showModal}>
      <main>
        <FormTech onSubmit={handleSubmit(onSubmitFn)}>
          <div className="divHeader">
            <H2>Cadastrar Tecnologia</H2>
            <Span onClick={() => closeModal()}>X</Span>
          </div>
          <Label htmlFor="title">Linguagem</Label>
          <Input
            type="text"
            id="title"
            placeholder="Digite aqui uma linguagem..."
            {...register("title")}
          />
          <P>{errors.title?.message}</P>

          <Label htmlFor="status">Selecionar Status</Label>
          <Select id="status" {...register("status")}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </Select>

          <Button type="submit">Cadastrar Tecnologia</Button>
        </FormTech>
      </main>
    </DivModal>
  );
};

export default Modal;
