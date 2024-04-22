import { useState } from 'react';


const UpdateStatus = ({ onDeny, onApprove, onClose }) => {
  const [status, setStatus] = useState('Update Status');
  const [isVisible, setIsVisible] = useState(true);

  const handleDeny = () => {
    setIsVisible(false);
    setStatus('Denied');
    onDeny();
  };

  const handleApprove = () => { 
    setIsVisible(false);
    setStatus('Approved');
    onApprove();
  };

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };


  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white w-[600px] h-[300px]">
            <div className="flex">
                <div className="bg-blue-900 px-4 py-2 w-full h-[35px] overflow-hidden flex">
                    <h2 className="text-sm text-white text-start font-semibold">Update Status</h2>
                </div>

                <div className="bg-blue-900 px-4 py-2 overflow-hidden">
                    <img src="cross.png" className="h-[18px] w-[18px] flex items-end justify-end cursor-pointer" onClick={handleClose}></img>
                </div>
            </div>

            <div className="px-4 py-2">
                <p className="text-primary text-sm font-semibold">Solo Parent Information</p>
            </div>

            <div className="px-20 py-10 text-justify">
                <p className="text-primary font-light text-sm">Name <span className="ml-9 text-sm text-black font-light">(surname), (first name) (middle name)</span></p>
                <p className="text-primary font-light text-sm">Address <span className="ml-5 text-sm text-black font-light">(block #), (lot #), (street), (baranggay), (city)</span></p>
                <p className="text-primary font-light text-sm">Contact <span className="ml-6 text-sm text-black font-light">(0900 000 0000)</span></p>
            </div>


        <div className="flex items-center justify-center mt-4">
          <button className="mr-2 bg-red-700 text-[12px] font-bold text-white px-2 py-1 rounded hover:bg-red-600 h-7 w-[120px]" onClick={handleDeny}>
            Denied
          </button>
          <button className="bg-green-700 text-[12px] font-bold text-white px-2 py-1 rounded hover:bg-green-600 h-7 w-[120px]" onClick={handleApprove}>
            Approved
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateStatus;
