import {User} from "../../api/users-api";
import {useQuestionList} from "./use-question-list";
import React from "react";
import QuestionForAnswer from "../question-for-answer/question-for-answer";
import {useHistory} from "react-router-dom";

interface QuestionListProps {
    member: User;
}

const ScheletonQuestion = () => {
    return <span>loading</span>
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
    if (status === 'error') return <span>error</span>
    return null;

}

export default QuestionList
