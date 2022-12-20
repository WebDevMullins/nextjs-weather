import axios from 'axios'
import Head from 'next/head'
import Image from 'next/legacy/image'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Design from '../components/Design'
import Weather from '../components/Weather'

export default function Home() {
	const [city, setCity] = useState('')
	const [weather, setWeather] = useState({})

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_API_KEY}`

	const fetchWeather = (e) => {
		e.preventDefault()
		axios.get(url).then((response) => {
			setWeather(response.data)
		})
		setCity('')
	}

	return (
		<>
			<Head>
				<title>Weather Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Design />
			{/* Search */}
			<div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 z-10 text-white'>
				<form
					onSubmit={fetchWeather}
					className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 rounded-2xl text-white'>
					<div>
						<input
							onChange={(e) => setCity(e.target.value)}
							className='bg-transparent focus:outline-none text-white text-2xl border-none'
							type='text'
							placeholder='Search City'
							value={city}
						/>
					</div>
					<button type='submit' onClick={fetchWeather}>
						<BsSearch size={20} />
					</button>
				</form>
			</div>
			{/* Weather */}
			{weather.main && <Weather data={weather} />}
		</>
	)
}
