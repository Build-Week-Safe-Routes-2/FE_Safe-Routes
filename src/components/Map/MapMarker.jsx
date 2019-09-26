import React from "react";
import "./Marker.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MapMarker = props => {
	const { name, lat, lng} = props;
	const [modal, setModal] = React.useState(false)

	const toggleModal = () => {
		setModal(!modal)
	}

  return (
    <div onClick={toggleModal}>
      <div
        className="pin"
      />
			<Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>{name}</ModalHeader>
          <ModalBody>
						<h3>Info</h3>
            <ul>
							<li>{lat}</li>
							<li>{lng}</li>
						</ul>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>
    </div>
  );
};

export default MapMarker;
