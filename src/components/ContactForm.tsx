"use client";

import { useForm } from "react-hook-form";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";

export default function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      className="flex w-[60%] min-w-64 flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputText id="name" label="Nombre" required {...register("name")} />
      <InputText id="email" label="Email" required {...register("email")} />
      <InputTextArea
        id="message"
        label="Mensaje"
        {...register("message")}
        required
      />
    </form>
  );
}
