import { useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil";
import modalState, { cartContent, sidebarStatus } from "../recoil"

function DisplayScreen() {

    const pid_disp = 1;

    const [units, setUnits] = useState(0);
    const [dispImage, setDispImage] = useState("/images/image-product-1.jpg");

    const modal = useRecoilValue(modalState);
	const setModal = useSetRecoilState(modalState);

    const cartItems = useRecoilValue(cartContent);
    const setCartItems = useSetRecoilState(cartContent);

    const sidebar = useRecoilValue(sidebarStatus);
    const setSidebar = useSetRecoilState(sidebarStatus)


    const addItem = () => {
        var temp = JSON.parse(JSON.stringify(cartItems));
        // console.log("Before adding: ", temp);
        // console.log("Length: ", temp.length)
        // console.log("Units: ", units);
        if(!temp.length) {
            setCartItems((oldValue) => [
                ...oldValue,
                {
                    pid: 1,
                    name: "fall limited edition sneakers",
                    rate: 125,
                    quantity: units,
                    icon:"/images/image-product-1-thumbnail.jpg"
                },
            ])
        }
        else{
            for(var i = 0; i < temp.length; ++i) {
                if(temp[i].pid === pid_disp) {
                    // console.log("found")
                    temp[i].quantity = temp[i].quantity + units;
                    break;
                }
            }
            // console.log("temp: ", temp);
            setCartItems((oldValue) => 
                temp
            );
        }
        
        // console.log("After adding: ", temp);
    }

    function increaseUnits() {
        setUnits(units+1);
    }

    function decreaseUnits() {
        if(units > 0)
            setUnits(units-1);
    }

    

    function isSelected(str1, str2) {
        if(str1 === str2) {
            return "selected";
        }
    }

    function isSelectedOrangeBorder(str1, str2) {
        if(str1 === str2) {
            return "orangeBorder";
        }
    }

    

	const changeModalDisplay = () => {
		console.log("Before: ", modal);
		setModal((oldValue) => 
			!oldValue
		);
    }

    return (
        <div className="grow items-center justify-center">
            <div className={`${sidebar?"block":"hidden"} md:hidden fixed top-0 left-0 right-0 bottom-0 h-screen bg-[#000000a4]`}>
                <div className="h-screen w-min flex flex-col gap-[20px] bg-white p-[20px]">
                    <img src = "/images/icon-close.svg" className="h-4 w-4 mb-[20px] cursor-pointer" 
                        onClick={()=>{
                            setSidebar((oldValue)=>false)
                        }}
                    />
                    <p className="pr-[30px] header-titles border-0 hover:border-0">Collections</p>
                    <p className="pr-[30px] header-titles border-0 hover:border-0">Men</p>
                    <p className="pr-[30px] header-titles border-0 hover:border-0">Women</p>
                    <p className="pr-[30px] header-titles border-0 hover:border-0">About</p>
                    <p className="pr-[30px] header-titles border-0 hover:border-0">Contact</p>
                </div>
                

            </div>
            <div className="h-full max-w-5xl m-auto md:grid grid-cols-2">
                <div className="flex flex-col gap-6 items-center justify-center md:px-[50px]">
                    <img src ={dispImage} alt = "" className="w-full md:rounded-3xl cursor-pointer" onClick={changeModalDisplay}/>
                    <div className="hidden md:flex self-stretch justify-between">
                        <div className={`${isSelectedOrangeBorder(dispImage, "/images/image-product-1.jpg")} rounded-2xl p-[2px]`}><img src = "/images/image-product-1-thumbnail.jpg" alt = "" onClick={() => {setDispImage("/images/image-product-1.jpg")}} className={`${isSelected(dispImage, "/images/image-product-1.jpg")} h-[80px] rounded-xl hover:opacity-80 transition-all duration-200 cursor-pointer`}/></div>
                        <div className={`${isSelectedOrangeBorder(dispImage, "/images/image-product-2.jpg")} rounded-2xl p-[2px]`}><img src = "/images/image-product-2-thumbnail.jpg" alt = "" onClick={() => {setDispImage("/images/image-product-2.jpg")}} className={`${isSelected(dispImage, "/images/image-product-2.jpg")} h-[80px] rounded-xl hover:opacity-80 transition-all duration-200 cursor-pointer`}/></div>
                        <div className={`${isSelectedOrangeBorder(dispImage, "/images/image-product-3.jpg")} rounded-2xl p-[2px]`}><img src = "/images/image-product-3-thumbnail.jpg" alt = "" onClick={() => {setDispImage("/images/image-product-3.jpg")}} className={`${isSelected(dispImage, "/images/image-product-3.jpg")} h-[80px] rounded-xl hover:opacity-80 transition-all duration-200 cursor-pointer`}/></div>
                        <div className={`${isSelectedOrangeBorder(dispImage, "/images/image-product-4.jpg")} rounded-2xl p-[2px]`}><img src = "/images/image-product-4-thumbnail.jpg" alt = "" onClick={() => {setDispImage("/images/image-product-4.jpg")}} className={`${isSelected(dispImage, "/images/image-product-4.jpg")} h-[80px] rounded-xl hover:opacity-80 transition-all duration-200 cursor-pointer`}/></div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 md:gap-6 justify-center break-word px-[20px] md:px-[50px]">
                    <p className="uppercase text-[#ff7d1a] font-[700] pt-[20px] md:pt-0">Sneaker company</p>
                    <p className="text-[30px] md:text-[45px] font-[600] text-[#1d2025] leading-[35px] md:leading-[50px] md:mb-[20px]">Fall Limited Edition Sneakers</p>
                    <p className="font-[500] text-[#7d8188]">These low-profile sneakers are your perfect casual wear companion. Featuring a 
                        durable rubber outer sole, they'll withstand everything the weather can offer.
                    </p>
                    <div className="flex md:flex-col justify-between">
                        <div className="flex items-center gap-[10px] md:gap-[20px]">
                            <p className="text-[22px] md:text-[30px] font-[600] text-[#1d2025] leading-[0px]">$125.00</p>
                            <div className="flex items-center bg-[#ffede0] p-[2px] px-[5px] rounded-[5px] text-[#ff7d1a] font-[700]">50%</div>
                        </div>
                        <p className=" text-[#abafb6] font-[500] line-through">$250.00</p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-[20px] cursor-pointer">
                        <div className="flex bg-[#edeef3] gap-[30px] items-center justify-between md:justify-center px-[20px] rounded-lg">
                            <img src = "/images/icon-minus.svg" alt = "" className="my-[20px] h-[5px] cursor-pointer hover:opacity-80 transition-all duration-300" onClick={decreaseUnits}/>
                            <p className="text-[18px]  md:text-[24px]">{units}</p>
                            <img src = "/images/icon-plus.svg" alt = "" className="my-[20px] h-[15px] w-[15px] cursor-pointer hover:opacity-80 transition-all duration-300" onClick={increaseUnits} />
                        </div>
                        <div className="flex grow items-center justify-center gap-5 bg-[#ff7d1a] px-[20px] py-[15px] mb-[10px] md:mb-0 rounded-lg text-white shadow-2xl shadow-[#fcc39d] hover:opacity-80 transition-all duration-300" onClick={addItem}>
                            <img src = "/images/icon-cart.svg" className="stroke-white cursor-pointer h-5 hover:scale-110 transition-all duration-200 fill-white"/>
                            <p>Add to cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayScreen
