import chillLogo from './assets/Logo.png'
import googleLogo from './assets/2991148 1.png'
import eyeLogo from './assets/Vector.png'
import { Link } from 'react-router'

function LoginForm() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
    <div className='containerBody'>
    <div className='container'>

    
    <form onSubmit={(e) => handleSubmit(e)}>
     <img className='chillLogo' src={chillLogo} title="haha" />

     <div className='displayFlex classRuleCenter'>
          <h1>Daftar</h1>
          <p>Selamat datang!</p>
     </div>
     
     <div className='displayFlex classRuleInput'>
          <label>Username</label>
          <input type="text" placeholder='Masukkan username' />
     </div>
     
     <div className='displayFlex classRuleInput input-container'>
        <img className='eyeLogoClass' src={eyeLogo} />
          <label>Password</label>
          <input style={{marginBottom: "12px"}} type="text" placeholder='Masukkan kata sandi' />
          <img className='eyeLogoClass1' src={eyeLogo} />
          <label>Confirm Password</label>
          <input style={{marginBottom: "12px"}} type="text" placeholder='Konfirmasi kata sandi' />
          <div className='displayFlexBetween'>
            <div className='displayJustFlex'>
                <p style={{color: "hsla(223, 9.10%, 84.90%, 0.84)"}}>Sudah punya akun?</p>
                <Link to='/login'><p className='linkClass'>Masuk</p></Link>
            </div>
          </div>
     </div>

     <div className='displayFlex classRuleCenter'>
          <input className='submitClass' type='submit' value='Daftar' />
          <div className='atauclass'>Atau</div>
          <div className='displayFlex'>
            <button className='submitClassGoogle'>
              <img src={googleLogo} className='googleLogo' />
              <p>Daftar dengan Google</p>
            </button>
          </div>
     </div>
     

     </form>
     </div>
     </div>
    </>
  )
}

export default LoginForm
