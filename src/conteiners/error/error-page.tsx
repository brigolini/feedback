import React from "react";
import {useHistory, useLocation} from "react-router-dom";
import './error-page.css'
import {Button} from "@material-ui/core";

const ErrorPage = () => {

    const history = useHistory();
    let location = useLocation();

    return (
        <div className={'conteiner'}>
            <div className={'box'}>
                <div><span className={"spanMessage"}>{location.pathname.replace('/error/', '')}😢</span></div>
                <div><Button size={'large'} variant="outlined"
                             style={{backgroundColor: '#AB61E5', color: "white", fontWeight: 'bold', width: '15em'}}
                             onClick={() => {
                                 history.push('/')
                             }}>
                    Back to main Page
                </Button></div>
            </div>
        </div>
    )

}

export default ErrorPage
