import { useState } from 'react';
import { useRouter } from 'next/navigation';

const UserNotify = ({ isOpen, onClose, message, subText, redirectUrl }) => {
  const router = useRouter();

  const handleConfirm = () => {
    router.push(redirectUrl);
    onClose();
  };

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center w-full h-full`}>
      <div className="bg-white shadow-xl w-[600px] h-[270px]">
            <div className="flex items-center justify-center">
                <div className="bg-blue-900 text-white px-5 py-2 w-full h-[40px] flex items-end justify-end overflow-hidden">
                    <img src="cross.png" className="h-[22px] w-[22px] cursor-pointer" onClick={onClose}></img>
                </div>      
            </div>
            

            <div className="pl-10 mt-10">
                <h2 className="text-xl text-primary mt-5 font-bold mb-5">Are you sure to approve this user?</h2>
                <p className="text-[10px] text-primary">By approving this user, you are granting them access to the SoloCare App.</p>
                <p className="text-[10px] text-primary mb-4">Please notify the user now.</p>
            </div>

            <div className="flex items-end justify-end p-7">
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-1 px-2 mr-2 text-[12px] h-10" onClick={handleConfirm}>
                Okay
            </button>
            
            </div>
        </div>
    </div>
  );
};

export default UserNotify;
