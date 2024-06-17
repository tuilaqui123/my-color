"use client"

import React, { useEffect, useState } from 'react'
import ColorList from './colorList'
import CommonInput from '@/components/commonInput';
import CommonSelect from '@/components/commonSelect';
import { FaSync } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

function Colors() {

    const [hex, setHex] = useState("3E3E3E")
    const [mode, setMode] = useState("monochrome")
    const [count, setCount] = useState(5)

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

    // useEffect(() => {
    //     var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    //     console.log(randomColor)
    //     setHex(randomColor)
    // }, [])
    function getRandomColor() {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setHex(randomColor.toUpperCase())
    }

    return (
        <div className='p-5'>
            <div className='grid grid-cols-4 gap-10 items-end mb-10'>
                <CommonInput
                    tilte={"Hex code"}
                    placeholder={hex}
                    text={hex}
                    setText={setHex}
                    type={"text"}
                />
                <CommonInput
                    tilte={"Count"}
                    placeholder={count}
                    text={count}
                    setText={setCount}
                    type={"number"}
                />
                <CommonSelect
                    title={"Mode"}
                    text={mode}
                    setText={setMode}
                    value={modeList}
                />
                <button
                    onClick={getRandomColor}
                    className='hover:bg-blue-500 duration-150 flex flex-row items-center justify-center gap-3 bg-white w-2/3 h-[45px] rounded-full'
                >
                    <FaShuffle />
                    <p>Random Color</p>
                </button>
            </div>
            <ColorList
                hex={hex}
                mode={mode}
                count={count}
            />
        </div>
    )
}

export default Colors