import React from "react";
import Image from "next/image";
import styles from "@/styles/Registration.module.scss";

const Registration = () => {
  return (
    <>
      <div className={styles.bgColor} />
      <button className={styles.returnButton} onClick={()=>location.href="/"}>
        <Image
          src="/return.svg"
          alt="return"
          width={44}
          height={44}
        />
      </button>
      <div className={styles.titleArea}>
        事前登録
      </div>
      <div className={styles.mailArea}>
        <Image
            src="/mail.svg"
            alt="mail"
            width={30}
            height={30}
            className={styles.mailIcon}
        />
        <input type="mail" placeholder="メールアドレス" className={styles.mailInput} />
      </div>
      <p className={styles.subTitle}>
        AVATALKに対するご要望/期待すること(任意)
      </p>
      <div className={styles.aa}>
      <textarea className={styles.input} />
      </div>
      <div className={styles.waitingButtonWhite}>
        <p className={styles.waitingText}>事前登録</p>
      </div>
      <Image
        src="/bgimg.svg"
        alt="bgimg"
        width={200}
        height={200}
        className={styles.bgimg}
      />
    </>
  );
};

export default Registration;
