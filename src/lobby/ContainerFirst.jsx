import { Link } from 'react-router'
import First from './assets/bagian awal asli.png'
import vector from './assets/Vector.png'
import audio from './assets/audio.png'
import { useState } from 'react'

function LobbyForm() {
  const [hovered, isHovered] = useState(false);

  return (
    <>

      {/* bagian isi content pertama */}
      <div className='containerFirst'>
        <div className='firstImageBackground'>

          <div className='InformationFirst'>
            <h1>Duty After School</h1>
            <br />
            <p className='displayNone'>Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,</p>
            <p className='displayNone'>Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa</p>
            <p className='displayNone'>sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
          </div>
          <div className='InformationSecond'>
            <div className='usercontent1-1'>
              <button className='startButton'><p>Mulai</p></button>
              <button className='moreInfoButton'>
                <img src={vector} className='vectorClass'/>
                <p>Selengkapnya</p>
              </button>
              <div className=' displayNone'>
                <p onMouseEnter={() => isHovered(true)} onMouseLeave={() => isHovered(false)} className="category18">18+</p>
                <span className={hovered ? "myspanClass categorypopup18" : "myspanClass"}>hanya untuk orang dewasa. jika belum minum susu dulu sana!</span>
              </div>
            </div>
            <div className='displayNone'>
              <img src={audio} className='audioClass' />
            </div>
          
          </div>
          {/* <img src={First} className='firstImage' /> */}
          
        </div>
      </div>
    </>
  )
}

export default LobbyForm
