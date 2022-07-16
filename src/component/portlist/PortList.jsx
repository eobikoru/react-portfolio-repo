import React from 'react'
import './portlist.scss'
function PortList({title , active , setSelected ,id}) {
  return (
    <li className={active ? 'portlist active' : 'portlist'} 
     onClick={()=> setSelected(id)}
    >
        {title}
    </li>
  )
}

export default PortList