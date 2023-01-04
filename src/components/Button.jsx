import React from "react"

function Button(props) {
  return (
    <div className=' bg-light-primary rounded-primary py-2 px-4 place-content-start text-primary-white'>
        <a href="#s" className="text-[14px] uppercase font-bold">{props.text}</a>
    </div>
  )
}

export default Button