import React, {useState} from "react";
import {useTeamMemberList} from "./use-team-member-list";
import TeamMemberSkeleton from "../team-member/team-member-skeleton";
import TeamMember from "../team-member/team-member";
import ErrorDialog from "../error-dialog/ErrorDialog";

const TeamMemberList = () => {
    const {status, list} = useTeamMemberList();
    const [showErrorDialog, setShowErrorDialog] = useState(false);

    switch (status) {
        case "loading":
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
        case "done":
            return (
                <>{list?.map(item => <TeamMember avatar={item.avatar} name={`${item.firstName} ${item.lastName}`}/>)}</>
            )
        case "error":
            if (!showErrorDialog) setShowErrorDialog(true);
            return (
                <ErrorDialog text={`I can't reach our servers. Try it latter,click Ok for try again.`} title={`Error`} open={showErrorDialog}
                             onClose={() => setShowErrorDialog(false)}/>
            );
        default:
            return (
                <span>unexpected</span>
            )
    }
}

export default TeamMemberList;
