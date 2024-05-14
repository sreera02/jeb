
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
 <nav className="mx-0 my-8">
   <a className="mx-10 hover:border-b-4 border-black" href="">Home</a>
   <a className="mx-10 hover:border-b-4 border-black" href="">About</a>
   <a className="mx-10 hover:border-b-4 border-black" href="">Products</a>
   <a className="mx-10 hover:border-b-4 border-black" href="">Login/Register</a>
   <a className="mx-10 hover:border-b-4 border-black" href="">Contact</a>
 </nav>
</header>
<hr></hr>
<section className="w-full h-[80vh] flex items-center bg-[url('/bg-1.jpg')] bg-cover">
 <div>
   <h1 className="flex text-[12vh] text-white xl:drop-shadow-[0_1.2px_1.2px_rgba(46,247,15,0.8)]">With <span className="text-green-500">&#160;Herblet,</span></h1>
   <h1 className="flex text-[12vh] text-white xl:drop-shadow-[0_1.2px_1.2px_rgba(46,247,15,0.8)]">Supplement Your Life!</h1>
   <img src="/clout.png" className="absolute right-[5vw] top-[28vh] w-[25vw]"></img>
  <img src="/pills.png" className="absolute right-[5vw] top-[33vh] w-[25vw]"></img>
 </div>

</section>
</div>
  );
}