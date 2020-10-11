import {User} from "./users-api";
import {PossibleAnswers} from "../components/question-for-answer/question-for-answer";

export interface CompleteAnswer {
    memberId: string;
    questionNumber: number,
    answer: PossibleAnswers
}

export const postAnswer = (member: User, answer: PossibleAnswers, questionNumber: number) => {
    const answers = window.sessionStorage.getItem(member.id);
    let newObj = {memberId: member.id, questionNumber, answer};
    if (!answers) {
        const obj: CompleteAnswer[] = [newObj]
        window.sessionStorage.setItem(member.id, JSON.stringify(obj))
    } else {
        let obj: CompleteAnswer[] = JSON.parse(answers);
        obj = obj.filter(item => (item.questionNumber !== questionNumber))
        obj = [...obj, newObj]
        window.sessionStorage.setItem(member.id, JSON.stringify(obj));
    }
}

export const getAnswers = (member: User): CompleteAnswer[] => {
    const answers = window.sessionStorage.getItem(member.id);
    return !answers ? [] : JSON.parse(answers);
}
