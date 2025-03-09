import logo from '/logo-name.svg'
import {useState} from "react"

export default function Header() {
    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date ()), 1000)
    return (
        <header>
            <img src={logo} alt="Result"/>
            {/*<h3>IMETALLS</h3>*/}

            <span>Время: {now.toLocaleTimeString()}</span>
        </header>
    )
}