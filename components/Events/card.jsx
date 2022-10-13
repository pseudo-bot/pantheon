import { useState } from "react";
import Link from "next/link";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Card({
  imgsrc,
  name,
  club,
  datetime,
  venue,
  coordinators,
  tsize,
  desc,
  regurl,
}) {
  const [showDesc, setShowDesc] = useState(false);
  const [parent] = useAutoAnimate();
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-neutral-800 max-w-sm">
        <img
          className="rounded-t-lg object-contain h-72 mx-auto"
          src={imgsrc}
          alt=""
        />
        <div className="p-6">
          <h5 className="text-white text-xl font-bold mb-2">{name}</h5>
          <h5 className="text-gray-400 text-base font-bold mb-2">{datetime}</h5>
          <p className="text-gray-400 text-base mb-4" ref={parent}>
            {showDesc ? (
              desc
            ) : (
              <>
                Club - {club}
                <br />
                Team Size - {tsize}
                <br />
                Venue - {venue}
                <br />
                Coordinators - {coordinators}
              </>
            )}
          </p>
          {desc && (
            <button
              onClick={() => {
                setShowDesc(!showDesc);
              }}
              type="button"
              className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              {showDesc ? "Hide" : "Show"} Description
            </button>
          )}
          {regurl && (
            <Link href={regurl}>
              <button className="mx-6 my-6 sm:my-0 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                Register
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
