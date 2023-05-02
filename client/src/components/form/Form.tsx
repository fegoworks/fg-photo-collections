import { FunctionComponent } from "react";
import { Button, InputField } from "..";
import { useFormik } from "formik";
import { ObjectSchema } from "yup";

export interface FormConfig {
  name: string;
  type: string;
  label: string;
}

interface FormProps {
  buttonText?: string;
  config: FormConfig[];
  defaultValues: Record<string, string>;
  isLoading?: boolean;
  onSubmit: (data: any) => void;
  validationSchema: ObjectSchema<object>;
}

const Form: FunctionComponent<FormProps> = ({
  buttonText,
  config,
  defaultValues,
  isLoading,
  onSubmit,
  validationSchema,
}) => {
  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {config.map(({ label, name, type }) => (
        <InputField
          key={name}
          label={label}
          name={name}
          type={type}
          error={formik.errors[name]}
          onBlur={formik.handleBlur}
          {...(type === "file"
            ? {
                accept: "image/*",
              }
            : {
                value: formik.values[name],
              })}
          onChange={
            type === "file"
              ? (event) => {
                  const files = event.target.files;
                  let myFiles = Array.from(files);
                  formik.setFieldValue(name, myFiles[0]);
                }
              : formik.handleChange
          }
          touched={formik.touched[name]}
        />
      ))}
      <div className="button-container">
        <Button
          isLoading={isLoading}
          onClick={formik.submitForm}
          text={buttonText || "Submit"}
          type="button"
        />
      </div>
    </form>
  );
};

export default Form;
