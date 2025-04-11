import chillLogo from './assets/Logo.png'
import googleLogo from './assets/2991148 1.png'
import eyeLogo from './assets/Vector.png'
import { Link } from 'react-router'
import PopupMenuSettings from './PopupMenuSettings'
import { useState } from 'react'

function LoginForm() {


  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMessage, setIsMessage] = useState(null);


  async function handleSubmit(e) {
    e.preventDefault();

    

    const spaceRegex = /\s/;

    const username = e.target.username.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;

    if (!username || !password || !passwordConfirm)
    {
      setIsOpen(true);
      setIsSuccess(false);
      setIsMessage("no empty field please...");
      return;
    }

    if (spaceRegex.test(username) || spaceRegex.test(password) || spaceRegex.test(passwordConfirm))
    {
      setIsOpen(true);
      setIsSuccess(false);
      setIsMessage("username or password cant have some white space! Revision please...");
      return;
    }

    if (password !== passwordConfirm)
    {
      setIsOpen(true);
      setIsSuccess(false);
      setIsMessage("Password is not the same as Confirm Password! take a look...");
      return;
    }
  
    if (username === password)
    {
      setIsOpen(true);
      setIsSuccess(false);
      setIsMessage("username cannot be the same as password! Revision please...");
      return;
    }


      const response = await fetch(`https://67e3a95d2ae442db76d0faf3.mockapi.io/api/v1/account-user?username=${username}`);

      if (response.status === 404)
      {
        console.log("success");
      }
    
      if (response.ok)
      {
        const allUser = await response.json();
        const userCheck = allUser.some((user) => user.username === username);
        
        if (userCheck)
        {
          console.log("failed");
          setIsOpen(true);
          setIsSuccess(false);
          setIsMessage("username is already taken! try another...");
          return;
        }
        console.log("success");
      }
    
      fetch('https://67e3a95d2ae442db76d0faf3.mockapi.io/api/v1/account-user', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password})
      });

      setIsOpen(true);
      setIsSuccess(true);
      setIsMessage("Successfully create an account. Try login now!");
      
  }

  function onClickButtonEvent() {
    setIsSuccess(false);
    setIsOpen(false);
  }

  function googleLogin() {
    alert("Google register feature is still not supported! better try creating an account without it");
  }

  return (
    <>
    <div className='containerBody'>
    <PopupMenuSettings visibleStatus={isOpen} status={isSuccess} buttonClick={onClickButtonEvent} isMessage={isMessage} />
    <div className='container'>

    
    <form onSubmit={(e) => handleSubmit(e)}>
     <img className='chillLogo' src={chillLogo} title="haha" />

     <div className='displayFlex classRuleCenter'>
          <h1>Daftar</h1>
          <p>Selamat datang!</p>
     </div>
     
     <div className='displayFlex classRuleInput'>
          <label>Username</label>
          <input name="username" type="text" placeholder='Masukkan username' />
     </div>
     
     <div className='displayFlex classRuleInput input-container'>
        <img className='eyeLogoClass' src={eyeLogo} />
          <label>Password</label>
          <input name="password" style={{marginBottom: "12px"}} type="text" placeholder='Masukkan kata sandi' />
          <img className='eyeLogoClass1' src={eyeLogo} />
          <label>Confirm Password</label>
          <input name="passwordConfirm" style={{marginBottom: "12px"}} type="text" placeholder='Konfirmasi kata sandi' />
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
            <button type="button" className='submitClassGoogle' onClick={googleLogin}>
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
