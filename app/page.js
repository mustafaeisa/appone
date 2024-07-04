// import Caring from "@/components/caring";
import Clients from "@/components/clients";
import Community from "@/components/community";
import Footer from "@/components/footer";
import Hero_2 from "@/components/hero_2";
import Hero from "@/components/nav/heoro";



export default function Home() {
  return (
    <main className="">
     <Hero/>
     <Clients/>
     <Community/>
     <Hero_2/>
     {/* <Caring/> */}
     <Footer/>
    </main>
  );
}
