import { useState } from "react";
import LeftNavContainer from "../components/Registeration/LeftNavContainer";
import Head from "next/head";

import {
  validateCollege,
  validateName,
  validateEmail,
  validatePhone,
} from "../validate";

export default function Register() {
  const inputClass =
    "appearance-none font-semibold bg-neutral-600 block md:w-9/12 w-full border border-gray-800 rounded py-3 px-4 mb-3 leading-tight outline-none focus:border-rose-500";

  const labelClass =
    "block uppercase tracking-wide text-orange-600 text-xs font-bold mb-2";

  const [modalData, setModalData] = useState(false);
  // Form State Vars
  const [isLoading, setLoading] = useState(false);
  const [name, setname] = useState("");
  const [validname, setvalidname] = useState(true);
  const [college, setcollege] = useState("");
  const [validcollege, setvalidcollege] = useState(true);
  const [phone, setphone] = useState("");
  const [validphone, setvalidphone] = useState(true);
  const [email, setemail] = useState("");
  const [validemail, setvalidemail] = useState(true);
  const [roll, setroll] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const trimmedemail = email.trim();
    let valid = true;
    if (!validateName(name)) {
      setvalidname(false);
      valid = false;
    } else {
      setvalidname(true);
    }
    if (!validateEmail(trimmedemail)) {
      setvalidemail(false);
      valid = false;
    } else {
      setvalidemail(true);
    }
    if (!validatePhone(phone)) {
      setvalidphone(false);
      valid = false;
    } else {
      setvalidphone(true);
    }
    if (!validateCollege(college)) {
      setvalidcollege(false);
      valid = false;
    } else {
      setvalidcollege(true);
    }

    if (valid) {
      const h = new Headers();
      h.set("Content-Type", "application/json");
      const t = await fetch(`${process.env.NEXT_PUBLIC_APIBASE}/user`, {
        method: "POST",
        headers: h,
        body: JSON.stringify({
          name: name,
          college: college,
          phone: phone,
          email: trimmedemail,
          roll: roll,
        }),
      });
      if (t.status == 201) {
        const res = await t.json();
        setModalData({
          greenText: "Success",
          redText: "Your Pantheon ID has been sent to your email",
          blackText: `Your Pantheon ID is ${res.uid}`,
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
        <title> Individual Registration | Pantheon 2022</title>
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
      <LeftNavContainer currentPage={0}>
        <h1 className="font-bold text-4xl mt-4 mx-4">
          Individual Registration
        </h1>
        <form onSubmit={handleSubmit} className="m-4">
          <label className={labelClass}>
            Name{" "}
            {!validname &&
              "Error, Please Check Again, Only alphabets and spaces are allowed"}
          </label>
          <input
            onChange={(e) => {
              setname(e.target.value);
            }}
            className={inputClass}
          />

          <label className={labelClass}>
            College{" "}
            {!validcollege &&
              "Error, Please Check Again, Only alphabets and spaces are allowed"}
          </label>
          <input
            onChange={(e) => {
              setcollege(e.target.value);
            }}
            className={inputClass}
          />

          <label className={labelClass}>Roll No.</label>
          <input
            onChange={(e) => {
              setroll(e.target.value);
            }}
            className={inputClass}
          />

          <label className={labelClass}>
            Phone No. {!validphone && "Error, Please Check Again"}
          </label>
          <input
            onChange={(e) => {
              setphone(e.target.value);
            }}
            className={inputClass}
          />

          <label className={labelClass}>
            Email {!validemail && "Error, Please Check Again"}
          </label>
          <input
            onChange={(e) => {
              setemail(e.target.value);
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
