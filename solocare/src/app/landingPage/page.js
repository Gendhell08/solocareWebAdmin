"use client"

import Logo from "../component/logo";
import { useRouter } from "next/navigation";

const landingPage = () => {
    const router = useRouter();

    const handleRedirect = (route) => {
        router.push(route);
      };

    return(
        <div>
            <div className="flex">
                <div className="flex-1 bg-blue-900">
                    <Logo />
                </div>
                <div className="flex-1 bg-white"></div>
            </div>
        
            <div className="flex h-screen">
                <div className= "flex-1 bg-blue-900">
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="text-center text-white font-bold text-2xl">
                            Solo Parent Barangay Presidents
                        </h1>
                        <div className="mt-4">
                            <button className="text-lg font-bold text-primary btn-secondary" 
                            type="submit" 
                            onClick={() => handleRedirect('/president')}>
                                Log In
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-white">
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="text-center  text-primary font-bold text-2xl">
                            Solo Parent Administrator
                        </h1>
                        <div className="mt-4">
                            <button className="text-lg font-bold text-white btn-primary" 
                            type="submit" 
                            onClick={() => handleRedirect('/admin')}>
                                Log In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default landingPage;