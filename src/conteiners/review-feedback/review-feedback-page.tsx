import React from "react";
import PageTitle from "../../components/page-title/page-title";
import {Avatar} from "@material-ui/core";
import {useAppContext} from "../../context/app-context";
import {useHistory} from "react-router-dom";
import FeedBackReviewList from "../../components/feedback-review-list/feedback-review-list";
import './review-feedback-page.css'


const ReviewFeedBackPage = () => {
    const [state, dispatch] = useAppContext();
    const {user} = state;
    const history = useHistory();
    if (!user) {
        history.push('/');
        return null;
    }
    return (
        <div className={'conteiner'}>
            <div className={'shareFeedbackConteiner'}>
                <div>
                    <div className={'divFeedBackTitle'}>
                        <PageTitle title={`YOUR FEEDBACK FOR  ${user?.firstName} ${user?.lastName}`}
                                   rightElement={<div style={{paddingLeft: '1em'}}><Avatar sizes={'large'}
                                                                                           src={user?.avatar}/></div>}/>
                    </div>
                    <div>
                        <FeedBackReviewList member={user}/>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default ReviewFeedBackPage
