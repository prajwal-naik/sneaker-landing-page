import {
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
	useSetRecoilState,
} from 'recoil';

const modalState = atom({
	key: 'modalState', // unique ID (with respect to other atoms/selectors)
	default: false, // default value (aka initial value)
});

export const cartState = atom({
	key: "cartState",
	default: false,
});

export const cartContent = atom({
	key: "cartContent",
	default: [
		
	]
})

export const sidebarStatus = atom({
	key: "sidebarStatus",
	default: false,
})

// export { modalState, cartState }

export default modalState;
