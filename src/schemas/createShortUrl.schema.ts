import { object, string } from "yup";

export default object({
  desctination: string().required("Destination is required"),
});
