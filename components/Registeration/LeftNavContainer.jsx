import Link from "next/link";
import Image from "next/image";
// This currentPage is used to show which one is currently active
// Use 0 for Individual
// Use 1 for Team
// Use 2 for Join
export default function LeftNavContainer({ currentPage, children }) {
  return (
    <div className="bg-neutral-900 text-white mt-16 flex flex-col min-h-[calc(100vh-4rem)] md:flex-row md:h-[calc(100vh-4rem)]">
      <div className="md:w-5/12 lg:w-4/12 flex gap-4 flex-col md:h-[calc(100vh-4rem)] px-4 py-2 items-center">
        <h1 className="my-4 font-bold text-xl text-center">
          Welcome To
          <div className="logo">
            <Image src="/home/logo.png" height={70} width={70} alt="logo" />
          </div>
          <p className="text-orange-600 tracking-tight m-0 text-4xl">
            Pantheon
          </p>
          BIT Mesra
        </h1>
        <Button active={currentPage == 0} to="register">
          Individual Registration
        </Button>
        <Button active={currentPage == 1} to="team">
          Team Registration
        </Button>
        <Button active={currentPage == 2} to="join">
          Join a team
        </Button>
      </div>
      <div className="md:h-[calc(100vh-4rem)] w-full md:overflow-y-scroll">
        {children}
      </div>
    </div>
  );
}

const Button = ({ active, to, children }) => {
  return (
    <Link href={to}>
      <div
        className={`w-full px-2 py-4 text-white rounded font-bold cursor-pointer ${
          active ? "bg-rose-900" : "bg-red-700"
        }`}
      >
        {children}
      </div>
    </Link>
  );
};
