import React from 'react'

function MapNav(){
	const [address, setAddress] = React.useState({address: ""});

	const changeHandler = e => {
		// console.log(e.target.value);
		setAddress({address: e.target.value})
	}

	const submitHandler = e => {
		e.preventDefault()
		console.log(address.address)
	}
	return(
		<div>
			<form onSubmit={submitHandler}>
				<input 
					type="text"
					name="address"
					value={address.address}
					onChange={changeHandler}
				/>
				<button>Submit</button>
			</form>
		</div>
	)
}

export default MapNav;