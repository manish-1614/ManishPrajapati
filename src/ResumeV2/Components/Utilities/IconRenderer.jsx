import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'
import * as TbIcons from 'react-icons/tb'


const IconRenderer = ({ iconPath }) => {
    const [prefix, iconName] = iconPath.split("/");
    // console.log("Prefix - ", prefix, " Name - ", iconName)

    if (prefix === "fa") {
        const Icon = FaIcons[iconName];
        return <Icon />
    } else if (prefix === "si") {
        const Icon = SiIcons[iconName];
        return <Icon />
    } else if (prefix === "tb") {
        const Icon = TbIcons[iconName];
        return <Icon />
    }
}

export default IconRenderer