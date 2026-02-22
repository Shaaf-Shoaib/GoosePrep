import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const ProfileInfoCard = () => {
    const { user, clearUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/");
    };

    const initial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    user && (
    <div className="flex items-center">
        <div className="w-10 h-10 bg-black text-[#E4B429] rounded-full flex items-center justify-center mr-3 font-bold text-lg border border-yellow-400/30">
            {initial}
        </div>
        
        <div>
            <div className="text-[15px] text-black font-bold leading-3">
                {user.name || ""}
            </div>
            <button
                className="text-[#E4B429] text-sm font-semibold cursor-pointer hover:underline hover:text-yellow-600 transition-colors"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    </div>
    )
  )
}

export default ProfileInfoCard