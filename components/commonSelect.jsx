import React from "react";

const CommonSelect = ({ title, setText, value }) => {
    function handleSelect(event) {
        setText(event.target.value)
        console.log(event.target.value)
    }
    return (
        <div className="w-full flex flex-col gap-1">
            <p className="text-lg text-white font-bold capitalize animate-fading transition-all duration-150">{title}</p>
            <select
                defaultValue={""}
                onChange={handleSelect}
                className="w-full pl-3 h-[45px] text-[#3e3e3e] border border-[#3e3e3e] rounded-lg focus:outline-none capitalize"
            >
                {value.map((ele, index) => {
                    return (
                        <option key={index} value={ele.type} >{ele.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default CommonSelect