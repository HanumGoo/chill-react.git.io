import chillLogo from './assets/Logo.png'
import { Link } from 'react-router'
import accountImage from './assets/bagian-akun/sutokkinggu.jpg'
import DropdownMenu from './DropdownMenu'
import First from './assets/bagian awal asli.png'

function LobbyForm() {

  //acting like json import

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
        <img className='accountLogoLobby' src={accountImage} title='account' />
        <DropdownMenu />
        </div>
      
      </div>
    </>
  )
}

export default LobbyForm
