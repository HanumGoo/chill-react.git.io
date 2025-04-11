

function LobbyForm( {visibleStatus, status, buttonClick, isMessage} ) {

  return (
    <div className={visibleStatus ? "overlays" : ""}>
    <div className={visibleStatus ? "dropDownMenuSettings visibleOn" : "dropDownMenuSettings"}>
      <div className="dropDownMenuSettings1Custom">
        <p>{status ? "Success" : "Failed"}</p>
        <p>{isMessage}</p>
      </div>
      

      <div className="dropDownMenuSettings2">
        <button className="buttonBlue customButtonOverride" onClick={buttonClick}>OK</button>
      </div>
    </div>
    </div>
  )
}

export default LobbyForm
