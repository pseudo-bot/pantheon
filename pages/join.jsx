import LeftNavContainer from "../components/Registeration/LeftNavContainer";
import { useState } from "react";

export default function Register() {
  const inputClass =
    "appearance-none bg-neutral-600 block md:w-9/12 w-full border border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-rose-500";

  const labelClass =
    "block uppercase tracking-wide text-rose-600 text-xs font-bold mb-2";
  const [modalData, setModalData] = useState(false);
  const [tid, setTid] = useState("");
  const [uid, setUid] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const h = new Headers();
    h.set("Content-Type", "application/json");
    const t = await fetch(`${process.env.NEXT_PUBLIC_APIBASE}/team/join`, {
      method: "POST",
      headers: h,
      body: JSON.stringify({
        tid: tid,
        uid: uid,
      }),
    });
    if (t.status == 200) {
      setModalData({
        greenText: "Success",
        blackText: `Team Joined Successfully`,
        redText: "",
      });
    } else {
      const res = await t.json();
      setModalData({
        greenText: "",
        redText: "Error",
        blackText: res.msg,
      });
    }
  };
  return (
    <>
      {modalData && (
        <div className="absolute w-screen p-4 z-10 bg-neutral-500/80 h-[calc(100vh-4rem)] text-xl backdrop-blur-sm backdrop-filter flex flex-col">
          <div className="flex-1 text-center flex flex-col justify-center">
            <div className="font-bold text-2xl text-green-600">
              {" "}
              {modalData.greenText}{" "}
            </div>
            <div className="text-red-500 text-2xl mt-4 font-bold">
              {modalData.redText}
            </div>
            <div className="text-4xl text-white mt-4">
              {modalData.blackText}
            </div>
          </div>
          <button
            className="bg-rose-900 text-white font-bold px-4 py-2 rounded-md"
            onClick={() => {
              setModalData(false);
            }}
          >
            Done
          </button>
        </div>
      )}
      <LeftNavContainer currentPage={2}>
        <h1 className="font-bold text-4xl mt-4 mx-4">Join Team</h1>
        <form onSubmit={handleSubmit} className="m-4">
          <label className={labelClass}>Personal Id</label>
          <input
            onChange={(e) => {
              setUid(e.target.value);
            }}
            className={inputClass}
          />

          <label className={labelClass}>Team Id</label>
          <input
            onChange={(e) => {
              setTid(e.target.value);
            }}
            className={inputClass}
          />

          <button
            type="submit"
            className="bg-rose-700 text-white font-bold rounded-md px-4 py-2"
          >
            Join
          </button>
        </form>
      </LeftNavContainer>
    </>
  );
}
