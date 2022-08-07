import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
      <div className="">
          <header>
              {/* <img className="icon_pic" src="images/IMG_2244.JPG" width={100} height={100} /> */}
          </header>
          <main >
        <div className='min-h-screen py-0 px-2 flex flex-col justify-center '>
          <h1 className="text-6xl font-black text-center my-3">About myLikes</h1>
          <p className="text-5xl text-center mt-3 mb-3">--food--</p>
          <div className='flex flex-col'>
          <button className="bg-indigo-700 font-semibold text-white py-2 px-4 rounded "><Link href="/mylike/likefood" ><p className="text-center">Next</p></Link></button>
          </div>
          {/* <p className='text-center mt-8 text-2xl'>Ayaka Yoshida</p> */}
        </div>
          </main>
      </div>
  );
}
//items-center　これでボタンが伸びなくなった


