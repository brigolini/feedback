import {User} from "../../api/users-api";
import {useQuestionList} from "./use-question-list";
import React from "react";
import QuestionForAnswer from "../question-for-answer/question-for-answer";
import {useHistory} from "react-router-dom";
import {Skeleton} from "@material-ui/lab";

interface QuestionListProps {
    member: User;
}

const ScheletonQuestion = () => {
    return <span><Skeleton style={{width: '260px'}} variant={'text'}/></span>
}
const QuestionList = (props: QuestionListProps) => {
    const {member} = props;
    const {list, status, currentQuestion, setAnswer} = useQuestionList(member);
    const history = useHistory();

    if ((currentQuestion >= list.length) && (status === 'done')) {
        history.push('/')
        return null;
    }
    if (status === 'loading') return <ScheletonQuestion/>
    if (status === 'done') return <QuestionForAnswer onAction={setAnswer} question={list[currentQuestion]}
                                                     member={member}
                                                     total={list.length}
                                                     current={currentQuestion}
    />
    if (status === 'error') {
        history.push('/error/We could not connect to our servers, try again latter')
        return null;
    }


    return null;

}

export default QuestionList
