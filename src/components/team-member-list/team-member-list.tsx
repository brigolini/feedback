import React from "react";
import {useTeamMemberList} from "./use-team-member-list";
import TeamMemberSkeleton from "../team-member/team-member-skeleton";
import TeamMember from "../team-member/team-member";
import ErrorDialog from "../error-dialog/ErrorDialog";

const ScheletonMembers = () => {
    return (
        <>
            <span><TeamMemberSkeleton/></span>
            <span><TeamMemberSkeleton/></span>
            <span><TeamMemberSkeleton/></span>
            <span><TeamMemberSkeleton/></span>
            <span><TeamMemberSkeleton/></span>
            <span><TeamMemberSkeleton/></span>
        </>
    )

}

const TeamMemberList = () => {
    const {status, list} = useTeamMemberList();

    if (status === 'loading') return <ScheletonMembers/>
    if (status === 'done') return <>{list?.map((item, index) => <TeamMember key={index} member={item}/>)}</>
    if (status === 'error') return (
        <ErrorDialog text={`I can't reach our servers. Try it latter,click Ok for try again.`} title={`Error`}
                     open={true}
                     onClose={() => console.info('To do')}/>
    );
    return null;

}

export default TeamMemberList;
