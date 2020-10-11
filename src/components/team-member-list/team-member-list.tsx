import React from "react";
import {useTeamMemberList} from "./use-team-member-list";
import TeamMemberSkeleton from "../team-member/team-member-skeleton";
import TeamMember from "../team-member/team-member";
import ErrorPage from "../../conteiners/error/error-page";

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
    if (status === 'error') {
        return <ErrorPage errorMessage={'We could not connect to our servers, try again latter'}/>;
    }
    return null;

}

export default TeamMemberList;
