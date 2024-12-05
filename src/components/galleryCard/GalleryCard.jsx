import { useState, useRef } from 'react'
import './galleryCard.scss';

function GalleryCard() {
    const [hoverClass, setHoverClass] = useState('')
    const galleryItems = [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "Family"
        }
    ]

    const getHoverDirection = (e) => {
        var directions = ['top', 'right', 'bottom', 'left'];
        var item = e.target

        var w = item.offsetWidth;
        var h = item.offsetHeight;

        var x = (e.clientX - item.getBoundingClientRect().left - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.clientY - item.getBoundingClientRect().top - (h / 2)) * (h > w ? (w / h) : 1);
        
        var d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        
        return directions[d];
    }

    const showName = (e) => {
        console.log(e)
        let direction = getHoverDirection(e)
        setHoverClass(`mouseenter ${direction}`)
    }

    const hideName = (e) => {
        console.log(e)
        let direction = getHoverDirection(e)
        setHoverClass(`mouseleave ${direction}`)
    }

    return (
        <div className='gallery'>
            {galleryItems.map(item => {
                return (<div 
                    key={item.id}
                    onMouseEnter={(e) => showName(e)} 
                    onMouseLeave={(e) => hideName(e)}
                    className={`gallery__card ${hoverClass}`}>
                        <div className='gallery__card-main'></div>
                        <img className='gallery__card-main' src="" alt="" />
                        <div className='gallery__card-overlay'>{item.name}</div>
                </div>)
            })}
            
        </div>
    )
}

export default GalleryCard