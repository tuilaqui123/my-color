"use client"

import Link from 'next/link'
import { redirect, useParams, usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import getDataForLocales from './getDataFromLocales';
import languageData from '@/data/language';


function Header() {
    const [theme, setTheme] = useState(true)
    const [language, setLanguage] = useState()
    const locale = useParams()
    const localizedData = getDataForLocales(locale.lang);

    const langData = languageData;

    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setTheme(true);
        } else {
            document.documentElement.classList.remove('dark');
            setTheme(false);
        }

    }, []);

    const changeLanguage = (link) => {
        localStorage.setItem("language", link)
        console.log(localStorage.getItem("language"))
        router.push("/" + link + pathname.substring(("/" + locale.lang).length))
    };


    function toggleTheme() {
        if (theme) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
        setTheme(!theme)
    }


    return (
        <div className="w-full p-7 mb-5 flex flex-row items-center justify-between dark:bg-black bg-white shadow-md dark:shadow-white">
            <Link href="/">
                <h1 className='text-3xl font-black dark:text-white text-black'>my-color</h1>
            </Link>
            <div className='flex flex-row items-center gap-20'>
                {localizedData.links.map((value, index) => {
                    return (
                        <Link
                            href={`/${locale.lang}/${value.link}`}
                            key={`${locale.lang}-${index}`}
                            className='flex flex-row items-center gap-3 animate-fading transition-all duration-100'
                        >
                            <p className='dark:text-white text-black font-medium text-lg capitalize'>{value.name}</p>
                        </Link>
                    )
                })}
                <div className='flex flex-row items-center gap-8'>
                    <select
                        value={localStorage.getItem("language") || 'vi'}
                        className='p-2 px-4 rounded-lg cursor-pointer border border-black dark:border-0'
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
                                onClick={toggleTheme}
                                color='white'
                                size={30}
                                className='absolute cursor-pointer animate-fading transition-all duration-150'
                            />
                        ) : (
                            <MdLightMode
                                onClick={toggleTheme}
                                color='black'
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