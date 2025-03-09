import Button from "./Button/Button.jsx";
import {differences} from "../data.js";
import {useState} from "react";

export default function ButtonSection() {
    const [contentType, setContentType] = useState(null)

    function handleClick(params) {
        setContentType(params)
    }
    return (
        <section>
            <h3>Чем мы отличаемся от других</h3>

            <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Подход</Button>
            <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Доступность</Button>
            <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Концетрация</Button>




            { !contentType && <p>Нажми на кнопку</p>}
            { contentType && <p>{differences[contentType]}</p>}

        </section>
    )
}