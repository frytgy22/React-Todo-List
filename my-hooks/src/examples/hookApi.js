import React from "react";
import {useAlert} from "./AlertContext";


export default function Main() {
    const {show} = useAlert()
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={() => show("new text")}>Alert</button>
        </div>
    )
}