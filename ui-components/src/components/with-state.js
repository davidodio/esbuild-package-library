import React, { useEffect, useState } from 'react'

export const WithState = () => {
	const [ value, setValue ] = useState('hello')

	useEffect(() => {
		setValue('goodbye')
	}, [ value ])

	return (
		<div>{value}</div>
	)
}