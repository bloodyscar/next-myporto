
import Image from 'next/image';

export default function Content() {
    return (
        <div className="section2" id="about">
            <div className="container mt-5">
                <div className="row">
                    <div
                        className="col-md-6 text-about d-flex justify-content-center"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <div class="img-fluid">
                            <Image src="/image/about.jpg" width={300} height={250} objectFit='cover' />

                        </div>
                        {/* <img className="img-fluid" src="image/about.jpg" width="90%" /> */}
                    </div>
                    <div
                        className="col-md-6 text-about"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <div className="about">
                            <h2><span>About</span></h2>
                        </div>
                        <p className="mt-3 me-2 text-about">
                            Halo! Nama saya Adit Hernowo.<br />
                            Saat ini, saya sedang tertarik mendalami <br />
                            Aplikasi Mobile menggunakan bahasa Dart terutama Flutter, <br />
                            dan untuk backend saya terbiasa menggunakan Laravel atau Firebase.
                            <br />
                            Saya pernah mempelajari Javascript, VueJS, Java <br />
                            dengan tingkat Basic<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
