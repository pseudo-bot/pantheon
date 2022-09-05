import Image from 'next/image';
function ComingSoon() {
  return (
    <div className="flex w-full justify-center relative">
      <div className="animate__animated animate__fadeInLeft text-6xl staat tracking-widest">
        COMING &nbsp;
      </div>
      <div className="animate__animated animate__fadeInRight text-6xl staat tracking-widest">
        SOON
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
        height={300}
        width={300}
        objectFit="cover"
      />
    </div>
  );
}

function Home() {
  return (
    <div className="flex w-screen h-screen flex-col items-center justify-center gap-16">
      {/* <div className="absolute h-screen w-screen z-10">
        <Image
          src="/home/logo.png"
          alt="logo"
          layout='fill'
          objectFit="cover"
        />
      </div> */}
      <Logo />
      <ComingSoon />
    </div>
  );
}

export default Home;
