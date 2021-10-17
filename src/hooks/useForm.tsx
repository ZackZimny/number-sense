import React, { useState } from "react";

const useForm = (initialState: any) => {
  const [values, setValues] = useState(initialState);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return [values, onChange];
};
export default useForm;
