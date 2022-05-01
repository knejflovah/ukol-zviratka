import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {

  const [animals, setAnimals] = useState([]);
  const [displayedAnimal, setDisplayedAnimal] = useState(null);
  const [defaultAnimal, setDefaultAnimal] = useState([]);

  const selectAnimal = (nazev) => { setDisplayedAnimal(nazev) };






  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data.zvirata);
        setDefaultAnimal(data.zvirata[0]);

      });
  }, []);


  const chosenDetail = animals.find(a => a.nazev === displayedAnimal);






  return (
    <>
      <h1>Zvířátka v ZOO</h1>



      <div className="container">
        <AnimalList

          zooAnimal={animals}
          selectAnimal={selectAnimal}


        />

        {displayedAnimal === null ?
          <AnimalDetail
            key={defaultAnimal.nazev}
            foto={defaultAnimal.foto}
            longName={defaultAnimal.nazev}
            latinName={defaultAnimal.nazevLatinsky}
            description={defaultAnimal.popis}
            homeland={defaultAnimal.domovina}
            biotop={defaultAnimal.biotop}
            food={defaultAnimal.potrava}
            size={defaultAnimal.velikost}
            location={defaultAnimal.zoo} />


          : <AnimalDetail
            key={chosenDetail.nazev}
            foto={chosenDetail.foto}
            longName={chosenDetail.nazev}
            latinName={chosenDetail.nazevLatinsky}
            description={chosenDetail.popis}
            homeland={chosenDetail.domovina}
            biotop={chosenDetail.biotop}
            food={chosenDetail.potrava}
            size={chosenDetail.velikost}
            location={chosenDetail.zoo} />

        }



      </div>





    </>
  );
}





render(<App />, document.querySelector('#app'));
