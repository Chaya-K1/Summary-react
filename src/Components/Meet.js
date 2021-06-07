import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import  "../css/Meet.css";


function mapStateToProps(state) {
    return { dateTurn: state.dateTurn };
}


export default connect(mapStateToProps)(function Meet(props) {
    const { dateTurn } = props
    const [smShow, setSmShow] = useState(true);
    const { check } = props
    function saveMeeting() {
        check(false)
    }


    return (
        <>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                onClose={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Appointment
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type='text' placeholder='Enter your name' className="form-control style"></input>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn' variant="primary" onClick={saveMeeting}>
                        Save Meeting
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
})