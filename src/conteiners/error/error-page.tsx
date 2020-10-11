import React from "react";
import {useHistory, useLocation} from "react-router-dom";
import './error-page.css'
import {Button} from "@material-ui/core";

const ErrorPage = () => {

    const history = useHistory();
    const location = useLocation();
    let errorMessage = location.pathname;
    if (errorMessage.indexOf('/error/') > -1) {
        errorMessage = errorMessage.replace('/error/', '')
    } else {
        errorMessage = 'Sorry! The page you are looking for cannot be found.'
    }

    return (
        <div className={'conteiner'}>
            <div className={'box'}>
                <div><span className={"spanMessage"}>{errorMessage}😢</span></div>
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
