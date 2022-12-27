import React from "react";

import Banner from "../../components/banner/banner";
import Card from "../../components/cards/cards";
import BannerHomeImg from "../../assets/Bg_banner_home.png";

const Home = () => {
  return (
    <div className="Home">
      <Banner src={BannerHomeImg} title={"Chez vous, partout et ailleurs"} />
      <Card />
    </div>
  );
};

export default Home;
{
  /* <div className="accordions">
        <Equipements
          title="Equipements"
          content={
            <ul>
              <li>Climatisation</li>
              <li>Wi-Fi</li>
              <li>Cuisine</li>
              <li>Espace de travail</li>
              <li>Fer à repasser</li>
              <li>Sèche-cheveux</li>
              <li>Cintres</li>
            </ul>
          }
        />
        <Description
          title="Descritpion"
          content={
            <p>
              Vous serez à 50m du canal Saint-martin où vous pourrez
              pique-niquer l'été et à côté de nombreux bars et restaurants. Au
              cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement
              parfait pour les voyageurs en solo et les voyageurs d'affaires.
              Vous êtes à1 station de la gare de l'est (7 minutes à pied).{" "}
            </p>
          }
        />
      </div> */
}
