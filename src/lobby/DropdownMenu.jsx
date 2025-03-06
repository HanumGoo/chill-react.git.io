import { useState } from 'react'
import profilOn from './assets/bagian profil/profil-on.png'
import star from './assets/bagian profil/star.png'
import exit from './assets/bagian profil/exit.png'
import { Link } from 'react-router'

function DropdownMenu() {

    const [open, setOpen] = useState(false);

    return (
        <>
        <button onClick={() => setOpen(!open)} className='dropdownmenu'>{open ? "▲" : "▼"}</button>
        <ul className={open ? "dropDownClass activate" : "dropDownClass"}>
            
            <li className='dropdownli'><img src={profilOn} className='imageclass1' /><Link to='' className='dropdownButton'>Profil Saya</Link></li>
            <li className='dropdownli'><img src={star} className='imageclass1' /><Link to='' className='dropdownButton'>Ubah Premium</Link></li>
            <li className='dropdownli'><img src={exit} className='imageclass1' /><Link to='/login' className='dropdownButton'>Keluar</Link></li>
        </ul>
        </>
    )
}

export default DropdownMenu