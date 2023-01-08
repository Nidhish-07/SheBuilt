import React from "react";
import { SiGooglescholar } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss"
import { provider, auth } from "../../config.js"

const Navbar = () => {

    const authHandler = async () => {
        // const provider = new GoogleAuthProvider()
         auth.signInWithPopup( provider).then(res => console.log(res)).catch(err => alert(err))
        


    }


    return (
        <div className="fixed inset-0 h-16 bg-[#f7f2fa] flex justify-between items-center py-0 px-9 tracking-[2px] z-10">
            <div className="p-0 w-20 mt-1 max-h-16 inline-block text-3xl font-black ">
                LOGO
            </div>
            <div className="flex items-center flex-row flex-nowrap h-full justify-end m-0 p-0 relative mx-auto  ml-14 tablet:hidden gap-6">
                <Link to="/home" className="flex gap-2 items-center z-auto py-0 px-3 hover:bg-fuchsia-200 duration-500 rounded-lg">
                    <AiFillHome size={24} />
                    <p className={`text-gray-500 font-medium text-lg tracking-[1.4px] leading-[1.1] py-1 px-0 whitespace-nowrap relative ${styles.underline_animation}`}>Home</p>
                </Link>
                <Link to="/" className="flex gap-2 items-center z-auto py-0 px-3 hover:bg-fuchsia-200 duration-500 rounded-lg">
                    <MdWork size={24} />
                    <p className={`text-gray-500 font-medium text-lg tracking-[1.4px] leading-[1.1] py-1 px-0 whitespace-nowrap relative ${styles.underline_animation}`}>Jobs</p>
                </Link>
                <Link to="/" className="flex gap-2 items-center z-auto py-0 px-3 hover:bg-fuchsia-200 duration-500 rounded-lg ">
                    <HiAcademicCap size={24} />
                    <p className={`text-gray-500 font-medium text-lg tracking-[1.4px] leading-[1.1] py-1 px-0 whitespace-nowrap relative ${styles.underline_animation}`}>Courses</p>
                </Link>
                <Link to="/" className="flex gap-2 items-center z-auto py-0 px-3 hover:bg-fuchsia-200 duration-500 rounded-lg ">
                    <SiGooglescholar size={24} />
                    <p className={`text-gray-500 font-medium text-lg tracking-[1.4px] leading-[1.1] py-1 px-0 whitespace-nowrap relative ${styles.underline_animation}`}>Scholarships</p>
                </Link>

            </div>
            <Link to={"/"}>

                <div className="bg-transparent border-[1.5px] rounded-md border-solid border-fuchsia-500  py-2 px-4 uppercase tracking-[1.5px]  transition-all duration-500 ease-out hover:bg-fuchsia-500 hover:text-white hover:border-transparent" onClick={authHandler}>Login</div>
            </Link>
        </div>
    );
};

export default Navbar;
