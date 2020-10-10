import React, {ReactElement} from 'react'
import './page-title.css'

const PageTitle = (props: { title: string; subtitle?: string, rightElement?: ReactElement }) => {
    const {title, subtitle,rightElement} = props;
    return (
        <>
            <div className={'divPageTitle'}>
                <div className={'divText'}>
                    <div><span className={'spanTitle'}>{title}</span></div>
                    <div><span className={'spanSubTitle'}>{subtitle}</span></div>
                </div>
                <div>
                    {rightElement}
                </div>
            </div>
        </>
    )

}

export default PageTitle;
