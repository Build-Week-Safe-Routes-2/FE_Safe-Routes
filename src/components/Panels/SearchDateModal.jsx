import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'

function SearchDateModal ({modal, toggleModal}) {
	// Setup state for the form

	// Handle Submit
	const submitHandler = e => {
		e.preventDefault()
		axios("https://safest-routes.herokuapp.com/api/data")
		.then(res => console.log(res))
	}
	
	return (
		<Modal isOpen={modal} toggle={toggleModal}>
			<ModalHeader toggle={toggleModal}>Search For Date</ModalHeader>
			<ModalBody>
				<h3>Info</h3>
				
			</ModalBody>
			<ModalFooter>
				<Button color="danger" type="submit" onClick={submitHandler}>Submit</Button>
				<Button color="danger" onClick={toggleModal}>Close</Button>
			</ModalFooter>
		</Modal>
	)
}

export default SearchDateModal;