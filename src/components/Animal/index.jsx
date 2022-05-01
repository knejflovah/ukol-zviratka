import React from 'react';
import './style.css';

const Animal = ({ foto, longName, latinName,selectAnimal}) => {

	return (
		<div class="animal" onClick={()=>selectAnimal(longName)}>
		<div class="animal__image">
			<img src={foto} alt={longName} />
			
		</div>
		<div class="animal__desc">
			<div class="animal__name">{longName}</div>
			<div class="animal__latin">{latinName}</div>
		</div>
	</div>
	)
}

export default Animal;