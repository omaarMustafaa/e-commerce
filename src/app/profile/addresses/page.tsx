"use client"

import AddAddress from "./AddAddress/AddAddress"
import NoAddress from "./NoAddress/NoAddress"
import { useEffect, useState } from "react";
import AddressCard from "./addressCard/addressCard";
import { getAllAddresses } from "./address.action";
import { AddressResponse } from "./address.interface";

export default function addresses() {
  const [modalDisplay, setModalDisplay] = useState(false)
  const [addresses, setAddresses] = useState<AddressResponse[]>([]);

  const getAddresses = async () => {
    const dataAddress: AddressResponse[] = await getAllAddresses();
    setAddresses(dataAddress);
  };

  useEffect(() => {
    getAddresses();
  }, []);

  return (
    <>
      <div className="">

        <div className="flex items-center justify-between mb-6">
          <div className="">
            <h2 className="text-xl font-bold text-gray-900">My Addresses</h2>
            <p className="text-gray-500 text-sm mt-1">Manage your saved delivery addresses</p>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-main-color text-white font-semibold hover:bg-main-color-hover transition-colors shadow-lg shadow-main-color/25" onClick={_ => setModalDisplay(true)}>
            <svg data-prefix="fas" data-icon="plus" className="w-4 h-4 text-sm" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"></path></svg>
            Add Address
          </button>
        </div>

        {addresses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addresses.map((address) => (
              <AddressCard
                key={address._id}
                props={address}
                refreshAddresses={getAddresses}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center">
            <NoAddress display={setModalDisplay} />
          </div>
        )}


        {modalDisplay && <AddAddress refreshAddresses={getAddresses} display={setModalDisplay} />}
      </div>
    </>
  )
}
