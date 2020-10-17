import React from "react";
import Alert from "./examples/alert";
import Main from "./examples/hookApi";
import {AlertProvider} from "./examples/AlertContext";


export default function ContextApi() {

    return (
        <AlertProvider>
            <React.StrictMode>
                <div className={'container pt-3'}>
                    <Alert/>
                    <Main toggle={()=>{}}/>
                </div>
            </React.StrictMode>
        </AlertProvider>
    )
}