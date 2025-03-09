import './Button.css'
import {useState} from "react";
export default function Button({children, onClick, isActive}) {

    const [contentType, setContentType] = useState(null)

    function handleClick(params) {
        setContentType(params)
    }

    return <button className={isActive ? 'button active' : 'button'} onClick={onClick}>
        {children}</button>
}