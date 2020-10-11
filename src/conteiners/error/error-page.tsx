import React from "react";
import {useHistory} from "react-router-dom";
import './error-page.css'
import {Button} from "@material-ui/core";

interface ErrorPageProps {
    errorMessage: string
}

const ErrorPage = (props: ErrorPageProps) => {

    const history = useHistory();

    return (
        <div className={'conteiner'}>
            <div className={'box'}>
                <div><span className={"spanMessage"}>{props.errorMessage}😢</span></div>
                <div><Button size={'large'} variant="outlined"
                             style={{backgroundColor: '#AB61E5', color: "white", fontWeight: 'bold', width: '15em'}}
                             onClick={() => history.push('/')}>
                    Back to main Page
                </Button></div>
            </div>
        </div>
    )

}

export default ErrorPage
