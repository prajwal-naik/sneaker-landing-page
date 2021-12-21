import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartContent, cartState } from "../recoil";
import FadeIn from 'react-fade-in';

function Cart() {

    const cart = useRecoilValue(cartState);
	const setcart = useSetRecoilState(cartState);

    const cartItems = useRecoilValue(cartContent);
    const setCartItems = useSetRecoilState(cartContent);


    if (cartItems.length) {
        return (
            // <FadeIn>
            <div className={`${!cart?"hidden":"block fixed left-0 right-0 top-[60px] w-[100%] md:inline-block"} md:w-max bg-white md:absolute md:top-20 rounded-[10px] shadow:3xl md:shadow-2xl`}>
                <div className="p-4 text-[15px] font-[700] border-b-[1px] border-[hsl(223, 64%, 98%)]">
                    <p>Cart</p>
                </div>
                
                <div className="p-4">
                    {
                        cartItems.map((cartItem) => {
                            return(
                                <div key={cartItem.pid} className="flex items-center justify-center gap-[20px]">
                                    <img src = {cartItem.icon} className="h-[70px] rounded-lg"/>
                                    <div className="">
                                        <p className="capitalize font-[500] text-[#7d8188]">{cartItem.name}</p>
                                        <p className="font-[500] text-[#7d8188]">${cartItem.rate} x {cartItem.quantity} <span className="text-black font-[700]">${cartItem.rate*cartItem.quantity}</span></p>
                                    </div>
                                    <img src = "/images/icon-delete.svg" />
                                </div>
                                
                            );
                            
                        })
                    }
                </div>
                <div className="mx-4 mb-4 bg-[#ff7d1a] rounded-lg text-white p-2 text-center cursor-pointer">
                    <p>Checkout</p>
                </div>
            </div>
            // </FadeIn>
        )
    }
    else
        return(
            <div className={`${!cart?"hidden":"inline-block"} min-w-[300px] bg-white absolute top-20 rounded-[10px] shadow-2xl`}>
                <div className="p-4 text-[15px] font-[700] border-b-[1px] border-[hsl(223, 64%, 98%)]">
                    <p>Cart</p>
                </div>
                
                <p className="p-4 text-center">Your cart is empty</p>
            </div>
        )
}

export default Cart
