import style from "../components/modules/Community.module.css"

export default function Community() {
  return (
    <>
    <header className={style.commheader}>
      <h2 className={style.heading}>Community</h2>
      <p className={style["first-paragraph"]}>
      Join the growing Native Instruments community. Meet like-minded producers and get tips and support from other users on the forum. Read the latest stories from our creators on the blog, discover our Artist Board, connect with us on social media, and dive into a vast palette of sonic tools in our user libraries.
      </p>
      </header>
      <main>
        <section className={style.content}>
          <div className={style.rightSide}>
            <div>
                <h3 style={style.contentH3}>Online Community</h3>
            </div>
            <div>
                <p style={style.contentP}>The forum helps musicians, DJs, and producers of all levels converse and connect. Take part in discussions about NI products and technology and get pro tips from power users.</p>
            </div>
            <div>
                <button className={style.button}>Visit the Community</button>
            </div>
          </div>
          <div className={style.leftSide}>
            <img src="/comm_content_one.png" alt="Community" className={style.image}/>
          </div>
        </section>
        <section className={style.content}>
          <div className={style.rightSide}>
            <img src="/comm_content_two.png" alt="Community" className={style.image}/>
          </div>
          <div className={style.leftSide}>
            <div>
                <h3 style={style.contentH3}>Blog</h3>
            </div>
            <div>
                <p style={style.contentP}>Get inspired by the latest stories from our creators. Learn about their creative process, and get insights into their music-making journey.</p>
            </div>
            <div>
                <button className={style.button}>Read the Blog</button>
            </div>
          </div>
          </section>
          <section className={style.content}>
          <div className={style.rightSide}>
            <div>
                <h3 style={style.contentH3}>Artist Board</h3>
            </div>
            <div>
                <p style={style.contentP}>Meet the Native Instruments artist board, a group of exceptional musicians, producers, and engineers who provide invaluable feedback on our products and insight on the industry.</p>
            </div>
            <div>
                <button className={style.button}>Explore User Libraries</button>
            </div>
          </div>
          <div className={style.leftSide}>
            <img src="/comm_content_three.png" alt="Community" className={style.image}/>
          </div>
        </section>
        <section className={style.socials}>
          <h2 className={style.heading}>Socials</h2>
          <p className={style["first-paragraph"]}>
          Stay up to date with our latest stories and updates
          </p>
          <div className={style.socialList}>
            <div className={style.social}>
              <img src="/instagram_icon.png" alt="Instagram" className={style.socialsIcons}/>
              <p className={style.socialsP}>Instagram</p>
            </div>
            <div className={style.social}>
              <img src="/facebook_icon.png" alt="Facebook" className={style.socialsIcons}/>
              <p className={style.socialsP}>Facebook</p>
            </div>
            <div className={style.social}>
              <img src="/twitter_icon.png" alt="Twitter" className={style.socialsIcons}/>
              <p className={style.socialsP}>Twitter</p>
            </div>
            <div className={style.social}>
              <img src="/youtube_icon.png" alt="Youtube" className={style.socialsIcons}/>
              <p className={style.socialsP}>Youtube</p>
            </div>
          </div>
        </section>
        <section className={style.userLibraries}>
          <div className={style.header}>
          <h2 className={style.heading}>User Libraries</h2>
          <p className={style["first-paragraph"]}>
          The User Library unites artists, sound designers, and instrument builders of all skill levels who are passionate about sound and instrument design. Discover the latest additions, upload your own creations, and trade tips and tricks with a dedicated community of builders committed to advancing the future of sound.
          </p>
          </div>
          <div className={style.libraries}>
            <div className={style.library}>
              <img src="/comm_reaktor.png" />
              <h3>Reaktor</h3>
              <p>Dive into an advanced database of experimental instruments, effects, and sound design ensembles.</p>
            </div>
            <div className={style.library}>
              <img src="/comm_absynth.png" />
              <h3>Absynth</h3>
              <p>Explore otherworldly atmospheres and endlessly evolving soundscapes.
              </p>
            </div>
            <div className={style.library}>
              <img src="/comm_guitarrig.png" />
              <h3>Guitar Rig</h3>
              <p>Strum through powerful presets and pro-grade rigs.</p>
            </div>
            <div className={style.library}>
              <img src="/comm_kontakt.png" />
              <h3>Kontakt</h3>
              <p>Discover a world of sampled instruments and libraries, from orchestral strings to rock and pop drums.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
