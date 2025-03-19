import { Link } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import BodyContent from './BodyContent'
import ContainerFirst from './ContainerFirst'

function LobbyForm() {

  return (
    <>
    <div className='containerLobbyBody'>

      {/* bagian header */}
      <Header />

      {/* bagian isi content pertama */}
      <ContainerFirst />
      
      {/* bagian isi content melanjutkan film */}
      <BodyContent />

      {/* bagian footer */}
      <Footer />
    </div>
    </>
  )
}

export default LobbyForm
