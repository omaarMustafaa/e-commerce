"use client";
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { registerSchema } from "./register.zod"
import { RegisterDataType } from "./register.interface"
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { sendDateRegister } from "./register.services";


export default function RegisterForm() {


    const router = useRouter();

    const { handleSubmit, control, reset } = useForm<RegisterDataType>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: "",
        },
        mode: 'all',
        resolver: zodResolver(registerSchema)
    })

    async function handelUserSubmit(data: RegisterDataType) {
        const toastId = toast.loading("Please Wait....");

        try {
            const res = await sendDateRegister(data);

            if (res.success) {
                toast.success(res.message || "Account Created Successfully!", { id: toastId });
                reset();
                router.push("/login");
            } else {
                toast.error(res.message || "Registration Failed", { id: toastId });
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.", { id: toastId });
        }
    }

    function getPasswordStrength(password: string) {
        let score = 0;

        if (password.length >= 8) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        if (score === 0) {
            return {
                text: "Weak",
                color: "",
                width: "",
            };
        }

        if (score <= 2) {
            return {
                text: "Weak",
                color: "bg-red-500",
                width: "w-1/4",
            };
        }

        if (score === 3) {
            return {
                text: "Good",
                color: "bg-blue-500",
                width: "w-2/4",
            };
        }

        if (score === 4) {
            return {
                text: "Good",
                color: "bg-yellow-500",
                width: "w-3/4",
            };
        }

        return {
            text: "Strong",
            color: "bg-green-500",
            width: "w-full",
        };
    }

    return (
        <>
            <form onSubmit={handleSubmit(handelUserSubmit)} className="flex flex-col gap-7 py-2">

                <Controller
                    name="name"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className="text-[#364153] font-medium text-[16px]" htmlFor={field.name}>Name</FieldLabel>

                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="Ali"
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
                            <FieldLabel className="text-[#364153] font-medium text-[16px]" htmlFor={field.name}>Email</FieldLabel>
                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="ali@example.com"
                                autoComplete="off"
                                className='focus:border-main-color! focus:ring-0! py-2.5! h-auto! placeholder:font-medium! placeholder:text-[16px]! placeholder:text-[#36415380]!'
                                type="email"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />


                <Controller
                    name="password"
                    control={control}
                    render={({ field, fieldState }) => {
                        const strength = getPasswordStrength(field.value);

                        return (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel
                                    className="text-[#364153] font-medium text-[16px]"
                                    htmlFor={field.name}
                                >
                                    Password
                                </FieldLabel>

                                <Input
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="create a strong password"
                                    autoComplete="off"
                                    className="focus:border-main-color! focus:ring-0! py-2.5! h-auto! placeholder:font-medium! placeholder:text-[16px]! placeholder:text-[#36415380]!"
                                    type="password"
                                />

                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}

                                <div>
                                    <div className="flex items-center gap-2">
                                        <div className="grow h-1 bg-gray-200 rounded-md overflow-hidden">
                                            <div
                                                className={`h-full transition-all duration-300 ease-out ${strength.color} ${strength.width}`}
                                            />
                                        </div>

                                        <span className="text-sm font-medium min-w-12.5">
                                            {strength.text}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-gray-500 -mt-2 text-xs">
                                    Must be at least 8 characters with numbers and symbols
                                </p>
                            </Field>
                        );
                    }}
                />

                <Controller
                    name="rePassword"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className="text-[#364153] font-medium text-[16px]" htmlFor={field.name}>Confirm Password</FieldLabel>
                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="confirm your password"
                                autoComplete="off"
                                className='focus:border-main-color! focus:ring-0! py-2.5! h-auto! placeholder:font-medium! placeholder:text-[16px]! placeholder:text-[#36415380]!'
                                type="password"
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
                            <FieldLabel className="text-[#364153] font-medium text-[16px]" htmlFor={field.name}>Phone Number</FieldLabel>
                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="+1 234 567 8900"
                                autoComplete="off"
                                className='focus:border-main-color! focus:ring-0! py-2.5! h-auto! placeholder:font-medium! placeholder:text-[16px]! placeholder:text-[#36415380]!'
                                type="tel"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                {/* <Controller
                    name="terms"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <div className="flex items-center gap-2">
                                <input
                                    ref={field.ref}
                                    id={field.name}
                                    name={field.name}
                                    type="checkbox"
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                    onBlur={field.onBlur}
                                    aria-invalid={fieldState.invalid}
                                    aria-describedby="terms-error"
                                    className="size-4 accent-main-color"
                                />

                                <FieldLabel
                                    htmlFor={field.name}
                                    className="ms-2 text-[16px] font-medium text-[#364153]"
                                >
                                    I agree to the{" "}
                                    <Link
                                        href="/terms"
                                        className="text-main-color hover:underline"
                                    >
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href="/policy"
                                        className="text-main-color hover:underline"
                                    >
                                        Privacy Policy
                                    </Link>{" "}
                                    *
                                </FieldLabel>
                            </div>

                            {fieldState.invalid && (
                                <FieldError
                                    id="terms-error"
                                    errors={[fieldState.error]}
                                />
                            )}
                        </Field>
                    )}
                /> */}

                <button type="submit" className=" bg-main-color text-white hover:bg-main-color-hover disabled:opacity-50 disabled:cursor-not-allowed w-full transition-colors flex gap-2 items-center justify-center rounded-[8px] h-10">
                    <svg data-prefix="fas" data-icon="user-plus" className="w-4 h-4 me-2" role="img" viewBox="0 0 640 512" aria-hidden="true"><path fill="currentColor" d="M136 128a120 120 0 1 1 240 0 120 120 0 1 1 -240 0zM48 482.3C48 383.8 127.8 304 226.3 304l59.4 0c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7L77.7 512C61.3 512 48 498.7 48 482.3zM544 96c13.3 0 24 10.7 24 24l0 48 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-48c0-13.3 10.7-24 24-24z"></path></svg>
                    <span>Create My Account</span>
                </button>

            </form>
        </>
    )
}
