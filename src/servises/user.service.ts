
import { env } from "@/env";
import { cookies } from "next/headers";
const AUTH_URL= env.AUTH_URL

export const userServise = {
        getSession :async function (){
            try {
                const cookieStore =   await cookies()
  console.log(cookieStore)


  const res = await fetch (`${AUTH_URL}/get-session`, {headers :{
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