import * as yup from "yup";

const formSchema = () =>
  yup.object().shape({
    firstName: yup.string().min(3),
    aboutMe: yup.string(),
    address: yup.string(),
    lastName: yup.string(),
    practiceAreas: yup.array(),
    photoUrl: yup.string(),
  });

export default formSchema;
