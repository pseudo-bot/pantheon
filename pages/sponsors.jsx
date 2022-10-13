import React from "react";
import Head from "next/head";

const sponsors = () => {
  return (
    <>
      <Head>
        <title> Our Sponsors | Pantheon 2022</title>
      </Head>

      <div className="mt-16 pb-8 min-h-[calc(100vh-4rem)] h-max text-white bg-neutral-900">
        <div className="sm:text-6xl text-5xl pt-8 text-gray-100 uppercase text-center font-bold">
          Title Sponsor
        </div>
        <div className="pt-8 flex flex-row flex-wrap md:w-3/4 mx-auto justify-evenly gap-y-8">
          <img
            className="rounded-t-lg max-w-sm mt-4"
            src="/sponsors/unacademy.png"
            alt=""
          />
        </div>
        <div className="mt-16 pb-8 min-h-[calc(100vh-4rem)] h-max text-white bg-neutral-900">
          <div className="sm:text-5xl text-5xl pt-8 text-gray-100 uppercase text-center font-bold">
            Co-Sponsor
          </div>
          <div className="pt-8 flex flex-row flex-wrap md:w-3/4 mx-auto justify-evenly gap-y-8">
            <img
              className="rounded-t-lg max-w-sm mt-4"
              src="/sponsors/milestone.png"
              alt=""
            />
          </div>
          <div className="sm:text-5xl text-5xl pt-8 text-gray-100 uppercase text-center font-bold">
            Hiring Partner
          </div>
          <div className="pt-8 flex flex-row flex-wrap md:w-3/4 mx-auto justify-evenly gap-y-8">
            <img className="max-w-sm mt-4" src="/sponsors/zuno.png" alt="" />
          </div>
          <div className="sm:text-5xl text-5xl pt-8 text-gray-100 uppercase text-center font-bold">
            Beverage Partner
          </div>
          <div className="pt-8 flex flex-row flex-wrap md:w-3/4 mx-auto justify-evenly gap-y-8">
            <img
              className="max-w-sm mt-4"
              src="/sponsors/cocacola.png"
              alt=""
            />
          </div>
          <div className="sm:text-5xl text-5xl pt-8 text-gray-100 uppercase text-center font-bold">
            Food Partner
          </div>
          <div className="pt-8 flex flex-row flex-wrap md:w-3/4 mx-auto justify-evenly gap-y-8">
            <img
              className="max-w-sm mt-4 contrast-50"
              src="/sponsors/urbanbrava.png"
              alt=""
            />
          </div>
          <div className="sm:text-5xl text-5xl pt-8 text-gray-100 uppercase text-center font-bold">
            Barbeque Partner
          </div>
          <div className="pt-8 flex flex-row flex-wrap md:w-3/4 mx-auto justify-evenly gap-y-8">
            <img
              className="max-w-sm mt-4"
              src="/sponsors/absolutebarbeque.png"
              alt=""
            />
          </div>
          <div className="sm:text-5xl text-5xl pt-8 text-gray-100 uppercase text-center font-bold">
            Beauty and glamour Partner
          </div>
          <div className="pt-8 flex flex-row flex-wrap md:w-3/4 mx-auto justify-evenly gap-y-8">
            <img className="max-w-sm mt-4" src="/sponsors/lakme.png" alt="" />
          </div>
          <div className="sm:text-5xl text-5xl pt-8 text-gray-100 uppercase text-center font-bold">
            Styling Partner
          </div>
          <div className="pt-8 flex flex-row flex-wrap md:w-3/4 mx-auto justify-evenly gap-y-8">
            <img
              className="max-w-sm mt-4"
              src="/sponsors/javedhabib.png"
              alt=""
            />
          </div>
          <div className="sm:text-5xl text-5xl pt-8 text-gray-100 uppercase text-center font-bold">
            Desert Partner
          </div>
          <div className="pt-8 flex flex-row flex-wrap md:w-3/4 mx-auto justify-evenly gap-y-8">
            <img
              className="max-w-sm mt-4"
              src="/sponsors/houseofcream.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default sponsors;
