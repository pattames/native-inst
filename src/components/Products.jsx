//Christina
import style from "./modules/Products.module.css";

export default function Products() {
  return (
    <div className={style.productSection}>
      <nav className={style.navSticky}>
        <ul className={style.navbar}>
          <li>Deals</li>
          <li>Free</li>
          <li>New</li>
          <li>My KOMPLETE Offers</li>
        </ul>
      </nav>

      <div className={style.newProductsDiv}>

          <div className={style.newProductsHeader}>
            <h2>New Products</h2>
          </div>

            <div className={style.newProducts}>

              <div >
                <div className={style.cards}>
                  <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-kontrol-s88-product-finder-da0bc6d922bd18c512b57bb5850f01b6-d.jpg" alt="piano" />
                  <div className={style.cardH2Para}>
                    <h2>Kontrol S88</h2>
                    <p>Keyboard controller with 88 fully weighted hammer-action keys, deep software integration, and polyphonic... </p>
                  </div>
              </div>

                <div className={style.CardPrice}>
                  <p>1299,00 €</p>
                </div>

              </div>

              <div >
                <div className={style.cards}>
                  <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-guitar-rig-7-product-finder-2-a291f0dee4ca0dc08da0e04bc563ee3f-d.jpg" alt="guitar" />
                  <div className={style.cardH2Para}>
                    <h2>Guitar Rig 7 Pro</h2>
                    <p>A multi-effects rack and amp simulator with cutting-edge machine learning technology and an intuitive interface.</p>
                  </div>
              </div>

                <div className={style.cardwith2Price}>

                  <div className={style.Card2Price}>
                    <span>Update</span>
                    <p>1299,00 €</p>
                  </div>

                  <div className={style.Card2Price}>
                  <span>Full Version</span>
                    <p>199,00 €</p>
                  </div>

                </div>

              </div>

             
              <div >
                <div className={style.cards}>
                  <img src="https://www.native-instruments.com/fileadmin/ni_media/productfinder/Packshots2023/Traktor-X1-product-finder_v2.png" alt="piano" />
                  <div className={style.cardH2Para}>
                    <h2>Traktor X1</h2>
                    <p>Portable USB DJ controller with tactile design and advanced OLED displays, for adding effects, looping, and mixing.</p>
                  </div>
              </div>

                <div className={style.CardPrice}>
                  <p>299,00 €</p>
                </div>

              </div>

              <div >
                <div className={style.cards}>
                  <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-schema-light-product-finder-ae258532c7cde8214b831c633babecf4-d.jpg" alt="piano" />
                  <div className={style.cardH2Para}>
                    <h2>Schema: Light</h2>
                    <p>Craft lush melodic patterns and evolving textures from over 320 shapeable sound sources.</p>
                  </div>
              </div>

              <div className={style.cardwith2Price}>

              <div className={style.Card2Price}>
                <span>Regular Price</span>
                <p>149,00 €</p>
              </div>

              <div className={style.Card2Price}>
              <span>Sale Price</span>
                <p>99,00 €</p>
              </div>


                </div>

              </div>
      
            </div>
        </div>



    <div className={style.softwareSection}>

      <div className={style.softwareSectionPart1}>
        <h2>TRAKTOR Digital DJing</h2>
        <p>Cutting-edge pro DJ equipment, built on the industry-leading software for DJs: All-in-one DJ systems, DJ controllers, scratch systems, and more.</p>
        <button>See all TRAKTOR products</button>
      </div>
    
      <div>


      <div className={style.newProducts}>

      <div >
        <div className={style.cards}>
          <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-dj_software_traktor-pro-3-2775d79f05f0674f48acd1925ca31989-d@2x.jpg" alt="piano" />
          <div className={style.cardH2Para}>
            <h2>TRAKTOR PRO 3</h2>
            <p>TRAKTOR PRO 3
              Flagship four-deck DJ software built for the club. Customizable interface, and powerful creative tools for DJing freedom. </p>
          </div>
      </div>

      <div className={style.cardwith2Price}>

          <div className={style.Card2Price}>
            <span>Update</span>
            <p>999,00 €</p>
          </div>

          <div className={style.Card2Price}>
          <span>Full Version</span>
            <p>199,00 €</p>
          </div>

        </div>

        

      </div>

      <div >
        <div className={style.cards}>
          <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-dj_controller_traktor-kontrol-s4-mk3_neu-63d484d92e051ce4821da8f9c47dd2f1-d@2x.jpg" alt="guitar" />
          <div className={style.cardH2Para}>
            <h2>TRAKTOR KONTROL S4</h2>
            <p>4-Channel DJ controller with motorized Haptic Drive™ jog wheels. Full feedback and flexibility, pro audio interface, and more.</p>
          </div>
      </div>

      <div className={style.CardPrice}>
          <p>59,00 €</p>
        </div>
        

      </div>


      <div >
        <div className={style.cards}>
          <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-traktor-x1-product-finder_v2-c2ff40aa3918dfa54fe742c4fa2d153c-d@2x.jpg" alt="piano" />
          <div className={style.cardH2Para}>
            <h2>Traktor X1</h2>
            <p>Portable USB DJ controller with tactile design and advanced OLED displays, for adding effects, looping, and mixing.</p>
          </div>
      </div>

        <div className={style.CardPrice}>
          <p>299,00 €</p>
        </div>

      </div>

      <div >
        <div className={style.cards}>
          <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-dj_controller_traktor-kontrol-s2-mk3_neu-c933a07531d72cc181bd4e0f888c726b-d@2x.jpg" alt="piano" />
          <div className={style.cardH2Para}>
            <h2>TRAKTOR KONTROL S2</h2>
            <p>The latest evolution of our flagship virtual instrument platform – now with an enhanced browser and Factory Library.</p>
          </div>
      </div>

      <div className={style.cardwith2Price}>

      <div className={style.Card2Price}>
        <span>Regular Price</span>
        <p>299,00 €</p>
      </div>

      <div className={style.Card2Price}>
      <span>Sale Price</span>
        <p>149,50 €</p>
        <span>See update price</span>
      </div>


        </div>

      </div>

      </div>


      </div>

    </div>


    <div className={style.softwareSection}>

      <div className={style.softwareSectionPart1}>
        <h2>Software & sounds</h2>
        <p>A vast range of virtual instruments and effects: Synths, sampled instruments, studio and creative effects, samplers, and cinematic tools.</p>
        <button>See all software & sounds</button>
      </div>
    
      <div>


      <div className={style.newProducts}>

      <div >
        <div className={style.cards}>
          <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-komplete-14-collectors-edition-product-finder_rebrand-6edec73d6eeecd70688482d1eef49226-d@2x.jpg" alt="piano" />
          <div className={style.cardH2Para}>
            <h2>KOMPLETE 14 COLLECTORS EDITION</h2>
            <p>Our biggest-ever production bundle, with specialized scoring tools for professional composers and sound designers.</p>
          </div>
      </div>

        <div className={style.CardPrice}>
          <p>21762,80 €</p>
        </div>

      </div>

      <div >
        <div className={style.cards}>
          <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-komplete-14-ultimate-product-finder_rebrand-e1cfb711e100aa40a16ff11579f961e6-d@2x.jpg" alt="guitar" />
          <div className={style.cardH2Para}>
            <h2>KOMPLETE 14 ULTIMATE</h2>
            <p>Our expanded production bundle with cinematic instruments and orchestral libraries for composers and producers who want a little more...</p>
          </div>
      </div>

        <div className={style.cardwith2Price}>

          <div className={style.Card2Price}>
            <span>Update</span>
            <p>1299,00 €</p>
          </div>

          <div className={style.Card2Price}>
          <span>Full Version</span>
            <p>199,00 €</p>
          </div>

        </div>

      </div>


      <div >
        <div className={style.cards}>
          <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-komplete-14-standard-product-finder_rebrand-0db9d039ea38149362847d4b932293aa-d@2x.jpg" alt="piano" />
          <div className={style.cardH2Para}>
            <h2>KOMPLETE 14 STANDARD</h2>
            <p>The world’s favorite music production bundle (now including KONTAKT 7) loved by a wide range of producers, beatmakers of any genre, and even ...</p>
          </div>
      </div>

        <div className={style.CardPrice}>
          <p>299,00 €</p>
        </div>

      </div>

      <div >
        <div className={style.cards}>
          <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-kontakt-7-product-finder-f87fccd008cfd3bc54ed2ddbf6a727ab-d@2x.jpg" alt="piano" />
          <div className={style.cardH2Para}>
            <h2>KONTAKT 7</h2>
            <p>The latest evolution of our flagship virtual instrument platform – now with an enhanced browser and Factory Library.</p>
          </div>
      </div>

      <div className={style.cardwith2Price}>

      <div className={style.Card2Price}>
        <span>Regular Price</span>
        <p>299,00 €</p>
      </div>

      <div className={style.Card2Price}>
      <span>Sale Price</span>
        <p>149,50 €</p>
        <span>See update price</span>
      </div>


        </div>

      </div>

      </div>


      </div>

    </div>



    <div className={style.softwareSection}>

      <div className={style.softwareSectionPart1}>
        <h2>MASCHINE production & performance</h2>
        <p>Produce beats and tracks with ultimate control – integrated groove production systems plus a range of up-to-the-minute sounds.</p>
        <button>See all MASCHINE products</button>
      </div>

      <div>


      <div className={style.newProducts}>

      <div >
        <div className={style.cards}>
          <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-maschine-plus-product-finder-3a7886479dd4f209f7615e9522a407d0-d@2x.jpg" alt="piano" />
          <div className={style.cardH2Para}>
            <h2>MASCHINE+</h2>
            <p>Standalone groovebox and sampler, combining an iconic workflow with premium sounds for production and </p>
          </div>
      </div>

        <div className={style.CardPrice}>
          <p>21762,80 €</p>
        </div>

      </div>

      <div >
        <div className={style.cards}>
          <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-ni_maschine-mikro-mk3_productfinder-6af77a619ef584e6d0b7dc41ca7e52ab-d@2x.jpg" alt="guitar" />
          <div className={style.cardH2Para}>
            <h2>MASCHINE MIKRO</h2>
            <p>Meet your compact beatmaking companion. Tap out beats, play melodies, and build tracks – fast, fun, and hands-on. </p>
          </div>
      </div>

      <div className={style.CardPrice}>
        <p>1299,00 €</p>
       </div>

      </div>


      <div >
        <div className={style.cards}>
          <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-maschine-mk3_01-dc150b1cdb4bbdabc337a795c1608f77-d@2x.jpg" alt="piano" />
          <div className={style.cardH2Para}>
            <h2>MASCHINE</h2>
            <p>The next generation music production and performance instrument for a fast, intuitive, and fun way to create tracks and beats. </p>
          </div>
      </div>

        <div className={style.CardPrice}>
          <p>599,00 €</p>
        </div>

      </div>

      <div >
        <div className={style.cards}>
          <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-maschine-library-product-finder_rebrand-a16b9101f540930171145a5d55ea4b38-d@2x.jpg" alt="piano" />
          <div className={style.cardH2Para}>
            <h2>MASCHINE LIBRARY UPGRADE</h2>
            <p>Library of studio-ready sounds, from drums and crate-digging samples to sample instruments, patterns, and projects. </p>
          </div>
      </div>

      <div className={style.CardPrice}>
                  <p>99,00 €</p>
                </div>

      </div>

      </div>


      </div>

      </div>




      


    </div>
  );
}
