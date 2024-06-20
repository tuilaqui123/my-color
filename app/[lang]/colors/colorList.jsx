import React, { useEffect, useState } from 'react';
import ColorBox from '@/components/colorBox';
import axios from 'axios';

function ColorList({ hex, mode, count }) {
    const [colors, setColors] = useState([]);
    const [baseColor, setBaseColor] = useState()

    useEffect(() => {
        if (hex.length == 6) {
            const fetchColors = async () => {
                try {
                    const response = await axios.get(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=${count}`);
                    setColors(response.data.colors);
                } catch (error) {
                    console.error('Error fetching colors:', error);
                }
            };
            const fetchBaseColor = async () => {
                try {
                    const response = await axios.get(`https://www.thecolorapi.com/id?hex=${hex}`);
                    setBaseColor(response.data);
                } catch (error) {
                    console.error('Error fetching colors:', error);
                }
            };
            fetchBaseColor();
            fetchColors();
        }
    }, [hex, mode, count]);


    return (
        <div className="w-full h-full flex flex-row">
            <ColorBox
                value={baseColor}
                delay={1 * 50}
            />
            {colors.map((color, index) => {
                if (color.hex.clean != hex) {
                    return (
                        <ColorBox
                            key={`${color.hex.value}-${index + 1}`}
                            value={color}
                            delay={(index + 1) * 50}
                        />
                    )
                }
            })}
        </div>
    );
}

export default ColorList;
