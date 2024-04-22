"use client"
import ProfilePopup from "../component/profile";
import { useState } from "react";
import { useRouter } from "next/navigation";

const scheduleSms = () => {

  const router=useRouter();

  const back = (route) => {
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

    return(
        <div>
            <div className="flex">
              <div className="flex w-full h-[150px] bg-blue-900">
                <div className="flex-1 bg-blue-900">
                  <img src="slogo.png" className="h-[75px] w-[150px] mt-10 ml-5" onClick={() => back ('/admin-dashboard')}></img>
                </div>

                <div className="bg-blue-900">
                  <p className="flex-1 text-white mt-[65px] mr-[10px] font-medium text-lg">ADMIN (NAME)</p>
                </div>
                <img src="profile-user.png" className="h-[60px] w-[60px] mt-[47px] mr-5" onClick={handleProfileClick}></img>
                {isProfileOpen && <ProfilePopup onClose={handleCloseProfile} onSignOut={handleSignOut} />}
              </div>
            </div>

            <div className="flex">
              <div className="flex w-full h-[35px] bg-blue-900">
                <p className="text-center text-white font-bold text-2xl tracking-widest w-full">SMS SCHEDULE REQUEST NOTIFICATION SERVICE</p>
              </div> 
            </div>

            
              
            <div className="flex">

              <div className="w-1/4 p-2 h-screen">
                <p className="text-black/50 text-2xl text-center font-extrabold p-4 mt-2 tracking-wide">DRAFTS</p>
                  <div className="p-2 rounded-lg bg-gray-300 shadow-xl mt-2 h-[50px]"></div>
                  <div className="p-2 rounded-lg bg-gray-300 shadow-xl mt-5 h-[50px]"></div>
              </div>

              <div className="w-3/4 flex h-screen">
                <div className="w-1/2 p-2">
                  
                  <div className="p-4 mt-2">
                    <p className="text-xl tracking-widest font-semibold text-black/60">Title<span className="text-red-500 text-xl">*</span>
                      <input className="focus:outline-none focus:border-primary focus:ring-transparent mt-2 text-xl p-2 border-[3px] font-medium border-primary/60 w-full rounded-2xl"></input></p>
                  </div>

                  <div className="p-4 mt-1">
                    <p className="text-xl tracking-widest font-semibold text-black/60">SMS type<span className="text-red-500 text-xl">*</span>
                      <input className="focus:outline-none focus:border-primary focus:ring-transparent mt-2 text-xl p-2 border-[3px] font-medium border-primary/60 w-full rounded-2xl"></input>
                    </p>
                  </div>

                  <div className="p-4 mt-2 w-full">
                    <p className="text-xl tracking-widest font-semibold text-black/60">Description<span className="text-red-500 text-xl">*</span>
                      <textarea className="focus:outline-none focus:border-primary focus:ring-transparent mt-2 text-base pt-2 pl-2 pr-2 pb-2 border-[3px] border-primary/60 w-full rounded-2xl h-[200px] resize-none font-medium"></textarea></p>
                  </div>
                </div>

                <div className="w-1/2 p-0">
                    
                    <div className="p-4 mt-2">
                        <p className="text-xl tracking-widest font-semibold text-black/60">SoloCare ID<span className="text-red-500 text-xl">*</span>
                        <input className="focus:outline-none focus:border-primary focus:ring-transparent mt-2 text-xl p-2 border-[3px] font-medium border-primary/60 w-full rounded-2xl"></input></p>
                    </div>

                    <div className="p-4 mt-2">
                        <p className="text-base  tracking-widest font-semibold text-black/60">ASSIGN SOLO PARENT NUMBER<span className="text-red-500 text-xl">*</span>
                        <input className="focus:outline-none focus:border-primary focus:ring-transparent mt-2 text-xl p-2 border-[3px] font-medium border-primary/60 w-full rounded-2xl"></input></p>
                    </div>

                    
                  <div className="flex items-end justify-end">
                    <div className="mt-3 mr-5">
                      <button className="btn-tertiary w-[200px] h-[60px] text-lg font-bold text-white text-center rounded-3xl">Add to Draft</button>
                      <button className="btn-primary w-[200px] h-[60px] text-lg font-bold text-white text-center rounded-3xl mt-3">Send to SMS</button>
                    </div>
                  </div>

                    
                </div>
              </div>
            </div>
          </div>

                 
           
              
       
    )
}
export default scheduleSms;