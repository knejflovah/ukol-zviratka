import React from 'react';
import './style.css';


const AnimalDetail = ({foto, longName, latinName, description, homeland, biotop, food, size, location}) => {



	return (
		<div class="detail">
			<div class="detail__content">

				<div class="detail__header">
					<img class="detail__image" src={foto} alt={longName}/>
					<div class="detail__title">
						<h2 class="detail__name"><span>{longName}</span></h2>
						<div class="detail__latin"><span>{latinName}</span></div>
					</div>
				</div>

				<div class="detail__info">
					<p class="detail__desc">
						{description}
					</p>

					<div class="detail__items">
						<div class="detail__item">
							<h3>Domovina</h3>
							<p>{homeland}</p>
						</div>
						<div class="detail__item">
							<h3>Biotop</h3>
							<p>{biotop}</p>
						</div>
						<div class="detail__item">
							<h3>Potrava</h3>
							<p>{food}</p>
						</div>
						<div class="detail__item">
							<h3>Velikost</h3>
							<p>{size}</p>
						</div>
					</div>

					<div class="detail__zoo">
						<h3>Najdete v těchto ZOO</h3>
						<p>{location}</p>
					</div>
				</div>

			</div>
		</div>
	)
}

export default AnimalDetail;