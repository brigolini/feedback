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
                    <Route path={'/error'} component={ErrorPage}/>
                    {/*<Route path={'*'} exact
                           render={(props) => <ErrorPage
                               errorMessage={'Sorry! The page you are looking for cannot be found.'}/>}/>*/}
                </Switch>
            </BrowserRouter>
        </main>
    )
}
export default Main
