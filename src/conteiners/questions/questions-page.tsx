import React from 'react'
import PageTitle from "../../components/page-title/page-title";
import './questions-page.css'
import {useAppContext} from "../../context/app-context";

const QuestionsPage = () => {
    const [state] = useAppContext();
    console.info(state);
    return (
        <div className={'conteiner'}>
            <div className={'content'}>
                <div>
                    <PageTitle
                        title={"What would you like this person to work on the most during the next month, to enable their continued growth?"}
                        rightElement={<div>Test</div>}/>
                </div>

            </div>


        </div>
    )
}

export default QuestionsPage;
