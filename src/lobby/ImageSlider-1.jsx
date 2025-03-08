import { useState, useEffect } from 'react'
import right from './assets/Frame 71.png'
import left from './assets/Frame 72.png'
import Popupmenu from './PopupMenu'

function ImageSlider() {

    

    const allImagesInFolder = import.meta.glob("./assets/bagian 1/*.{png,jpg,jpeg,svg}", {eager: true});
    const allImageInFolderGetPath = Object.values(allImagesInFolder).map(img => img.default);


    const totalImages = allImageInFolderGetPath.length;

    const [image, setImage] = useState(0);
    const [fading, setFading] = useState(false);
    const imagePerPage = 5;
    
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
        
    

        useEffect(() => {
            const isMobileReal = setIsMobile(window.innerWidth < 600);
            window.addEventListener("resize", isMobileReal);
    
            return window.removeEventListener("resize", isMobileReal);
        }, [])

        

    const [conditionElement, isConditionElement] = useState(true);

    function nextImage() {

        setImage((prevImage) => {
            forFading();
            return (prevImage + 1) % totalImages;
        });
        isConditionElement(false);
        
    }
    
    function prevImage() {
        setImage((prevImage) => {
            forFading();
            return (prevImage - 1 + totalImages) % totalImages;
        });
        isConditionElement(false);

        
    }

    function forFading() {
        setFading(true);
        setTimeout(() => {
            setFading(false);
        }, 200);
    }

    const visibleImages = [
        ...allImageInFolderGetPath,
        ...allImageInFolderGetPath
    ].slice(image, image + imagePerPage);

    const myChoice = isMobile ? allImageInFolderGetPath : visibleImages;


    //function untuk pop up
    const [hoveredImage, setHoveredImage] = useState(null);
    


    function popupEvent(event, move) {

        isConditionElement(false);
        
            setTimeout(() => {
                setHoveredImage(move);
                isConditionElement(true);
            }, 100);
            console.log(move);
    }

    function onMouseEnterEvent(event) {


        const imageData = event.currentTarget.querySelector("img");
            imageData.style.opacity = "1";

        
    }

    function onMouseLeaveEvent(event) {


            // setHoveredImage(null);
            // setPopup(null);
            const imageData = event.currentTarget.querySelector("img");
            imageData.style.opacity = "0.7";
        
    }


    return (
        <>
        <div className='imageSlider1'>
            {isMobile ? (<></>) : (<button className='buttonclassImageSlider customclassButtonLeft' onClick={prevImage}><img src={left} /></button>)}
            <div className='imageWrapper'>
            {

            myChoice.map((move, index) => {

                return (
                    <>
                    <div>
                    <button onMouseEnter={(event) => onMouseEnterEvent(event)} onMouseLeave={(event) => onMouseLeaveEvent(event)} onClick={(event) => popupEvent(event.currentTarget.querySelector("img"), move)} className='unset buttonSlider' key={index}>
                    <img className={fading ? "imagesliderthing1 active" : "imagesliderthing1"} src={move} />  
                    </button>
                    <Popupmenu trueState={conditionElement} sourceData={move === hoveredImage ? move : "none"} className={move === hoveredImage ? "popupMenuVisible" : ""} />
                    </div>
                    </>
                    )
            }
            )
            }
            </div>
            {isMobile ? (<></>) : (<button className='buttonclassImageSlider customclassButtonRight' onClick={nextImage}><img src={right} /></button>)}
        </div>
        </>
    )
}

export default ImageSlider