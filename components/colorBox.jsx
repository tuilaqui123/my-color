import React from 'react';

function ColorBox({ value, delay }) {
    const handleCopyClick = () => {

        const textarea = document.createElement('textarea');

        textarea.value = value.hex.value;
        document.body.appendChild(textarea);

        textarea.select();

        document.body.removeChild(textarea);

    };

    return (
        <div
            onClick={handleCopyClick}
            className='flex-1 flex-col gap-5 group transition-all duration-150 hover:flex-[2] animate-slideIn'
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className='relative flex items-center justify-center group cursor-pointer'>
                <div
                    style={{ backgroundColor: value?.hex?.value }}
                    className="w-full h-[350px] shadow-lg shawdow-white group-hover:brightness-[105%] duration-150">
                </div>
                <p
                    style={{ color: value?.contrast?.value }}
                    className='absolute opacity-0 group-hover:opacity-100 group-hover:text-xl duration-150'
                >
                    {value?.hex?.value}
                </p>
            </div>
        </div>
    );
}

export default ColorBox;
