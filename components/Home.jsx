import Image from "next/image";
function ComingSoon() {
  return (
    <div className="animate-pulse flex justify-center relative text-white">
      <div className="animate__animated animate__fadeInLeft text-2xl sm:text-6xl staat tracking-widest">
        Registrations &nbsp;
      </div>
      <div className="animate__animated animate__fadeInRight text-2xl sm:text-6xl staat tracking-widest">
        Open
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="relative">
      <Image
        src="/home/logo.png"
        alt="logo"
        height={200}
        width={200}
        objectFit="cover"
      />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative font-bold text-4xl sm:text-8xl text-white tracking-widest">
      PANTHEON '22
    </div>
  );
}

function Home() {
  return (
    <div>
      <div className="absolute h-screen w-screen opacity-90">
        <Image src="/home/bg.jpg" alt="logo" layout="fill" objectFit="cover" />
      </div>
      <div className="flex w-screen h-screen flex-col items-center justify-center gap-16">
        <Logo />
        <Heading />
        <ComingSoon />
      </div>
    </div>
  );
}

export default Home;
