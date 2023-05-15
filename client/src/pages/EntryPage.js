import React, { useState, useMemo } from "react";
import "react-bootstrap";
import { Container, Card, ListGroup, Button, Image } from "react-bootstrap";

import { useQuery, useMutation } from "@apollo/client";
import { COMEDIAN_QUERY } from "../utils/queries";
import { CREATE_COMEDIAN } from "../utils/mutations";
import siteLogo from "../comedytopia logo.png";

import Profile from "../components/Profile";
import ComedianModal from "../components/ComedianModal";

const Entrypage = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [createModalOpen, setCreateModalOpen] = useState(false);

	const [activeComedianId, setActiveComedianId] = useState(null);
	const { data, refetch } = useQuery(COMEDIAN_QUERY, {
		fetchPolicy: "cache-and-network",
	});

	const [createComedian] = useMutation(CREATE_COMEDIAN);

	const selectedComedian = useMemo(() => {
		if (!data?.comedians) return null;
		return data?.comedians?.find(
			(comedian) => comedian._id === activeComedianId
		);
	}, [data, activeComedianId]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		await createComedian({
			variables: {
				firstName,
				lastName,
			},
		});
		await refetch();
		setCreateModalOpen(false);
	};

	return (
		<Container fluid style={{ width: "100vw", height: "80vh" }}>
			<ComedianModal
				handleSubmit={handleSubmit}
				isOpen={createModalOpen}
				onClose={() => {
					setFirstName("");
					setLastName("");
					setCreateModalOpen(false);
				}}
				firstName={firstName}
				lastName={lastName}
				setLastName={setLastName}
				setFirstName={setFirstName}
			/>

			<div
				style={{
					display: "flex",
					width: "100%",
					backgroundColor: "#040438",
					height: "200px",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Image
					src={siteLogo}
					style={{ height: "100%", width: "100%", objectFit: "contain" }}
				/>
			</div>

			<Card
				style={{
					float: "left",
					width: "30%",
					backgroundColor: "white",
					height: "80vh",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<ListGroup>
					{data?.comedians?.map((comedian) => {
						const isSelected = comedian._id === activeComedianId;
						return (
							<ListGroup.Item
								style={{ cursor: "pointer" }}
								active={comedian._id === activeComedianId}
								onClick={isSelected ? () => setActiveComedianId(null) :() => setActiveComedianId(comedian._id)}
							>
								{comedian.first_name} {comedian.last_name}
							</ListGroup.Item>
						);
					})}
				</ListGroup>
				<Button onClick={() => setCreateModalOpen(true)}>Enter Comedian</Button>
			</Card>
			<Card
				style={{
					float: "left",
					width: "70%",
					backgroundColor: "white",
					height: "80vh",
				}}
			>
				{activeComedianId ?	<Profile
					setActiveComedianId={setActiveComedianId}
					refetch={refetch}
					activeComedianId={activeComedianId}
					shows={selectedComedian?.shows}
					firstName={selectedComedian?.first_name}
					lastName={selectedComedian?.last_name}
				/> : null}

			</Card>
		</Container>
	);
};

export default Entrypage;
