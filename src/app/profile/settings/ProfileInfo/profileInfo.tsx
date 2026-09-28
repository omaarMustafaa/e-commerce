"use client"
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { getUserToken } from '@/lib/auth'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { ProfileDataSchema } from './ProfileInfo.zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProfileDataType } from './ProfileInfo.interface'
import { updateUserProfileData } from './ProfileInfo.action'

export default function ProfileInfo() {
    const { data } = useSession()

    const router = useRouter();

    const { handleSubmit, control, reset } = useForm<ProfileDataType>({
        defaultValues: {
            name: "Omar Mostafa",
            email: "",
            phone: "",
        },
        mode: 'all',
        resolver: zodResolver(ProfileDataSchema)
    })

    async function handelProfileData(data :ProfileDataType) {
        
        toast.promise(updateUserProfileData(data) , {
          loading : "Please Wait...." ,
          success : () => {
            return <h1 className="text-main-color capitalize">Reset code sent to your email</h1>;
          },
          error: () => {
        return <h1 className="text-red-500 capitalize">There is no user registered with this email address  om246820035@gmail.com</h1>;
      },
        })
    }

  return (
    <>
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className='p-6 sm:p-8 border-b border-gray-100'>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-main-color/20 flex items-center justify-center">
                        <svg data-prefix="fas" data-icon="user" className="w-8 h-8 text-2xl text-main-color" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"></path></svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">Profile Information</h3>
                        <p className="text-sm text-gray-500">Update your personal details</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(handelProfileData)} className="flex flex-col gap-7 py-2">

                <Controller
                    name="name"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className="block text-sm font-medium text-gray-700 mb-2" htmlFor={field.name}>Full Name</FieldLabel>

                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="Emter Your Name"
                                autoComplete="off"
                                className="focus:border-main-color! focus:ring-0! py-2.5! h-auto! placeholder:font-medium! placeholder:text-[16px]! placeholder:text-[#36415380]!"
                                type="text"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className="block text-sm font-medium text-gray-700 mb-2" htmlFor={field.name}>Email Address</FieldLabel>
                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter Your Email"
                                autoComplete="off"
                                className='focus:border-main-color! focus:ring-0! py-2.5! h-auto! placeholder:font-medium! placeholder:text-[16px]! placeholder:text-[#36415380]!'
                                type="email"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />


                <Controller
                    name="phone"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className="block text-sm font-medium text-gray-700 mb-2" htmlFor={field.name}>Phone Number</FieldLabel>
                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="01xxxxxxxx"
                                autoComplete="off"
                                className='focus:border-main-color! focus:ring-0! py-2.5! h-auto! placeholder:font-medium! placeholder:text-[16px]! placeholder:text-[#36415380]!'
                                type="tel"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <button type="submit" className=" inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-main-color text-white font-semibold hover:bg-main-color-hover transition-colors disabled:opacity-50 shadow-lg shadow-main-color/25 w-fit">
                    <svg data-prefix="fas" data-icon="floppy-disk" className="w-4 h-4" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>
                    Save Changes
                </button>

            </form>
            </div>

            <div className="p-6 sm:p-8 bg-gray-50">
                <h3 className='font-bold text-gray-900 mb-4'>Account Information</h3>
                <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">User ID</span>
                        <span className="font-mono text-gray-700">6a25a39cfc33d8001218ef09</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">Role</span>
                        <span className="px-3 py-1 rounded-lg bg-main-color/30 text-main-color font-medium capitalize">User</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
