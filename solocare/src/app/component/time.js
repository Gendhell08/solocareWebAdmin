import { useState } from 'react';

const TimeSelector = () => {
  const [hour, setHour] = useState(1);
  const [minute, setMinute] = useState(0);
  const [isAM, setIsAM] = useState(true);

  const handleHourChange = (increment) => {
    let newHour = hour + increment;
    if (newHour > 12) {
      newHour = 1;
    } else if (newHour < 1) {
      newHour = 12;
    }
    setHour(newHour);
  };

  const handleMinuteChange = (increment) => {
    let newMinute = minute + increment;
    if (newMinute >= 60) {
      newMinute = 0;
      handleHourChange(1);
    } else if (newMinute < 0) {
      newMinute = 59;
      handleHourChange(-1);
    }
    setMinute(newMinute);
  };

  const toggleAMPM = () => {
    setIsAM((prev) => !prev);
  };

  return (
    <div className="p-[10px] pt-[50px] rounded-2xl">
        <div className="flex items-center justify-between border-[3px] font-bold text-xl text-primary border-blue-900/40 rounded-3xl h-[150px]">
            <div className="flex flex-col items-center m-[-30px]">
                <button className=" focus:outline-none" onClick={() => handleHourChange(-1)}>
                    <div>
                        <img src="upload.png" className="h-[30px] w-[30px] mx-auto" alt="Up Icon" />
                    </div>
                </button>
            <div className="p-3">{hour.toString().padStart(2, '0')}</div>
                <button className="px-3 py-1 focus:outline-none" onClick={() => handleHourChange(1)}>
                    <img src="down-arrow.png" className="h-[30px] w-[30px] mx-auto" alt="Down Icon"></img>
                </button>
            </div>

            <div className="flex flex-col items-center ml-[-50px]">
                <p>:</p>
            </div>

            <div className="flex flex-col items-center ml-[-80px]">
                <button className="px-3 py-1 focus:outline-none" onClick={() => handleMinuteChange(-1)}>
                    <img src="upload.png" className="h-[30px] w-[30px] mx-auto" alt="Up Icon"></img>
                </button>

                <div className="p-3">{minute.toString().padStart(2, '0')}</div>
                    <button className="px-3 py-1 focus:outline-none" onClick={() => handleMinuteChange(1)}>
                        <img src="down-arrow.png" className="h-[30px] w-[30px] mx-auto" alt="Down Icon"></img>
                    </button>
                </div>


                <div className="flex flex-col items-center m-[-30px]">
                    <button className="px-3 py-1 focus:outline-none"  onClick={() => setIsAM(true)} disabled={isAM}>
                        <img src="upload.png" className="h-[30px] w-[30px] mx-auto" alt="Up Icon"></img>
                    </button>
                    <div className="p-3">{isAM ? 'AM' : 'PM'}</div>
                        <button className="px-3 py-1 focus:outline-none" onClick={() => setIsAM(false)} disabled={!isAM}>
                            <img src="down-arrow.png" className="h-[30px] w-[30px] mx-auto" alt="Down Icon"></img>
                        </button>
                    </div>
                </div>
            </div>
    
  );
};

export default TimeSelector;