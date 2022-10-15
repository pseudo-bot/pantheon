export default function Leaderboard({ data }) {
  return (
    <div className="mt-16 px-8">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-y border-gray-700 bg-black">
                  <tr className="border-r dark:border-gray-700">
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left border-l border-gray-700 text-white"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left border-l border-gray-700 text-white"
                    >
                      Team Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left border-l border-gray-700 text-white"
                    >
                      Team ID
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left border-l border-gray-700 text-white"
                    >
                      Total Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map(({ tid, name, score }, index) => {
                      return (
                        <tr
                          className={`border-b border-r dark:border-gray-700 ${
                            index % 2 == 0 ? '' : 'bg-red-500'
                          }`}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  text-white ">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  text-white ">
                            {name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  text-white ">
                            {tid}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  text-white ">
                            {score}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APIBASE}/leaderboards`);
    const data = await res.json();
    return {
      props: {
        data: data && data.scores,
      },
    };
  } catch (err) {
    console.log(err);
    return {};
  }
}
