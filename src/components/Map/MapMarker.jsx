import React from 'react'
import './Marker.scss'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

const MapMarker = ({ marker }) => {
  const [modal, setModal] = React.useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div onClick={toggleModal}>
      <div className="pin" />
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalBody>
          <h3>Current Weather: {marker.current_weather}</h3>
          <ul>
            <li>Likelyhood of an accident: {marker.probability_accident}</li>
            <li>Accidents Happen Most At {marker.hour_most_accidents}</li>
            <li>
              Month The Most Deaths Occur Is In {marker.month_most_accidents}
            </li>
            <li>Most common accident is {marker.most_common_type_collision}</li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default MapMarker
