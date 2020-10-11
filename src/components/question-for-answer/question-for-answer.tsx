import React, {useEffect, useState} from "react";
import {Question} from "../../api/questions-api";
import PageTitle from "../page-title/page-title";
import {User} from "../../api/users-api";
import {Avatar, Button, LinearProgress, TextField} from '@material-ui/core';
import Scale from "../scale/scale";
import './question-for-answer.css'
import MultipleChoice from "../multiple-choice/multiple-choice";

export type PossibleAnswers = string | number | null;

interface GenericQuestionProps {
    onChange: (value: PossibleAnswers) => void
}

const TextQuestion = (props: GenericQuestionProps) => {
    const [value, setValue] = useState('');
    const {onChange} = props;
    useEffect(() => {
        onChange(value);
    }, [value, onChange]);
    return (
        <TextField
            id="standard-multiline-flexible"
            label="Write Something"
            multiline
            rowsMax={10}
            value={value}
            style={{width: '100%'}}
            onChange={(event) => setValue(event.target.value)}
        />
    )
}

const MultiChoiseQuestion = (props: GenericQuestionProps & { question: Question }) => {
    const [value, setValue] = useState();
    const {onChange} = props;
    useEffect(() => {
        onChange(value);
    }, [value, onChange]);

    if ((!props.question.options) || (!Array.isArray(props.question.options))) return null;
    const {options} = props.question;
    return (
        <MultipleChoice onSelected={(value) => setValue(value)} options={options}/>
    )
}

const ScaleQuestion = (props: GenericQuestionProps) => {
    const [value, setValue] = React.useState<number | null>(0);

    const {onChange} = props;
    useEffect(() => {
        onChange(value);
    }, [value, onChange]);

    return (
        <div>
            <Scale onChange={(value) => setValue(value)}/>
        </div>
    )
}

export type OnActionParams = 'previous' | 'skip' | 'next';

interface QuestionForAnswerProps {
    question: Question;
    member: User;
    onAction: (action: OnActionParams, value: PossibleAnswers) => void;
    current: number;
    total: number;
}

const QuestionForAnswer = (props: QuestionForAnswerProps) => {
    const {question, member, current, total, onAction} = props;
    const [answer, setAnswer] = useState<PossibleAnswers>(null);
    return (
        <>
            <div className={'divQuestionTitle'}>
                <PageTitle title={question.label}
                           subtitle={`SHARE YOUR FEEDBACK FOR  ${member.firstName} ${member.lastName}`}
                           rightElement={<div style={{paddingLeft: '1em'}}><Avatar sizes={'large'} src={member.avatar}/>
                           </div>}/>
            </div>

            <div className={'divQuestion'}>
                {question.type === 'text' ? <TextQuestion onChange={(answer) => setAnswer(answer)}/> : null}
                {question.type === 'multipleChoice' ? <MultiChoiseQuestion onChange={(answer) => setAnswer(answer)}
                                                                           question={question}/> : null}
                {question.type === 'scale' ? <ScaleQuestion onChange={(answer) => setAnswer(answer)}/> : null}
            </div>
            <div className={'divButtons'}>
                <div>
                    <Button variant={'outlined'} className={'button'} size={'large'}
                            onClick={() => onAction('previous', answer)} disabled={current === 0}>Previous
                    </Button>
                </div>
                <div>
                    <Button variant={'outlined'} className={'button'} disabled={question.required}
                            size={'large'} onClick={() => onAction('skip', answer)}>Skip
                    </Button>
                </div>
                <div>
                    <Button variant={'outlined'} className={'button'} size={'large'}
                            disabled={(answer === null) || answer === 0}
                            onClick={() => onAction('next', answer)}>{current === total - 1 ? <span>Finish</span> :
                        <span>Next</span>}
                    </Button>
                </div>
            </div>
            <div className={'divProgress'}>
                <div>
                    <LinearProgress variant="determinate" value={current * 10}/>
                </div>
                <div>
                    {`${current + 1} of ${total}`}
                </div>

            </div>

        </>
    )

}
export default QuestionForAnswer
