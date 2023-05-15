import React from 'react';
import { Button, Form, Modal } from "react-bootstrap";

const ComedianModal = ({ handleSubmit, onClose, isOpen, firstName, lastName, setFirstName, setLastName }) => {
	return <Modal show={isOpen} onHide={onClose}>
		<Modal.Header closeButton>
			<Modal.Title>Enter Comedian Info</Modal.Title>
		</Modal.Header>

		<Modal.Body>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter First Name"
						value={firstName}
						onChange={(event) => setFirstName(event.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Last Name"
						value={lastName}
						onChange={(event) => setLastName(event.target.value)}
					/>
				</Form.Group>
				<Button
					style={{ marginRight: "20px" }}
					variant="secondary"
					onClick={onClose}
				>
					Close
				</Button>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Modal.Body>
	</Modal>
};

export default ComedianModal;
