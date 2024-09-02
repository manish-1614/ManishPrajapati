import React from 'react'
import * as Icons from 'react-icons/fa'
const FaIcon = ({iconName,url}) => {

    const Icon = Icons[iconName];
    console.log("Icon: ",Icon)

  return (
    <div>
        Icon {iconName}
    </div>
  )
}

export default FaIcon