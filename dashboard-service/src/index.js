import React from 'react'
import reactDom from 'react-dom'
import { Button, WithState } from '@davidodio/ui-components'

const crash = true

const NoCrash = () => (
	<div>
		<h1>No crash</h1>
	</div>
)

const Crash = () => (
	<div>
		<h1>Crash!</h1>	
		<Button>My button</Button>
		<WithState />
	</div>
)

reactDom.render(crash ? <Crash /> : <NoCrash />, document.querySelector('#root'), () => {
  console.log('loaded!')
})
