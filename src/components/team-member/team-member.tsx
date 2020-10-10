import React from "react";
import './team-member.css'
import {Avatar, Button} from "@material-ui/core";

interface TeamMemberProps {
    avatar:string;
    name:string;
}
const TeamMember = (props:TeamMemberProps) => {
    const {avatar,name} = props;
    return (
        <div className={'divTeamMemberConteiner'}>
            <div className={'divPicture'}>
                <Avatar alt="Remy Sharp" style={{width: '55px', height: '55px'}}
                        src={avatar}/>
            </div>
            <div className={'divName'}><span className={'spanName'}><p>{name}</p></span></div>
            <div className={'divButton'}><span><Button size={'large'} variant="outlined">Fill Out</Button> </span></div>
        </div>
    )

}

export default TeamMember;
