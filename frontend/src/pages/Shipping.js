import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const Shipping = () => {
    const [data, setData] = useState({
        fullName: "",
        StreetAddress: "",
        City: "",
        State: "",
        PostalCode: 0,
        Country: "",
        PhoneNumber: 0
    })

   
    const navigate = useNavigate()
    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }



    const handleSubmit = async (e) => {
        e.preventDefault()

        if (data) {

            const dataResponse = await fetch(SummaryApi.Shipping.url, {
                method: SummaryApi.Shipping.method,
                credentials: 'include',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const dataApi = await dataResponse.json()

            if (dataApi.success) {
                toast.success(dataApi.message)
                navigate("/paymentSection")
            }

            if (dataApi.error) {
                toast.error(dataApi.message)
            }

        } else {
            toast.error("Please check your details again!")
        }

    }

    

    return (
        <section id='shipping'>
            <div className='mx-auto grid pt-8 container w-full justify-items-center font-bold font-strength-45'>
                Input Shipping Details
            </div>
            <div className='mx-auto container p-4'>

                <div className='bg-white p-5 w-full max-w-sm mx-auto'>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Full Name : </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='text'
                                    placeholder='enter your full name'
                                    name='fullName'
                                    value={data.name}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>
                        <div className='grid'>
                            <label>Street & House No: </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='text'
                                    placeholder='enter your Street & House Number'
                                    name='StreetAddress'
                                    value={data.name}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>
                        <div className='grid'>
                            <label>City : </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='text'
                                    placeholder='enter your city'
                                    name='City'
                                    value={data.name}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>
                        <div className='grid'>
                            <label>State: </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='text'
                                    placeholder='enter your state'
                                    name='State'
                                    value={data.name}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>
                        <div className='grid'>
                            <label>Postal Code: </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='Number'
                                    placeholder='enter your postal code'
                                    name='PostalCode'
                                    value={data.name}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>
                        <div className='grid'>
                            <label>Country: </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='text'
                                    placeholder='enter your country'
                                    name='Country'
                                    value={data.name}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <div className='grid'>
                            <label>Phone Number : </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='Number'
                                    placeholder='enter PhoneNumber'
                                    name='PhoneNumber'
                                    value={data.name}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Submit</button>

                    </form>
            </div>
            </div>
        </section>
    )
}

export default Shipping