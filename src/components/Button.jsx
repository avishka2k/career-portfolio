import React from "react"

function Button(props) {
  return (
    <div className={`${props.btnstyle} rounded-primary py-3 px-10 place-content-start text-primary-white`}>
        <a href="#s" className="text-[14px] uppercase font-bold">{props.text}</a>
    </div>
  )
}

export default Button