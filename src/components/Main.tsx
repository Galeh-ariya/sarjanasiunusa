import Navbar from "./Navbar";
import Bckg from "../assets/bg-rectangle.jpg";
import Cctv from "../assets/cctv.png";
import Book from "../assets/book.png";
import Robot from "../assets/robot.png";
import Ux from "../assets/ux.png";
import Programmer from "../assets/programmer.png";
import Danalyst from "../assets/danalyst.png";
import Security from "../assets/security.png";
import Pm from "../assets/pm.png";
import Database from "../assets/database.png";
import Techs from "../assets/techs.png";
import Unusa from "../assets/unusa.png";

import TiltImage from "./TiltImage";

// import anime from "animejs";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Main() {
   
    const [text] = useTypewriter({
        words: ['SISTEM INFORMASI'],
        loop: 0,
        typeSpeed: 100,
        delaySpeed: 2000,
        deleteSpeed: 100
      });

      

    return (
        <>
            <Navbar />
            {/* hero */}
            <div className="hero h-full  md:min-h-screen px-4 md:px-8 mt-10 md:mt-0"id="hero">
                <div className="container border rounded-md">
                <div className="w-full h-[36rem] md:h-[26rem]  flex gap-0 overflow-hidden bg-contain opacity-20  bg-repeat-y md:bg-repeat-x"
                    style={{ backgroundImage: `url(${Bckg})` }}>
                </div>
                <div className="image" data-tilt>
                    <TiltImage src={Cctv} cls="absolute top-3 w-32 right-0 md:top-16 md:right-56 md:w-48" alt="3d-cctv" />
                    <TiltImage src={Book} cls="absolute top-3 md:top-28 w-40 left-2 md:w-48 md:left-56" alt="3d-book" />
                    <TiltImage src={Robot} cls="absolute bottom-20 md:bottom-24 w-40 left-8 md:left-20 animate-bounce z-20" alt="3d-cctv" />
                </div>
                <div className="block w-full hero-content text-center absolute top-1/4 left-1/2 md:top-1/2 md:left-1/2 -translate-x-1/2 -translate-y-1/2 mt-36 md:mt-0">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-3 font-inter">Pekerjaan Bidang</h1>
                    <h1 className="text-4xl md:text-5xl font-semibold mb-6 font-inter bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">{text}<Cursor cursorColor='black' /></h1>
                    <p className="text-gray-500 font-semibold font-inter mt-3 md:text-lg">Jelajahi Dunia Tanpa Batas. Temukan Peluang Karir Menguntungkan di Bidang Sistem Informasi.</p>
                    <p className="text-gray-500 font-semibold font-inter md:text-lg">Jadilah ahli teknologi informasi. Buka pintu suksesmu di era digital.</p>
                    <button className="shadow-xl bg-gray-800 font-inter mt-11 hover:bg-slate-600 text-white text-[6px] w-56 h-10 rounded-md text-xl">Baca selengkapnya <i className="fa-solid fa-arrow-right"></i></button>
                </div>
                </div>
            </div>
            {/* end hero */}

            {/* content */}
            <div className="content h-full md:min-h-screen px-6 md:px-8 mt-40 mb-24 md:mb-16 md:mt-0 md:pt-20" id="profesi">
                <div className="container md:flex md:flex-row-reverse md:justify-around">
                    <div className="ilustrasi md:w-3/5 flex-1">
                        <div className="box w-full  shadow-md rounded-md p-4">
                            <TiltImage src={Ux} cls="w-full" alt="3d-ux" />
                        </div>
                    </div>
                    <div className="judul_content mt-6 md:flex-1">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-3 font-inter">UI/UX designer</h1>
                        <p className="font-inter text-gray-500">UI/ UX Designer adalah seorang profesional yang bertanggung jawab untuk merancang antarmuka penggunak (UI) dan pengalaman pengguna (UX) pada produk atau aplikasi. </p>
                        <div className="mt-5 mb-5 grid grid-cols-3 gap-3 justify-start">
                            <h1 className="mb-3 font-inter font-semibold col-start-1 col-span-3">Skill yang diperlukan:</h1>
                            <div className="p-2 bg-yellow-400 w-10 h-10 rounded-full col-start-1 mx-auto">
                                <i className="fa-solid fa-pencil text-xl"></i>  
                            </div>
                            <p className="col-start-2 col-span-2 font-inter text-gray-500">Menguasai tools design seperti figma</p>
                            <div className="p-2 bg-yellow-400 w-10 h-10 rounded-full col-start-1 mx-auto">
                                <i className="fa-solid fa-bezier-curve text-xl"></i> 
                            </div>
                            <p className="col-start-2 col-span-2 font-inter text-gray-500">Dapat Membuat Wireframe dan prototype</p>
                            <div className="p-2 bg-yellow-400 w-10 h-10 rounded-full col-start-1 mx-auto">
                                <i className="fa-solid fa-people-arrows text-xl"></i>
                            </div>
                            <p className="col-start-2 col-span-2 font-inter text-gray-500">Memiliki keterampilan komunikasi yang efektif</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content h-full md:min-h-screen px-6 md:px-8 mt-32 mb-24 md:mb-0 md:mt-0">
                <div className="container md:flex md:justify-between gap-3">
                    <div className="ilustrasi md:w-3/5 flex-1">
                        <div className="box w-full  shadow-md rounded-md p-4">
                            <TiltImage src={Programmer} cls="w-full" alt="3d-programmer" />
                        </div>
                    </div>
                    <div className="judul_content mt-6 md:flex-1">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-3 font-inter">Programmer</h1>
                        <p className="font-inter text-gray-500">Programmer merupakan seseorang yang mengembangkan sebuah aplikasi atau sistem pada komputer untuk membuat suatu perangkat lunak (software) maupun perangkat keras (hardware) dengan menggunakan bahasa pemrograman.</p>
                        <div className="mt-5 mb-5 grid grid-cols-3 gap-3 justify-start">
                            <h1 className="mb-3 font-inter font-semibold col-start-1 col-span-3">Skill yang diperlukan:</h1>
                            <div className="p-2 bg-yellow-400 w-10 h-10 rounded-full col-start-1 mx-auto">
                                <i className="fa-solid fa-diagram-project text-xl"></i>  
                            </div>
                            <p className="col-start-2 col-span-2 font-inter text-gray-500">Memiliki kemampuan untuk menganalisis masalah kompleks dan merancang solusi yang efisien</p>
                            <div className="p-2 bg-yellow-400 w-10 h-10 rounded-full col-start-1 mx-auto">
                                <i className="fa-solid fa-code text-xl"></i>
                            </div>
                            <p className="col-start-2 col-span-2 font-inter text-gray-500">Memahami dan menguasai berbagai bahasa pemrograman seperti java, php, python, dll.</p>
                            <div className="p-2 bg-yellow-400 w-10 h-10 rounded-full col-start-1 mx-auto">
                                <i className="fa-solid fa-people-group text-xl"></i>
                            </div>
                            <p className="col-start-2 col-span-2 font-inter text-gray-500">Kemampuan untuk bekerja dalam tim dan berkolaborasi dengan rekan-rekan</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content h-full md:min-h-screen px-6 md:px-8 mt-28 mb-24 md:mb-0 md:mt-0">
                <div className="container md:flex md:flex-row-reverse md:justify-around">
                    <div className="ilustrasi md:w-3/5 flex-1">
                        <div className="box w-full  shadow-md rounded-md p-4">
                            <TiltImage src={Danalyst} cls="w-full" alt="3d-analyst" />
                        </div>
                    </div>
                    <div className="judul_content mt-6 md:flex-1">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-3 font-inter">Data Analyst</h1>
                        <p className="font-inter text-gray-500">Data analyst adalah sebuah profesi dengan kemampuan menganalisis atau mengolah data untuk kemudian diinformasikan agar bisa digunakan dalam sebuah pengambilan keputusan.</p>
                        <div className="mt-5 mb-5 grid grid-cols-3 gap-3 justify-start">
                            <h1 className="mb-3 font-inter font-semibold col-start-1 col-span-3">Skill yang diperlukan:</h1>
                            <div className="p-2 bg-yellow-400 w-10 h-10 rounded-full col-start-1 mx-auto">
                            <i className="fa-solid fa-chart-pie text-xl"></i> 
                            </div>
                            <p className="col-start-2 col-span-2 font-inter text-gray-500">Analisis data (mengumpulkan, menganalisis, dan menyajikan data)</p>
                            <div className="p-2 bg-yellow-400 w-10 h-10 rounded-full col-start-1 mx-auto">
                                <i className="fa-solid fa-code text-xl"></i>
                            </div>
                            <p className="col-start-2 col-span-2 font-inter text-gray-500">Pemrograman (Python, R, SQL, dll)</p>
                            <div className="p-2 bg-yellow-400 w-10 h-10 rounded-full col-start-1 mx-auto">
                                <i className="fa-solid fa-puzzle-piece text-xl ml-1"></i>
                            </div>
                            <p className="col-start-2 col-span-2 font-inter text-gray-500">Pemecahan masalah</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content h-full md:min-h-screen px-6 md:px-8 mt-36 mb-24 md:mb-0 md:mt-0 md:pt-36">
                <div className="carousel w-full mb-3 md:mb-0 md:shadow-2xl md:rounded-xl p-8">
                    <div id="item1" className="carousel-item w-full mx-14">
                        <div className="slide md:flex">
                            <div>
                                <TiltImage src={Security} cls="w-full" alt="3d-security" />
                            </div>
                            <div className="md:my-auto">
                                <h1 className="text-2xl md:text-3xl font-semibold mb-3 font-inter">Information Security Analyst</h1>
                                <p className="font-inter w-full text-gray-500 md:w-[28rem]">Information Security Analyst atau Analis Keamanan Informasi adalah seorang profesional yang bertanggung jawab untuk melindungi informasi organisasi, sistem komputer, dan jaringan dari ancaman keamanan dengan menerapkan protokol keamanan.</p>
                            </div>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full mx-14">
                        <div className="slide md:flex">
                            <div>
                                <TiltImage src={Pm} cls="w-full" alt="3d-pm" />
                            </div>
                            <div className="md:my-auto">
                                <h1 className="text-2xl md:text-3xl font-semibold mb-3 font-inter">Project Manager</h1>
                                <p className="font-inter w-full text-gray-500 md:w-[28rem]">Project manager atau manajer proyek adalah seseorang yang bertanggung jawab dalam perencanaan, eksekusi, pengawasan, pengendalian, dan juga penutupan proyek.</p>
                            </div>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full mx-14">
                        <div className="slide md:flex md:justify-center">
                            <div className="">
                                <TiltImage src={Database} cls="w-full" alt="3d-database" />
                            </div>
                            <div className="md:my-auto ">
                                <h1 className="text-2xl md:text-3xl font-semibold mb-3 font-inter">Database Administrator</h1>
                                <p className="font-inter w-full text-gray-500 md:w-[28rem]">Database administrator adalah seseorang yang mengatur, mengelola, dan mengamankan data di satu sistem atau lebih. Tujuannya adalah agar user bisa menganalisis data tersebut untuk kepentingan bisnis.</p>
                            </div>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full mx-14">
                        <div className="slide md:flex">
                            <div className="">
                                <TiltImage src={Techs} cls="w-full" alt="3d-technical-support" />
                            </div>
                            <div className="md:my-auto ">
                                <h1 className="text-2xl md:text-3xl font-semibold mb-3 font-inter">Technical Support Specialist</h1>
                                <p className="font-inter text-gray-500 w-full md:w-[28rem]">IT support adalah seseorang yang memiliki pengetahuan dan keterampilan dalam bidang information technology (IT) serta bertugas membantu pengguna mengatasi masalah teknis terkait hardware, software, jaringan, dan sistem komputer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>

            <div className="content h-full md:min-h-screen px-6 md:px-8 mt-64 mb-64 md:mb-0 md:pb-0 md:mt-0 md:pt-48" id="join">
                <div className="container font-inter font-semibold">
                    <center>
                        <h2>Mari Bergabung Bersama Kami di</h2>
                        <h1 className="font-bold text-2xl mb-10">Program Studi S1 Sistem Informasi <span className="text-green-600"> <a href="https://www.unusa.ac.id" target="_blank">UNUSA</a></span></h1>
                        <button className="btn btn-success text-white mt-3"> <a href="http://unusa.ac.id" target="_blank" rel="noopener noreferrer">Info lebih lanjut...</a></button>
                        <div className="logo flex justify-center mt-10 space-x-8">
                            <a href="https://www.unusa.ac.id" target="_blank"><img src={Unusa} alt="logo unusa" className="w-10" /></a>
                            <a href="https://www.unusa.ac.id" target="_blank"><i className="fa-brands fa-instagram text-4xl text-pink-700"></i></a>
                            <a href="https://www.unusa.ac.id" target="_blank"><i className="fa-brands fa-youtube text-4xl text-red-600"></i></a>
                        </div>
                    </center>
                </div>
            </div>
            {/* end content */}

            
        </>
    );
}