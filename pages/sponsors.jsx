import React from "react";
import Head from "next/head";

const sponsors = () => {
  return (
    <>
      <Head>
        <title> Our Sponsors | Pantheon 2022</title>
      </Head>
      <div className="mt-16 pb-8 min-h-[calc(100vh-4rem)] h-max text-white bg-neutral-900">
        <div className="sm:text-5xl text-5xl pt-8 text-gray-100 uppercase text-center font-bold">
          Hiring Partner
        </div>

        <div className="pt-8 flex flex-row flex-wrap md:w-3/4 mx-auto justify-evenly gap-y-8">
          <img
            className="rounded-t-lg max-w-sm mt-4"
            src="/sponsors/zuno.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default sponsors;
