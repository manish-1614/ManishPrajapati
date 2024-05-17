import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import GraphemeSplitter from 'grapheme-splitter';

const Navbar = () => {
    const splitter = new GraphemeSplitter();
  return (
    <div className='w-full h-[2rem] bg-richblack-800 text-center'>
        <TypeAnimation
            splitter={(str) => splitter.splitGraphemes(str)}
            sequence={[
                'Hello 🇬🇧',
                2000,
                'नमस्ते 🇮🇳',
                2000,
                'こんにちは 🇯🇵',
                2000,
                'Ciao 🇮🇹',
                2000,
                '你好 🇨🇳',
                2000,
                'Здравейте 🇧🇬 ',  
                2000,
                'Hola 🇪🇸',
                2000,
                'Bonjour 🇫🇷',
                2000,
            ]}
            style={{ fontSize: '1rem', color: "white"}}
            repeat={Infinity}
        />
    </div>
  )
}

export default Navbar