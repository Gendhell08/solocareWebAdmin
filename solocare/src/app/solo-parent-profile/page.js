"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import StatusUpdate from "../component/status";

const soloParentProfile = () => {

    const router=useRouter();

    const back = (route) =>{
        router.push(route);
    }

    const [status, setStatus] = useState();
    const [isStatusOpen, setIsStatusOpen] = useState(false);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
  
    const handleStatusUpdate = (newStatus) => {
      setStatus(capitalizeFirstLetter(newStatus));
      console.log('Status:', newStatus);
    };

    const handleStatusClose = () => {
        setIsStatusOpen(false);
      };

      
    
    return(
        <div>
            <div className="flex">
                <div className="w-3/12 bg-blue-900 h-screen">
                    <div className="w-[50px] pt-4 pl-2 cursor-pointer">
                        <img src="arrow.png" onClick={() => back ('/solo-parent-database')}></img>
                    </div>

                    <div className="w-[150px] mx-auto mt-20">
                        <img src="account (1).png"></img>
                    </div>

                    <div className="m-10 flex items-center justify-center">
                        <img src="status.png" className="w-[20px]"></img>
                        <p className="text-white pl-2 text-base cursor-pointer" onClick={() => setIsStatusOpen(true)}>Update Status</p>
                        {isStatusOpen && (<StatusUpdate onSave={handleStatusUpdate} onClose={handleStatusClose}/>)}
                    </div>

                    <div className="m-[-20px] flex items-center justify-center">
                        <img src="user-avatar.png" className="w-[25px]"></img>
                        <p className="text-white pl-2 text-base">Edit Profile</p>
                    </div>
                </div>
                <div className="w-9/12 bg-white p-7">
                    <div className="flex">
                        <div>
                            <h1 className="text-primary text-lg text-nowrap font-extrabold">(NAME) (M.N) (SURNAME)</h1>
                            <h2 className="pt-1">ID: (number)</h2>
                            <p className="text-black/50 text-sm pt-1">Status: {status}</p>
                        </div>
                        <div className="w-full">
                            <div className="flex items-end justify-end">
                                <div className="border-0 p-4 rounded-xl shadow-xl w-9/12 h-[160px] mr-3 mb-3">
                                    <p className="text-sm flex items-start justify-start text-nowrap">Birthdate: (mm/dd/yyy) <span className="flex items-end justify-end w-full">Age: (age)</span></p>
                                    <p className="text-sm flex items-start justify-start text-wrap pt-5">Primary Address: (House block/lot/no) (Street), (Brgy), (City) </p>
                                    <p className="text-sm flex items-start justify-start text-wrap pt-5">Contact Number: (number) </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-300 mt-2">
                        <p className="text-primary font-extrabold pl-4 pt-1 pb-1 text-sm">OFFICIAL DOCUMENTS</p>
                    </div>


                    <div className="bg-gray-100 mt-7 h-9/12">
                        <div className="bg-gray-200 w-1/2 flex">
                            <p className="text-primary font-medium pl-1 pt-1 pb-1 text-[12px] text-nowrap">(Year), (Month) (dd) (Day)</p>
                            <div className="w-full">
                                <div className="flex items-end justify-end">
                                    <img src="edit (2).png" className="w-3 h-[24px] pt-1 pb-2 mr-3"></img>
                                    <p className="font-bold text-primary text-[12px] pt-1 pb-1 pr-4">EDIT</p>
                                </div>
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

                <div className="bg-gray-100 mt-7 h-9/12">
                    <div className="bg-gray-200 w-1/2 flex">
                        <p className="text-primary font-medium pl-1 pt-1 pb-1 text-[12px] text-nowrap">(Year), (Month) (dd) (Day)</p>
                        <div className="w-full">
                            <div className="flex items-end justify-end">
                                <img src="edit (2).png" className="w-3 h-[24px] pt-1 pb-2 mr-3"></img>
                                <p className="font-bold text-primary text-[12px] pt-1 pb-1 pr-4">EDIT</p>
                            </div>
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
            </div>
        </div>

        <div className="flex">
            <div className="flex w-screen h-[250px] bg-blue-900 mt-10">
            </div>
        </div>
    </div>
    )
}
export default soloParentProfile;