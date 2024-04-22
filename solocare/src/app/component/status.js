import { useState, useEffect } from 'react';

const StatusUpdate = ({ onSave, onClose }) => {
    const [status, setStatus] = useState();


        const handleSave = () => {
            onSave(status);
            onClose(); 
        };

    
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white rounded-2xl shadow-xl w-[400px] h-[420px]">
            <div  className="flex items-center justify-center">
                <div className="bg-blue-900 text-white px-8 py-4 rounded-t-2xl w-full h-[50px] overflow-hidden">
                    <h2 className="text-sm text-center font-medium">Update Status</h2>
                </div>
            </div>

            <div className="w-full">
                <p className="text-primary text-xl text-center mt-4 font-bold">(Name) (M.N) (Surname)</p>
                <img src="account.png"className="w-[120px] h-[120px] block mx-auto mt-[10px]"></img>
            </div>

            <div className="w-full flex items-center justify-center pt-7">
                <label className="inline-flex items-center cursor-pointer">
                    <label htmlFor="active" className="pr-[70px] text-lg">Active</label>
                    <input
                        type="checkbox"
                        id="active"
                        value="active"
                        className="w-[20px] h-[25px] border-[1px] border-blue-900/60 rounded-md "
                        checked={status === 'active'}
                        onChange={() => setStatus('active')}>                      
                    </input>
                </label>
            </div>

            <div className="w-full flex items-center justify-center pt-4">
                <label className="inline-flex items-center cursor-pointer">
                    <label htmlFor="inactive" className="pr-[57px] text-lg">Inactive</label>
                    <input
                    type="checkbox"
                    id="inactive"
                    value="inactive"
                    checked={status === 'inactive'}
                    onChange={() => setStatus('inactive')}
                    className="w-[20px] h-[25px] border-[1px] border-blue-900/60 rounded-md ">
                    </input>
                </label>
            </div>

            <div className="mt-7">
                <button className="bg-blue-900 hover:bg-blue-700 text-white rounded-md" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    </div>

        

        
       
    
 
  );
};

export default StatusUpdate;
