"use client"

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { addAddressSchema } from "./addAddress.zod";
import { AddAddressDataType } from "./addAddress.interface";
import { addAddress } from "./addAddress.action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type AddAddressProps = {
    display: React.Dispatch<React.SetStateAction<boolean>>;
    refreshAddresses: () => Promise<void>;
};
export default function AddAddress({ display, refreshAddresses }: AddAddressProps) {
    const router = useRouter()
    const { handleSubmit, control, reset } = useForm<AddAddressDataType>({
        defaultValues: {
            name: "",
            details: "",
            phone: "",
            city: "",
        },
        mode: 'all',
        resolver: zodResolver(addAddressSchema)
    })
    async function handelUserAddress(data: AddAddressDataType) {
        toast.promise(
            addAddress(data).then(async () => {
                await refreshAddresses();
                display(false);
                reset();
            }),
            {
                loading: "Please Wait....",
                success: () => {
                    return (
                        <h1 className="text-main-color capitalize">
                            Address added successfully
                        </h1>
                    );
                },
                error: () => {
                    return (
                        <h1 className="text-red-500 capitalize">
                            Failed to add address
                        </h1>
                    );
                },
            }
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg p-6 sm:p-8 animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Add New Address</h2>
                    <button className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer" onClick={_ => display(false)}>
                        <svg data-prefix="fas" data-icon="xmark" className="w-4 h-4" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"></path></svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit(handelUserAddress)} className="space-y-5">

                    <Controller
                        name="name"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel className="block text-sm font-medium text-gray-700 mb-2" htmlFor={field.name}>Address Name</FieldLabel>

                                <Input
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="e.g.Home, Office"
                                    autoComplete="off"
                                    className="focus:border-main-color! focus:ring-0! py-2.5! h-auto! placeholder:font-medium! placeholder:text-[16px]! placeholder:text-[#36415380]!"
                                    type="text"
                                />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />



                    <Controller
                        name="details"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    htmlFor={field.name}
                                >
                                    Full Address
                                </FieldLabel>

                                <Textarea
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Street, building, apartment..."
                                    autoComplete="off"
                                    rows={3}
                                    className="focus:border-main-color! focus:ring-0! py-2.5! min-h-20! placeholder:font-medium! placeholder:text-[16px]! placeholder:text-[#36415380]! h-25! resize-none!"
                                />

                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />


                    <div className='grid grid-cols-2 gap-4'>

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
                        <Controller
                            name="city"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel className="block text-sm font-medium text-gray-700 mb-2" htmlFor={field.name}>City</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Cairo"
                                        autoComplete="off"
                                        className='focus:border-main-color! focus:ring-0! py-2.5! h-auto! placeholder:font-medium! placeholder:text-[16px]! placeholder:text-[#36415380]!'
                                        type="tel"
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />
                    </div>



                    <div className="flex items-center gap-3 pt-4">
                        <button type="button" className="flex-1 py-3 px-6 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors" onClick={_ => display(false)}>
                            Cancel
                        </button>
                        <button type="submit" className="flex-1 py-3 px-6 rounded-xl bg-main-color text-white font-semibold hover:bg-main-color-hover transition-colors disabled:opacity-50 shadow-lg shadow-main-color/25">Add Address</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
