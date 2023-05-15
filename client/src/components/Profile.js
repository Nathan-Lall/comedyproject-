import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { DELETE_COMEDIAN, UPDATE_COMEDIAN } from "../utils/mutations";
import ComedianModal from "./ComedianModal";
import ShowModal from "./ShowModal";

const Profile = ({
	                 firstName,
	                 lastName,
	                 shows,
	                 refetch,
	                 activeComedianId,
	                 setActiveComedianId,
                 }) => {
	const [updateModalOpen, setUpdateModalOpen] = useState(false);
	const [showModalOpen, setShowModalOpen] = useState(false);
	const [localFirstName, setFirstName] = useState('');
	const [localLastName, setLastName] = useState('');

	const [updateComedian] = useMutation(UPDATE_COMEDIAN);
	const [deleteComedian] = useMutation(DELETE_COMEDIAN);

	const handleSubmit = async (event) => {
		event.preventDefault();
		await updateComedian({
			variables: {
				firstName: localFirstName,
				lastName: localLastName,
				comedianId: activeComedianId,
			},
		});
		await refetch();
		setUpdateModalOpen(false);
	};

	const handleDelete = async (event) => {
		event.preventDefault();
		await deleteComedian({
			variables: {
				comedianId: activeComedianId,
			},
		});
		await refetch();
		setUpdateModalOpen(false);
		setActiveComedianId(null);
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				flexDirection: "column",
				height: "90vh",
			}}
		>
			<ComedianModal
				handleSubmit={handleSubmit}
				isOpen={updateModalOpen}
				onClose={() => {
					setFirstName("");
					setLastName("");
					setUpdateModalOpen(false);
				}}
				firstName={localFirstName}
				lastName={localLastName}
				setLastName={setLastName}
				setFirstName={setFirstName}
			/>
			<ShowModal
				comedianId={activeComedianId}
				refetch={refetch}
				onClose={() => setShowModalOpen(false)}
				isOpen={showModalOpen}
			/>
			<div>
				<div
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
						fontSize: "28px",
						fontWeight: "bold",
					}}
				>
					{firstName} {lastName}
				</div>
				{shows?.length ? (
					<div style={{ display: "flex", flexDirection: "row" }}>
						{shows?.map((show, index) => {
							return (
								<Card
									key={index}
									style={{
										width: "18rem",
										marginRight: "10px",
										margin: "10px",
									}}
								>
									<Card.Body>
										<Card.Title>{show.venue}</Card.Title>
										<Card.Text>Date: {show.date}</Card.Text>

										<Card.Text>City: {show.city}</Card.Text>

										<Card.Text>Time: {show.time}</Card.Text>
									</Card.Body>
								</Card>
							);
						})}
					</div>
				) : (
					<div
						style={{
							display: "flex",
							width: "100%",
							justifyContent: "center",
							alignItems: "center",
							fontSize: "20px",
							fontWeight: "bold",
						}}
					>
						No Upoming Shows
					</div>
				)}
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
					paddingBottom: "10px",
					paddingRight: "10px",
				}}
			>
				<Button onClick={handleDelete} style={{ marginRight: "10px" }}>
					Delete Comeidan
				</Button>
				<Button
					style={{ marginRight: "10px" }}
					onClick={() => setUpdateModalOpen(true)}
				>
					Update Comeidan
				</Button>
				<Button onClick={() => setShowModalOpen(true)}>Add Show</Button>
			</div>
		</div>
	);
};

export default Profile;
