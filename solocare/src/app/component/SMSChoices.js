"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SMSChoice = ({ onClose }) => {
    const router = useRouter();
    const [choice, setChoice] = useState('');

    const handleClose = ()  =>{
      setChoice(false);
      onClose();
    } 

    const handleChoice = (selectedChoice) => {
        setChoice(selectedChoice);

        
        if (selectedChoice === 'ID Renewal') {
            router.push('/id-renewal-sms');
        } else if (selectedChoice === 'Registration') {
            router.push('/registration-sms');
        } else if (selectedChoice === 'Schedule') {
            router.push('/schedule-sms');
        }
        else if (selectedChoice === 'Cancel') {
          router.push('/admin-dashboard');
      }
    };

    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white rounded-2xl shadow-xl w-[300px] h-[270px]">
            <div className="flex items-center justify-center">
                <div className="bg-blue-900 text-white px-8 py-4 rounded-t-2xl w-full h-[60px] overflow-hidden">
                    <h2 className="text-lg text-center font-semibold">Choose an Option</h2>
                </div>      
            </div>

            <div className="w-full">
              <button onClick={() => handleChoice('ID Renewal')} className="text-primary">ID Renewal</button>
              <button onClick={() => handleChoice('Registration')} className="text-primary">Registration</button>
              <button onClick={() => handleChoice('Schedule')} className="text-primary">Schedule</button>
              <button onClick={handleClose} className="">Cancel</button>
            </div>
        </div>
      </div>
    );
};

export default SMSChoice;
