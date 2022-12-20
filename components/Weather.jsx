import Image from 'next/image'
import React from 'react'

const Weather = ({ data }) => {
	console.log(data)
	return (
		<div>
			<div>
				<div>
					<Image
						alt="/"
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
						width="500"
						height="500"
					/>
				</div>
			</div>
		</div>
	)
}

export default Weather
