import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { CREATE_SHOW } from "../utils/mutations";

const ComedianModal = ({ onClose, isOpen, refetch, comedianId }) => {
	const [date, setDate] = useState("");
	const [city, setCity] = useState("");
	const [venue, setVenue] = useState("");
	const [time, setTime] = useState("");

	const [createShow] = useMutation(CREATE_SHOW);

	const onCreateShow = async (event) => {
		event.preventDefault();
		await createShow({
			variables: {
				date,
				city,
				venue,
				time,
				comedian: comedianId,
			},
		});

		await refetch();
		onClose();
	};

	return (
		<Modal show={isOpen} onHide={onClose}>
			<Modal.Header closeButton>
				<Modal.Title>Enter Show Info</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Form onSubmit={onCreateShow}>
					<Form.Group className="mb-3" controlId="date">
						<Form.Label>Date</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Show Date"
							value={date}
							onChange={(event) => setDate(event.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="city">
						<Form.Label>City / State</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Show City, State"
							value={city}
							onChange={(event) => setCity(event.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="venue">
						<Form.Label>Show Venue</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Show Venue"
							value={venue}
							onChange={(event) => setVenue(event.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="time">
						<Form.Label>Time</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Show Time"
							value={time}
							onChange={(event) => setTime(event.target.value)}
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
	);
};

export default ComedianModal;
