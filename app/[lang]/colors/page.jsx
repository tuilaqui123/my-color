"use client"

import React, { useEffect, useState } from 'react'
import ColorList from './colorList'
import CommonInput from '@/components/commonInput';
import CommonSelect from '@/components/commonSelect';
import { FaSync } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import getDataForLocales from '@/components/getDataFromLocales';
import { useParams } from 'next/navigation';

function Colors() {


    const locale = useParams()
    const localizedData = getDataForLocales(locale.lang);

    const [hex, setHex] = useState("F3F3F3")
    const [mode, setMode] = useState("monochrome")
    const [count, setCount] = useState(5)
    console.log(localizedData.colors.colorsMode)

    const modeList = [
        "monochrome",
        "monochrome-dark",
        "monochrome-light",
        "analogic",
        "complement",
        "analogic-complement",
        "triad",
        "quad",
    ]

    function getRandomColor() {
        // Generate a random number between 0 and 16777215 (FFFFFF in hexadecimal)
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);

        // Pad the randomColor string with zeros to ensure it's always 6 characters long
        while (randomColor.length < 6) {
            randomColor = '0' + randomColor;
        }

        // Convert to uppercase and set the hex state or do something with it
        setHex(randomColor.toUpperCase());
    }


    return (
        <div className='p-5'>
            <div className='grid grid-cols-4 gap-10 items-end mb-10'>
                <CommonInput
                    tilte={localizedData.colors.hexcode}
                    placeholder={hex}
                    text={hex}
                    setText={setHex}
                    type={"text"}
                />
                <CommonInput
                    tilte={localizedData.colors.count}
                    placeholder={count}
                    text={count}
                    setText={setCount}
                    type={"number"}
                />
                <CommonSelect
                    title={localizedData.colors.mode}
                    text={mode}
                    setText={setMode}
                    value={localizedData.colors.colorsMode}
                />
                <button
                    onClick={getRandomColor}
                    className='hover:bg-blue-500 duration-150 flex flex-row items-center justify-center gap-3 bg-white w-2/3 h-[45px] rounded-full'
                >
                    <FaShuffle />
                    <p className='capitalize animate-fading transition-all duration-150'>{localizedData.colors.btnrandom}</p>
                </button>
            </div>
            <ColorList
                hex={hex}
                mode={mode}
                count={count - 1}
            />
        </div>
    )
}

export default Colors