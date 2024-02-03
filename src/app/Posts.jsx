import { useState } from "react";
import SingleProduct from "./SingleProduct";

const Posts = ({ rows }) => {
	const [showModal, setShowModal] = useState(false);
	const [id, setId] = useState(null);

	return (
		<div>
			{rows.map((row, index) => (
				<div key={index}>
					<p>title : {row.title}</p>
					<p>id : {row.id}</p>
					<button
						onClick={() => {
							setShowModal(true);
							setId(row.id);
						}}
					>
						show me
					</button>
				</div>
			))}

			{id && (
				<SingleProduct
					showModal={showModal}
					setShowModal={setShowModal}
					id={id}
				/>
			)}
		</div>
	);
};

export default Posts;
