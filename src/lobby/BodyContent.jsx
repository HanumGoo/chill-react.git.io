import ImageSlider1 from './ImageSlider-1'
import ImageSlider2 from './ImageSlider-2'
import ImageSlider3 from './ImageSlider-3'
import ImageSlider4 from './ImageSlider-4'

function LobbyForm() {

  return (
    <>  
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
    </>
  )
}

export default LobbyForm
