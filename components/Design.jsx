import Image from 'next/legacy/image'
import React from 'react'

const Design = () => {
	return (
		<>
			{/* Overlay */}
			<div className='absolute top-0 left-0 right-0 bottom-0 z-[1] bg-black/40'></div>
			{/* Background */}
			<Image
				src='https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'
				alt=''
				layout='fill'
				className='object-cover'
			/>
		</>
	)
}

export default Design
