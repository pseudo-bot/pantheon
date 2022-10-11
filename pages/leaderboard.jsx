export default function Leaderboard() {
  const data = [
    {
      rank: "1",
      name: "Test Name 1",
      id: "Pokemon1-Pokemon2-069",
      points: 6,
    },
    {
      rank: "2",
      name: "Test Name 2",
      id: "Pokemon1-Pokemon2-068",
      points: 5,
    },
    {
      rank: "3",
      name: "Test Name 3",
      id: "Pokemon1-Pokemon2-067",
      points: 4,
    },
    {
      rank: "4",
      name: "Test Name 4",
      id: "Pokemon1-Pokemon2-066",
      points: 3,
    },
    {
      rank: "5",
      name: "Test Name 5",
      id: "Pokemon1-Pokemon2-065",
      points: 2,
    },
    {
      rank: "6",
      name: "Test Name 6",
      id: "Pokemon1-Pokemon2-064",
      points: 1,
    },
  ];
  return (
    <div className="mt-16">
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
                      Username
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left border-l border-gray-700 text-white"
                    >
                      Total Score
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left border-l border-gray-700 text-white"
                    >
                      Total Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(({ rank, id, name, points }, index) => {
                    return (
                      <tr
                        className={`border-b border-r dark:border-gray-700 ${
                          index % 2 == 0 ? "" : "bg-red-500"
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  text-white ">
                          {rank}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  text-white ">
                          {name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  text-white ">
                          {id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  text-white ">
                          {points}
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
