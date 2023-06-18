import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../../store/app.store";
import { IAgent } from "../../../types/Agent";
import formSchema from "../schemas/form.schema";

const useForm = () => {
  // const setAgents = useAppStore((state) => state.setAgents);
  const setModal = useAppStore((state) => state.setModalOpen);
  const navigate = useNavigate();
  const { handleBlur, handleChange, handleSubmit, values, setValues } =
    useFormik<
      Omit<IAgent, "agentLicence" | "id" | "photoUrl" | "review"> & {
        image: File | null;
      }
    >({
      initialValues: {
        aboutMe: "",
        address: "",
        firstName: "",
        lastName: "",
        practiceAreas: [],
        image: null,
      },
      onSubmit: (values) => {
        const formData = new FormData();

        formData.append("firstName", values.firstName);
        formData.append("lastName", values.lastName);
        formData.append("address", values.address);
        formData.append("practiceAreas", values.practiceAreas.join(","));
        formData.append("file", values.image!);
        formData.append("aboutMe", values.aboutMe);

        axios.post("/agent", formData).then((res) => {
          // setAgents([res.data]);
          setModal(false);
          navigate(0);
        });
      },
      validationSchema: formSchema,
    });

  return { handleBlur, handleChange, handleSubmit, values, setValues };
};

export default useForm;
