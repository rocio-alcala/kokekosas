"use client";

import { useForm } from "react-hook-form";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";
import Button from "./Button";
import BaseModal from "./BaseModal";
import { useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
  access_key: string;
}

const ACCESS_KEY = "0396eec0-670d-4ce3-ae2e-8fda198d05d8";

export default function ContactForm() {
  const [modal, setModal] = useState({
    isOpen: false,
    message: "",
    success: false,
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  async function onSubmit(data: ContactForm) {
    console.log(data);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Error al enviar el formulario");
      }
      setModal({
        isOpen: true,
        message: "El mensaje fue enviado correctamente",
        success: true,
      });
      reset();
    } catch (e) {
      const errorMessage =
        e instanceof Error ? e.message : "Error al enviar el formulario";
      setModal({
        isOpen: true,
        message: errorMessage,
        success: false,
      });
    }
  }

  return (
    <>
      <form
        className="flex flex-wrap items-stretch justify-center gap-5 sm:p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="hidden"
          {...register("access_key")}
          value={ACCESS_KEY}
        ></input>
        <InputTextArea
          id="message"
          label="Mensaje"
          {...register("message", { required: "Mensaje es requerido" })}
          required
          errors={errors.message?.message}
          className="w-[100%] lg:w-[55%]"
        />
        <div className="flex w-[100%] flex-col justify-between lg:w-[40%]">
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
          <Button type="submit" isLoading={isSubmitting} className="mt-4">
            ENVIAR
          </Button>
        </div>
      </form>
      <BaseModal
        isOpen={modal.isOpen}
        onClose={() => setModal({ isOpen: false, message: "", success: false })}
      >
        <h1 className="mb-4 text-xl font-bold md:text-3xl">{modal.message}</h1>
        <p className="text-base md:text-xl">
          {modal.success
            ? "Responderemos tu consulta cuando antes"
            : "Intenta de nuevo"}
        </p>
      </BaseModal>
    </>
  );
}
