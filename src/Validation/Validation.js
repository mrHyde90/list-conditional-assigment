import React from 'react';
import './Validation.css';

const Validation = (props) => {

	return(
		<div className="Validation" >
			{props.checar(props.tamano)}
		</div>
	);
};

export default Validation;