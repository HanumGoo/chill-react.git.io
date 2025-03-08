import chillLogo from './assets/Logo.png'
import { Link } from 'react-router'
import accountImage from './assets/bagian-akun/sutokkinggu.jpg'
import DropdownMenu from './DropdownMenu'
import First from './assets/bagian awal asli.png'
import vector from './assets/Vector.png'
import audio from './assets/audio.png'
import { useState } from 'react'
import ImageSlider1 from './ImageSlider-1'
import ImageSlider2 from './ImageSlider-2'
import ImageSlider3 from './ImageSlider-3'
import ImageSlider4 from './ImageSlider-4'

function LobbyForm() {
  const [hovered, isHovered] = useState(false);

  return (
    <>
    <div className='containerLobbyBody'>
      
      <div className='displayFlexLobby1'>
        <div className='usercontent1'>
          <img className='chillLogoLobby' src={chillLogo} title="haha" />
          <Link to='' className='headerFont'>Series</Link>
          <Link to='' className='headerFont'>Film</Link>
          <Link to='' className='headerFont'>Daftar Saya</Link>
        </div>
        <div className='usercontent2'>
        <img className='accountLogoLobby' src={accountImage} title='account' />
        <DropdownMenu />
        </div>
      
      </div>

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
      
      {/* bagian isi content melanjutkan film */}
      <div className='isi1'>
      <span className='isi2'>
      <p className='kalimatbagian1'>Melanjutkan Tonton Film</p>
      <ImageSlider1 />
      </span>
      </div>

      {/* bagian isi content terakhir 3 baris */}
      <div className='isi3'>
        <span className='isi4'>
        <p className='kalimatbagian1'>Top Rating Film dan Series Hari ini</p>
        <ImageSlider2 />
        </span>
      </div>

      <div className='isi3'>
        <span className='isi4'>
        <p className='kalimatbagian1'>Film Trending</p>
        <ImageSlider3 />
        </span>
      </div>

      <div className='isi3'>
        <span className='isi4'>
        <p className='kalimatbagian1'>Rilis Baru</p>
        <ImageSlider4 />
        </span>
      </div>

      {/* bagian footer */}
      <div className='footerLast'>
        <div>
          <img src={chillLogo} />
          <p className='customFooter'>@2023 Chill All Right Reserved.</p>
        </div>
        <div>
          <p className='GenreLabel'>Genre</p>
          <ol className='genreList'>
            <div className='flexgap'>
              <li><button>Anak-anak</button></li>
              <li><button>Aksi</button></li>
              <li><button>Anime</button></li>
              <li><button>Britania</button></li>
            </div>
            <div className='flexgap'>
              <li><button>Drama</button></li>
              <li><button>Fantasi Ilmiah & Fantasi</button></li>
              <li><button>Kejahatan</button></li>
              <li><button>KDrama</button></li>
            </div>
            <div className='flexgap'>
              <li><button>Komedi</button></li>
              <li><button>Petualangan</button></li>
              <li><button>Perang</button></li>
              <li><button>Romantis</button></li>
            </div>
            <div className='flexgap'>
              <li><button>Sains & Alam</button></li>
              <li><button>Thriller</button></li>
            </div>
            
            
            
            
          </ol>
        </div>
        <div>
          <p className='GenreLabel'>Bantuan</p>
          <ol className='genreList'>
            <div className='flexgap'>
            <li><button>FAQ</button></li>
            <li><button>Kontak Kami</button></li>
            <li><button>Privasi</button></li>
            <li><button>Syarat & Ketentuan</button></li>
            </div>

          </ol>
        </div>
      </div>
    </div>
    </>
  )
}

export default LobbyForm
