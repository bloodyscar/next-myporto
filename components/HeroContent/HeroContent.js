

import Image from 'next/image';
import styles from './HeroContent.module.css';

export default function HeroContent() {
    return (
        <div className="text-banner mt-5">
            <div className="textHero">
                <div data-aos="fade-down" data-aos-duration="2000">
                    <div className={styles.imgAvatar}>
                        <Image src="/image/my-ava.png" width={200} height={200} objectFit='cover' />
                    </div>
                </div>
            </div>
            <div className={styles.textBio} data-aos="fade-up" data-aos-duration="2000">
                <p style={{ fontSize: "1,2em" }} >Hello everyone,    My name is</p>
                <h2 style={{ textAlign: 'center', fontSize: "1,4em" }}  >Adit Hernowo</h2>
                <h4 style={{ textAlign: 'center', fontSize: "1,4em" }}>
                    Flutter & Backend Developer
                </h4>
                <div>
                    <div className={styles.imgSosmed}>
                        <a
                            className="img-fluid"
                            href="https://www.github.com/bloodyscar"
                        ><img width="80%" height="100%" src="image/github.png"
                            /></a>
                        <a
                            className="img-fluid mx-3"
                            href="https://dribbble.com/adithernowo"
                        ><img width="80%" height="100%" src="image/drible.png"
                            /></a>
                        <a
                            className="img-fluid"
                            href="https://instagram.com/adithernowos"
                        ><img width="80%" height="100%" src="image/ig.png"
                            /></a>
                    </div>
                    <div className="mt-4">
                        <div className="position-relative" style={{ bottom: "-10px" }} >
                            <p style={{ fontSize: "14px" }} >SCROLL DOWN</p>
                        </div>
                        <div className="d-flex justify-content-center chevron">
                            <a href="#about"
                            ><img src="image/chevron.svg" width="70px" height="100%"
                                /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
