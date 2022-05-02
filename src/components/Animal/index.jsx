import React from 'react';
import './style.css';

const Animal = ({ foto, longName, latinName,selectAnimal}) => {

	return (
		<div className="animal" onClick={()=>selectAnimal(longName)}>
		<div className="animal__image">
			<img src={foto} alt={longName} />
			
		</div>
		<div className="animal__desc">
			<div className="animal__name">{longName}</div>
			<div className="animal__latin">{latinName}</div>
		</div>
	</div>
	)
}

export default Animal;