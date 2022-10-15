import LeftNavContainer from "../components/Registeration/LeftNavContainer";
import { useState } from "react";
import Head from "next/head";

export default function Register() {
  const inputClass =
    "appearance-none font-semibold bg-neutral-600 block md:w-9/12 w-full border border-gray-800 rounded py-3 px-4 mb-3 leading-tight outline-none focus:border-rose-500";

  const labelClass =
    "block uppercase tracking-wide text-orange-500 text-xs font-bold mb-2";

  const [isLoading, setLoading] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [tid, setTid] = useState("");
  const [uid, setUid] = useState("");
  const [validtid, setValidTid] = useState(true);
  const [validuid, setValidUid] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let valid = true;
    if (tid == "") {
      setValidTid(false);
      valid = false;
    } else {
      setValidTid(true);
    }

    if (uid == "") {
      setValidUid(false);
      valid = false;
    } else {
      setValidUid(true);
    }
    if (valid) {
      const h = new Headers();
      h.set("Content-Type", "application/json");
      const t = await fetch(`${process.env.NEXT_PUBLIC_APIBASE}/team`, {
        method: "PUT",
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
    }
    valid = true;
    setLoading(false);
  };
  return (
    <>
      <Head>
        <title> Join a team | Pantheon 2022</title>
      </Head>
      {modalData && (
        <div className="fixed w-screen p-4 z-10 bg-neutral-800/80 h-[calc(100vh-4rem)] text-xl backdrop-blur-sm backdrop-filter flex flex-col overflow-y-auto">
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
            className="bg-rose-900 text-white font-bold px-4 py-2 rounded-md mb-12"
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
        <h1 className="font-bold text-lg mt-4 mx-4">
          You can not join/create another team if you're already part of a team
        </h1>
        <form onSubmit={handleSubmit} className="m-4">
          <label className={labelClass}>
            Pantheon Id {!validuid && "Error, Please Check Again"}
          </label>
          <input
            onChange={(e) => {
              setUid(e.target.value);
            }}
            className={inputClass}
          />

          <label className={labelClass}>
            Team Id {!validtid && "Error, Please Check Again"}
          </label>
          <input
            onChange={(e) => {
              setTid(e.target.value);
            }}
            className={inputClass}
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`${
              isLoading ? "bg-gray-900" : "bg-rose-700"
            } text-white mt-2 font-bold rounded-md px-12 py-2`}
          >
            Join
          </button>
        </form>
      </LeftNavContainer>
    </>
  );
}
