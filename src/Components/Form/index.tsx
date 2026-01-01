"use client";

import { useForm, type SubmitHandler } from "react-hook-form";

interface Inputs {
  name: string;
  tel: string;
  email: string;
  message: string;

}

const Form = () => {
  const {
    register, 
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<Inputs>(
    {
      mode: "onBlur",
    }
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const cleanTel = data.tel.replace(/\D/g, ""); // только цифры
    console.log({ ...data, tel: cleanTel });
    reset();
  };

  // Добавь noValidate на <form> чтобы браузерная валидация не мешала react-hook-form
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5">
      <label className="col-start-1 col-end-2 flex flex-col gap-y-0.5">
        <span className="star font-medium capitalize flex items-start gap-x-1.5">adınız</span>
        <input {...register("name", {
          required: {
            value: true,
            message: "Bu sahə tələb olunur."
          },
        })} className="w-full p-2 border-b border-gray-300" type="text" autoComplete="off" />
        {errors.name && (<p className="text-red-600 font-medium">{errors.name.message}</p>)}
      </label>
      <label className="col-start-2 col-end-3 flex flex-col gap-y-0.5">
        <span className="star font-medium capitalize flex items-start gap-x-1.5">telefon</span>
        <input {...register("tel", { 
          required: {
            value: true, 
            message: "Bu sahə tələb olunur." 
          }, 
          pattern: {
            value: /^\+?\d{9,15}$/, 
            message: "Telefon nömrəsi düzgün deyil. 9–15 rəqəm daxil edin (məs: +994501234567).", 
            }, 
          })} className="w-full p-2 border-b border-gray-300" type="tel" autoComplete="off" />
        {errors.tel && (<p className="text-red-600 font-medium">{errors.tel.message}</p>)}
      </label>
      <label className="col-start-1 col-end-3 flex flex-col gap-y-0.5">
        <span className="star font-medium capitalize flex items-start gap-x-1.5">email</span>
        <input {...register("email", {
          required: {
            value: true,
            message: "Bu sahə tələb olunur."
          },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
            message: "E-poçt ünvanı düzgün deyil. Nümunə: ad@domain.com",
          },
        })} className="w-full p-2 border-b border-gray-300" type="email" autoComplete="off" />
        {errors.email && (<p className="text-red-600 font-medium">{errors.email.message}</p>)}
      </label>
      <label className="col-start-1 col-end-3 flex flex-col gap-y-0.5">
        <span className="capitalize font-medium">mətn</span>
        <textarea {...register("message")} className="w-full p-2 min-h-40 resize-none border-b border-gray-300"></textarea>
      </label>
      <button  
        className="col-start-1 col-end-3 bg-[#45B44D] py-2 rounded-md cursor-pointer 
        text-white font-medium uppercase transition-colors duration-200
         hover:bg-[#3e9f45] active:bg-gray-600" 
        type="submit">
        göndər
      </button>
    </form>
  );
};

export default Form;
