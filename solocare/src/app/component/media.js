const addMedia = ({ onClose, onSignOut  }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white rounded-2xl shadow-xl w-[1600px] h-[930px]">
            <div  className="flex items-center justify-center">
                <div className="bg-blue-900 text-white px-8 py-4 rounded-t-2xl w-full h-[150px] overflow-hidden">
                    <h2 className="text-4xl text-center font-semibold mt-9">ADMIN (NAME)</h2>
                </div>
            </div>

            <div className="w-full">
                <img src="account.png"className="w-[300px] h-[300px] block mx-auto mt-[50px]"></img>
                <p className="text-black/80 text-4xl text-center mt-10 font-semibold">ID: <span className="text-black/80 text-4xl text-center">01-23456 </span></p>
                <p className="text-black/80 text-4xl text-center mt-7">(Name) (M.I) (Surname)</p>
            </div>

            <button onClick={onClose} className="text-4xl font-bold text-gray-600/70 mt-[70px]">
                Close
            </button>

            <div>
                <hr className="border-2 mt-[-20px]"></hr>
            </div>

            <button onClick={onSignOut} className="text-5xl font-extrabold text-blue-900">
                Sign Out
            </button>
            
            
          
          
          
        </div>
      </div>
    );
  };
  
  export default addMedia;