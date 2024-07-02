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
        {...register("message", { required: "Mensaje es requerido" })}
        required
        errors={errors.message?.message}
        className="w-[40%] min-w-72"
      />
      <div className="flex w-[40%] min-w-72 flex-col justify-between">
        <InputText
          id="name"
          label="Nombre"
          required
          {...register("name", {
            required: "Nombre es requerido",
            maxLength: {
              value: 50,
              message: "50 caracteres como maxima",
            },
          })}
          errors={errors.name?.message}
        />
        <InputText
          id="email"
          label="Email"
          required
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Tiene que ser un email valido",
            },
            required: "Email es requerido",
          })}
          errors={errors.email?.message}
        />
        <Button type="submit" isLoading={isSubmitting}>
          ENVIAR
        </Button>
      </div>
    </form>
  );
}
