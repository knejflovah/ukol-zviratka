import React from 'react';
import './style.css';



const AnimalDetail = ({foto, longName, latinName, description, homeland, biotop, food, size, location}) => {

	
	


	return (
		<div className="detail">
			<div className="detail__content">

				<div className="detail__header">
					<img className="detail__image" src={foto} alt={longName}/>
					<div className="detail__title">
						<h2 className="detail__name"><span>{longName}</span></h2>
						<div className="detail__latin"><span>{latinName}</span></div>
					</div>
				</div>

				<div className="detail__info">
					<p className="detail__desc">
						{description}
					</p>

					<div className="detail__items">
						<div className="detail__item">
							<h3>Domovina</h3>
							<p>{homeland}</p>
						</div>
						<div className="detail__item">
							<h3>Biotop</h3>
							<p>{biotop}</p>
						</div>
						<div className="detail__item">
							<h3>Potrava</h3>
							<p>{food}</p>
						</div>
						<div className="detail__item">
							<h3>Velikost</h3>
							<p>{size}</p>
						</div>
					</div>

					<div className="detail__zoo">
						<h3>Najdete v těchto ZOO</h3>
						<p>{location}</p>
					</div>
				</div>

			</div>
		</div>
	)
}

export default AnimalDetail;