import Head from 'next/head'
import DisplayScreen from '../components/DisplayScreen'
import Header from '../components/Header'
import ModalScreen from '../components/ModalScreen'





export default function Home() {

	// const [modal, setModal] = useRecoilState(modalState);
	
	

	return (
		<div className="h-screen flex flex-col">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<DisplayScreen />
			<ModalScreen />
		</div>
	)
}
