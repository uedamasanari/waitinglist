import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  const [isSwitch, setIsSwitch] = useState(0);
  const characters = [
    {
      icon: '/guraicon.svg',
      genderIcon: '/gender.svg',
      age: '14歳',
      personality: '可愛い 幼い\n元気 活発',
      name: 'がうるぐら',
      mainText: 'がうるぐら',
      voiceActor: 'CV:がうるぐら',
    },
    {
      icon: '/guraicon.svg',
      genderIcon: '/gender.svg',
      age: '14歳',
      personality: '可愛い 幼い\n元気 活発',
      name: 'がうるぐら',
      mainText: 'がうるぐら',
      voiceActor: 'CV:がうるぐら',
    },
    {
      icon: '/guraicon.svg',
      genderIcon: '/gender.svg',
      age: '14歳',
      personality: '可愛い 幼い\n元気 活発',
      name: 'がうるぐら',
      mainText: 'がうるぐら',
      voiceActor: 'CV:がうるぐら',
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
        <p className={styles.waitingText}>事前登録</p>
      </div>
      <Image
        src="/bgimg.svg"
        alt="bgimg"
        width={200}
        height={200}
        className={styles.bgimg}
      />
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
        <button className={styles.waitingButtonColor}>事前登録</button>
      </div>
      <h2 className={styles.h2}>事前登録人数</h2>
      <div className={styles.nowPeople}>
        <h2 className={styles.h2}>現在</h2>
        <h2 className={`${styles.h2} ${styles.bigText}`}>333人</h2>
      </div>
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

      <div className={styles.buttonArea}>
        <button className={styles.waitingButtonColor}>事前登録</button>
      </div>

      <h1 className={styles.h1}>いいね・リツイートキャンペーン</h1>
      <div className={styles.h1Under} />
      <h3 className={styles.h3}>
        Twitterのいいね・リツイートの数により
        <br />
        追加で報酬を獲得！
        <br />
        <br />
        <a href="https://twitter.com/ai_talk_app" target="_blank">
          対象ツイートはこちら！
        </a>
      </h3>
      <h2 className={styles.h2}>いいね</h2>
      <h2 className={`${styles.h2} ${styles.bigText}`}>1000</h2>

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

      <h2 className={styles.h2}>リツイート</h2>
      <h2 className={`${styles.h2} ${styles.bigText}`}>1000</h2>
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

      <div className={styles.buttonArea}>
        <button className={styles.waitingButtonColor}>事前登録</button>
      </div>

      <h1 className={styles.h1}>AVATALKとは</h1>
      <div className={styles.h1Under} />
      <h4 className={styles.h4}>
        運営とユーザが生み出すオリジナルキャラと音声で会話することができる
        <br />
        アプリです。
        <br />
        オリジナルキャラはAIなので、あなたが話したいことや悩みなどを
        <br />
        なんでも話すことができます。
        <br />
        <br />
        オリジナルキャラは会話すればするほどあなたのことを記憶していきます。
        <br />
        あなたの好きなこと、あなたの嫌いなこと、あなたの趣味など、
        <br />
        さまざまな会話を楽しみましょう！
        <br />
        <br />
        オリジナルキャラはあなたのことに興味津々です。
        <br />
        こちらから会話しなくてもオリジナルキャラの方から会話を振ってきたり、
        <br />
        会話の途中であなたに質問したりします。
        <br />
        <br />
        唯一無二のオリジナルキャラを会話を重ね、日々の生活により彩りを。
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
          <video src="" controls></video>
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
                    />
                  </div>
                  <div className={styles.TopRightArea}>
                    <div className={styles.GenderAge}>
                      <Image
                        src={character.genderIcon}
                        width={30}
                        height={50}
                        alt="性別"
                      />
                      <p className={styles.h4}>{character.age}</p>
                    </div>
                    <div className={styles.personality}>
                      {character.personality}
                    </div>
                  </div>
                </div>
                <div className={styles.bottomArea}>
                  <div className={styles.charaText}>{character.name}</div>
                  <div className={styles.charaMainText}>{character.mainText}</div>
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
        <button className={styles.waitingButtonColor}>事前登録</button>
      </div>

      <h1 className={styles.h1}>ロードマップ</h1>
      <div className={styles.h1Under} />

      <h2 className={styles.h2}>06/01</h2>
      <h2 className={styles.h2}>AVATALK事前登録開始</h2>
      <div className={styles.roadmapLine} />

      <h2 className={styles.h2}>06/15</h2>
      <h2 className={styles.h2}>オリジナルキャラクター案募集開始</h2>
      <div className={styles.roadmapLine} />

      <h2 className={styles.h2}>08/01</h2>
      <h2 className={styles.h2}>プレリリース</h2>
      <div className={styles.roadmapLine} />

      <h2 className={styles.h2}>将来</h2>
      <h2 className={styles.h2}>
        YoutubeでAItuberとしてオリジナルキャラクターが活動開始
      </h2>
      <div className={styles.roadmapLine} />

      <h2 className={styles.h2}>将来</h2>
      <h2 className={styles.h2}>キャラボイスの音声合成に声優を採用</h2>
      <div className={styles.roadmapLine} />

      <h2 className={styles.h2}>将来</h2>
      <h2 className={styles.h2}>キャラボイスの音声合成にVtuberを採用</h2>
      <div className={styles.roadmapLine} />

      <h2 className={styles.h2}>将来</h2>
      <h2 className={styles.h2}>
        Youtubeでユーザーの意見を取り入れながら行う開発ライブ配信
      </h2>
      <div className={styles.roadmapLine} />

      <div className={styles.buttonArea}>
        <button className={styles.waitingButtonColor}>事前登録</button>
      </div>

      <h1 className={styles.h1}>ソーシャル</h1>
      <div className={styles.h1Under} />
      <h4 className={styles.h4}>SNSやYoutubeにて情報配信中です！</h4>

      <div className={styles.socialArea}>
        <Image src="/discord.svg" alt="dicord" width={100} height={100} />
        <Image src="/tiktok.svg" alt="tiktok" width={100} height={100} />
        <Image src="/twitter.svg" alt="twitter" width={100} height={100} />
        <Image src="/instagram.svg" alt="instagram" width={100} height={100} />
        <Image src="/youtube.svg" alt="youtube" width={100} height={100} />
      </div>

      <h1 className={styles.h1}>お問い合わせ</h1>
      <div className={styles.h1Under} />
      <h4 className={styles.h4}>
        お手数ですが、以下のメールアドレスまでお願いいたします
      </h4>
      <h4 className={styles.h4}>xxxxxxxxx@gmail.com</h4>

      <h4 className={styles.h4}>© 2023 会社名</h4>
    </div>
  );
}
