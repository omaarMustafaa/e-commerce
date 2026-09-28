"use client"

import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { ResetPasswordSchema } from './ResetPassword.zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ResetPasswordType } from './ResetPassword.interface';
import { ResetPassword } from './ResetPassword.action';
import toast from 'react-hot-toast';

export default function ResetPasswordStep({ email }: { email: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    mode: 'all',
    resolver: zodResolver(ResetPasswordSchema)
  })

  console.log("data")
  async function handelNewPassord(DataPassword: ResetPasswordType) {
    setIsLoading(true);

    toast.promise(ResetPassword(DataPassword, email), {
      loading: "Please Wait....",
      success: () => {
        setIsLoading(false);
        router.push('/login');
        return <h1 className="text-main-color capitalize">Password Ganged Successful</h1>;
      },
      error: () => {
        setIsLoading(false);
        return <h1 className="text-red-500 capitalize">reset code not verified</h1>;
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
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Create New Password</h1>
        <p className="text-gray-600 font-medium">Your new password must be different from previous passwords</p>

      </div>
      <div className="flex items-center justify-center mb-8">


        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-main-color text-white">
            <svg data-prefix="fas" data-icon="check" className="w-4 h-4" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"></path></svg>
          </div>
          <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200"></div>
        </div>

        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-main-color text-white">
            <svg data-prefix="fas" data-icon="check" className="w-4 h-4" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"></path></svg>
          </div>
          <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200"></div>
        </div>

        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-main-color text-white ring-4 ring-[#DCFCE7]">
            <svg data-prefix="fas" data-icon="lock" className="w-4 h-4 text-xs" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"></path></svg>
          </div>
          <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200"></div>
        </div>

      </div>
      <form className="space-y-6" onSubmit={handleSubmit(handelNewPassord)}>

        <Controller
          name="newPassword"
          control={control}
          render={({ field, fieldState }) => {

            return (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  className="text-[#364153] font-medium text-[16px]"
                  htmlFor={field.name}
                >
                  New Password
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

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState }) => {

            return (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  className="text-[#364153] font-medium text-[16px]"
                  htmlFor={field.name}
                >
                  Confirm Password
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

        <button disabled={isLoading} type="submit" className=" bg-main-color text-white hover:bg-main-color-hover disabled:opacity-50 disabled:cursor-not-allowed w-full transition-colors font-semibold flex gap-2 items-center justify-center rounded-[8px] h-13">
          Reset Passowrd
        </button>

      </form>

    </>
  )
}
