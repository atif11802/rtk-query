const Posts = ({ rows }) => {
	return (
		<div>
			{rows.map((row, index) => (
				<div key={index}>title : {row.title}</div>
			))}
		</div>
	);
};

export default Posts;
