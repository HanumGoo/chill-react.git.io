

function LobbyForm( { visibleFunction, visibleStatus, userCurrentUsername,  userJsonUsername, userCurrentPassword, userJsonPassword } ) {


  function onClickEventButton() {
    if (userCurrentUsername === userJsonUsername || userCurrentPassword === userJsonPassword)
    {
      alert('hey username/password yang kamu ganti tidak bisa sama dengan yang dahulu');
    }
    else if (!userCurrentUsername)
    {
      alert('hey username yang kamu ganti tidak bisa kosong!')
    }
    else 
    {
      alert('success walau belum diupdate ke database');
    }
  }


  return (
    <div className={visibleStatus ? "overlays" : ""}>
    <div className={visibleStatus ? "dropDownMenuSettings visibleOn" : "dropDownMenuSettings"}>
      <div className="dropDownMenuSettings1">
        <p>Are you sure change the information?</p>
        <p>Username from :<br />{userJsonUsername} to {userCurrentUsername}</p>
        <p>Password from :<br />{userJsonPassword} to {userCurrentPassword}</p>
      </div>
      

      <div className="dropDownMenuSettings2">
        <button className="buttonBlue" onClick={onClickEventButton}>Yeah Absolutely</button>
        <button onClick={visibleFunction}>No, i've changed my mind</button>
      </div>
    </div>
    </div>
  )
}

export default LobbyForm
