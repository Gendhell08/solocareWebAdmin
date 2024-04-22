"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import Circle from "../component/Circle";
import ProfilePopup from "../component/profile";
import SMSChoice from "../component/SMSChoices";

const adminDashboard = () => {
    

    const router=useRouter();
    
    const service = (route) => {
        router.push(route);
    }

    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleProfileClick = () => {
        setIsProfileOpen(true);
    };

    const handleCloseProfile = () => {
        setIsProfileOpen(false);
    };

    const handleSignOut = () => {
        if (window.confirm('Are you sure you want to sign out?')) {
        window.location.replace('/landingPage');
        }
    };

    const [showSMSChoice, setShowSMSChoice] = useState(false);
    const handleSmsClick = () => {
        setShowSmsChoice(true);
      };
    

    const handleClose = () => {
        setShowSMSChoice(false);
      };


    return(
        <div>
            
            <div className="flex">
                <div className="flex w-full h-screen bg-blue-900">
                    <div className="flex-1 bg-blue-900">
                        <img src="slogo.png" className="h-[75px] w-[150px] mt-10 ml-5"></img>
                        <div className="w-full">
                            <img src="cswd.png" className="h-[200px] w-[2000px] mt-[70px]"></img>
                            <p className="text-white/60 text-sm mt-[10px] pl-[70px] text-justify w-full">The City Social Welfare and Development Office (CSWDO) is tasked to provide social protection and promote the rights and
    welfare of the poor and vulnerable groups. It formulates and develops plans and strategies on social welfare programs and
    projects while ensuring the delivery of basic services</p>
                        </div>
                    </div>

                    <div className="bg-blue-900 h-1/2">
                        <p className="flex-1 text-white mt-[65px] mr-[10px] font-medium text-lg">ADMIN (NAME)</p>
                    </div>
                        <img src="profile-user.png" className="h-[60px] w-[60px] mt-[47px] mr-5" onClick={handleProfileClick}></img>
                    {isProfileOpen && <ProfilePopup onClose={handleCloseProfile} onSignOut={handleSignOut} />}
                  </div>
              </div>

                <div className="flex">
                    <div className="flex h-screen w-screen bg-white">
                        <div className="w-full">
                            <p className="font-extrabold text-primary text-4xl text-center mt-10 mb-10"><i>SoloCare Services</i></p>

                            <div className="w-full flex flex-wrap justify-center items-center">
                                <div className="flex flex-col">
                                    <div className="border-4 border-gray-600 p-4 rounded-2xl shadow-xl w-[300px] h-[180px] mr-3 mb-3">
                                        <button className="p-0" onClick={() => service('/admin-announcement')}>
                                            <img src="edit.png" className="w-[60px] h-[60px] block mx-auto mt-[20px]"></img>
                                            <p className="text-gray-500/80 font-bold text-sm text-center mt-3">ANNOUNCEMENT</p>
                                        </button>
                                    </div>

                                    <div className="border-4 border-gray-600 p-4 rounded-2xl shadow-xl w-[300px] h-[400px] mr-3">
                                        <button className="p-0" onClick={() => service('/solo-parent-database')}>
                                            <img src="server-storage.png" className="w-[60px] h-[60px] block mx-auto mt-[120px]"></img>
                                            <p className="text-gray-500/80 font-bold text-sm text-center mt-5">SOLO PARENT DATABASE</p>
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col mt-3">
                                    <div className="flex">
                                        <div className="border-4 border-gray-600 p-4 rounded-2xl shadow-xl w-[180px] h-[180px] mr-3 mb-3">
                                            <button className="p-0 w-full" onClick={() => setShowSMSChoice(true)}>
                                            {showSMSChoice && <SMSChoice onClose={handleClose} />}
                                                <img src="send.png" className="w-[60px] h-[60px] block mx-auto mt-[20px]"></img>
                                                <p className="text-gray-500/80 font-bold text-sm text-center mt-5">SMS</p>
                                            </button>
                                        </div>

                                        <div className="border-4 border-gray-600 p-4 rounded-2xl shadow-xl w-[180px] h-[180px] mr-3 mb-3">
                                            <button className="p-0 w-full" onClick={() => service ('/renewal-service')}>
                                                <img src="id-card.png" className="w-[60px] h-[60px] block mx-auto mt-[20px]"></img>
                                                <p className="text-gray-500/80 font-bold text-sm text-center mt-[-10px] p-5">ID RENEWAL SERVICE</p>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="border-4 border-gray-600 p-4 rounded-2xl shadow-xl w-[180px] h-[180px] mr-3 mb-3">
                                            <button className="p-0 w-full" onClick={() => service ('/registry-service')}>
                                                <img src="copy.png" className="w-[60px] h-[60px] block mx-auto mt-[20px]"></img>
                                                <p className="text-gray-500/80 font-bold text-sm text-center mt-[2px] p-4">REGISTRY SERVICE</p>
                                            </button>
                                        </div>

                                        <div className="border-4 border-gray-600 p-4 rounded-2xl shadow-xl w-[180px] h-[180px] mr-3 mb-3">
                                            <button className="p-0 w-full">
                                                <img src="copy.png" className="w-[60px] h-[60px] block mx-auto mt-[20px]"></img>
                                                <p className="text-gray-500/80 font-bold text-sm text-center mt-[2px] p-4">SCHEDULE SERVICE</p>
                                            </button>
                                        </div>
                                  
                                    </div>

                                    <div className="border-4 border-gray-600 p-0 rounded-2xl shadow-xl w-[370px] h-[210px] mr-5 mb-3">
                                        <button  className="p-0" onClick={() => service('/generate-ticket-id')}>
                                            <img src="calendar.png" className="w-[60px] h-[60px] block mx-auto mt-[50px]"></img>
                                            <p className="text-gray-500/80 font-bold text-sm text-center mt-5">GENERATE TICKET ID</p>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <p className="font-extrabold text-primary text-4xl text-center mt-[145px] mb-20"><i>Monthly Statistical Report</i></p>

                            <div className="w-full flex flex-wrap justify-center items-center">
                                <div className="flex flex-col">
                                    <div className="ml-20 mt-10">
                                        <Circle radius={200} color="#8090A2" />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div className="pl-20">
                                        <p className="text-black font-medium text-2xl">District 1</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex w-screen h-[250px] bg-blue-900 mt-10">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    )
}
export default adminDashboard;