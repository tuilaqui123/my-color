import Link from 'next/link'
import React from 'react'

function Header() {
    const links = [
        {
            name: "home",
            link: "/",
            icon: "fa-solid fa-home"
        },
        {
            name: "colors",
            link: "/colors",
            icon: "fa-solid fa-list"
        },
        {
            name: "template",
            link: "/template",
            icon: "fa-solid fa-border-all"
        },
    ]
    return (
        <div className="w-full p-7 flex flex-row items-center justify-between bg-black">
            <Link href="/">
                <h1 className='text-3xl font-black text-white'>my-color</h1>
            </Link>
            <div className='flex flex-row items-center gap-20'>
                {links.map((value, index) => {
                    return (
                        <Link
                            href={value.link}
                            key={index}
                            className='flex flex-row items-center gap-3'
                        >
                            <i className={`${value.icon} text-white text-xl`}></i>
                            <p className='text-white font-medium text-lg capitalize'>{value.name}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Header