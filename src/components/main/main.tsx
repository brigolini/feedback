import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ShareFeedBackPage from "../../conteiners/share-feedback/share-feedback-page";
import QuestionsPage from "../../conteiners/questions/questions-page";
import ReviewFeedBackPage from "../../conteiners/review-feedback/review-feedback-page";
import ErrorPage from "../../conteiners/error/error-page";

const Main = () => {
    return (
        <main className={'main'}>
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} exact component={ShareFeedBackPage}/>
                    <Route path={'/questions'} component={QuestionsPage}/>
                    <Route path={'/review'} component={ReviewFeedBackPage}/>
                    <Route path={'*'} exact component={ErrorPage}/>
                </Switch>
            </BrowserRouter>
        </main>
    )
}
export default Main
