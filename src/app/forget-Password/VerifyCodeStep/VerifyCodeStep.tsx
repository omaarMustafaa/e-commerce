"use client"
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import  { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { CodeSchema } from './VerifyCode.zod';
import { VerifyCodeType } from './VerifyCode.interface';
import { sendCode } from './VerifyCode.action';
import { sendEmail } from '../EmailAddress/EmailAddress.action';

export default function VerifyCodeStep({ 
  email, 
  onSuccess, 
  onBackToEmail 
}: { 
  email: string; 
  onSuccess: () => void; 
  onBackToEmail: () => void; 
}) {

    const [isLoading, setIsLoading] = useState(false);

    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
          resetCode: "",
        },
        mode: 'all',
        resolver: zodResolver(CodeSchema)
      })

      async function handelVerifyCode(resetCode:VerifyCodeType){

        setIsLoading(true);

        toast.promise(sendCode(resetCode) , {
          loading : "Please Wait...." ,
          success : () => {
            onSuccess()
            setIsLoading(false);
            return <h1 className="text-main-color capitalize">Success Code</h1>;
          },
          error: () => {
            setIsLoading(false);
        return <h1 className="text-red-500 capitalize">Reset code is invalid or has expired</h1>;
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
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Check Your Email</h1>
            <p className="text-gray-600 font-medium">Enter the 6-digit code sent to {email}</p>

        </div>
        <div className="flex items-center justify-center mb-8">

            
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-main-color text-white">
                    <svg data-prefix="fas" data-icon="check" className="w-4 h-4" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"></path></svg>
                </div>
                <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200"></div>
            </div>

            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-main-color text-white ring-4 ring-[#DCFCE7]">
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
        <form className="space-y-6" onSubmit={handleSubmit(handelVerifyCode)}>

      <Controller
        name="resetCode"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>

              <FieldLabel className="text-[#364153] font-medium text-[16px]" htmlFor={field.name}>Verification Code</FieldLabel>
              
            <div className="relative">
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="••••••"
                autoComplete="off"
                className="focus:border-main-color! focus:ring-2! focus:ring-main-color/30! text-2xl! tracking-[0.5em] py-3.5! h-auto! pl-11! placeholder:font-bold! placeholder:text-2xl! placeholder:text-[#36415380]! text-center"
                type="text"
              />
              <svg data-prefix="fas" data-icon="shield-halved" className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"></path></svg>
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <div className="text-center">
        <div className="text-sm text-gray-500">
          Didn't receive the code?
          <button onClick={async ()=> await sendEmail({email})} type='button' className='text-main-color hover:text-main-color-hover font-semibold transition-colors cursor-pointer'>Resend Code</button>
        </div>
      </div>
      <button disabled={isLoading} type="submit" className=" bg-main-color text-white hover:bg-main-color-hover disabled:opacity-50 disabled:cursor-not-allowed w-full transition-colors font-semibold flex gap-2 items-center justify-center rounded-[8px] h-13">
        Send Reset Code
      </button>



    </form>

    <div className="text-center mt-4">
          <button onClick={onBackToEmail} type='button' className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-main-color font-medium transition-colors'>
            <svg data-prefix="fas" data-icon="arrow-left" className="w-4 h-4 text-xs" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg>
            Change email address
          </button>
      </div>
    </>
  )
}
