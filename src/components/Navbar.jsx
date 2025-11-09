import React from "react";
import Button from "./Button";
import IconButton from "./IconButton";
const Navbar = () => {
    return (
        <nav className="py-3 border-b border-b-border-EC">
            <div className="container mx-auto">
                <div className="flex justify-between items-center gap-5">
                    <div className="">
                        <a href="#">
                            <img src="/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="flex-1">
                        <ul className="flex item-center gap-6">
                            <li><a href="#" className="font-bold text-[18px] text-black">For You</a></li>
                            <li><a href="#" className="font-bold text-[18px] text-black">Discover</a></li>
                            <li><a href="#" className="font-bold text-[18px] text-black">Livestreams</a></li>
                            <li><a href="#" className="font-bold text-[18px] text-black">Hire</a></li>
                            <li><a href="#" className="font-bold text-[18px] text-black">Jobs</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button Tag ="p" secondary>Log In</Button>
                        <Button Tag="a">Sign In</Button>
                        <span className="h-8 w-px bg-[#E8E8E8]"></span>

                        <IconButton>
                            <img src="/creative.png" alt="creative" />
                        </IconButton>
                        
                        <IconButton>
                            <img src="/adobe.png" alt="adobe" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;