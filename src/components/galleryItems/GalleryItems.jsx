import React from "react";
import GalleryCard from '../../components/galleryCard/GalleryCard';

function GalleryItems() {
  const galleryItems = [
    {
        id: 1,
        name: "Home",
    },
    {
        id: 2,
        name: "Family",
    },
    {
        id: 3,
        name: "Deer",
    },
    {
        id: 4,
        name: "Standoff",
    },
    {
        id: 5,
        name: "Home",
    },
    {
        id: 6,
        name: "Family",
    },
    {
        id: 7,
        name: "Deer",
    },
    {
        id: 8,
        name: "Standoff",
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
