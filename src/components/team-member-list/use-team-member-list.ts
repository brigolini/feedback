import { AsyncStatus, done, error, loading} from "../common/AsyncStatus";
import {getUsers, User} from "../../api/users";
import {useEffect, useState} from "react";

interface TeamMemberListReturn {
    status:loading|error|done;
    list:User[]
}
export const useTeamMemberList = ():TeamMemberListReturn => {
    const [list,setList] = useState<User[]>([])
    const [status,setStatus] = useState<AsyncStatus>('loading')
    useEffect(()=>{
        const fn = async ()=>{
            try{
                const users = await getUsers();
                setList(users);
                setStatus('done');
            } catch (error){
                setStatus('error');
            }
        }
        fn();
    },[])

    return {list,status}
}
