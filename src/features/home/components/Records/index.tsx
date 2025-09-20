import dayjs from "dayjs";

export const Records = () => {
  const records = [
    {
      id: 1,
      type: "Morning",
      date: "2025-05-21",
      image: "/images/m01.jpg",
    },
    {
      id: 2,
      type: "Lunch",
      date: "2025-05-21",
      image: "/images/l03.jpg",
    },
    {
      id: 3,
      type: "Dinner",
      date: "2025-05-21",
      image: "/images/d01.jpg",
    },
    {
      id: 4,
      type: "Snack",
      date: "2025-05-21",
      image: "/images/l01.jpg",
    },
    {
      id: 5,
      type: "Morning",
      date: "2025-05-21",
      image: "/images/m01.jpg",
    },
    {
      id: 6,
      type: "Lunch",
      date: "2025-05-21",
      image: "/images/l02.jpg",
    },
    {
      id: 7,
      type: "Dinner",
      date: "2025-05-21",
      image: "/images/d02.jpg",
    },
    {
      id: 8,
      type: "Snack",
      date: "2025-05-21",
      image: "/images/s01.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-2 mb-6">
      {records.map((record) => (
        <div key={record.id} className="col-span-1">
          <div
            className="w-full relative bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${record.image})` }}
          >
            <div className="pt-[100%]"></div>
            <div className="absolute bottom-0 left-0 bg-primary-300 border-1 p-2 inline-block">
              <h4 className="text-white text-base">
                {`${dayjs(record.date).format("MM.DD")}.${record.type} `}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
