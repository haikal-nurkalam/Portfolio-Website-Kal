import React, { useEffect, useState } from 'react';
import Header from "./templates/Header";
import Tribeversity from "../assets/Image/Tribeversity.png";
import Tribelio from "../assets/Image/Tribelio.png";
import Creator from "../assets/Image/Creator.png";
import Tribeliopage from "../assets/Image/Tribeliopage.png";
import TribelioMobile from "../assets/Image/TribelioMobile.png";

const Home = ()=>{
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible menjadi true setelah komponen dimounted
    setIsVisible(true);
  }, []);

    return (
        <div>
            <Header/>
            {/* Hero */}
            <div className={`w-full lg:px-24 md:px-16 px-4 h-screen mx-auto my-auto mt-[-96px] justify-center flex items-center ${isVisible ? 'animate-slide-up' : ''}`}>
                <p className="lg:text-2xl md:text-xl text-base max-w-[900px] md:text-center text-Primary-Text">
                    Haikal Nurkalam, an adept UI/UX Designer and coder hailing from Jakarta, Indonesia. Now UI/UX Designer at Tribelio, Haikal specializes in crafting bespoke, engaging, and impactful digital experiences.
                </p>
            </div>


            {/* Project */}
            <div className="w-full lg:px-24 md:px-16 px-4 flex flex-col gap-8">
                <p className=" lg:text-3xl md:text-2xl text-xl text-Primary-Text">Work</p>
                <div className="grid lg:grid-cols-2 md:grid-cols-2   gap-6 relative">
                    <a href="https://tribeversity.com/" rel="noreferrer" target="_blank">
                        <div className="rounded-xl overflow-clip relative flex flex-col gap-8 bg-Background-Card">
                            <div class="px-6 py-6 flex justify-between items-center">
                                <h1 class=" lg:text-2xl md:text-xl text-lg text-Primary-Text">Tribeversity</h1>
                                <p class=" md:text-base text-sm text-Secondary">
                                2024
                                </p>
                            </div>
                            <img src={Tribeversity} alt="" className="w-full bottom-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" /> 
                        </div>
                    </a>
                    <a href="https://creator.tribelio.com/" rel="noreferrer" target="_blank">
                        <div className="rounded-xl overflow-clip relative flex flex-col gap-8 bg-Background-Card">
                            <div class="px-6 py-6 flex justify-between items-center">
                                <h1 class=" lg:text-2xl md:text-xl text-lg text-Primary-Text">Creator Tribelio</h1>
                                <p class=" md:text-base text-sm text-Secondary">
                                2023
                                </p>
                            </div>
                            <img src={Creator} alt="" className="w-full bottom-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" /> 
                        </div>
                    </a>
                    <a href="https://tribeliopage.com/" rel="noreferrer" target="_blank">
                        <div className="rounded-xl overflow-clip relative flex flex-col gap-8 bg-Background-Card">
                            <div class="px-6 py-6 flex justify-between items-center">
                                <h1 class=" lg:text-2xl md:text-xl text-lg text-Primary-Text">Tribeliopage</h1>
                                <p class=" md:text-base text-sm text-Secondary">
                                2023
                                </p>
                            </div>
                            <img src={Tribeliopage} alt="" className="w-full bottom-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" /> 
                        </div>
                    </a>
                    <a href="https://tribelio.com/" rel="noreferrer" target="_blank">
                        <div className="rounded-xl overflow-clip relative flex flex-col gap-8 bg-Background-Card">
                            <div class="px-6 py-6 flex justify-between items-center">
                                <h1 class=" lg:text-2xl md:text-xl text-lg text-Primary-Text">Tribelio</h1>
                                <p class=" md:text-base text-sm text-Secondary">
                                2022
                                </p>
                            </div>
                            <img src={Tribelio} alt="" className="w-full bottom-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" /> 
                        </div>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.app.tribelio&hl=en&gl=US" rel="noreferrer" target="_blank">
                        <div className="rounded-xl overflow-clip relative flex flex-col gap-8 bg-Background-Card">
                            <div class="px-6 py-6 flex justify-between items-center">
                                <h1 class="lg:text-2xl md:text-xl text-lg text-Primary-Text">Tribelio Mobile</h1>
                                <p class=" md:text-base text-sm text-Secondary">
                                2022
                                </p>
                            </div>
                            <img src={TribelioMobile} alt="" className="w-full bottom-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" /> 
                        </div>
                    </a>
                </div>
            </div>

            {/* Social */}
            <div className="w-full lg:px-24 md:px-16 px-4 py-12 flex flex-col gap-8 bg-[#F7F7F3] mt-[150px]" id="getInTouch">
                <p className=" lg:text-3xl md:text-2xl text-xl text-Primary-Text">Get in Touch</p>
                <div className="grid lg:grid-cols-3  gap-6 relative">
                    <a href="https://www.linkedin.com/in/haikalnurkalam/" target="_blank" rel="noreferrer">
                        <div className="rounded-xl overflow-clip flex justify-between flex-col gap-2 bg-Background-Card-Darker px-6 py-6 transition ease-in-out duration-300 hover:bg-Primary-Text hover:text-white text-Primary-Text ">
                                <h1 class=" md:text-2xl text-xl text-inherit">LinkedIn</h1>
                                <p class=" md:text-base text-sm text-Secondary">
                                See Haikal’s professional post is here
                                </p>
                        </div>
                    </a>
                    <a href="https://haikalnurkalam.medium.com/" target="_blank" rel="noreferrer">
                        <div className="rounded-xl overflow-clip flex justify-between flex-col gap-2 bg-Background-Card-Darker px-6 py-6 transition ease-in-out duration-300 hover:bg-Primary-Text hover:text-white text-Primary-Text ">
                                <h1 class=" md:text-2xl text-xl text-inherit">Medium</h1>
                                <p class=" md:text-base text-sm text-Secondary">
                                See Haikal’s writing in here
                                </p>
                        </div>
                    </a>
                    <a href="https://dribbble.com/haikalnurkalam" target="_blank" rel="noreferrer">
                        <div className="rounded-xl overflow-clip flex justify-between flex-col gap-2 bg-Background-Card-Darker px-6 py-6 transition ease-in-out duration-300 hover:bg-Primary-Text hover:text-white text-Primary-Text ">
                                <h1 class=" md:text-2xl text-xl text-inherit">Dribbble</h1>
                                <p class=" md:text-base text-sm text-Secondary">
                                See Haikal’s exploration design in here
                                </p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="w-full md:px-16 px-4 h-[400px] mx-auto my-auto  justify-center flex items-center">
                <p className=" lg:text-2xl md:text-xl text-base max-w-[900px] text-center text-Primary-Text animate-pulse">If you’re interested to collaboration, let’s get in touch</p>
            </div>
            <div className="w-full md:px-16 px-4 py-6 mx-auto my-auto  justify-center flex items-center ">
                <p className=" lg:text-2xl md:text-xl text-base text-center text-Primary-Text font-bold"> © Kals 2024</p>
            </div>


        </div>
    )
}

export default Home;