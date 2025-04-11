import chillLogo from './assets/Logo.png'
import { Link } from 'react-router'
import DropdownMenu from './DropdownMenu'
import { useState, useContext, useEffect } from 'react'
import { globalAccountAPIObjectJson } from './AccountState'

function LobbyForm() {

  //acting like json import
  // eslint-disable-next-line no-unused-vars
  const [userDataAPI, setUserDataAPI] = useState(useContext(globalAccountAPIObjectJson));
  const [imagePaper, setImagePaper] = useState(null);

  // login data pakai api
    useEffect(() => {
      const theDataT = userDataAPI;
      // console.log(theDataT);
      setImagePaper(theDataT.avatar);
      // console.log(userDataEmail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <>
      
      <div className='displayFlexLobby1'>
        <div className='usercontent1'>
          <img className='chillLogoLobby' src={chillLogo} alt="ChillLogo" />
          <Link to='/lobby/series' className='headerFont'>Series</Link>
          <Link to='' className='headerFont'>Film</Link>
          <Link to='' className='headerFont'>Daftar Saya</Link>
        </div>
        <div className='usercontent2'>
        <img className='accountLogoLobby' src={imagePaper} title='account' />
        <DropdownMenu />
        </div>
      
      </div>
    </>
  )
}

export default LobbyForm
