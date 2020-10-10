import {User} from "../../api/users-api";
import {useQuestionList} from "./use-question-list";
import React from "react";

interface QuestionListProps {
    member: User
}

const QuestionList = (props: QuestionListProps) => {
    const {member} = props;
    const {list, status, currentQuestion} = useQuestionList(member);

    if (status === 'loading') return <span>loading</span>
    if (status === 'done') return <span>done</span>
    if (status === 'error') return <span>error</span>

}

export default QuestionList
