import React, { useState } from "react";

// Componnets
import Header from './Header.jsx'

const ethers = require("ethers");

const Home = () => {
  const [addressListProcessed, setAddressListProcessed] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = event => {
    setIsChecked(!isChecked);
  }

  const convertToChecksum = () => {
    let userInput = document.getElementById("address_list").value;

    let checksummedAddresses = [];

    let userInputList = [];

    try {
      userInputList = userInput.trim().split(" ");
      console.log(userInputList);


      userInputList.forEach((element) => {
        checksummedAddresses.push(ethers.utils.getAddress(element));
      });
    } catch (err) {
      userInputList = userInput.split(", ");

      userInputList.forEach((element) => {
        checksummedAddresses.push(ethers.utils.getAddress(element));
      });
    }

    

    isChecked ? 
    setAddressListProcessed("exports.checksummedAddressList = " + JSON.stringify(checksummedAddresses, null, 1))
    :
    setAddressListProcessed(JSON.stringify(checksummedAddresses, null, 1));
  };

  // To copy the result to the clipboard when clicking
  const copyToClipboard = (toCopy) => {
    navigator.clipboard.writeText(toCopy);
  }

  return (
    <div className="home">
      
      <Header/>

      <p style={{margin:'50px 0'}}>Convert a list of addresses into checksum format</p>

      <div className="line"></div>

      <div className="input_box">
        <label htmlFor="addres_list">Paste your address list here:</label>
        <input type="text" id="address_list" name="address_list" />
        
        <p style={{fontSize:'1em', fontWeight:'300', margin:0}}>Questions about the format? <a style={{color:'#EB5160'}} href="#notes">See here</a></p>
        
        <button
            onClick={(e) => {
                e.preventDefault();
                convertToChecksum();
            }}
            style={{margin:'70px 0 0 0'}}>
          CONVERT
        </button>

        <div className="additional_option">
            <label htmlFor="export" style={{fontSize:'1em', fontWeight:'300'}}>Append 'exports.'</label>
            <input type="checkbox" name="export" id="export"
            
            value={isChecked}
            onChange={handleCheck}
            style={{width:'15px'}}
            />
        </div>
      </div>

      <div className="result">
        <h3>Checksummed address list:</h3>
        <textarea
          className="result_input"
          type="text"
          name="result"
          id="result"
          value={addressListProcessed}
        />

        <button onClick={() => copyToClipboard(addressListProcessed)}>Copy</button>
      </div>

      <div className="line"></div>


      <div className="notes" id="notes">
        <h2 style={{margin:'40px 0 20px 0'}}>Notes</h2>
        <div className="notes_container">
            <p>
              <b>IMPORTANT:</b> the addresses You input, should be separated by 1 of
              these options:
            </p>
            <br />
            <ul className="options">
              <li>
                a space (if you're copy-pasting from an excel sheet it will be like
                this)
              </li>
              <br />
              <p style={{ fontSize: "0.8em" }}>
              0x2dea8b167a2a7e602b6c069925b69efbcea902a5
              0xa9e8bd5f14c553ef8d8215ead82997560162132d
              0x1ea7de7555141092fab518fc393193fcad2d9a8e
            </p>
            <br />
              <p>OR</p>
              <br />
              <li>a comma, and a space (without brackets)</li>
              <br />
            <p style={{ fontSize: "0.8em" }}>
              0x2dea8b167a2a7e602b6c069925b69efbcea902a5,
              0xa9e8bd5f14c553ef8d8215ead82997560162132d,
              0x1ea7de7555141092fab518fc393193fcad2d9a8e
            </p>
            </ul>
            
        </div>
      </div>

      <div className="thank_me">
        <h3>Want to Thank me?</h3>
        <p style={{fontWeight:'300', fontSize:'1em'}}>ETH, BNB, MATIC address: 0x1D4E61e7179F91bafCb5B7eA481e40647a788149</p>
        <button onClick={() => copyToClipboard("0x1D4E61e7179F91bafCb5B7eA481e40647a788149")}>Copy</button>
      </div>

      <a style={{color:'white', textDecoration:"none", marginBottom:"20px"}} href="http://www.instagram.com/blockchain.addict" target={"_blank"}>Instagram</a>

    </div>
  );
};

export default Home;