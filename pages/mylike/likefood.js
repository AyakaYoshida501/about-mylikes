import Head from "next/head";
import Link from "next/link";
import GoodBtn from "../../favoriteBtn";


export default function Hom({posts}) {
    return (
        <div >
            <header>
            </header>
            <main>
            <h2 className="text-5xl text-center mt-10 bg-indigo-700 text-white py-4 flex flex-col align-middle">好きな食べ物</h2>
            <div className="box-border  grid grid-cols-3 gap-3 mt-7 mx-5 ">
              {posts.map(post => (
                <div key={post.id} className="border border-indigo-200 mt-10 text-3xl text-center p-3 ">
                <div className="">
                  <Link href= {`/mylike/${post.id}`}><p className="py-1 text-center cursor-pointer ">{post.food}</p></Link>
                  <GoodBtn />
                </div>
                </div >
              ))}
              </div>
              <p className="text-center mt-7 text-4xl">🍨　🍰　🍅　🍞　🥝　🐔　🥢　🍣　🍲</p>
              <Link href="/"><a><p className="text-center mt-7 underline">１つ前に戻る</p></a></Link>
            </main>
        </div>
    );
  }
  export const getStaticProps = async () => {  
    const res = await fetch("https://api.sssapi.app/s8sp7UL-qw2UyLbEX87iC")
    const posts = await res.json()  
    // ページコンポーネントにpropsとしてに渡す
    return {
      props: {
        posts,
      },
    }
  }
  
