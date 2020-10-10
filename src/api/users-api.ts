import axios from 'axios'

export interface User{
  avatar:string;
  firstName:string;
  id:string;
  lastName:string
}

export const getUsers = async ()=>{
  try{
    const response = await axios.get('https://frontend-exercise-api.netlify.app/.netlify/functions/server/users');
    return response.data;
  } catch (error){
    throw error(error.status)
  }
}
