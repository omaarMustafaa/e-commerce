"use client"

import { useState } from "react"
import EmailAddress from "./EmailAddress/EmailAddress"
import VerifyCodeStep from './VerifyCodeStep/VerifyCodeStep';
import ResetPasswordStep from "./ResetPasswordStep/ResetPasswordStep";

export default function page() {

  const [step , setStep] = useState<number>(1)

  const [email , setEmail] = useState<string>('')



  return (
    <>
      <div className="container py-16 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

        {/* Left */}
        <div className="hidden lg:block">
          <div className="text-center space-y-6">

            <div className="w-full h-96 bg-linear-to-br from-[#F0FDF4] via-[#F0FDF4] to-[#F3F4F6] rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-[#DCFCE780]/50"></div>
              <div className="absolute bottom-12 right-10 w-32 h-32 rounded-full bg-[#DCFCE780]/50"></div>
              <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-[#D0FAE580]/50"></div>

              <div className="relative flex flex-col items-center gap-6 z-10">

                <div className="w-28 h-28 rounded-3xl bg-white shadow-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-20 h-20 rounded-2xl bg-[#DCFCE7] flex items-center justify-center">
                    <svg data-prefix="fas" data-icon="lock" className="w-6.75 h-9.5 text-main-color text-4xl" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"></path></svg>
                  </div>
                </div>

                <div className="absolute -left-16 top-4 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center -rotate-12">
                  <svg data-prefix="fas" data-icon="envelope" className="w-5 h-3.75 text-main-color text-xl" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"></path></svg>
                </div>

                <div className="absolute -right-16 top-8 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center rotate-12">
                    <svg data-prefix="fas" data-icon="shield-halved" className="w-[18.7550091373525] h-[19.895901192917307] text-main-color text-xl" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"></path></svg>
                </div>

                <div className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#4ADE80] animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-[#22C55E] animate-pulse [animation-delay:150ms]"></div>
                  <div className="w-3 h-3 rounded-full bg-main-color animate-pulse [animation-delay:300ms]"></div>
                </div>

              </div>
              
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Reset Your Password</h2>
              <p className="text-lg text-gray-600 font-medium">Don't worry, it happens to the best of us. We'll help you get back into your account in no time.</p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg data-prefix="fas" data-icon="envelope" className="w-3.5 h-3.5 text-main-color mr-2" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"></path></svg>
                  Email Verification
                </div>
                <div className="flex items-center">
                  <svg data-prefix="fas" data-icon="shield-halved" className="w-3.5 h-3.5 text-main-color mr-2" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"></path></svg>
                  Secure Reset
                </div>
                <div className="flex items-center">
                  <svg data-prefix="fas" data-icon="lock" className="w-3.5 h-3.5 text-main-color mr-2" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"></path></svg>
                  Encrypted
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* Right */}
        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            {/* CPT */}
            {step === 1 && (
            <EmailAddress 
              setEmail={setEmail} 
              onSuccess={() => setStep(2)} 
            />
          )}

          {step === 2 && (
            <VerifyCodeStep 
              email={email} 
              onSuccess={() => setStep(3)} 
              onBackToEmail={() => setStep(1)} 
            />
          )}

          {step === 3 && (
            <ResetPasswordStep 
              email={email} 
            />
          )}
          </div>
        </div>


        </div>
      </div>
    </>
  )
}
