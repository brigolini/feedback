import React from "react";
import './team-member.css'
import {Avatar, Button} from "@material-ui/core";
import {User} from "../../api/users-api";
import {useHistory} from "react-router-dom";
import {setUser, useAppContext} from "../../context/app-context";

interface TeamMemberProps {
    member: User;
}

const TeamMember = (props: TeamMemberProps) => {
    const {avatar, firstName, lastName} = props.member;
    const history = useHistory();
    const [state, dispatch] = useAppContext();

    const handleClick = (member: User) => {
        setUser(dispatch, member);
        history.push('/questions');
    }

    return (
        <div className={'divTeamMemberConteiner'}>
            <div className={'divPicture'}>
                <Avatar alt="Remy Sharp" style={{width: '55px', height: '55px'}}
                        src={avatar}/>
            </div>
            <div className={'divName'}><span className={'spanName'}><p>{`${firstName} ${lastName}`}</p></span></div>
            <div className={'divButton'}><span><Button size={'large'} variant="outlined"
                                                       onClick={() => handleClick(props.member)}>
                Fill Out
            </Button> </span>
            </div>
        </div>
    )

}

export default TeamMember;
