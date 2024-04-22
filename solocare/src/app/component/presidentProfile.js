const ProfilePopup = ({ onClose, onSignOut  }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white rounded-2xl shadow-xl w-[400px] h-[450px]">
            <div  className="flex items-center justify-center">
                <div className="bg-blue-900 text-white px-8 py-4 rounded-t-2xl w-full h-[60px] overflow-hidden">
                    <h2 className="text-base text-center font-semibold">BARANGAY (BRGY) PRESIDENT</h2>
                </div>
            </div>

            <div className="w-full">
                <img src="account.png"className="w-[120px] h-[120px] block mx-auto mt-[20px]"></img>
                <p className="text-black/80 text-lg text-center mt-2 font-semibold">ID: <span className="text-black/80 text-lg text-center">01-23456 </span></p>
                <p className="text-black/80 text-base text-center mt-3">(Name) (M.I) (Surname)</p>
                <p className="text-black/80 text-sm text-center mt-3">Barangay (Barangay)</p>
            </div>

            <button onClick={onClose} className="text-lg font-bold text-gray-600/70 mt-[50px]">
                Close
            </button>

            <div>
                <hr className="border-2 mt-[-5px]"></hr>
            </div>

            <button onClick={onSignOut} className="text-lg font-extrabold text-blue-900">
                Sign Out
            </button>
            
            
          
          
          
        </div>
      </div>
    );
  };
  
  export default ProfilePopup;