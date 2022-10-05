import Link from "next/link";
// This currentPage is used to show which one is currently active
// Use 0 for Individual
// Use 1 for Team
// Use 2 for Join
export default function LeftNavContainer({ currentPage, children }) {
  return (
    <div className="mt-16 flex flex-col md:flex-row h-[calc(100vh-4rem)]">
      <div className="flex gap-4 flex-col md:h-[calc(100vh-4rem)] px-4 py-2 items-center">
        <h1 className="font-bold text-lg">Welcome To Pantheon BIT Mesra</h1>
        <Button active={currentPage == 0} to="register">
          Indivdual Registeration
        </Button>
        <Button active={currentPage == 1} to="team">
          Team Registeration
        </Button>
        <Button active={currentPage == 2} to="join">
          Join a team
        </Button>
      </div>
      <div className="md:h-[calc(100vh-4rem)] w-full overflow-y-scroll">
        {children}
      </div>
    </div>
  );
}

const Button = ({ active, to, children }) => {
  return (
    <Link href={to}>
      <div
        className={`w-full px-2 py-4 text-white rounded font-bold ${
          active ? "bg-rose-900" : "bg-red-700"
        }`}
      >
        {children}
      </div>
    </Link>
  );
};
