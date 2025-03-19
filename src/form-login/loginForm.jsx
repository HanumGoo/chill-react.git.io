import chillLogo from './assets/Logo.png'
import googleLogo from './assets/2991148 1.png'
import eyeLogo from './assets/Vector.png'
import { Link } from 'react-router'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function LoginForm() {

  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  function handleChange(e) {
    console.log("this is runnin");
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    console.log("submit is runnin");
    e.preventDefault();


      console.log();
    if (formData.username === "sheehan" && formData.password === "akusayangkucing321")
    {
      alert("okay got it right, process go to the lobby...");
      navigate("/Lobby/series");
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  function eyeLogoCick() {
    setShowPassword(!showPassword);
  }

  return (
    <>
    <div className='containerBody'>
    <div className='container'>

    
    <form onSubmit={(e) => handleSubmit(e)}>
     <img className='chillLogo' src={chillLogo} title="haha" />

     <div className='displayFlex classRuleCenter'>
          <h1>Masuk</h1>
          <p>Selamat datang kembali!</p>
     </div>
     
     <div className='displayFlex classRuleInput'>
          <label>Username</label>
          <input type="text" placeholder='Masukkan username' name="username" onChange={(e) => handleChange(e)} />
     </div>
     
     <div className='displayFlex classRuleInput input-container'>
        <img className='eyeLogoClass' onClick={() => eyeLogoCick()} src={eyeLogo} />
          <label>Password</label>
          <input style={{marginBottom: "12px"}} type={showPassword ? "text" : "password"} placeholder='Masukkan kata sandi' name="password" onChange={(e) => handleChange(e)} />
          <div className='displayFlexBetween'>
            <div className='displayJustFlex'>
                <p style={{color: "hsla(223, 9.10%, 84.90%, 0.84)"}}>Belum punya akun?</p>
                <Link to='/register'><p className='linkClass'>Daftar</p></Link>
            </div>
            <Link><p className='linkClass'>Lupa kata sandi?</p></Link>
          </div>
     </div>

     <div className='displayFlex classRuleCenter'>
          <input className='submitClass' type='submit' value='Masuk' />
          <div className='atauclass'>Atau</div>
          <div className='displayFlex'>
            <button className='submitClassGoogle'>
              <img src={googleLogo} className='googleLogo' />
              <p>Masuk dengan Google</p>
            </button>
          </div>
     </div>
     
    <p>akun untuk ke lobby(sementara)</p>
    <p>username: sheehan</p>
    <p>password: akusayangkucing321</p>
     </form>
     </div>
     </div>
    </>
  )
}

export default LoginForm
