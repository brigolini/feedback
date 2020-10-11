import {getQuestions, Question} from "../../api/questions-api";
import {User} from "../../api/users-api";
import {useEffect, useState} from "react";
import {AsyncStatus} from "../common/AsyncStatus";
import {OnActionParams, PossibleAnswers} from "../question-for-answer/question-for-answer";
import {postAnswer} from "../../api/answers-api";


interface QuestionListReturn {
    currentQuestion: number;
    list: Question[];
    status: AsyncStatus;
    setAnswer: (action: OnActionParams, answer: PossibleAnswers) => void
}

export const useQuestionList = (member: User): QuestionListReturn => {
    const [list, setList] = useState<Question[]>([]);
    const [status, setStatus] = useState<AsyncStatus>('loading');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    useEffect(() => {
        const fn = async () => {
            try {
                let questions = await getQuestions();
                //questions = questions.filter(question=>question.type==='multipleChoice')
                setList(questions);
                setStatus('done');
                setCurrentQuestion(0);
            } catch (error) {
                setStatus('error');
            }
        }
        fn();

    }, [member])

    const setAnswer = (action: OnActionParams, answer: PossibleAnswers) => {
        if (action === 'previous') {
            setCurrentQuestion(currentQuestion - 1);
        } else {
            postAnswer(member, answer, currentQuestion);
            setCurrentQuestion(currentQuestion + 1);
        }
    }
    return {list, status, currentQuestion, setAnswer}

}
