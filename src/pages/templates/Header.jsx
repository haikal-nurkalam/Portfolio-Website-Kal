import React, { useEffect, useState } from 'react';

const Header = () =>{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Set isVisible menjadi true setelah komponen dimounted
      setIsVisible(true);
    }, []);
    return(
        <div>
            <div className={`w-full lg:px-16 px-4 my-8 ${isVisible ? 'animate-slide-up' : ''} scroll-smooth`}>
                <div className="flex gap-8 items-center justify-between">
                    <h1 className="font-bold lg:text-3xl md:text-2xl text-xl uppercase text-Primary-Text">Kals</h1>
                    <a href="#getInTouch" className="lg:text-lg text-sm text-Primary-Text">Get in Touch</a>
                </div>
            </div>
        </div>
    )
}

export default Header;