import React from 'react';
import './Services.css';
import ServiceCard from './ServiceCard';

function Services() {
  return (
    <div className="services-container">
      <h2 className="services-header">Choose Your Birthday Theme</h2>
      <ServiceCard 
        image={'/images/superHero.jpg'} 
        name={"Superhero Adventure"} 
        des={"Transform your child into a superhero for the day! Our superhero adventure includes superhero character appearances, games, and a hero training course."}
      />
      <ServiceCard 
        image={'/images/poolParty.jpg'}
        name={"Pool Party"}
        des={"Make a splash with a pool party! Includes water games, inflatable slides, and poolside snacks."}
      />
      <ServiceCard 
        image={'/images/butterfly.jpg'}
        name={"Butterfly Garden"}
        des={"Create a magical experience with a butterfly-themed garden party. Includes butterfly releases, garden games, and butterfly-themed decorations."}
      />
      <ServiceCard 
        image={'/images/JungleTheme.jpg'}
        name={"Jungle Adventure"}
        des={"Embark on a wild jungle adventure! Includes jungle-themed decorations, animal encounters, and safari games."}
      />
      <ServiceCard 
        image={'/images/mickymouse.jpg'}
        name={"Mickey Mouse Clubhouse"}
        des={"Celebrate with Mickey and friends in our clubhouse! Includes character appearances, games, and Mickey-themed decorations."}
      />
      <ServiceCard 
        image={'/images/butterflyTwo.jpg'}
        name={"Enchanted Garden"}
        des={"Step into an enchanted garden filled with flowers and fairies. Includes fairy character appearances, garden games, and magical decorations."}
      />
      <ServiceCard 
        image={'/images/JungleTwo.jpg'}
        name={"Safari Expedition"}
        des={"Embark on a thrilling safari expedition! Includes safari jeep rides, animal encounters, and adventure games."}
      />
    </div>
  );
}

export default Services;
