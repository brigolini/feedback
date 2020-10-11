import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import ShareFeedBackPage from "../../conteiners/share-feedback/share-feedback-page";
import QuestionsPage from "../../conteiners/questions/questions-page";
import ReviewFeedBackPage from "../../conteiners/review-feedback/review-feedback-page";

const Main = () => {
    return (
        <main className={'main'}>
            <BrowserRouter>
                <Route path={'/'} exact component={ShareFeedBackPage}/>
                <Route path={'/questions'} component={QuestionsPage}/>
                <Route path={'/review'} component={ReviewFeedBackPage}/>
            </BrowserRouter>
        </main>
    )
}
export default Main
