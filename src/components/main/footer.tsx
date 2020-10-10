import React from "react";
import './footer.css';


const Footer = () => {
    return (
        <>

            <div className={'footer'}>

                <div className={'divTextBox'}>
                    <div className={'divTheorem'}>Theorem</div>
                    <div className={'divHalmos'}/>

                </div>
                <div className={'divTextBox'}>
                    <div className={'divCopyright'}>Copyright &#169; 2018 Theorem, LLC. All Rights Reserved.</div>
                </div>


                {/*
                <div style={{

                    position: 'relative',
                    left: '10.3%',
                    top: '13px',
                    width: '5px',
                    height: '5px',
                    border: 'solid',
                    borderColor: 'white',
                    backgroundColor: '#031323'
                }}/>
*/}


                {/*
                    <div style={{
                        position: 'relative',
                        left: '670px',
                        top: '8px',
                        width: '400px',
                        height: '5px',
                        color: 'white',
                        fontSize:'60%',
                        textAlign:'right',
                        backgroundColor: '#031323'
                    }}>Copyright &#169; 2018 Theorem, LLC. All Rights Reserved.
                    </div>
*/}

            </div>
        </>
    )
}

export default Footer;
