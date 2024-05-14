
export default function Header() {
  return (
<div>
<head>
 <meta name="viewport" content="with=device-width"></meta>
</head>
<header className="flex sticky">
 <div className="inline-flex bg-green-300 rounded-lg bg-blur p-8">
   <span className="hover:bg-green-200 rounded-lg bg-blur-xl"><a href="#" className="xl:text-xl"><b><em>Herblet</em></b></a><img src='/leaf.png' className="object-contain flex-wrap ml-20 -my-8"></img></span>
 </div>
 <nav className="mx-0 my-8 max-md:hidden">
   <a className="mx-10 hover:border-b-4 border-black" href="">Home</a>
   <a className="mx-10 hover:border-b-4 border-black" href="">About</a>
   <a className="mx-10 hover:border-b-4 border-black" href="">Products</a>
   <a className="mx-10 hover:border-b-4 border-black" href="">Login/Register</a>
   <a className="mx-10 hover:border-b-4 border-black" href="">Contact</a>
 </nav>
</header>
<hr></hr>
<section className="w-full h-[80vh] flex items-center bg-[url('/bg-1.jpg')] bg-cover">
 <div className="flex-wrap">
   <h1 className="flex leading-[12vh] text-[12vh] text-white ">With <span className="text-green-500">&#160;Herblet,</span></h1>
   <h1 className="flex leading-[12vh] text-[12vh] text-white mb-[15vh]">Supplement Your Life!</h1>
  <div className="inline-flex items-center">
    <button className="flex bg-green-300 rounded-2xl px-6 p-2 ml-[4vw]"><b>Sign Up</b></button>
    <button className="flex bg-green-300 rounded-2xl px-6 p-2 ml-[2vw]"><b>Learn More</b></button>
  </div>
 </div>
 </section>
 <section>
  <h1>lol</h1>
  <h1>lol</h1>
  <h1>lol</h1>
  <h1>lol</h1>
  <h1>lol</h1>
  <h1>lol</h1>
  <h1>lol</h1><h1>lol</h1>
  <h1>lol</h1>

 </section>
</div>
  );
}