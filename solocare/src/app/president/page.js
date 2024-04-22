"use client"

import { useRouter } from "next/navigation";
import LogoOne from "../component/logoOne";  

const president= () => {
    const router=useRouter();

    const back = (route) => {
        router.push(route);
    };

    const login = (route) => {
        router.push(route);
    };

    return(
        <div>
            <div className="flex">
                <div className="flex-1 bg-blue-900">
                    <div className="text-white flex items-center" onClick={() => back ('/landingPage')}>
                        <img src="back.png" className="w-[40px] mt-8 ml-5" onClick={() => back ('/landingPage')}></img>
                        <p className="font-bold text-white text-xl mt-8 ml-1" onClick={() => back ('/landingPage')}>Back</p>
                    </div>
                </div>
                <div className="flex-1 bg-white">
                    <p className="text-primary text-3xl font-extrabold mt-8 ml-3"><i>SoloCare</i></p>
                </div>
            </div>

            <div className="flex h-screen">
                <div className="flex-1 bg-blue-900">
                    <div className="flex flex-col justify-center items-center h-full w-full">
                        <LogoOne />
                    </div>
                </div>
                <div className="flex-1 bg-white">
                    <div className="flex flex-col justify-center items-center h-full w-full">
                        <h1 className="text-primary font-bold text-2xl w-full p-20">
                            BARANGAY PRESIDENT LOGIN
                            <p className="text-black/70 text-base font-normal w-full">Please log in to continue</p>

                            <div>
                                <input className=" focus:outline-none focus:border-primary focus:ring-transparent mt-10 font-normal text-base text-black" label="Barangay President Number" type="text" placeholder="Barangay President Number"></input>
                            </div>
                            <div>
                                <input className="focus:outline-none focus:border-primary focus:ring-transparent mt-5 font-normal text-base text-black" label="Password" type="Password" placeholder="Password"></input>
                            </div>
                            <p className="text-black/60 text-sm font-normal mt-2 underline text-end">Forgot Password?</p>
                            <button className="text-xl font-medium text-white btn-primary mt-10" type="submit" onClick={() => login ('/president-database')}>Log In</button>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default president;