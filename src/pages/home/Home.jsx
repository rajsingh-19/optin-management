import React, { useState } from "react";
import styles from "./home.module.css";
import SwitchBar from "../../components/switch/SwitchBar";
import DialogueBox from "../../components/modals/DialogueBox";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import optinIcon from "../../assets/optin.png";
import optoutIcon from "../../assets/optout.png";
import addIcon from "../../assets/addIcon.svg";
import configureIcon from "../../assets/configureIcon.svg";
import whatsappIcon from "../../assets/whatsappIcon.svg";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [keywordArr, setKeywordArr] = useState([]);
  const [optoutInputValue, setOptoutInputValue] = useState("");
  const [optoutKeywordArr, setOptoutKeywordArr] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if(inputValue.trim() !== "" && e.key === "Enter") {
      setKeywordArr([...keywordArr, inputValue.trim()]);
      setInputValue("");
    };
  };

  const handleRemove = (i) => {
    const filteredKeywords = keywordArr.filter((_, item) => item !== i);
    setKeywordArr(filteredKeywords);
  };

  const handleOptoutChange = (e) => {
    setOptoutInputValue(e.target.value);
  };

  const handleOptoutKeyDown = (e) => {
    if(optoutInputValue.trim() !== "" && e.key === "Enter") {
      setOptoutKeywordArr([...optoutKeywordArr, optoutInputValue.trim()]);
      setOptoutInputValue("");
    };
  };

  const handleOptoutRemove = (i) => {
    const optoutFilteredKeywords = optoutKeywordArr.filter((_, item) => item !== i);
    setOptoutKeywordArr(optoutFilteredKeywords);
  };

  const handleConfigure = () => {
    setModalStatus(true);
  };

  const handleCloseModal = () => {
    setModalStatus(false);
  };


  return (
    <div className={styles.homeContainer}>
      <div className={styles.sideBar}></div>
      <div className={styles.mainBox}>
        {/*     nav          */}
        <div className={styles.navContainer}>
          <div>
            <span>Opt-In Management</span>
          </div>
          <div className={styles.btnsContainer}>
            <button className={styles.cancelBtn}>Cancel</button>
            <button className={styles.saveBtn}>Save</button>
          </div>
        </div>
        {/*       heading with bubble images     */}
        <div className={styles.imgWithHeadingContainer}>
          <p>Opt-In Management</p>
          <img src={img2} alt="bubble img" className={styles.img2} />
          <img src={img1} alt="bubble img" className={styles.img1} />
        </div>
        {/*         content section        */}
        <div className={styles.contentContainer}>
          {/*         opt in container        */}
          <div className={styles.optInContainer}>
            <div className={styles.optInHeader}>
              <div className={styles.optinIconContainer}>
                <img src={optinIcon} alt="opt icon" />
              </div>
              <div className={styles.headerLines}>
                <p>Opt-in</p>
                <p>A text that explains what opt-in is</p>
              </div>
            </div>
            {/*     first card Section   */}
            <div className={styles.firstCardBox}>
              <div className={styles.cardContainer}>
                <div className={styles.switchContainer}>
                  <div className={styles.switchLines}>
                    <p>Opt-in Response</p>
                    <p>Setup a response message for opt-in user keywords</p>
                  </div>
                  <div>
                    <SwitchBar />
                  </div>
                </div>
                <button className={styles.configureBtn} onClick={handleConfigure}>
                  <img src={configureIcon} alt="configure icon" />Configure
                </button>
                <div className={styles.msgContainer}>
                  <img src={whatsappIcon} alt="whats app icon" />
                  <div>Hi! Thanks for connecting. Someone from our team will get in touch soon.</div>
                </div>
              </div>
              <div className={styles.keywordContainer}>
                <p>Opt-in Keywords</p>
                <div className={styles.desc}>
                  The user will have to type exactly one of these messages
                  on which they should be automatically opted-in
                </div>
                <div className={styles.searchBox}>
                  <img src={addIcon} alt="add icon" />
                  <input type="text" placeholder="# Add keyword" onChange={handleChange} value={inputValue} onKeyDown={handleKeyDown} />
                </div>
                <div className={styles.keywordBtnContainer}>
                  {
                    keywordArr?.map((item, i) => (
                      <button key={i} onClick={() => handleRemove(i)} className={styles.keyword}>{item} <span>x</span></button>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          {/*          opt out container      */}
          <div className={styles.optOutContainer}>
            <div className={styles.optInHeader}>
              <div className={styles.optinIconContainer}>
                <img src={optoutIcon} alt="opt icon" />
              </div>
              <div className={styles.headerLines}>
                <p>Opt-Out</p>
                <p>A text that explains what opt-out is</p>
              </div>
            </div>
            {/*     first card Section   */}
            <div className={styles.firstCardBox}>
              <div className={styles.cardContainer}>
                <div className={styles.switchContainer}>
                  <div className={styles.switchLines}>
                    <p>Opt-out Response</p>
                    <p>Setup a response message for opt-in user keywords</p>
                  </div>
                  <div>
                    <SwitchBar />
                  </div>
                </div>
                <button className={styles.configureBtn} onClick={handleConfigure}>
                  <img src={configureIcon} alt="configure icon" />Configure
                </button>
                <div className={styles.msgContainer}>
                  <img src={whatsappIcon} alt="whats app icon" />
                  <div>
                    Hi! Thanks for connecting. Someone from our team will get in touch soon.
                  </div>
                </div>
              </div>
              <div className={styles.keywordContainer}>
                <p>Opt-out Keywords</p>
                <div className={styles.desc}>
                  The user will have to type exactly one of these messages
                  on which they should be automatically opted-in
                </div>
                <div className={styles.searchBox}>
                  <img src={addIcon} alt="add icon" />
                  <input type="text" placeholder="# Add keyword" onChange={handleOptoutChange} value={optoutInputValue} onKeyDown={handleOptoutKeyDown} />
                </div>
                <div className={styles.keywordBtnContainer}>
                  {
                    optoutKeywordArr?.map((item, i) => (
                      <button key={i} onClick={() => handleOptoutRemove(i)} className={styles.keyword}>{item} <span>x</span></button>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*             Modal Container          */}
      {modalStatus && (
        <div className={styles.modalViewContainer}>
          <DialogueBox handleCloseModal={handleCloseModal} />
        </div>)
      }
    </div>
  )
}

export default Home
