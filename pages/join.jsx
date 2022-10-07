import LeftNavContainer from "../components/Registeration/LeftNavContainer";

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Post req.
    const h = new Headers();
    h.set("Content-Type", "application/json");
    const t = await fetch(`${process.env.NEXT_PUBLIC_APIBASE}/team/join`, {
      method: "POST",
      headers: h,
      body: JSON.stringify({
        //"TPNT-klixffse"
        // "PNT-7ibfPAoU"
        tid: "TPNT-klixffse",
        uid: "PNT-vqolosMc",
      }),
    });
    const res = await t.json();
    console.log(res);
  };
  return (
    <LeftNavContainer currentPage={2}>
      <h1 className="font-bold text-2xl mt-4 mx-4">Join Team</h1>
      <form onSubmit={handleSubmit} className="m-4">
        <label className="block uppercase tracking-wide text-rose-700 text-xs font-bold mb-2">
          Personal Id
        </label>
        <input className="appearance-none block md:w-9/12 w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-rose-500" />

        <label className="block uppercase tracking-wide text-rose-700 text-xs font-bold mb-2">
          Team Id
        </label>
        <input className="appearance-none block md:w-9/12 w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-rose-500" />

        <button
          type="submit"
          className="bg-rose-700 text-white font-bold rounded-md px-4 py-2"
        >
          Join
        </button>
      </form>
    </LeftNavContainer>
  );
}