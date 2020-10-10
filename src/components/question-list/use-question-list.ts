import {getQuestions, Question} from "../../api/questions-api";
import {User} from "../../api/users-api";
import {useEffect, useState} from "react";
import {AsyncStatus} from "../common/AsyncStatus";


interface QuestionListReturn {
    currentQuestion: number;
    list: Question[];
    status: AsyncStatus;
}

export const useQuestionList = (member: User): QuestionListReturn => {
    const [list, setList] = useState<Question[]>([]);
    const [status, setStatus] = useState<AsyncStatus>('loading');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    useEffect(() => {
        const fn = async () => {
            try {
                const questions = await getQuestions();
                setList(questions);
                setStatus('done');
                setCurrentQuestion(0);
            } catch (error) {
                setStatus('error');
            }
        }
        fn();

    }, [member])

    return {list, status, currentQuestion}

}
