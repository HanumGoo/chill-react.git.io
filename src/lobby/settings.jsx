import Header from './Header'
import Footer from './Footer'
import PopupMenuSettings from './PopupMenuSettings'
import ImageSliderSettings from './ImageSlider-settings'
import accountImage from './assets/bagian-akun/sutokkinggu.jpg'
import uploadImage from './assets/bagian profile settings/Vector (2).png'
import pencil from './assets/bagian profile settings/pensil.png'
import warning from './assets/bagian profile settings/Warning.png'
import { useState, useRef } from 'react'
import { globalAccountObjectJson } from './AccountState'
import { useContext } from 'react'



function LobbyForm() {

  const [userData, setUserData] = useState(useContext(globalAccountObjectJson));
  const [userDataUsername, setUserDataUsername] = useState(userData.account.username);
  const [userDataPassword, setUserDataPassword] = useState(userData.account.password);
  const [messageSubmit, setMessageSubmit] = useState(false);
  console.log(userData.account.username);
  
  const [isReadOnly1, setIsReadOnly1] = useState(true);
  const [isReadOnly2, setIsReadOnly2] = useState(true);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);


  function ChangeUsername() {
    const isTrue = !isReadOnly1;
    setIsReadOnly1(isTrue);

    if (isTrue === false) {
        inputRef1.current.focus();
      }
  }

  function ChangePassword() {
    const isTrue = !isReadOnly2
    setIsReadOnly2(isTrue);
    
      if (isTrue === false) {
        inputRef2.current.focus();
      }
  }

  function OnChangeAccountUsername(e) {
    setUserDataUsername(e.target.value);
  }
  function OnChangeAccountPassword(e) {
    setUserDataPassword(e.target.value);
  }

  function onClickSubmit() {
    setMessageSubmit((prev) => !prev);
    setIsReadOnly1(true);
    setIsReadOnly2(true);
  }


  return (
    <>
  <div className='containerLobbyBody'>
    {/* Header */}
    <Header />

    <PopupMenuSettings visibleFunction={onClickSubmit} visibleStatus={messageSubmit} userCurrentUsername={userDataUsername} userJsonUsername={userData.account.username} userCurrentPassword={userDataPassword} userJsonPassword={userData.account.password} />

    {/* isi profile */}
    <div className='ProfileFlexParent'>

      {/* ini form */}
      <div className='ProfileFlexMain'>

        <p className='profileTitleClass'>Profil Saya</p>

          <div className='ProfileFlex1'>
            <div>
              <img className='accountLogoLobby1' src={accountImage} />
            </div>
            <div className='profileFlex2'>
              <button className='changeImageButton'>Ubah Foto</button>
                <div className='ProfileFlex3'>
                  <img src={uploadImage} />
                  <p className='maxUploadClass'>Maksimal 2MB</p>
                </div>
            </div>
            
          </div>
          <div className='parentLabelClass'>
                  <label for='username' class='theLabelClass'>Nama Pengguna</label>
                  <img src={pencil} className='theImageClass' alt='pencil' title='change account information'  onClick={ChangeUsername} />
                  <input ref={inputRef1} maxLength="20" id='username' type='text' className={!isReadOnly1 ? "inputChangeAccount activeInputChangeAccount" : "inputChangeAccount"} readOnly={isReadOnly1} value={userDataUsername} onChange={OnChangeAccountUsername} autoComplete='off' />
          </div>
                  
          <div className='parentLabelClass'>
                  <label for='email' class='theLabelClass'>Email</label>

                  <input id='email' type='text' className='inputChangeAccount' value={userData.account.email} />
          </div>
                  
          <div className='parentLabelClass'>
                  <label for='password' class='theLabelClass'>Kata Sandi</label>
                  <img src={pencil} className='theImageClass' alt='pencil' title='change account information' onClick={ChangePassword} />
                  <input ref={inputRef2} maxLength="20" id='password' type='text' className={!isReadOnly2 ? "inputChangeAccount activeInputChangeAccount" : "inputChangeAccount"} readOnly={isReadOnly2} value={userDataPassword} onChange={OnChangeAccountPassword} autoComplete='off' />
          </div>
        

        <button className='startButton' onClick={onClickSubmit}>Simpan</button>

      </div>

      {/* ini berlangganan */}
      <div className='ProfileFlexMain1'>
        <div className='profileFlexSub1'>
          <div>
            <img src={warning} />
          </div>
          <div className='customGapProperty1'>
            <p className='subProperty1'>Saat ini anda belum berlangganan</p>
            <p className='subProperty2'>Dapatkan akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
            
          </div>
        </div>
        <div className='profileFlexSub2'>
          <button className='subProperty3'>Mulai Berlangganan</button>
        </div>
      </div>

    </div>

    <div className='isi3'>
        <span className='isi4'>
        <p className='kalimatbagian1'>Daftar Saya</p>
        <ImageSliderSettings />
        </span>
      </div>

    {/* Footer */}
    <Footer />
  </div>
    </>
  )
}

export default LobbyForm
