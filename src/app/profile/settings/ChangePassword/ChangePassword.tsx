"use client"

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { ChangePasswordSchema } from './changePassword.zod';
import { ChangePasswordType } from "./changePassword.interface";
import { useState } from "react";
import { updatePassword } from "./changePassword.action";

export default function ChangePassword() {

  const { data } = useSession()

    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const { handleSubmit, control, reset } = useForm<ChangePasswordType>({
        defaultValues: {
            currentPassword: "",
            password: "",
            rePassword: "",
        },
        mode: 'all',
        resolver: zodResolver(ChangePasswordSchema)
    })

    async function handelUpdatePassword(data :ChangePasswordType) {
        
        toast.promise(updatePassword(data) , {
          loading : "Please Wait...." ,
          success : () => {
            return <h1 className="text-main-color capitalize">Password Ganged Successful</h1>;
          },
          error: () => {
        return <h1 className="text-red-500 capitalize">Error</h1>;
      },
        })
    }

  return (
    <>
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
              <svg data-prefix="fas" data-icon="lock" className="w-8 h-8 text-2xl text-amber-600" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"></path></svg>
            </div>
            <div className="">
              <h3 className="font-bold text-gray-900">Change Password</h3>
              <p className="text-sm text-gray-500">Update your account password</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(handelUpdatePassword)} className="space-y-5">

                <Controller
                          name="currentPassword"
                          control={control}
                          render={({ field, fieldState }) => {
                
                            return (
                              <Field data-invalid={fieldState.invalid}>
                                <FieldLabel
                                  className="text-[#364153] font-medium text-[16px]"
                                  htmlFor={field.name}
                                >
                                  Current Password
                                </FieldLabel>
                                <div className="relative">
                
                                  <Input
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Enter your Current Password"
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
                          name="password"
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
                                    placeholder="Enter your new password"
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
                          name="rePassword"
                          control={control}
                          render={({ field, fieldState }) => {
                
                            return (
                              <Field data-invalid={fieldState.invalid}>
                                <FieldLabel
                                  className="text-[#364153] font-medium text-[16px]"
                                  htmlFor={field.name}
                                >
                                  Confirm New Password
                                </FieldLabel>
                                <div className="relative">
                
                                  <Input
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Confirm your New Password"
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

                <div className="pt-4">

                <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 shadow-lg shadow-amber-600/25">
                    <svg data-prefix="fas" data-icon="lock" className="w-4 h-4" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"></path></svg>
                    Change Password
                </button>
                </div>

            </form>

        </div>
      </div>
    </>
  )
}
