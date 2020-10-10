import React from "react";
import './team-member.css'
import {Skeleton} from '@material-ui/lab';

const TeamMemberSkeleton = () => {
    return (
        <div className={'divTeamMemberConteiner'}>
            <div className={'divPicture'}>
                <Skeleton style={{width: '60px', height: '60px'}} variant={'circle'}/>
            </div>
            <div className={'divName'}>
                <span className={'spanName'}>
                <Skeleton style={{width: '260px'}} variant={'text'}/>
                </span>
            </div>
            <div className={'divButton'}>
                <span>
                    <Skeleton style={{width: '80px',height:'30px'}} variant={'rect'}/>
                </span>
            </div>
        </div>
    )

}

export default TeamMemberSkeleton;
