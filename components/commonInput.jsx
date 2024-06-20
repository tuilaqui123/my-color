import React from 'react'

const CommonInput = ({ tilte, placeholder, text, setText, type }) => {
    function handleText(event) {
        setText(event.target.value);
    }
    return (
        <div className="w-full flex flex-col gap-1">
            <p className="text-lg dark:text-white text-black font-bold capitalize animate-fading transition-all duration-150">{tilte}</p>
            <input
                type={type}
                value={text}
                onChange={handleText}
                placeholder={placeholder}
                className="w-full pl-3 h-[45px] shadow-md text-[#3e3e3e] border border-[#3e3e3e] rounded-lg focus:outline-none"
            />
        </div>
    )
}

export default CommonInput