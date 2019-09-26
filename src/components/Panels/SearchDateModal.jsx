import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function SearchDateModal ({modal, toggleModal}) {
	return (
		<Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Search For Date</ModalHeader>
          <ModalBody>
						<h3>Info</h3>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>
	)
}

export default SearchDateModal;