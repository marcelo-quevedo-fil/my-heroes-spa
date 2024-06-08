import { useState } from "react";

export const useForm = (defaultValues: any = {}) => {
  const [formState, setFormState] = useState(defaultValues);

  const resetForm = () => {
    setFormState(defaultValues);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return {
    ...formState,
    formState,
    onInputChange,
    resetForm,
  };
};
