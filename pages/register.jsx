import { useState } from "react";
import LeftNavContainer from "../components/Registeration/LeftNavContainer";
import {
  validateCollege,
  validateName,
  validateEmail,
  validatePhone,
} from "../validate.js";

export default function Register() {
  const [modalData, setModalData] = useState(false);

  // Form State Vars
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

    const valid = true;

    if (!validateName(name)) {
      setvalidname(false);
      valid = false;
    }
    if (!validateEmail(email)) {
      setvalidemail(false);
      valid = false;
    }
    if (!validatePhone(phone)) {
      setvalidphone(false);
      valid = false;
    }
    if (!validateCollege(college)) {
      setvalidcollege(false);
      valid = false;
    }

    if (valid) {
      const h = new Headers();
      h.set("Content-Type", "application/json");
      const t = await fetch(`${process.env.NEXT_PUBLIC_APIBASE}/user/create`, {
        method: "POST",
        headers: h,
        body: JSON.stringify({
          name: name,
          college: college,
          phone: phone,
          email: email,
          roll: roll,
        }),
      });
      if (t.status == 201) {
        const res = await t.json();
        setModalData({
          greenText: "Success",
          redText: "Please take a screenshot of this page before going further",
          blackText: `Your UID is ${res.uid}`,
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
  };
  return (
    <>
      {modalData && (
        <div className="absolute w-screen p-4 z-10 bg-white/80 h-[calc(100vh-4rem)] text-xl backdrop-blur-sm backdrop-filter flex flex-col">
          <div className="flex-1 text-center flex flex-col justify-center">
            <div className="font-bold text-2xl text-green-600">
              {" "}
              {modalData.greenText}{" "}
            </div>
            <div className="text-red-500 text-2xl mt-4 font-bold">
              {modalData.redText}
            </div>
            <div className="text-4xl mt-4">{modalData.blackText}</div>
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
      <LeftNavContainer currentPage={0}>
        <h1 className="font-bold text-2xl mt-4 mx-4">
          Indivdual Registeration
        </h1>
        <form onSubmit={handleSubmit} className="m-4">
          <label className="block uppercase tracking-wide text-rose-700 text-xs font-bold mb-2">
            Name {!validname && "Error, Please Check Again"}
          </label>
          <input
            onChange={(e) => {
              setname(e.target.value);
            }}
            className="appearance-none block md:w-9/12 w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-rose-500"
          />

          <label className="block uppercase tracking-wide text-rose-700 text-xs font-bold mb-2">
            College {!validcollege && "Error, Please Check Again"}
          </label>
          <input
            onChange={(e) => {
              setcollege(e.target.value);
            }}
            className="appearance-none block md:w-9/12 w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-rose-500"
          />

          <label className="block uppercase tracking-wide text-rose-700 text-xs font-bold mb-2">
            Roll No.
          </label>
          <input
            onChange={(e) => {
              setroll(e.target.value);
            }}
            className="appearance-none block md:w-9/12 w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-rose-500"
          />

          <label className="block uppercase tracking-wide text-rose-700 text-xs font-bold mb-2">
            Phone No. {!validphone && "Error, Please Check Again"}
          </label>
          <input
            onChange={(e) => {
              setphone(e.target.value);
            }}
            className="appearance-none block md:w-9/12 w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-rose-500"
          />

          <label className="block uppercase tracking-wide text-rose-700 text-xs font-bold mb-2">
            Email {!validemail && "Error, Please Check Again"}
          </label>
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="appearance-none block md:w-9/12 w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-rose-500"
          />

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
