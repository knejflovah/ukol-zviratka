import React from 'react';
import './style.css';
import Animal from  '../Animal'

const AnimalList = ({zooAnimal, selectAnimal}) => {

    return (
        
        <div className="animal-list" >

            
            {zooAnimal.map((zooAnimal)=>(
<Animal
key ={zooAnimal.id}
foto={zooAnimal.foto}
longName={zooAnimal.nazev}
latinName= {zooAnimal.nazevLatinsky}
selectAnimal={selectAnimal}
/>

            ))}
    </div>
    )
}

export default AnimalList;



