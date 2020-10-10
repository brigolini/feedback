import React from 'react';
import Header from "../main/header";
import './App.css';
import Footer from "../main/footer";
import Main from "../main/main";
import {AppProvider} from "../../context/app-context";


const App = () => {
    return (
        <div className={'appLayout'}>
            <>
                <AppProvider>
                    <Header/>
                    <Main/>
                    <Footer/>
                </AppProvider>
            </>

        </div>

    )
}
export default App
