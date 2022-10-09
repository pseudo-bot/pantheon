import LeftNavContainer from "../components/Registeration/LeftNavContainer";
import { useState } from "react";
import { validateName } from "../validate";

export default function Register() {
  const inputClass =
    "appearance-none font-semibold bg-neutral-600 block md:w-9/12 w-full border border-gray-800 rounded py-3 px-4 mb-3 leading-tight outline-none focus:border-rose-500";

  const labelClass =
    "block uppercase tracking-wide text-orange-500 text-xs font-bold mb-2";

  const [name, setName] = useState("");
  const [validname, setvalidname] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [uid, setUid] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let valid = true;

    if (!validateName(name)) {
      setvalidname(false);
      console.log("invalidName");
      valid = false;
    }
    if (valid) {
      const h = new Headers();
      h.set("Content-Type", "application/json");
      const t = await fetch(`${process.env.NEXT_PUBLIC_APIBASE}/team/create`, {
        method: "POST",
        headers: h,
        body: JSON.stringify({
          name: name,
          uid: uid,
        }),
      });
      if (t.status == 201) {
        const res = await t.json();
        console.log(res);
        setModalData({
          greenText: "Success",
          redText: "Your TeamID have been sent to email",
          blackText: `Your Team ID is ${res.tid}`,
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
    setLoading(false);
  };
  return (
    <>
      {modalData && (
        <div className="fixed w-screen p-4 z-10 bg-neutral-800/80 h-[calc(100vh-4rem)] text-xl backdrop-blur-sm backdrop-filter flex flex-col">
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
      <LeftNavContainer currentPage={1}>
        <h1 className="font-bold text-4xl mt-4 mx-4">Team Registration </h1>
        <form onSubmit={handleSubmit} className="m-4">
          <label className={labelClass}>
            Teams Name {!validname && "Error, Please Check Again"}
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={inputClass}
          />

          <label className={labelClass}>Personal Id</label>
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
            Register
          </button>
        </form>
      </LeftNavContainer>
    </>
  );
}
