import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import modalState from "../recoil"


function ModalScreen() {

    // const [dispImage, setDispImage] = useState("/images/image-product-1.jpg");
    const [index, setIndex] = useState(0);

    const imageArray = ["/images/image-product-1.jpg", "/images/image-product-2.jpg", "/images/image-product-3.jpg", "/images/image-product-4.jpg"]

    const modal = useRecoilValue(modalState);
	const setModal = useSetRecoilState(modalState);

    const closeModal = (e) => {
        e.stopPropagation();
        setModal((oldValue) => 
			!oldValue
		);
        console.log("after: ", modal);
    }

    function isSelected(str1, str2) {
        if(str1 == str2) {
            return "selected";
        }
    }

    function isSelectedOrangeBorder(str1, str2) {
        if(str1 == str2) {
            return "orangeBorder";
        }
    }


    return (
        <div className={`${modal?"hidden md:block":"hidden"} fixed overflow-y-scroll scrollbar-hide top-0 bottom-0 left-0 right-0 bg-[#000000ae] transition-all duration-300ms`} onClick = {closeModal}>
            <div className='max-w-[450px] flex flex-col relative m-auto min-h-screen items-center justify-center gap-[30px]'>
                <div className='absolute left-[-20px] bg-white rounded-full cursor-pointer h-[40px] w-[40px] flex items-center justify-center '
                    onClick={(e)=>{
                        e.stopPropagation();
                        if(index > 0)
                            setIndex(index-1);
                    }}
                >
                    {/* <img src = "/images/icon-previous.svg" className='h-[10px]' /> */}
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" className='stroke-black hover:stroke-[#ff7d1a]  transition-all duration-200'><path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                </div>
                <div className='absolute right-[-20px] bg-white rounded-full cursor-pointer h-[40px] w-[40px] flex items-center justify-center' 
                    onClick={(e)=>{
                        e.stopPropagation();
                        if(index < 3)
                            setIndex(index+1);
                    }}
                >
                    {/* <img src = "/images/icon-next.svg" className='h-[10px]' /> */}
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg" className='stroke-black hover:stroke-[#ff7d1a]  transition-all duration-200'><path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                </div>
                <img src = "/images/icon-close.svg" alt = "" className='self-end hover:cursor-pointer hover:fill-black' onClick={closeModal}/>
                <img src ={imageArray[index]} alt = "" className="rounded-3xl" onClick={(e) => {e.stopPropagation()}} />
                <div className="flex self-center justify-between gap-[30px]">
                    <div className={`${isSelectedOrangeBorder(index, "0")} rounded-2xl p-[2px]`}><img src = "/images/image-product-1-thumbnail.jpg" alt = "" onClick={(e) => {e.stopPropagation(); setIndex(imageArray.indexOf("/images/image-product-1.jpg"))}} className={`${isSelected(index, "0")} rounded-xl hover:opacity-80 transition-all duration-200 cursor-pointer`}/></div>
                    <div className={`${isSelectedOrangeBorder(index, "1")} rounded-2xl p-[2px]`}><img src = "/images/image-product-2-thumbnail.jpg" alt = "" onClick={(e) => {e.stopPropagation(); setIndex(imageArray.indexOf("/images/image-product-2.jpg"))}} className={`${isSelected(index, "1")} rounded-xl hover:opacity-80 transition-all duration-200 cursor-pointer`}/></div>
                    <div className={`${isSelectedOrangeBorder(index, "2")} rounded-2xl p-[2px]`}><img src = "/images/image-product-3-thumbnail.jpg" alt = "" onClick={(e) => {e.stopPropagation(); setIndex(imageArray.indexOf("/images/image-product-3.jpg"))}} className={`${isSelected(index, "2")} rounded-xl hover:opacity-80 transition-all duration-200 cursor-pointer`}/></div>
                    <div className={`${isSelectedOrangeBorder(index, "3")} rounded-2xl p-[2px]`}><img src = "/images/image-product-4-thumbnail.jpg" alt = "" onClick={(e) => {e.stopPropagation(); setIndex(imageArray.indexOf("/images/image-product-4.jpg"))}} className={`${isSelected(index, "3")} rounded-xl hover:opacity-80 transition-all duration-200 cursor-pointer`}/></div>
                </div>
            </div>
            
            
        </div>
    )
}

export default ModalScreen
