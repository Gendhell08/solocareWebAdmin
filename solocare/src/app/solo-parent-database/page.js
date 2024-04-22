"use client"
import ProfilePopup from "../component/profile";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Checkbox from "../component/checkbox";
import SearchBar from "../component/searcchbar";

const soloParentDatabase = () => {

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

    return(
        <div>
            <div className="flex">
              <div className="flex w-full h-[120px] bg-blue-900">
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
              <div className="w-1/6 h-screen">


                <div className="bg-blue-900 w-full">
                ㅤ
                <div>ㅤ</div>
                </div>

                <div className="bg-white">

                <p className="text-black/50 text-[13px] text-center font-extrabold p-2 mt-2 tracking-wide">SORT BY</p>
                
                <div>
                    <div className="flex items-center justify-center pr-7">
                        <div className="pl-3 pr-2 mt-4">
                            <Checkbox />
                        </div>
                        <div className="p-2 rounded-lg bg-gray-300 shadow-xl mt-2 h-[50px] w-full text-center text-black/50 tracking-wider font-medium text-[13px] flex items-center justify-center">ID Number</div>
                    </div>               
                </div>

                <div className="mt-5">
                    <div className="flex items-center justify-center pr-7">
                        <div className="pl-3 pr-2 mt-4">
                            <Checkbox />
                        </div>
                        <div className="p-2 rounded-lg bg-gray-300 shadow-xl mt-2 h-[50px] w-full text-center text-black/50 tracking-wider font-medium text-[13px] flex items-center justify-center">Surname</div>
                    </div>               
                </div>


                <div className="mt-5">
                    <div className="flex items-center justify-center pr-7">
                        <div className="pl-3 pr-2 mt-4">
                            <Checkbox />
                        </div>
                        <div className="p-2 rounded-lg bg-gray-300 shadow-xl mt-2 h-[50px] w-full text-center text-black/50 tracking-wider font-medium text-[13px] flex items-center justify-center">Barangay</div>
                    </div>               
                </div>
                </div>

              </div>



              <div className="w-5/6 h-screen">

                <div className="bg-blue-900 w-full">

                  <div className="flex items-start justify-start w-full h-[50px] bg-blue-900">
                    <div className="flex items-center justify-center w-[400px] bg-white h-[50px] rounded-t-3xl">
                      <p className="text-center text-primary font-extrabold text-lg w-full">SOLO PARENT DATABASE</p>
                   </div>
                   
                   <div className=" flex items-end justify-end w-full">
                      <div className="mt-[5px] mr-3">
                        <SearchBar />
                      </div>
                    </div>
                  </div> 
                </div>

                <div className="bg-white ">
                  
                  <div>
                    <table className="w-full  ">
                      <thead className=" bg-gray-400 text-primary font-extrabold text-[13px]">
                        <tr>
                          <th scope="col" className="px-4 py-2 text-center uppercase tracking-wider">
                              ID
                          </th>
                          <th scope="col" className="px-4 py-2 text-center uppercase tracking-wider">
                              Surname
                          </th>
                          <th scope="col" className="px-4 py-2 text-center uppercase tracking-wider">
                              Given Name
                          </th>
                          <th scope="col" className="px-4 py-2 text-center uppercase tracking-wider">
                              Middle Name
                          </th>
                          <th scope="col" className="px-4 py-2 text-center uppercase tracking-wider">
                              Birthdate
                          </th>
                          <th scope="col" className="px-4 py-2 text-center uppercase tracking-wider">
                              Sex
                          </th>
                          <th scope="col" className="px-4 py-2 text-center uppercase tracking-wider">
                              Barangay
                          </th>
                          <th scope="col" className="px-4 py-2 text-center uppercase tracking-wider">
                              Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">       
                        <tr className="bg-white">
                          <td onClick={()=> profile('/solo-parent-profile')} className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium text-center"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                        </tr> 

                        <tr className="bg-gray-300">
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium text-center"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-gray-400 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                        </tr>

                        <tr className="bg-white">
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium text-center"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-gray-400 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                        </tr>  

                        <tr className="bg-gray-300">
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium text-center"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-r-2 border-gray-400/50 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
                          </td>
                          <td className="hover:bg-gray-100 border-gray-400 px-2 py-3 whitespace-nowrap">
                            <div className="text-sm text-black font-medium"></div>
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

            <div className="flex">
              <div className="flex w-screen h-[250px] bg-blue-900 mt-10">
              </div>
            </div>
          </div>     
    )
}
export default soloParentDatabase;