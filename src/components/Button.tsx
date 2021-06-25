<<<<<<< HEAD
import { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {

    return (
        <button className="button" {...props} />
=======
import { useState } from "react";

export function Button() {
    //let counter = 0;
    const [counter, setCounter] = useState(0);

    function increment() {
        //counter += 1;
        setCounter(counter + 1);
        console.log(counter);
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
>>>>>>> d6c68b0ed5498c23a2420c1ec6c31a855201f8e9
    )
}