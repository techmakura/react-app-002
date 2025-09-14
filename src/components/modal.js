import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalComponent = (props) => {
    const { title, body, close, save, onSave, onCancel } = props;

    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        onCancel();
    };

    const handleSave = () => {
        onSave();
        setShow(false);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {close}
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        {save}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComponent;
