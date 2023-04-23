import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";



export async function getServerSideProps(context: NextPageContext){
    const session= await getSession(context);

    if(!session){
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }

    return{
        props:{}
    }
}

const Profiles = () =>{
    const router=useRouter();

    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">
                    Who is watching?
                </h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                <div onClick={()=>{router.push('/')}}>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Profiles;