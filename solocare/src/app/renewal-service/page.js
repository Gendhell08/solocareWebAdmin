"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProfilePopup from "../component/profile";
import UserNotify from "../component/notifyUser";

const renewalService = () => {
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

    const [isApprovedUserOpen, setIsApprovedUserOpen] = useState(false);

    const handleApproveUser = () => {
        setIsApprovedUserOpen(true);
    };

    const handleClose = () => {
        setIsApprovedUserOpen(false);
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
                    <div className="flex w-full h-[40px] bg-blue-900">
                    <p className="text-center text-white font-bold text-3xl tracking-widest w-full">ID RENEWAL SERVICE</p>
                    </div> 
                </div>
              
                <div className="flex">
                    <div className="w-3/12 h-screen">
                        <div className="p-4">
                            <div className="bg-gray-300 rounded-xl w-full">
                                <p className="text-gray-500 font-bold text-center p-2 tracking-widest text-sm">PENDING</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-9/12 h-screen">
                        <div className="rounded-full mt-5">
                            <div className="bg-gray-300 w-full flex items-center justify-center rounded-lg">
                                <p className="text-primary font-extrabold pl-1 pt-2 pb-2 text-lg text-center">REGISTRATION VIEWPORT</p>   
                            </div> 
                        </div>

                        <div className="w-full flex rounded-lg border-4 border-gray-300 border-t-0">
                            <div className="w-1/2">

                                <div className="flex">
                                    <div className="items-start justify-start pt-5 pl-3 pb-2">
                                        <p className="pr-2 text-nowrap text-[12px] text-blue-950 font-bold text-base">Reference Number:</p>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-5 pb-2 pr-2">
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className="w-full flex">
                                    <div className="items-start justify-start pt-6 pl-3 pb-2">
                                        <label className="pr-2 text-[12px]">Surname</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-5 pb-2 pr-2">
                                        <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="items-start justify-start pt-3 pl-3 pb-2">
                                        <label className="pr-2 text-nowrap text-[12px]">Given Name</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-2 pb-2 pr-2">
                                            <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="items-start justify-start pt-3 pl-3 pb-2">
                                        <label className="pr-2 text-nowrap text-[12px]">Middle Name</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-2 pb-2 pr-2">
                                            <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="items-start justify-start pt-3 pl-3 pb-2">
                                        <label className="pr-2 text-nowrap text-[12px]">Age</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-2 pb-2 pr-2">
                                            <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="items-start justify-start pt-3 pl-3 pb-2">
                                        <label className="pr-2 text-nowrap text-[12px]">Date of Birth</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-2 pb-2 pr-2">
                                            <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="items-start justify-start pt-3 pl-3 pb-2">
                                        <label className="pr-2 text-nowrap text-[12px]">Place of Birth</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-2 pb-2 pr-2">
                                            <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="items-start justify-start pt-3 pl-3 pb-2">
                                        <label className="pr-2 text-nowrap text-[12px]">Sex</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-2 pb-2 pr-2">
                                            <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="items-start justify-start pt-3 pl-3 pb-2">
                                        <label className="pr-2 text-nowrap text-[12px]">Contact Number</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-2 pb-2 pr-2">
                                            <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="items-start justify-start pt-3 pl-3 pb-2">
                                        <label className="pr-2 text-nowrap text-[12px]">Educational Attainment</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-2 pb-2 pr-2">
                                            <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="items-start justify-start pt-3 pl-3 pb-2">
                                        <label className="pr-2 text-nowrap text-[12px]">Occupation</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-2 pb-2 pr-2">
                                            <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="items-start justify-start pt-3 pl-3 pb-2">
                                        <label className="pr-2 text-nowrap text-[12px]">Monthly Income</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-2 pb-2 pr-2">
                                            <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="items-start justify-start pt-3 pl-3 pb-2">
                                        <label className="pr-2 text-nowrap text-[12px]">Barangay</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-2 pb-2 pr-2">
                                            <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                    
                                    </div>
                                </div>


                            </div>

                            <div className="w-1/2">

                                <div className="w-full flex">
                                    <div className="items-start justify-start pt-6 pl-3 pb-2">
                                        <label className="pr-2 text-[12px] text-nowrap">Present Address</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-5 pb-2 pr-2">
                                        <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                        
                                    </div> 
                                </div>
                                
                                <div className="flex">
                                    <div className="items-start justify-start pt-3 pl-3 pb-2">
                                        <label className="pr-2 text-nowrap text-[12px]">Home Occupancy</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-2 pb-2 pr-2">
                                            <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="items-start justify-start pt-3 pl-3 pb-2">
                                        <label className="pr-2 text-nowrap text-[12px]">4ps Beneficiary</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-2 pb-2 pr-2">
                                            <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                    
                                    </div>
                                </div>


                                <div className="flex">
                                    <div className="items-start justify-start pt-3 pl-3 pb-2">
                                        <label className="pr-2 text-nowrap text-[12px]">Philhealth</label>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-2 pb-2 pr-2">
                                            <input className="h-[12px] w-[190px] border-black bg-gray-300 rounded-sm"></input>
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className="mt-7">
                                    <p className="text-blue-950 text-center tracking-widest font-bold">FAMILY COMPOSITION</p>
                                </div>

                                <div className="mt-5 pl-4 pr-4">
                                    <div className="border-2 border-gray-400 p-4 rounded-md w-full h-[180px] mr-3 mb-3">
                                        <p className="text-blue-950 text-sm font-medium">Name:</p>
                                        <p className="text-blue-950 text-sm font-medium">Relationship:</p>
                                        <p className="text-blue-950 text-sm font-medium">Status:</p>
                                        <p className="text-blue-950 text-sm font-medium">Age:</p>
                                        <p className="text-blue-950 text-sm font-medium">Educational Attainment:</p>
                                        <p className="text-blue-950 text-sm font-medium">Occupation:</p>
                                        <p className="text-blue-950 text-sm font-medium">Name of School:</p>
                                    </div>
                                </div>



                                <div className="mt-7 flex">
                                    <div className="items-start justify-start pt-5 pl-3 pb-2">
                                        <p className="pr-2 text-nowrap text-[12px] text-blue-950 font-bold text-base">Classification:</p>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-end justify-end pt-5 pb-2 pr-2">
                                            <span className="pr-2 text-nowrap text-[12px] text-blue-950 text-base font-medium">(reason)</span>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-300 mt-5">
                            <p className="text-primary font-extrabold pl-4 pt-1 pb-1 text-lg text-center">OFFICIAL DOCUMENTS</p>
                        </div>


                        <div className="bg-gray-100 h-9/12">
                            <div className="bg-gray-200 w-1/2 flex">
                                <p className="text-primary font-medium pl-3 pt-1 pb-1 text-[12px] text-nowrap">(Year), (Month) (dd) (Day)</p>
                                <div className="w-full">
                                    
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-center">
                                <div className="p-3 pt-5">
                                    <div className="bg-white border-0 rounded-sm w-[120px] h-[160px]"></div>
                                    <div className="flex items-center justify-center">
                                        <label className="text-[9px] text-center pt-2">filename.jpeg</label>
                                    </div>         
                                </div>

                                <div className="p-3 pt-5">
                                    <div className="bg-white border-0 rounded-sm w-[120px] h-[160px]"></div>
                                    <div className="flex items-center justify-center">
                                        <label className="text-[9px] text-center pt-2">filename.jpeg</label>
                                    </div>         
                                </div>

                                <div className="p-3 pt-5">
                                    <div className="bg-white border-0 rounded-sm w-[120px] h-[160px]"></div>
                                    <div className="flex items-center justify-center">
                                        <label className="text-[9px] text-center pt-2">filename.jpeg</label>
                                    </div>         
                                </div>

                                <div className="p-3 pt-5">
                                    <div className="bg-white border-0 rounded-sm w-[120px] h-[160px]"></div>
                                    <div className="flex items-center justify-center">
                                        <label className="text-[9px] text-center pt-2">filename.jpeg</label>
                                    </div>         
                                </div>

                                <div className="p-3 pt-5">
                                    <div className="bg-white border-0 rounded-sm w-[120px] h-[160px]"></div>
                                    <div className="flex items-center justify-center">
                                        <label className="text-[9px] text-center pt-2">filename.jpeg</label>
                                    </div>         
                                </div>

                                <div className="p-3 pt-5">
                                    <div className="bg-white border-0 rounded-sm w-[120px] h-[160px]"></div>
                                    <div className="flex items-center justify-center">
                                        <label className="text-[9px] text-center pt-2">filename.jpeg</label>
                                    </div>         
                                </div>

                                <div className="p-3 pt-5">
                                    <div className="bg-white border-0 rounded-sm w-[120px] h-[160px]"></div>
                                    <div className="flex items-center justify-center">
                                        <label className="text-[9px] text-center pt-2">filename.jpeg</label>
                                    </div>         
                                </div>

                                <div className="p-3 pt-5">
                                    <div className="bg-white border-0 rounded-sm w-[120px] h-[160px]"></div>
                                    <div className="flex items-center justify-center">
                                        <label className="text-[9px] text-center pt-2">filename.jpeg</label>
                                    </div>         
                                </div>


                                <div className="p-3 pt-5">
                                    <div className="bg-white border-0 rounded-sm w-[120px] h-[160px]"></div>
                                    <div className="flex items-center justify-center">
                                        <label className="text-[9px] text-center pt-2">filename.jpeg</label>
                                    </div>         
                                </div>

                                <div className="p-3 pt-5">
                                    <div className="bg-white border-0 rounded-sm w-[120px] h-[160px]"></div>
                                    <div className="flex items-center justify-center">
                                        <label className="text-[9px] text-center pt-2">filename.jpeg</label>
                                    </div>         
                                </div>
                            </div>
                        </div>

                        <div className="flex items-end justify-end">
                            <div className="mt-3 mr-5">
                                <button className="btn-tertiary w-[200px] h-[50px] text-sm font-bold text-white text-center rounded-3xl">Re-submit</button>
                                <button className="btn-primary w-[200px] h-[50px] text-sm font-bold text-white text-center rounded-3xl mt-3" onClick={handleApproveUser}>Approved</button>
                                <UserNotify isOpen={isApprovedUserOpen} onClose={handleClose} redirectUrl="/id-renewal-sms"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default renewalService;