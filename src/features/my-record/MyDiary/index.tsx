/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: break line */

import dayjs from "dayjs";

export const MyDiary = () => {
  const myDiaryItems = [
    {
      id: 1,
      date: "2025-01-01 23:25",
      content:
        "私の日記の記録が一部表示されます。<br/> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 2,
      date: "2025-01-01 23:25",
      content:
        "私の日記の記録が一部表示されます。<br/> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 3,
      date: "2025-01-01 23:25",
      content:
        "私の日記の記録が一部表示されます。<br/> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 4,
      date: "2025-01-01 23:25",
      content:
        "私の日記の記録が一部表示されます。<br/> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 5,
      date: "2025-01-01 23:25",
      content:
        "私の日記の記録が一部表示されます。<br/> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 6,
      date: "2025-01-01 23:25",
      content:
        "私の日記の記録が一部表示されます。<br/> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 7,
      date: "2025-01-01 23:25",
      content:
        "私の日記の記録が一部表示されます。<br/> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 8,
      date: "2025-01-01 23:25",
      content:
        "私の日記の記録が一部表示されます。<br/> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
  ];
  return (
    <div className="mt-[56px]">
      <h2>MY DIARY</h2>
      <div className="grid grid-cols-4 gap-3 mt-2">
        {myDiaryItems.map((item) => (
          <div key={item.id} className="col-span-1">
            <div className="border-2  border-[#707070] p-4">
              <h4>{dayjs(item.date).format("YYYY.MM.DD")}</h4>
              <h4 className="text-[15px] leading-[18px]">
                {dayjs(item.date).format("HH:mm")}
              </h4>
              <div
                className="mt-2 mb-3"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
