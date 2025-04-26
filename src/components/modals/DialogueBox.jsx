import React from 'react';
import styles from "./dialogue.module.css";
import whatsappIcon from '../../assets/whatsappIcon.svg';

const DialogueBox = ({ handleCloseModal }) => {
  return (
    <div className={styles.dialogueBox}>
      <div className={styles.navContainer}>
          <p>CONFIGURE WELCOME MESSAGE</p>
          <button onClick={handleCloseModal}><span>X</span></button>
      </div>
      <div className={styles.mainContentContainer}>
          {/*         left side        */}
          <div className={styles.leftSide}>
            <div className={styles.msgTypeContainer}>
              <label>
                <input type="radio" name="messageType" />
                <p>Pre-approved template message</p>
              </label>
              <label>
                <input type="radio" name="messageType" />
                <p>Regular message</p>
              </label>
            </div>
            <div className={styles.regularChoiceBox}>
              <p>Type</p>
              <div className={styles.choiceContainer}>
                <label>
                  <input type="radio" name="regularType" />
                  <p>Text</p>
                </label>
                <label>
                  <input type="radio" name="regularType" />
                  <p>Image</p>
                </label>
                <label>
                  <input type="radio" name="regularType" />
                  <p>Video</p>
                </label>
                <label>
                  <input type="radio" name="regularType" />
                  <p>Document</p>
                </label>
              </div>
            </div>
            <div className={styles.msgWriteContainer}>
              <div className={styles.msghead}>
                <p>Message Body<span>*</span></p>
                <p>0/4096</p>
              </div>
              <textarea className={styles.textarea} name="" id="" placeholder='Enter your message here' rows={10} cols={20}>

              </textarea>
            </div>
          </div>
          {/*         right side       */}
          <div className={styles.rightSide}>
            <div className={styles.rightMsgCard}>
              <img src={whatsappIcon} alt="whatsapp icon" />
              Hi, please find details in attached pdf as discussed over call and click on demo link to explore demo.  id :demo password : 1289
              Thank You
            </div>
          </div>
      </div>
      <div className={styles.footerContainer}>
        <button className={styles.cancelBtn} onClick={handleCloseModal}>Cancel</button>
        <button className={styles.saveBtn} onClick={handleCloseModal}>Save</button>
      </div>
    </div>
  )
}

export default DialogueBox;
