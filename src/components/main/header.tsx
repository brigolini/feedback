import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'divTitle'}><span className={'spanHonesto'}>Honesto</span></div>
            <div className={'divUser'}></div>
        </div>
    )
    /*
            <span style={{
            position: "relative",
                left: '5%',
                top: '15%',
                fontFamily: 'Untitled Sans',
                fontSize: '24px',
                lineHeight: '28px',
                color: '#000000'
        }}>Honesto</span>*/
}

export default Header
