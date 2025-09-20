import dayjs from "dayjs";
import { Link } from "react-router-dom";

export const Column = () => {
  const columnItems = [
    {
      id: 1,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
      image: "/images/column-1.jpg",
      date: "2025-01-01 23:25",
    },
    {
      id: 2,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
      image: "/images/column-2.jpg",
      date: "2025-01-01 23:25",
    },
    {
      id: 3,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
      image: "/images/column-3.jpg",
      date: "2025-01-01 23:25",
    },
    {
      id: 4,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
      image: "/images/column-4.jpg",
      date: "2025-01-01 23:25",
    },
    {
      id: 5,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
      image: "/images/column-5.jpg",
      date: "2025-01-01 23:25",
    },
    {
      id: 6,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
      image: "/images/column-6.jpg",
      date: "2025-01-01 23:25",
    },
    {
      id: 7,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
      image: "/images/column-7.jpg",
      date: "2025-01-01 23:25",
    },
    {
      id: 8,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["魚料理", "和食", "DHA"],
      image: "/images/column-8.jpg",
      date: "2025-01-01 23:25",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-2 mt-[56px]">
      {columnItems.map((item) => (
        <div key={item.id} className="col-span-1">
          <div
            className="aspect-video bg-center bg-no-repeat bg-cover relative"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute bottom-0 left-0 bg-(--color-primary-300) pl-2 py-2 pr-5 inline-block">
              <h4 className="text-white text-base">
                {dayjs(item.date).format("YYYY.MM.DD  HH:mm")}
              </h4>
            </div>
          </div>
          <h4 className="text-(--color-dark-500) mt-2">{item.title}</h4>
          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            {item.tags.map((tag) => (
              <Link key={tag} to={`/column?tag=${tag}`}>
                <span className="text-(--color-primary-400) text-[12px] leading-[22px]">
                  #{tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
