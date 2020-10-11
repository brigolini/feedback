import {CompleteAnswer, getAnswers} from "../../api/answers-api";
import React from "react";
import {useQuestionList} from "../question-list/use-question-list";
import {User} from "../../api/users-api";
import {Question} from "../../api/questions-api";
import './feedback-review-list.css'
import ReviewScale from "../review-scale/review-scale";
import ErrorPage from "../../conteiners/error/error-page";


const FeedBackReview = (props: { question: Question, answer: CompleteAnswer }) => {
    const {question, answer} = props;
    if (question.type === 'text') {
        return (<div className={'feedbackItem'}>
            <div className={'divFeedBackReviewQuestion'}>{question.label}</div>
            <div>{answer.answer}</div>
        </div>);
    }
    if (question.type === 'multipleChoice') {
        if ((!question.options) || (!answer.answer)) return null;
        const answerOption = question.options.find(item => item.value == answer.answer);
        return (<div className={'feedbackItem'}>
            <div className={'divFeedBackReviewQuestion'}>{question.label}</div>
            <div>{answerOption ? answerOption.label : null}</div>
        </div>);
    }
    if (question.type === 'scale') {
        if (!answer.answer) return null;
        return (<div className={'feedbackItem'}>
            <div className={'divFeedBackReviewQuestion'}>{question.label}</div>
            <div><ReviewScale value={answer.answer}/></div>
        </div>);
    }
    return null;
}


interface FeedbackReviewListProps {
    member: User;
}

const FeedBackReviewList = (props: FeedbackReviewListProps) => {
    const {member} = props;
    const {list, status} = useQuestionList(member);
    const feedbacks = getAnswers(member);

    if (status === 'loading') return <span>Loading</span>
    if (status === 'error') {
        return <ErrorPage errorMessage={'We could not connect to our servers, try again latter'}/>;
    }
    return (
        <>
            <div className={'feedbackItem'}>
                <span>Question</span>
                <span>Answer</span>
            </div>
            <div>{feedbacks.map((answer, index) => <div>
                <FeedBackReview question={list[index]} answer={answer}/></div>)}
            </div>
        </>
    )
}

export default FeedBackReviewList
