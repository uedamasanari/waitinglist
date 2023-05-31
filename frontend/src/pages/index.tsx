import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  const [isSwitch, setIsSwitch] = useState(0);
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
  const characters = [
    {
      icon: "/guraicon.svg",
      genderIcon: "/gender.svg",
      age: "14歳",
      personality: "可愛い 幼い\n元気 活発",
      name: "がうるぐら",
      mainText: "がうるぐら",
      voiceActor: "CV:がうるぐら",
    },
    {
      icon: "/guraicon.svg",
      genderIcon: "/gender.svg",
      age: "14歳",
      personality: "可愛い 幼い\n元気 活発",
      name: "がうるぐら",
      mainText: "がうるぐら",
      voiceActor: "CV:がうるぐら",
    },
    {
      icon: "/guraicon.svg",
      genderIcon: "/gender.svg",
      age: "14歳",
      personality: "可愛い 幼い\n元気 活発",
      name: "がうるぐら",
      mainText: "がうるぐら",
      voiceActor: "CV:がうるぐら",
    },
    // 他のキャラクターの情報...
  ];
  const switchTab = (num: number) => {
    setIsSwitch(num);
  };
  return (
    <div>
      <div className={styles.bgColor} />
      <Image
        src="/title.svg"
        alt="bgimg"
        width={200}
        height={200}
        className={styles.title}
      />
      <p className={styles.subTitle1}>おしゃべりするキャラがあなたの手の中に</p>
      <p className={styles.subTitle2}>
        AIオリジナルキャラと話したい世界へ飛び込もう
      </p>
      <div className={styles.waitingButtonWhite}>
        <p
          className={styles.waitingText}
          onClick={() => (location.href = "registration")}
        >
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
      <h1 className={styles.h1}>事前登録キャンペーン</h1>
      <div className={styles.h1Under} />
      <h3 className={styles.h3}>事前登録者限定でトークン〇〇個配布！</h3>
      <h4 className={styles.h4}>
        ※トークンとは？
        <br />
        トークンとはオリジナルキャラと音声会話するために必要な
        <br />
        アイテムのことです
        <br />
        特定のミッションを達成するか課金することにより
        <br />
        手に入れることができます
      </h4>
      <h2 className={styles.h2}>さらに</h2>
      <h3 className={styles.h3}>
        事前登録者が増えるごとに
        <br />
        追加で報酬を獲得！
      </h3>
      <div className={styles.buttonArea}>
        <button
          className={styles.waitingButtonColor}
          onClick={() => (location.href = "registration")}
        >
          事前登録
        </button>
      </div>
      <div className={styles.h2}>事前登録人数</div>
      <div className={styles.nowPeople}>
        <h2 className={styles.h2}>現在</h2>
        <div className={`${styles.h2} ${styles.bigText}`}>333人</div>
      </div>
      <div className={styles.orangeBorder}>
        <div className={styles.orangeFlex}>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>登録者10人</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>登録者50人</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>登録者100人</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
        </div>
        <div className={styles.orangeFlex}>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>登録者300人</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>登録者500人</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>登録者700人</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
        </div>
        <div className={styles.orangeFlex}>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>登録者1000人</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
        </div>
      </div>

      <div className={styles.buttonArea}>
        <button
          className={styles.waitingButtonColor}
          onClick={() => (location.href = "registration")}
        >
          事前登録
        </button>
      </div>

      <h1 className={styles.h1}>いいね・リツイートキャンペーン</h1>
      <div className={styles.h1Under} />
      <h3 className={styles.h3}>
        Twitterのいいね・リツイートの数により
        <br />
        追加で報酬を獲得！
        <br />
        <br />
        <a
          className={styles.link}
          href="https://twitter.com/ai_talk_app"
          target="_blank"
        >
          対象ツイートはこちら！
        </a>
      </h3>
      <div className={styles.h2}>いいね</div>
      <div className={`${styles.h2} ${styles.bigText}`}>1000</div>
      <div className={styles.orangeBorder}>
        <div className={styles.orangeFlex}>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>いいね100</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>いいね300</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>いいね500</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
        </div>
        <div className={styles.orangeFlex}>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>いいね1000</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>いいね3000</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>いいね5000</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
        </div>
        <div className={styles.orangeFlex}>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>いいね10000</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
        </div>
      </div>

      <div className={`${styles.h2} ${styles.RT}`}>リツイート</div>
      <h2 className={`${styles.h2} ${styles.bigText}`}>1000</h2>
      <div className={styles.orangeBorder}>
        <div className={styles.orangeFlex}>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>リツイート100</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>リツイート300</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>リツイート500</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
        </div>
        <div className={styles.orangeFlex}>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>リツイート1000</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>リツイート3000</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>リツイート5000</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
        </div>
        <div className={styles.orangeFlex}>
          <div className={styles.orangeColumn}>
            <div className={styles.orangeArea}>リツイート10000</div>
            <div className={styles.orangeAreaText}>トークン◯個追加</div>
          </div>
        </div>
      </div>

      <div className={styles.buttonArea}>
        <button
          className={styles.waitingButtonColor}
          onClick={() => (location.href = "registration")}
        >
          事前登録
        </button>
      </div>

      <h1 className={styles.h1}>AVATALKとは</h1>
      <div className={styles.h1Under} />
      <h4 className={`${styles.h4} ${styles.avatalkText}`}>
        運営とユーザーが生み出す、人間のようなAIを使ったオリジナルキャラと1対1で音声会話ができるアプリです。
        オリジナルキャラはAIなので、1対1であなたが話したいことや悩みなどをなんでも話すことができます。<br />
        オリジナルキャラは会話すればするほどあなたのことを記憶していきます。
        あなたの好きなこと、あなたの嫌いなこと、あなたの趣味など、
        さまざまな会話を楽しみましょう！<br />
        オリジナルキャラには様々なキャラクターが登場します。
        あなたの好みのキャラクターを見つけて、様々なタイプの会話を楽しみましょう！<br />
        唯一無二のオリジナルキャラと会話を重ね、日々の生活により彩りを。
      </h4>
      <div className={styles.switchButtonArea}>
        <div className={styles.switchButton} onClick={() => switchTab(0)}>
          PV
        </div>
        <div className={styles.switchButton} onClick={() => switchTab(1)}>
          キャラクター
        </div>
        <div className={styles.switchButton} onClick={() => switchTab(2)}>
          遊び方
        </div>
      </div>
      {isSwitch === 0 && (
        <>
        <h2 className={styles.h2}>PV</h2>
          <div className={styles.videoArea}>
            
            <video src="" controls className={styles.video}></video>
          </div>
        </>
      )}
      {isSwitch === 1 && (
        <>
          <h2 className={styles.h2}>キャラクター</h2>
          <h4 className={styles.h4}>
            運営とユーザーが生み出すキャラクターです。
            <br />
            初期キャラのみ運営が生み出しました。
            <br />
            性格それぞれ違って個性があります。
            <br />
            また、それぞれのキャラに絵ピーソードもあります。
            <br />
            気になるキャラクターをクリックで詳細を確認できます。
          </h4>
          <div className={styles.charaFlexArea}>
            {characters.map((character, index) => (
              <div key={index} className={styles.charaArea}>
                <div className={styles.TopArea}>
                  <div className={styles.iconArea}>
                    <Image
                      src={character.icon}
                      width={100}
                      height={100}
                      alt={`${character.name}のアイコン`}
                      className={styles.charaIcon}
                    />
                  </div>
                  <div className={styles.TopRightArea}>
                    <div className={styles.GenderAge}>
                      <Image
                        src={character.genderIcon}
                        width={30}
                        height={50}
                        alt="性別"
                        className={styles.charaGenderIcon}
                      />
                      <p className={styles.charaAge}>{character.age}</p>
                    </div>
                    <div className={styles.personality}>
                      {character.personality}
                    </div>
                  </div>
                </div>
                <div className={styles.bottomArea}>
                  <div className={styles.charaText}>{character.name}</div>
                  <div className={styles.charaMainText}>
                    {character.mainText}
                  </div>
                  <div className={styles.charaText}>{character.voiceActor}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {isSwitch === 2 && (
        <>
          <h2 className={styles.h2}>遊び方</h2>
          <video src="" controls></video>
        </>
      )}

      <div className={styles.buttonArea}>
        <button
          className={styles.waitingButtonColor}
          onClick={() => (location.href = "registration")}
        >
          事前登録
        </button>
      </div>

      <h1 className={styles.h1}>ロードマップ</h1>
      <div className={`${styles.h1Under} ${styles.roadmapUnder}`} />

      <div className={styles.roadmapArea}>
        <div className={styles.arrowArea}>
          <div className={styles.roadmapTextDate}>06/01</div>
          <Image
            src="/arrow.svg"
            width={200}
            height={150}
            alt="矢印"
            className={styles.arrow}
          />
        </div>
        <div className={styles.roadmapTextBlack}>AVATALK事前登録開始</div>
      </div>

      <div className={styles.roadmapArea}>
        <div className={styles.arrowArea}>
          <div className={styles.roadmapTextDate}>06/15</div>
          <Image
            src="/arrow.svg"
            width={200}
            height={150}
            alt="矢印"
            className={styles.arrow}
          />
        </div>
        <div className={styles.roadmapTextBlack}>
          オリジナルキャラクター案募集開始
        </div>
      </div>

      <div className={styles.roadmapArea}>
        <div className={styles.arrowArea}>
          <div className={styles.roadmapTextDate}>08/01</div>
          <Image
            src="/arrow.svg"
            width={200}
            height={150}
            alt="矢印"
            className={styles.arrow}
          />
        </div>
        <div className={styles.roadmapTextBlack}>プレリリース</div>
      </div>

      <div className={styles.roadmapArea}>
        <div className={styles.arrowArea}>
          <div className={styles.roadmapTextDate}>将来</div>
          <Image
            src="/arrow.svg"
            width={200}
            height={150}
            alt="矢印"
            className={styles.arrow}
          />
        </div>
        <div className={styles.roadmapTextBlack}>
          YoutubeでAItuberとして
          <br />
          オリジナルキャラクターが活動開始
        </div>
      </div>

      <div className={styles.roadmapArea}>
        <div className={styles.arrowArea}>
          <div className={styles.roadmapTextDate}>将来</div>
          <Image
            src="/arrow.svg"
            width={200}
            height={150}
            alt="矢印"
            className={styles.arrow}
          />
        </div>
        <div className={styles.roadmapTextBlack}>
          キャラボイスの音声合成に声優を採用
        </div>
      </div>

      <div className={styles.roadmapArea}>
        <div className={styles.arrowArea}>
          <div className={styles.roadmapTextDate}>将来</div>
          <Image
            src="/arrow.svg"
            width={200}
            height={150}
            alt="矢印"
            className={styles.arrow}
          />
        </div>
        <div className={styles.roadmapTextBlack}>
          キャラボイスの音声合成にVtuberを採用
        </div>
      </div>

      <div className={styles.roadmapArea}>
        <div className={styles.arrowArea}>
          <div className={styles.roadmapTextDate}>将来</div>
          <Image
            src="/arrow.svg"
            width={200}
            height={150}
            alt="矢印"
            className={styles.arrow}
          />
        </div>
        <div className={styles.roadmapTextBlack}>
          Youtubeでユーザーの意見を
          <br />
          取り入れながら行う開発ライブ配信
        </div>
      </div>

      <div className={styles.buttonArea}>
        <button
          className={styles.waitingButtonColor}
          onClick={() => (location.href = "registration")}
        >
          事前登録
        </button>
      </div>

      <h1 className={styles.h1}>ソーシャル</h1>
      <div className={styles.h1Under} />
      <h4 className={styles.h4}>SNSやYoutubeにて情報配信中です！</h4>

      <div className={styles.socialArea}>
        <Image
          src="/discord.svg"
          alt="dicord"
          width={100}
          height={100}
          className={styles.socialIcon}
        />
        <Image
          src="/tiktok.svg"
          alt="tiktok"
          width={100}
          height={100}
          className={styles.socialIcon}
        />
        <Image
          src="/twitter.svg"
          alt="twitter"
          width={100}
          height={100}
          className={styles.socialIcon}
        />
        <Image
          src="/instagram.svg"
          alt="instagram"
          width={100}
          height={100}
          className={styles.socialIcon}
        />
        <Image
          src="/youtube.svg"
          alt="youtube"
          width={100}
          height={100}
          className={styles.socialIcon}
        />
      </div>

      <h1 className={styles.h1}>お問い合わせ</h1>
      <div className={styles.h1Under} />
      <h4 className={styles.h4}>
        お手数ですが、以下のメールアドレスまでお願いいたします
      </h4>
      <h4 className={styles.h4}>avatalkcompany@gmail.com</h4>

      <h4 className={styles.h4}>© 2023 AVATALK</h4>
    </div>
  );
}
