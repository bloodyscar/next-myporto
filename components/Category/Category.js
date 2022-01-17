import Image from 'next/image'
import style from './Category.module.css';
import React, { useState } from 'react';

export default function Category() {
    const [active, setActive] = useState(false);


    console.log(active);

    function handleFilter(word) {
        setActive(!active);


        const val = word.getAttribute("data-filter");
        if (val == "mobile") {
            console.log("ini mobile");
        } else if (val == "all") {
            console.log("ini all");
        }
        else if (val == "website") {
            console.log("ini website");
        }
    }


    return (
        <>
            <div className="section3 mt-5" id="portfolio">
                <div
                    className="d-flex justify-content-center"
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    <h2>Portfolio</h2>
                </div>
                <div
                    className="d-flex flex-wrap justify-content-center navbar-expand category"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                </div>
                <div className="container mt-5" data-aos="fade-up" data-aos-duration="2000">
                    <div className="row">
                        <div className="col-md-4 itemBox website">
                            <div className="card">
                                <div className={style.imageContainer}>
                                    <Image src="/image/traveland.jpg" alt="traveland cover" height={"70"} width={"100"} layout='responsive' className="img-fluid card-img-top" />

                                </div>
                                <div
                                    className="card-body d-flex justify-content-between align-items-baseline"
                                >
                                    <p className="card-text">Traveland - Web App</p>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModalTraveland"
                                    >
                                        See more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 itemBox website">
                            <div className="card">
                                <div className={style.imageContainer}>
                                    <Image src="/image/gamespace.jpg" alt="gamespace cover" height={"70"} width={"100"} layout='responsive' />
                                </div>
                                <div
                                    className="card-body d-flex justify-content-between align-items-baseline"
                                >
                                    <p className="card-text">GameSpace - Web App</p>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModalGamespace"
                                    >
                                        See more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 itemBox website">
                            <div className="card">
                                <div className={style.imageContainer}>
                                    <Image src="/image/vacanza.jpg" alt="vacanza cover" height={"70"} width={"100"} layout='responsive' />
                                </div>
                                <div
                                    className="card-body d-flex justify-content-between align-items-baseline"
                                >
                                    <p className="card-text">Vacanza - Web App</p>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModalVacanza"
                                    >
                                        See more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 itemBox mobile">
                            <div className="card">
                                <div className={style.imageContainer}>
                                    <Image src="/image/shamo-cover.jpg" alt="traveland cover" height={"70"} width={"100"} layout='responsive' className="img-fluid card-img-top" />

                                </div>
                                <div
                                    className="card-body d-flex justify-content-between align-items-baseline"
                                >
                                    <p className="card-text">Shamo - Mobile App</p>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm" data-bs-toggle="modal"
                                        data-bs-target="#exampleModalShamo"
                                    >
                                        See more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 itemBox mobile">
                            <div className="card">
                                <div className={style.imageContainer}>
                                    <Image src="/image/mieayu.png" alt="traveland cover" height={"70"} width={"100"} layout='responsive' className="img-fluid card-img-top" />

                                </div>
                                <div
                                    className="card-body d-flex justify-content-between align-items-baseline"
                                >
                                    <p className="card-text">Mie Ayu - Mobile App</p>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-sm" data-bs-toggle="modal"
                                        data-bs-target="#exampleModalMieayu"
                                    >
                                        See More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="modal fade"
                id="exampleModalTraveland"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-xl modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h5>Traveland</h5>
                                        <p style={{ textIndent: 40 }}>
                                            Traveland adalah sebuah website pemesanan tiket liburan
                                            secara online yang dibangun dengan bahasa PHP, framework
                                            Laravel serta Bootstrap 4. Seperti traveloka hanya saja
                                            lebih simple, yaitu pada menu utama kita bisa memilih tempat
                                            wisata yang ingin dituju, lalu memasukkan jumlah orang, hari
                                            dan setelah itu tekan tombol pesan, berikutnya customer akan
                                            mendapatkan nomor rekening untuk membayar tagihan tersebut,
                                            pemesanan tersebut akan dicek oleh admin untuk
                                            mengkonfirmasi pembayaran.
                                        </p>
                                        <p>Link Github : <a href="https://bloodyscar.github.io/traveland-web/" target="_blank" style={{ color: "blue" }}>Traveland</a></p>
                                        <div class="d-flex">
                                            <p class="languageList">PHP</p>
                                            <p class="languageList">Laravel</p>
                                            <p class="languageList">Bootstrap 4</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div>
                                            <Image src="/image/traveland.jpg" layout='responsive' width={400} height={300} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <div
                className="modal fade"
                id="exampleModalGamespace"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Gamespace</h5>
                                        <p style={{ textIndent: 40 }}>
                                            GameSpace adalah sebuah website pemesanan DVD game
                                            Playstation, Xbox, Steam, Nintendo secara online yang
                                            dibangun dengan bahasa Javascript, framework Tailwind CSS.
                                            Seperti Rajagame hanya saja lebih simple, website ini hanya
                                            tertera UI saja.
                                        </p>
                                        <p>Link Github : <a href="https://gamingspace.netlify.app/" target="_blank" style={{ color: "blue" }}>Gamespace</a></p>
                                        <div className="d-flex">
                                            <p className="languageList">Javascript</p>
                                            <p className="languageList">Tailwind CSS</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <Image src="/image/gamespace.jpg" layout='responsive' width={400} height={300} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModalVacanza"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Vacanza</h5>
                                        <p style={{ textIndent: 40 }}>
                                            Vacanza adalah sebuah website pemesanan hotel secara online
                                            yang dibangun dengan bahasa Javascript, framework React JS.
                                            Seperti Rajagame hanya saja lebih simple, website ini hanya
                                            tertera UI saja.
                                        </p>
                                        <p>Link Github : <a href="https://github.com/bloodyscar/vacanza" target="_blank" style={{ color: "blue" }}>Vacanza</a></p>
                                        <div className="d-flex">
                                            <p className="languageList">Javascript</p>
                                            <p className="languageList">React JS</p>
                                            <p className="languageList">Bootstrap 4</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <Image src="/image/vacanza.jpg" layout='responsive' width={400} height={300} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModalShamo"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Shamo</h5>
                                        <p style={{ textIndent: 40 }}>
                                            Shamo App adalah sebuah aplikasi yang dibangun dengan flutter dan backend Laravel serta fitur chatting dengan Firebase.
                                            Aplikasi ini tersedia di Kelas buildwithangga.com dibuat khusus untuk mempelajari bagaimana membuat aplikasi dengan flutter.

                                        </p>
                                        <p>Link Github : <a href="https://github.com/bloodyscar/shamo-app-flutter" target="_blank" style={{ color: "blue" }}>Shamo App</a></p>
                                        <div className="d-flex">
                                            <p className="languageList">Flutter</p>
                                            <p className="languageList">Laravel</p>
                                            <p className="languageList">Firebase</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <Image src="/image/shamo-cover.jpg" layout='responsive' width={400} height={300} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModalMieayu"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Mie Ayu App</h5>
                                        <p style={{ textIndent: 40 }}>
                                            Mie Ayu Rawalumbu App adalah sebuah aplikasi yang dibuat dengan Flutter,
                                            sedangkan Backendnya memanfaatkan fitur yang dimiliki oleh Firebase,
                                            serta mengimplementasikan Google Map API agar bisa mendapatkan location user.
                                            Aplikasi ini memungkinkan customer Mie Ayu gaperlu repot datang ke restoran tersebut,
                                            karena dengan aplikasi tersebut, customer dapat memilih makanan yang diinginkan secara online.

                                        </p>
                                        <p>Link Github : <a href="https://github.com/bloodyscar/flutter-mie-ayu" target="_blank" style={{ color: "blue" }}>Mie Ayu App</a></p>
                                        <div className="d-flex">
                                            <p className="languageList">Flutter</p>
                                            <p className="languageList">Laravel</p>
                                            <p className="languageList">Google Map API</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <Image src="https://camo.githubusercontent.com/556db0aec5c65b115fd0127e14fb09d1744cb3ae5dd558db26805456df92da70/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f666c75747465722d6d69652d6179752e61707073706f742e636f6d2f6f2f322e706e673f616c743d6d6564696126746f6b656e3d33303361326665362d346565382d346564642d386663332d633830313761303935323232" layout='responsive' width={400} height={300} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
