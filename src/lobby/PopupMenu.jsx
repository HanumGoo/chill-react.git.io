import { useState } from 'react'
import popupmenuplay from './assets/bagian popupmenu/Vector.png'
import popupmenuplay1 from './assets/bagian popupmenu/Vector (1).png'
import { useEffect } from 'react';

function DropdownMenu({ sourceData, className, trueState }) {

    const [isExit, setIsExit] = useState(trueState);

    useEffect(() => {
        setIsExit(trueState)
    }, [trueState])

    function ExitHandler() {
        setIsExit((prev) => !prev);

    }

    return (
        <div className={`popupMenuImage ${isExit ? className : ""}`}>
            <div>
                <img src={sourceData} className='imagePopupMenu'/>
                <button className='exitbuttonClass' onClick={() => ExitHandler()}>X</button>
            </div>
            <div className='PopupMenuFlex'>
                <div className='centeringClass'>
                    <img src={popupmenuplay} className='playClass' />
                    
                    <button className='checkButtonClass' >✓</button>
                </div>
                <div>
                    <button className='checkButtonClass'><img src={popupmenuplay1} /></button>
                </div>
            </div>
            <div className='PopupMenuFlexCustom'>
                <p className='ageClass'>13+</p>
                <p className='episodeClass'>16 Episode</p>
            </div>
            <div className='PopupMenuFlex'>
                <p className='genreStyle'>Misteri</p>
                <p className='genreStyle'>•</p>
                <p className='genreStyle'>Kriminal</p>
                <p className='genreStyle'>•</p>
                <p className='genreStyle'>Fantasi</p>
            </div>
            
            
        </div>
    )
}

export default DropdownMenu