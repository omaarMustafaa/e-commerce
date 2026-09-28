"use client"
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { EmailSchema } from "./EmailAddress.zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailAddressType } from "./EmailAddress.interface";
import toast from "react-hot-toast";
import { sendEmail } from "./EmailAddress.action";
import { useState } from "react";
import Link from "next/link";

export default function EmailAddress({ 
  setEmail, 
  onSuccess 
}: { 
  setEmail: (email: string) => void; 
  onSuccess: () => void; 
}) {

  const [isLoading, setIsLoading] = useState(false);

    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
          email: "",
        },
        mode: 'all',
        resolver: zodResolver(EmailSchema)
      })

      async function handelEmailForForgetPass(data :EmailAddressType){

        setIsLoading(true);

        toast.promise(sendEmail(data) , {
          loading : "Please Wait...." ,
          success : () => {
            setEmail(data.email);
            onSuccess()
            setIsLoading(false);
            return <h1 className="text-main-color capitalize">Reset code sent to your email</h1>;
          },
          error: () => {
            setIsLoading(false);
        return <h1 className="text-red-500 capitalize">There is no user registered with this email address  om246820035@gmail.com</h1>;
      },
        })
      }

  return (
    <>
        <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4 font-bold">
                <span className="text-3xl font-bold text-main-color">Fresh</span>
                <span className="text-3xl text-gray-800">Cart</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Forgot Password?</h1>
            <p className="text-gray-600 font-medium">No worries, we'll send you a reset code</p>

        </div>
        <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-main-color text-white ring-4 ring-[#DCFCE7]">
                    <svg data-prefix="fas" data-icon="envelope" className="w-4 h-4 text-xs" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"></path></svg>
                </div>
                <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200"></div>
            </div>

            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                    <svg data-prefix="fas" data-icon="key" className="w-4 h-4 text-xs" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"></path></svg>
                </div>
                <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200"></div>
            </div>

            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
                    <svg data-prefix="fas" data-icon="lock" className="w-4 h-4 text-xs" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"></path></svg>
                </div>
            </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(handelEmailForForgetPass)}>

      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>

              <FieldLabel className="text-[#364153] font-medium text-[16px]" htmlFor={field.name}>Email Address</FieldLabel>
              
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

      <button disabled={isLoading} type="submit" className=" bg-main-color text-white hover:bg-main-color-hover disabled:opacity-50 disabled:cursor-not-allowed w-full transition-colors font-semibold flex gap-2 items-center justify-center rounded-[8px] h-13">
        Send Reset Code
      </button>

      <div className="text-center">
        <Link href={'/login'} className="inline-flex items-center gap-2 text-sm text-main-color hover:text-main-color-hover font-medium transition-colors">
          <svg data-prefix="fas" data-icon="arrow-left" className="w-4 h-4 text-xs" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg>
          Back to Sign In
        </Link>
      </div>


    </form>

    <div className="text-center mt-8 pt-6 border-t border-gray-100">
      <p className="text-gray-600">
        Remember your password?
        <Link href={'/login'} className="text-main-color hover:text-main-color-hover font-semibold transition-colors"> Sign In</Link>
      </p>
    </div>
    </>
  )
}
