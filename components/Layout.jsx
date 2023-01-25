import React from 'react'
import Nav from './Nav'

const Layout = ({children}) => {
  return (
	<div className='flex flex-col md:flex-row'>
		<Nav />
		{children}
	</div>
  )
}

export default Layout