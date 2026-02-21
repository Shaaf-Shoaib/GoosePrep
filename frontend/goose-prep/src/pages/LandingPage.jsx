import React, { useContext, useState } from "react";
import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { LuSparkles, LuChevronRight } from "react-icons/lu";
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    user ? navigate("/dashboard") : setOpenAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#121212] selection:bg-yellow-100">
      <div className="h-[2px] w-full bg-yellow-400/50" />

      {/* Navigation */}
      <nav className="border-b border-black/[0.04] bg-white/70 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/Logo.png" alt="GoosePrep Logo" className="w-8 h-8 object-contain" />
            <span className="text-lg font-semibold tracking-tight">GoosePrep</span>
          </div>
          
          <div className="flex items-center gap-5">
            {user ? <ProfileInfoCard /> : (
              <>
                <button 
                  onClick={() => { setCurrentPage("login"); setOpenAuthModal(true); }}
                  className="text-[13px] font-medium text-gray-500 hover:text-black transition-colors cursor-pointer"
                >
                  Log in
                </button>
                <button
                  onClick={() => { setCurrentPage("signup"); setOpenAuthModal(true); }}
                  className="bg-yellow-400 text-black text-[13px] px-4 py-1.5 rounded-md font-medium hover:bg-yellow-300 transition-all border border-yellow-500/20 cursor-pointer"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

          <div className="container mx-auto px-6 lg:px-12 pt-24 pb-12 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-yellow-200 bg-yellow-50/50 mb-8">
              <LuSparkles className="w-3.5 h-3.5 text-yellow-600" />
              <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-yellow-700">AI Powered</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-medium tracking-[-0.03em] leading-[1.05] mb-8 text-black max-w-4xl mx-auto">
              Ace Co-op Interviews with <br />
              <span className="text-yellow-500 italic font-normal">AI-Powered Learning</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Generate role-specific questions, expand answers when your stuck, and dive deeper into technical concepts. From preperation to offer - GoosePrep is your ultimate interview toolkit.
            </p>

            <div className="flex justify-center mb-20">
              <button
                onClick={handleCTA}
                className="group bg-black text-white px-8 py-3 rounded-md text-[14px] font-medium flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg shadow-black/5 cursor-pointer"
              >
                Get Started <LuChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Large Hero Image */}
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-b from-yellow-200/30 to-transparent blur-2xl opacity-50 -z-10" />
              <div className="relative rounded-xl border border-black/[0.08] bg-white p-2 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)]">
                <img
                  src={HERO_IMG}
                  alt="GoosePrep Interface"
                  className="rounded-lg w-full h-auto border border-black/[0.03]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features*/}
        <section className="relative border-t border-black/[0.04] bg-[#FCFCFA] py-32 mt-12 overflow-hidden">
          {/* Faint Yellow Structural Grid */}
          <div className="absolute inset-0 opacity-[0.2] pointer-events-none" 
               style={{ backgroundImage: `linear-gradient(#E4B429 0.5px, transparent 0.5px), linear-gradient(90deg, #E4B429 0.5px, transparent 0.5px)`, backgroundSize: '120px 120px' }} />
          
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-x-16 gap-y-24">
              {APP_FEATURES.map((feature, index) => {
                const isLarge = index >= 3;
                return (
                  <div 
                    key={feature.id} 
                    className={`flex flex-col items-start group ${isLarge ? 'md:col-span-3' : 'md:col-span-2'}`}
                  >
                    <div className="h-[2px] w-12 bg-yellow-400 mb-8 transition-all duration-500 group-hover:w-full group-hover:bg-yellow-500" />
                    <h3 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-black mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] text-gray-500 leading-relaxed font-light max-w-[90%] group-hover:text-gray-800 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div className="p-1">
          {currentPage === "login" ? <Login setCurrentPage={setCurrentPage} /> : <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;