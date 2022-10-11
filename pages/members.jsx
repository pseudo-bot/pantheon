import LeftNavContainer from "../components/Registeration/LeftNavContainer";
import { useState } from "react";

export default function Register() {
  const inputClass =
    "appearance-none font-semibold bg-neutral-600 block md:w-9/12 w-full border border-gray-800 rounded py-3 px-4 mb-3 leading-tight outline-none focus:border-rose-500";

  const labelClass =
    "block uppercase tracking-wide text-orange-500 text-xs font-bold mb-2";

  const [isLoading, setLoading] = useState(false);
  const [modalData, setModalData] = useState(false);

  const [uid, setUid] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const h = new Headers();
    h.set("Content-Type", "application/json");
    const t = await fetch(`${process.env.NEXT_PUBLIC_APIBASE}/user/members?tid=${uid}`, {
      method: "GET",
      headers: h,
    });
    if (t.status == 200) {
        const res = await t.json();
        console.log(res)
      setModalData({
        greenText: "Team Members",
        members: Object.values(res.members).map(({uid,name})=>`${name}`),  
      });
    } else {
      const res = await t.json();
      setModalData({
        redText: "Error",
        blackText: res.msg,
      });
    }
    setLoading(false);
  };
  return (
    <>
      {modalData && (
        <div className="fixed w-screen p-4 z-10 bg-neutral-800/80 h-[calc(100vh-4rem)] text-xl backdrop-blur-sm backdrop-filter flex flex-col">
          <div className="flex-1 text-center flex flex-col justify-center">
            <div className={`font-bold text-2xl ${modalData.members?"text-green-600":"text-red-500"}`}>
              {modalData.greenText || modalData.redText}
            </div>
            <div className="text-4xl text-white mt-4 ">
              <ul className="list-disc list-inside leading-snug">
              {modalData.members?.map(e=>{
                return (
                  <>
                  <br/>
                  <li>{e}</li>
                  </>
                )
              })}{modalData.blackText}
              </ul>
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
      <LeftNavContainer currentPage={3}>
        <h1 className="font-bold text-4xl mt-4 mx-4">Check Team Members</h1>
        {/* <h1 className="font-bold text-lg mt-4 mx-4">
          You can not join/create another team if you're already part of a team
        </h1> */}
        <form onSubmit={handleSubmit} className="m-4">
          <label className={labelClass}>Team Id</label>
          <input
            onChange={(e) => {
              setUid(e.target.value);
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
            Check Members
          </button>
        </form>
      </LeftNavContainer>
    </>
  );
}
