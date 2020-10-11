import React from "react";
import './team-member.css'
import {Avatar, Button} from "@material-ui/core";
import {User} from "../../api/users-api";
import {useHistory} from "react-router-dom";
import {setUser, useAppContext} from "../../context/app-context";
import {getAnswers} from "../../api/answers-api";

interface TeamMemberProps {
    member: User;
}

const hasFeedBack = (member: User) => {
    return getAnswers(member);
}
const TeamMember = (props: TeamMemberProps) => {
    const {avatar, firstName, lastName} = props.member;
    const {member} = props;
    const history = useHistory();
    const [state, dispatch] = useAppContext();

    const handleClick = (member: User, where: string) => {
        setUser(dispatch, member);
        history.push(`/${where}`);
    }

    return (
        <div className={'divTeamMemberConteiner'}>
            <div className={'divPicture'}>
                <Avatar style={{width: '55px', height: '55px'}}
                        src={avatar}/>
            </div>
            <div className={'divName'}><span className={'spanName'}><p>{`${firstName} ${lastName}`}</p></span></div>
            <div className={'divButton'}>
                <span>
                    {hasFeedBack(member).length > 0 ?
                        <Button size={'large'} variant="outlined"
                                style={{width: '15em'}}
                                onClick={() => handleClick(member, 'review')}>
                            Review Feedback
                        </Button>
                        :
                        <Button size={'large'} variant="outlined"
                                style={{backgroundColor: '#AB61E5', color: "white", fontWeight: 'bold', width: '15em'}}
                                onClick={() => handleClick(props.member, 'questions')}>
                            Fill Out
                        </Button>

                    }
                </span>
            </div>
        </div>
    )

}

export default TeamMember;
