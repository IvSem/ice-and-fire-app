export const Field = ({ item, field, label }) => {
	return (
		<>
			<li className="list-group-item d-flex justify-content-between gap-5">
				<span className="term">{label}</span>
				<span className="text-end">{item[field]}</span>
			</li>
		</>
	);
};
