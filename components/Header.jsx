import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState, sidebarStatus } from "../recoil"

import Cart from "./Cart";




function Header() {
	const setcart = useSetRecoilState(cartState);

    const sidebar = useRecoilValue(sidebarStatus);
    const setSidebar = useSetRecoilState(sidebarStatus)

    

    const changeCartState = () => {
        setcart((oldValue) =>
            !oldValue
        );
    }

    return (
        <div className="sticky top-0 bg-white">
            <div className="h-max w-full md:max-w-6xl m-auto border-b-[1px] border-[hsl(223, 64%, 98%)] pl-[10px] md:px-4 flex items-stretch justify-between">
                <div className="flex gap-[10px] md:gap-8 grow items-center md:items-stretch md:pt-10">
                    <img src = "/images/icon-menu.svg" alt = "" className="md:hidden" onClick={()=>{
                        setSidebar((oldValue)=>true)
                    }} />
                    <img src = "/images/logo.svg" className="h-3 md:h-6" alt = ""/>
                    <p className = "hidden md:block header-titles ">Collections</p>
                    <p className = "hidden md:block header-titles">Men</p>
                    <p className = "hidden md:block header-titles">Women</p>
                    <p className = "hidden md:block header-titles">About</p>
                    <p className = "hidden md:block header-titles">Contact</p>
                </div>
    {/*  */}
                <div className="flex relative gap-[10px] md:gap-10 items-center justify-center">
                    <div className="flex flex-col items-center justify-items-center">
                        <img src = "/images/icon-cart.svg" className="cursor-pointer h-4 md:h-5 hover:scale-110 transition-all duration-200" onClick={changeCartState} />
                        <Cart />
                    </div>
                    
                    <img  src = "/images/image-avatar.png" className="cursor-pointer h-[45px] md:h-[52px] p-[2px] rounded-full border-[2px] border-white hover:opacity-80 hover:border-[2px] hover:border-[#ff7d1a] transition-all duration-300"/>
                </div>
                
            </div>
        </div>
    )
}

export default Header
