"use client";

import { useForm } from "react-hook-form";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";
import Button from "./Button";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  function onSubmit(data: ContactForm) {
    console.log(data);
  }

  return (
    <form
      className="flex flex-wrap items-stretch justify-center gap-5 p-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputTextArea
        id="message"
        label="Mensaje"
        {...register("message")}
        required
        className="w-[40%] min-w-72"
      />
      <div className="flex w-[40%] min-w-72 flex-col justify-between">
        <InputText id="name" label="Nombre" required {...register("name")} />
        <InputText id="email" label="Email" required {...register("email")} />
        <Button type="submit">ENVIAR</Button>
      </div>
    </form>
  );
}
