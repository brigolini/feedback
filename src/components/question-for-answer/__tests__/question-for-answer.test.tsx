import {AppProvider} from "../../../context/app-context";
import {mount, ReactWrapper} from 'enzyme';
import QuestionForAnswer from "../question-for-answer";
import React from "react";
import {Question} from "../../../api/questions-api";
import {User} from "../../../api/users-api";
import '../../../setupTests'

let wrapped: ReactWrapper;

const multiChoiseQuestion: Question = {
    "type": "multipleChoice",
    "required": true,
    "label": "Does this person care about our users and treats customer support as a high priority?",
    "options": [
        {
            "value": 1,
            "label": "Not always - you should work on this aspect"
        },
        {
            "value": 2,
            "label": "Yes, you go out of our way to help our users and improve their experience"
        },
        {
            "value": 3,
            "label": "Yes, your understanding of our users and the empathy you demonstrate is second to none"
        }
    ],
    "id": "aa2eaecf-1a3d-420a-82d3-fc1e33dffb7f"
}

const member: User = {
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/al_li/128.jpg",
    "firstName": "Myrna",
    "id": "a06c3805-c682-4800-8ee6-8842cafb7ebc",
    "lastName": "Jenkins"
}

afterEach(() => {
    if (wrapped) wrapped.unmount();
});

it('disable previous on first question', () => {
    wrapped = mount(
        <AppProvider>
            <QuestionForAnswer question={multiChoiseQuestion} member={member} current={0} total={1}
                               onAction={() => console.info('action')}/>
        </AppProvider>
    );

    const previousButton = wrapped.find('#previousButton');
    expect(previousButton.at(0).props().disabled).toBeTruthy();
})

it('enable previous button on last question', () => {
    wrapped = mount(
        <AppProvider>
            <QuestionForAnswer question={multiChoiseQuestion} member={member} current={3} total={3}
                               onAction={() => console.info('action')}/>
        </AppProvider>
    );

    const previousButton = wrapped.find('#previousButton');
    expect(previousButton.at(0).props().disabled).toBeFalsy();
})

it('disable skip button if question is required', () => {
    multiChoiseQuestion.required = true;
    wrapped = mount(
        <AppProvider>
            <QuestionForAnswer question={multiChoiseQuestion} member={member} current={3} total={3}
                               onAction={() => console.info('action')}/>
        </AppProvider>
    );

    const previousButton = wrapped.find('#skipButton');
    expect(previousButton.at(0).props().disabled).toBeTruthy();
})

it('enable skip button if question is required', () => {
    multiChoiseQuestion.required = false;
    wrapped = mount(
        <AppProvider>
            <QuestionForAnswer question={multiChoiseQuestion} member={member} current={3} total={3}
                               onAction={() => console.info('action')}/>
        </AppProvider>
    );

    const previousButton = wrapped.find('#skipButton');
    expect(previousButton.at(0).props().disabled).toBeFalsy();
})
