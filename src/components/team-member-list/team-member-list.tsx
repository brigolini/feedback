import React from "react";
import {useTeamMemberList} from "./use-team-member-list";
import TeamMemberSkeleton from "../team-member/team-member-skeleton";
import TeamMember from "../team-member/team-member";
import {useHistory} from "react-router-dom";

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
    const history = useHistory();

    if (status === 'loading') return <ScheletonMembers/>
    if (status === 'done') return <>{list?.map((item, index) => <TeamMember key={index} member={item}/>)}</>
    if (status === 'error') {
        history.push('/error/We could not connect to our servers, try again latter')
        return null;
    }

    return null;

}

export default TeamMemberList;
