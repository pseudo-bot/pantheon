import { useState } from "react";
import LeftNavContainer from "../components/Registeration/LeftNavContainer";

export default function Register() {
  const [uid, setUid] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Post req.
    // ---
    const uidfromres = "pantheon444";
    setUid(uidfromres);
  };
  return (
    <>
      {uid && (
        <div className="absolute w-screen p-4 z-10 bg-white/80 h-[calc(100vh-4rem)] text-xl backdrop-blur-sm backdrop-filter flex flex-col">
          <div className="flex-1 text-center">
            <div className="font-bold text-2xl text-green-600"> Success </div>
            Your UID is {uid}
            <div className="text-red-400 animate__animated animate__tada mt-4 font-bold">
              Please take a screenshot of this page before going further
            </div>
          </div>
          <button
            className="bg-rose-900 text-white font-bold px-4 py-2 rounded-md"
            onClick={() => {
              setUid(false);
            }}
          >
            Done
          </button>
        </div>
      )}
      <LeftNavContainer currentPage={0}>
        <h1 className="font-bold text-2xl mt-4 mx-4">
          Indivdual Registeration{" "}
        </h1>
        <form onSubmit={handleSubmit} className="m-4">
          <label className="block uppercase tracking-wide text-rose-700 text-xs font-bold mb-2">
            Name
          </label>
          <input className="appearance-none block md:w-9/12 w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-rose-500" />

          <label className="block uppercase tracking-wide text-rose-700 text-xs font-bold mb-2">
            Name
          </label>
          <input className="appearance-none block md:w-9/12 w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-rose-500" />

          <label className="block uppercase tracking-wide text-rose-700 text-xs font-bold mb-2">
            Name
          </label>
          <input className="appearance-none block md:w-9/12 w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-rose-500" />

          <label className="block uppercase tracking-wide text-rose-700 text-xs font-bold mb-2">
            Name
          </label>
          <input className="appearance-none block md:w-9/12 w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-rose-500" />

          <label className="block uppercase tracking-wide text-rose-700 text-xs font-bold mb-2">
            Name
          </label>
          <input className="appearance-none block md:w-9/12 w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-rose-500" />

          <button
            type="submit"
            className="bg-rose-700 text-white font-bold rounded-md px-4 py-2"
          >
            Register
          </button>
        </form>
      </LeftNavContainer>
    </>
  );
}
