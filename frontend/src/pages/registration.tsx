import React from "react";
import { useState,useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import swal from "sweetalert";
import styles from "@/styles/Registration.module.scss";

interface Data {
  waiting_mail: string;
  waiting_text: string;
}

const Registration = () => {
  const [data, setData] = useState<Data>({
    waiting_mail: "",
    waiting_text: "",
  });
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const insertData = () => {
    if (validateEmail(data.waiting_mail)) {
      axios
        .post("https://kyuuri.daa.jp/waitingList/insertData.php", data)
        .then((response) => {
          swal(response.data.maintext,response.data.subtext,response.data.status)
          .then(() => {
            if (response.data.status === "success") {
              location.href = "/";
            }
          })
        })
        .catch((error) => {
          console.log(error)
          swal("クライアントサイドエラーが発生しました", "お手数ですがお問い合わせまでお願いいたします。", "error")
        });
    } else {
      swal("mailの形式が正しくありません", "", "error");
    }
  };

  const validateEmail = (email: string) => {
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return (
    <>
      <div className={styles.bgColor} />
      <button
        className={styles.returnButton}
        onClick={() => (location.href = "/")}
      >
        <Image src="/return.svg" alt="return" width={44} height={44} className={styles.returnImg}/>
      </button>
      <div className={styles.titleArea}>事前登録</div>
      <div className={styles.mailArea}>
        <Image
          src="/mail.svg"
          alt="mail"
          width={30}
          height={30}
          className={styles.mailIcon}
        />
        <input
          type="email"
          placeholder="メールアドレス"
          className={styles.mailInput}
          value={data.waiting_mail}
          onChange={(e) => setData({ ...data, waiting_mail: e.target.value })}
        />
      </div>
      <p className={styles.subTitle}>
        AVATALKに対するご要望/期待すること(任意)
      </p>
      <textarea
        className={styles.input}
        value={data.waiting_text}
        onChange={(e) => setData({ ...data, waiting_text: e.target.value })}
      />
      <div className={styles.waitingButtonWhite}>
        <p className={styles.waitingText} onClick={() => insertData()}>
          事前登録
        </p>
      </div>
      {windowWidth > 768 ? (
        <Image
          src="/pcbgimg.svg"
          alt="bgimg"
          width={200}
          height={200}
          className={styles.bgimg}
        />
      ) : (
        <Image
          src="/phonebgimg.svg"
          alt="bgimg"
          width={200}
          height={200}
          className={styles.bgimg}
        />
      )}
    </>
  );
};

export default Registration;
