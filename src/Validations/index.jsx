import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Campo obrigatório")
    .email("Email Inválido!"),
  password: yup.string().required("Campo obrigatório"),
});

export const schemaRegister = yup.object({
  name: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Somente letras"),
  email: yup.string().required("Campo obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Campo obrigatório.")
    .matches(
      /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      "Sua senha deverá conter no mínimo 8 caracteres, pelo menos uma letra minúscula, uma maiúscula, um número e um caractere especial."
    ),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf(
      [yup.ref("password")],
      "Esse campo deve possuir a mesma senha cadastrada no campo anterior"
    ),
  bio: yup.string().required("Campo obrigatório"),
  contact: yup.string().required("Campo obrigatório."),
  course_module: yup.string().required("Campo obrigatório"),
});

export const schemaAddData = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
  // status: yup.string().required("Campo obrigat")
});
