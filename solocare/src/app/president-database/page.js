"use client"
import ProfilePopup from "../component/presidentProfile";
import { useState } from "react";
import { useRouter } from "next/navigation";
import UpdateStatus from "../component/updateStatus";

const presidentDatabase = () => {

  const router=useRouter();

  const back = (route) => {
    router.push(route);
  }

  const  profile =  (route) => {
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

  const [selectedMonth, setSelectedMonth] = useState('');

  const handleButtonClick = (month) => {
    setSelectedMonth(month);
  };

  const [showStatus, setShowStatus] = useState(false);
  const [statusLabel, setStatusLabel] = useState('Update Status');
  const [statusColor, setStatusColor] = useState('bg-blue-500');

  const handleDeny = () => {
    setStatusLabel('Denied');
    setStatusColor('bg-red-600');
    setShowStatus(false);
  };

  const handleApprove = () => {
    setStatusLabel('Approved');
    setStatusColor('bg-green-600');
    setShowStatus(false);
  };

  const handleClose = () => {
    setShowStatus(false);
  }


  

    return(
        <div>
            <div className="flex">
              <div className="flex w-full h-[120px] bg-blue-900">
                <div className="flex-1 bg-blue-900">
                  <img src="slogo.png" className="h-[75px] w-[150px] mt-10 ml-5" onClick={() => back ('/admin-dashboard')}></img>
                </div>

                <div className="bg-blue-900">
                  <p className="flex-1 text-white mt-[65px] mr-[10px] font-medium text-lg">PRESIDENT (NAME)</p>
                </div>
                <img src="profile-user.png" className="h-[60px] w-[60px] mt-[47px] mr-5" onClick={handleProfileClick}></img>
                {isProfileOpen && <ProfilePopup onClose={handleCloseProfile} onSignOut={handleSignOut} />}
              </div>
            </div>

            <div>
                <div className="flex items-center bg-blue-900 justify-center w-full h-[100px]">
                    <p className="text-center text-white font-bold text-lg w-full">BARANGAY (Barangay)</p>
                </div>
            </div>

            <div className="flex">
              <div className="w-1/6 h-screen">


                <div className="bg-blue-900 w-full">
                ㅤ
                <div>ㅤ</div>
                </div>

                <div className="bg-white p-3">
                
                <div>
                    <div className="flex items-center justify-center">
                        <button onClick={() => handleButtonClick('January')} className="rounded-lg bg-blue-900/30 h-[50px] w-full text-center text-white tracking-wider font-bold text-[13px] flex items-center justify-center">January</button>
                    </div>               
                </div>

                <div>
                    <div className="flex items-center justify-center">
                        <button  onClick={() => handleButtonClick('February')} className="rounded-lg bg-blue-900/30 h-[50px] w-full text-center text-white tracking-wider font-bold text-[13px] flex items-center justify-center mt-2">February</button>
                    </div>               
                </div>

                <div>
                    <div className="flex items-center justify-center">
                        <button onClick={() => handleButtonClick('March')} className="rounded-lg bg-blue-900/30 h-[50px] w-full text-center text-white tracking-wider font-bold text-[13px] flex items-center justify-center mt-2">March</button>
                    </div>               
                </div>


                <div>
                    <div className="flex items-center justify-center">
                        <button  onClick={() => handleButtonClick('April')} className="rounded-lg bg-blue-900/30 h-[50px] w-full text-center text-white tracking-wider font-bold text-[13px] flex items-center justify-center mt-2">April</button>
                    </div>               
                </div>

                <div>
                    <div className="flex items-center justify-center">
                        <button onClick={() => handleButtonClick('May')} className="rounded-lg bg-blue-900/30 h-[50px] w-full text-center text-white tracking-wider font-bold text-[13px] flex items-center justify-center mt-2">May</button>
                    </div>               
                </div>

                <div>
                    <div className="flex items-center justify-center">
                        <button onClick={() => handleButtonClick('June')} className="rounded-lg bg-blue-900/30 h-[50px] w-full text-center text-white tracking-wider font-bold text-[13px] flex items-center justify-center mt-2">June</button>
                    </div>               
                </div>

                <div>
                    <div className="flex items-center justify-center">
                        <button onClick={() => handleButtonClick('July')} className="rounded-lg bg-blue-900/30 h-[50px] w-full text-center text-white tracking-wider font-bold text-[13px] flex items-center justify-center mt-2">July</button>
                    </div>               
                </div>

                <div>
                    <div className="flex items-center justify-center"> 
                        <button onClick={() => handleButtonClick('August')} className="rounded-lg bg-blue-900/30 h-[50px] w-full text-center text-white tracking-wider font-bold text-[13px] flex items-center justify-center mt-2">August</button>
                    </div>               
                </div>

                <div>
                    <div className="flex items-center justify-center">
                        <button onClick={() => handleButtonClick('September')} className="rounded-lg bg-blue-900/30 h-[50px] w-full text-center text-white tracking-wider font-bold text-[13px] flex items-center justify-center mt-2">September</button>
                    </div>               
                </div>

                <div>
                    <div className="flex items-center justify-center">
                        <button onClick={() => handleButtonClick('October')} className="rounded-lg bg-blue-900/30 h-[50px] w-full text-center text-white tracking-wider font-bold text-[13px] flex items-center justify-center mt-2">October</button>
                    </div>               
                </div>

                <div>
                    <div className="flex items-center justify-center">
                        <button onClick={() => handleButtonClick('November')} className="rounded-lg bg-blue-900/30 h-[50px] w-full text-center text-white tracking-wider font-bold text-[13px] flex items-center justify-center mt-2">November</button>
                    </div>               
                </div>

                <div>
                    <div className="flex items-center justify-center">
                        <button onClick={() => handleButtonClick('December')} className="rounded-lg bg-blue-900/30 h-[50px] w-full text-center text-white tracking-wider font-bold text-[13px] flex items-center justify-center mt-2">December</button>
                    </div>               
                </div>

                
                </div>

              </div>



              <div className="w-5/6 h-screen">

                <div className="bg-blue-900 w-full">
                  <div className="flex items-start justify-start w-full h-[50px] bg-blue-900">
                    <div className="flex items-center justify-center w-[200px] bg-white h-[50px] rounded-t-3xl">
                      <p className="text-center text-primary font-extrabold text-lg w-full">{selectedMonth}</p>
                   </div>
                   
                   
                  </div> 
                </div>

                <div className="bg-white ">
                  
                  <div>
                    <table className="w-full ">
                      <thead className=" bg-blue-900/20 text-primary font-extrabold text-[13px]">
                        <tr>
                        <th scope="col" className="px-4 py-2 border-r-2 border-gray-400/90 text-center uppercase tracking-wider size-1">
                              Day
                          </th>
                          <th scope="col" className="px-4 py-2 border-r-2 border-gray-400/90 text-center uppercase tracking-wider">
                              Name
                          </th>
                          <th scope="col" className="px-4 py-2 border-r-2 border-gray-400/90 text-center uppercase tracking-wider">
                              Address
                          </th>
                          <th scope="col" className="px-4 py-2 text-center uppercase tracking-wider">
                              Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-400/90">       
                        <tr className="bg-blue-900/10 ">
                            <td className="hover:bg-gray-100 border-r-2 border-gray-400/90 px-2 py-3 whitespace-nowrap">
                                <div className="text-sm text-black font-medium text-center"></div>
                            </td>
                            <td className="hover:bg-gray-100 border-r-2 border-gray-400/90 px-2 py-3 whitespace-nowrap">
                                <div className="text-sm text-black font-medium text-center"></div>
                            </td>
                            <td className="hover:bg-gray-100 border-r-2 border-gray-400/90 px-2 py-3 whitespace-nowrap">
                                <div className="text-sm text-black font-medium"></div>
                            </td>
                            <td className="hover:bg-gray-100 p-2 whitespace-nowrap">
                            {statusLabel !== 'Update Status' ? (
                                    <button
                                    className={`${statusColor} text-white font-bold text-[12px] h-7 p-0 rounded hover:${statusColor.split('-')[0] + '-600'}`}
                                    onClick={() => setShowStatus(true)}
                                    >
                                    {statusLabel}
                                    </button>
                                ) : (
                                    <button className="bg-blue-900 font-bold text-white text-[12px] h-7 p-0"  onClick={() => setShowStatus(true)}>
                                        Update Status
                                    </button>
                                    )}
                                            
                                    {showStatus && (<UpdateStatus onDeny={handleDeny} onApprove={handleApprove} onClose={handleClose
                                    } />)}
                            </td>
                        </tr> 
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-end justify-end">
                    <div className="mt-3 mr-5">
                      <button className="btn-primary w-[200px] h-[60px] text-lg font-bold text-white text-center rounded-3xl mt-3">Next</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div> 
    )
}
export default presidentDatabase;