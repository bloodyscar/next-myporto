import Image from 'next/image'
import style from './Category.module.css';

export default function Category() {
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
                    <ul
                        className="navbar-nav categoryNav d-flex flex-wrap justify-content-center"
                    >
                        <li className="nav-item listCategory active" data-filter="all">All</li>
                        <li className="nav-item listCategory" data-filter="mobile">Mobile</li>
                        <li className="nav-item listCategory" data-filter="website">Website</li>
                        <li className="nav-item listCategory" data-filter="certificate">
                            Certificate
                        </li>
                    </ul>
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
                                        data-bs-target="#exampleModalGamespace"
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
                                        className="btn btn-primary btn-sm"
                                        data-bs-toggle="modal"
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
                                        className="btn btn-primary btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModalMieayu"
                                    >
                                        See more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="exampleModalTraveland"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Traveland</h5>
                                        <p style={{ textIndent: "40" }}>
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
                                        <div className="d-flex">
                                            <p className="languageList">PHP</p>
                                            <p className="languageList">Laravel</p>
                                            <p className="languageList">Bootstrap 4</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <img src="image/traveland.jpg" width="100%" />
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
