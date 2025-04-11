import chillLogo from './assets/Logo.png'
import googleLogo from './assets/2991148 1.png'
import eyeLogo from './assets/Vector.png'
import { Link } from 'react-router'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import PopupMenuSettings from './PopupMenuSettings'

function LoginForm() {

  const [formData, setFormData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMessage, setIsMessage] = useState(null);

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

 
      
      


  async function handleSubmit(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

      const response = await fetch(`https://67e3a95d2ae442db76d0faf3.mockapi.io/api/v1/account-user?username=${username}&password=${password}`);

      if (response.status === 404)
      {
        loginFailed();
        return;
      }
    
      if (response.ok)
      {
        const allUser = await response.json();
        const userCheck = allUser.find((user) => user.username === username);
        
        if (userCheck)
        {
          sessionStorage.setItem("user-id", userCheck.id);
          loginSuccess();
          return;
        }

        loginFailed();
        return;
      }
      else {
        loginFailed();
        return;
      }
      
  }

  function onClickButtonEvent() {
    isSuccess && navigate("/Lobby/series");
    setIsOpen(false);
    return;
  }

  function loginSuccess() {
    setIsOpen(true);
    setIsSuccess(true);
    setIsMessage("Login Success! navigating to the lobby");
    return;
  }

  function loginFailed() {
    setIsOpen(true);
    setIsSuccess(false);
    setIsMessage("Login Failed! wrong username or password. Try again");
    return;
  }

  const [showPassword, setShowPassword] = useState(false);

  function eyeLogoCick() {
    setShowPassword(!showPassword);
  }

  return (
    <>
    <div className='containerBody'>
    <PopupMenuSettings visibleStatus={isOpen} status={isSuccess} buttonClick={onClickButtonEvent} isMessage={isMessage} />
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
     </form>
     </div>
     </div>
    </>
  )
}

export default LoginForm
