import React, { useState } from 'react';

const Form = () => {
	const [ ownerState, setOwnerState ] = useState({
		owner: '',
		description: ''
	});

	const handleOwnerChange = (e) =>
		setOwnerState({
			...ownerState,
			[e.target.name]: [ e.target.value ]
		});

	const blankItem = { name: '', description: '' };
	const [ itemState, setItemState ] = useState([ { ...blankItem } ]);

	const addItem = () => {
		setItemState([ ...itemState, { ...blankItem } ]);
	};

	const handleItemChange = (e) => {
		const updatedItems = [ ...itemState ];
		updatedItems[e.target.dataset.idx][e.target.className] = e.target.value;
		setItemState(updatedItems);
	};

	return (
		<form>
			<label htmlFor="owner">Owner</label>
			<input type="text" name="owner" id="owner" value={ownerState.owner} onChange={handleOwnerChange} />
			<label htmlFor="description">Description</label>
			<input
				type="text"
				name="description"
				id="description"
				value={ownerState.owner}
				onChange={handleOwnerChange}
			/>
			<input type="button" value="Add Item" onClick={addItem} />
			{itemState.map((val, idx) => {
				const itemId = `name-${idx}`;
				const descriptionId = `description-${idx}`;
				return (
					<div key={`item-${idx}`}>
						<label htmlFor={itemId}>{`Item #${idx + 1}`}</label>
						<input
							type="text"
							name={itemId}
							data-idx={idx}
							id={itemId}
							className="name"
							onChange={handleItemChange}
						/>
						<label htmlFor={descriptionId}>Description</label>
						<input
							type="text"
							name={descriptionId}
							data-idx={idx}
							id={descriptionId}
							className="description"
							onChange={handleItemChange}
						/>
					</div>
				);
			})}
			<input type="submit" value="Submit" />
		</form>
	);
};
export default Form;
