import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Weather from '../components/Weather'

export default function Home() {
	const [city, setCity] = useState('')
	const [weather, setWeather] = useState({})
	const [loading, setLoading] = useState(false)

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_API_KEY}`

	const fetchWeather = (e) => {
		e.preventDefault()
		setLoading(true)
		axios.get(url).then((response) => {
			setWeather(response.data)
		})
		setCity('')
		setLoading(false)
	}

	return (
		<>
			<Head>
				<title>Weather Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* Overlay */}
			<div className="absolute top-0 left-0 right-0 bottom-0 z-[1] bg-black/40"></div>
			{/* Background */}
			<Image
				src="https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
				alt=""
				layout="fill"
				className="object-cover"
			/>
			{/* Search */}
			<div className="relative flex justify-between items-center max-w-[600px] w-full m-auto pt-4 z-10 text-white">
				<form
					onSubmit={fetchWeather}
					className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 rounded-2xl text-white">
					<div>
						<input
							onChange={(e) => setCity(e.target.value)}
							className="bg-transparent focus:outline-none text-white text-2xl border-none"
							type="text"
							placeholder="Search City"
						/>
					</div>
					<button onClick={fetchWeather}>
						<BsSearch size={20} />
					</button>
				</form>
			</div>
			{/* Weather */}
			{weather.main && <Weather data={weather} />}
		</>
	)
}
