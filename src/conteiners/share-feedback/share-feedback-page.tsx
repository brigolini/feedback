import React from 'react'
import './share-feedback-page.css'
import PageTitle from "../../components/page-title/page-title";
import TeamMemberList from "../../components/team-member-list/team-member-list";

const ShareFeedBack = () => {
    return (
        <div className={'conteiner'}>
            <div className={'content'}>
                <div className={'divShareFeedbackTitle'}>
                    <PageTitle title={"Share Feedback"}/>
                </div>
                <TeamMemberList/>
            </div>


        </div>
    )
}

export default ShareFeedBack;
