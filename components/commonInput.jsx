import React from 'react'

const CommonInput = ({ tilte, placeholder, text, setText, type }) => {
    function handleText(event) {
        setText(event.target.value);
    }
    return (
        <div className="w-full flex flex-col gap-1">
            <p className="text-lg text-white font-bold">{tilte}</p>
            <input
                type={type}
                value={text}
                onChange={handleText}
                placeholder={placeholder}
                className="w-full pl-3 h-[45px] text-[#3e3e3e] border border-[#3e3e3e] rounded-lg focus:outline-none"
            />
        </div>
    )
}

export default CommonInput