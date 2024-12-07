import React from "react";
import './galleryItems.scss'
import GalleryCard from '../../components/galleryCard/GalleryCard';
import Home from '../../assets/galleryImages/HomeFeature.jpg';
import Family from '../../assets/galleryImages/FamilyFeature.jpg';
import FamilyTies from '../../assets/galleryImages/NAFeature.jpg';
import Standoff from '../../assets/galleryImages/StandoffFeature.jpg';
import TheGreatPrince from '../../assets/galleryImages/TheGreatPrinceFeature.jpg';
import Water from '../../assets/galleryImages/WaterFeature.jpg';
import Withhold from '../../assets/galleryImages/WithholdFeature.jpg';
import DeerHead from '../../assets/galleryImages/DeerHeadFeature.jpg';



function GalleryItems() {
  const galleryItems = [
    {
        id: 1,
        name: "Home",
        imageSource: Home,
    },
    {
        id: 2,
        name: "Family",
        imageSource: Family,
    },
    {
        id: 3,
        name: "Family Ties",
        imageSource: FamilyTies,
    },
    {
        id: 4,
        name: "Standoff",
        imageSource: Standoff,
    },
    {
        id: 5,
        name: "The Great Prince",
        imageSource: TheGreatPrince,
    },
    {
        id: 6,
        name: "Water",
        imageSource: Water,
    },
    {
        id: 7,
        name: "Withhold",
        imageSource: Withhold,
    },
    {
        id: 8,
        name: "Deer Head",
        imageSource: DeerHead,
    },
  ];

  return (
    <div className='gallery'>
        {galleryItems.map(item => {
            return (<GalleryCard key={item.id} item={item} />)
        })}
    </div>
  );
}

export default GalleryItems;
