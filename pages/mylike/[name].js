import { useRouter } from "next/router";
import Link from "next/link";


export async function getServerSideProps() {
  const res= await fetch("https://api.sssapi.app/s8sp7UL-qw2UyLbEX87iC")
  const posts= await res.json()
  console.log(posts)
  // ページコンポーネントにpropsとしてに渡す
  return {
      props: {
          posts,
      },
  }
  }


  export default function Name({posts}) {
    const router = useRouter();
    console.log(router.query);
    const items = posts.filter(post =>post.id === Number(router.query.name))
    console.log(items)
    console.log(items.map(item => item.reason))
    console.log(items.map(item => item.picture))
    return (
      <>
      <h1 className="text-5xl text-center mt-10 bg-indigo-700 text-white py-4 flex flex-col align-middle">好きな理由</h1>
      {/* <h2>商品{router.query.name}のページです</h2> */}
      <div>
        {items.map(item => {
          return(
          <div className="">
            <h2 class="text-center my-8 text-3xl">{item.reason}</h2>
            <div className="flex flex-col ">
            <img src={item.picture} className="self-center w-auto h-80 border-2 p-3 border-indigo-200"></img>
            </div>
          </div>
            )
        })}
        <Link href="/mylike/likefood"><a><p className="text-center mt-7 underline">１つ前に戻る</p></a></Link>
      </div>
    </>
    );
  }