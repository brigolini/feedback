import {useAppContext} from "../../context/app-context";
import {getAnswers} from "../../api/answers-api";
import {useHistory} from "react-router-dom";
import React from "react";


const FeedBackReviewList = () => {
    const [state, dispatch] = useAppContext();
    const history = useHistory();
    if (!state.user) {
        history.push('/');
        return null;
    }
    const feedbacks = getAnswers(state.user);
    return (
        <div>{feedbacks.map(item => <div>{item.answer}</div>)}</div>
    )
}

export default FeedBackReviewList
