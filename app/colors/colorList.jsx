import React, { useEffect, useState } from 'react';
import ColorBox from '@/components/colorBox';
import axios from 'axios';

function ColorList({ hex, mode, count }) {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        const fetchColor = async () => {
            try {
                const response = await axios.get(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=${count}`);
                setColors(response.data.colors);
            } catch (error) {
                console.error('Error fetching colors:', error);
            }
        };

        fetchColor();
    }, [hex, mode, count]);


    return (
        <div className={`w-full h-full flex flex-row`}>
            {colors.map((color, index) => (
                <ColorBox
                    key={`${color.hex.value}-${index}`}
                    value={color}
                    delay={index * 50}
                />
            ))}
        </div>
    );
}

export default ColorList;
