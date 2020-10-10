import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import ShareFeedBackPage from "../../conteiners/share-feedback/share-feedback-page";
import QuestionsPage from "../../conteiners/questions/questions-page";

const Main = () => {
    return (
        <main className={'main'}>
            <BrowserRouter>
                <Route path={'/'} exact component={ShareFeedBackPage}/>
                <Route path={'/questions'} component={QuestionsPage}/>
                <Route path={'/answers'} component={ShareFeedBackPage}/>
            </BrowserRouter>
        </main>
    )
}
export default Main
