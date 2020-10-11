import React from 'react'
import './questions-page.css'
import {useAppContext} from "../../context/app-context";
import QuestionList from "../../components/question-list/question-list";
import {useHistory} from "react-router-dom";

const QuestionsPage = () => {
    const [state] = useAppContext();
    const history = useHistory();
    if (state.user === undefined) {
        history.push('/');
        return null;
    }
    return (
        <div className={'conteiner'}>
            <div className={'content'}>
                <div>
                    <QuestionList member={state.user}/>
                </div>

            </div>


        </div>
    )
}

export default QuestionsPage;
