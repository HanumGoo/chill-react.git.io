import { useState } from 'react'
import right from './assets/Frame 71.png'
import left from './assets/Frame 72.png'

function ImageSlider() {

    

    const allImagesInFolder = import.meta.glob("./assets/bagian 3/*.{png,jpg,jpeg,svg}", {eager: true});
    const allImageInFolderGetPath = Object.values(allImagesInFolder).map(img => img.default);

    const imagePerPage = 5;
    const totalImages = allImageInFolderGetPath.length;

    const [image, setImage] = useState(0);
    const [fading, setFading] = useState(false);
    

    function nextImage() {

        setImage((prevImage) => {
            forFading();
            return (prevImage + 1) % totalImages;
        });
        
    }
    
    function prevImage() {
        setImage((prevImage) => {
            forFading();
            return (prevImage - 1 + totalImages) % totalImages;
        });

        
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

    return (
        <>
        <div className='imageSlider2'>
            <button className='buttonclassImageSlider customclassButtonLeft' onClick={prevImage}><img src={left} /></button>
            <div className='imageWrapper'>
            {

            visibleImages.map((move, index) => (
                <>
                <div key={index}>
                <img className={fading ? "imagesliderthing1 active" : "imagesliderthing1"} src={move} />
                </div>
                </>
                ))
            }
            </div>
            <button className='buttonclassImageSlider customclassButtonRight' onClick={nextImage}><img src={right} /></button>
        </div>
        </>
    )
}

export default ImageSlider