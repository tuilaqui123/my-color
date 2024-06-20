"use client"

import Link from 'next/link'
import { redirect, useParams, usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import getDataForLocales from './getDataFromLocales';
import languageData from '@/data/language';


function Header() {
    const [theme, setTheme] = useState(true)
    const locale = useParams()
    const localizedData = getDataForLocales(locale.lang);
    const langData = languageData;

    const router = useRouter()
    const pathname = usePathname()

    const changeLanguage = (link) => {
        router.push("/" + link + pathname.substring(("/" + locale.lang).length))

    };

    return (
        <div className="w-full p-7 flex flex-row items-center justify-between bg-black">
            <Link href="/">
                <h1 className='text-3xl font-black text-white'>my-color</h1>
            </Link>
            <div className='flex flex-row items-center gap-20'>
                {localizedData.links.map((value, index) => {
                    return (
                        <Link
                            href={`/${locale.lang}/${value.link}`}
                            key={`${locale.lang}-${index}`}
                            className='flex flex-row items-center gap-3 animate-fading transition-all duration-100'
                        >
                            <p className='text-white font-medium text-lg capitalize'>{value.name}</p>
                        </Link>
                    )
                })}
                <div className='flex flex-row items-center gap-8'>
                    <select
                        className='p-2 px-4 rounded-lg cursor-pointer'
                        onChange={(e) => changeLanguage(e.target.value)} // Use onChange event
                    >
                        {langData.map((value, index) => (
                            <option key={index} value={value.link}>
                                {value.name}
                            </option>
                        ))}
                    </select>
                    <div className='relative flex items-center justify-center'>
                        {theme ? (
                            <MdDarkMode
                                onClick={() => setTheme(!theme)}
                                color='white'
                                size={30}
                                className='absolute cursor-pointer animate-fading transition-all duration-150'
                            />
                        ) : (
                            <MdLightMode
                                onClick={() => setTheme(!theme)}
                                color='white'
                                size={30}
                                className='absolute cursor-pointer animate-fading transition-all duration-150'
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header