import chillLogo from './assets/Logo.png'

function LobbyForm() {

  return (
    <>
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
    </>
  )
}

export default LobbyForm
