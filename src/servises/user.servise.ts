
import { date } from "better-auth";
import { error } from "console";
import { cookies } from "next/headers";

export const userServise = {
        getSession :async function (){
            try {
                const cookieStore =   await cookies()
  console.log(cookieStore)


  const res = await fetch ("http://localhost:5000/api/auth/get-session", {headers :{
    Cookie : cookieStore.toString(),
  },
  cache : "no-store"
});

  const sessions = await res.json()
  if (!sessions===null){
    return {date: null , error: { message : "session is missing     "}}
  }
  return {data: sessions , error: null}
  console.log( sessions)
            } catch (error) {
                console.log(error)
                return {data: null, error: {message : "something worng"}}
            }
  
        }
}