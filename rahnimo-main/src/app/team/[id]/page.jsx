"use client"
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';
import Spinner from '../../../components/ui/Spinner';
import useAxios from '../../../hooks/useAxios';
import Image from 'next/image';

const TeamDeatils = () => {
    const { id } = useParams();
    const axiosInstance = useAxios()

    const { data: member = {}, isLoading } = useQuery({
        queryKey: ["team", id],
        queryFn: async () => {
            const res = await axiosInstance.get(`/admin/team/${id}`)
            return res.data?.member || {}
        }
    })

    console.log(member)
    if (isLoading) return <Spinner />
    return (
        <div className='mx-2 ml-6  md:mx-20 my-10 md:my-28'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 '>
                <div className='order-1 md:order-2 flex flex-col gap-5'>
                    <Image
                        src={member?.image}
                        width={200}
                        height={200}
                        alt="image"
                        className="w-full h-full object-contain"
                        loading='lazy'
                    />
                    <h1 className='font-bold text-xl tracking-widest font-montserrat '>
                        {
                            member?.designation && (
                                member.designation
                                    .trim()
                                    .split(" ")
                                    .map((word, index, arr) =>
                                        index === arr.length - 1
                                            ? word.toUpperCase()
                                            : `${word.toUpperCase()}.`
                                    )
                                    .join(" ")
                            )
                        }


                    </h1>
                    <h1 className='font-bold text-blue-400 text-xl tracking-widest font-montserrat mb-5'>
                        {
                            member?.name && member.name.split(" ").join(" ")
                        }

                    </h1>
                </div>
                <div className='order-2 md:order-1'>
                    <p className='text-gray-500 text-xl uppercase'>{member?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamDeatils;