"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LoginSchema } from "./login.zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LoginDataType } from "./login.interface";
import { sendDateLogin } from "./login.services";
import { signIn } from "next-auth/react";

export default function LoginForn() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: 'all',
    resolver: zodResolver(LoginSchema)
  })

  async function handelUserLogin(data: LoginDataType) {
    const res = signIn("credentials" ,{...data, redirect :false ,redirectTo : '/'} ).then(function (res){
      if(res.error){
        throw new Error('"An error occurred')
      }
      
      return "Logged in successfully!"
    })
    
    toast.promise(res, {
      loading: "Please Wait....",
      success: (res: any) => {
        reset();
        router.push("/");
        router.refresh()
        return <h1 className="text-main-color capitalize">Logged in successfully!</h1>;
      },
      error: (err: any) => {
        return <h1 className="text-red-500 capitalize">Incorrect Email or password</h1>;
      },
    });
}

  return (
    <form className="flex flex-col gap-7 py-2" onSubmit={handleSubmit(handelUserLogin)}>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <div className="flex items-center justify-between">

              <FieldLabel className="text-[#364153] font-medium text-[16px]" htmlFor={field.name}>Email Address</FieldLabel>
              <Link href={'forget-Password'} className="text-sm text-main-color hover:text-primary-700 cursor-pointer font-medium">Forgot Password?</Link>
            </div>
            <div className="relative">
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your email"
                autoComplete="off"
                className="focus:border-main-color! focus:ring-0! py-3.5! h-auto! pl-11! placeholder:font-medium! placeholder:text-[16px]! placeholder:text-[#36415380]!"
                type="email"
              />
              <svg data-prefix="fas" data-icon="lock" className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"></path></svg>
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => {

          return (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-[#364153] font-medium text-[16px]"
                htmlFor={field.name}
              >
                Password
              </FieldLabel>
              <div className="relative">

                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password"
                  autoComplete="off"
                  className="focus:border-main-color! focus:ring-0! py-3.5! h-auto! pl-11! placeholder:font-medium! placeholder:text-[16px]! placeholder:text-[#36415380]!"
                  type={showPassword ? "text" : "password"}
                />
                <svg data-prefix="fas" data-icon="lock" className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"></path></svg>
                <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg data-prefix="fas" data-icon="eye" className="w-4 h-4" role="img" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"></path></svg>
                </button>

              </div>

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          );
        }}
      />


      <button type="submit" className=" bg-main-color text-white hover:bg-main-color-hover disabled:opacity-50 disabled:cursor-not-allowed w-full transition-colors flex gap-2 items-center justify-center rounded-[8px] h-13">
        Sign In
      </button>


    </form>
  )
}
