/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: break line */
import "./style.css";
export const Recommend = () => {
  const recommendItems = [
    {
      id: 1,
      en: "RECOMMENDED<br/>COLUMN",
      ja: "オススメ",
    },
    {
      id: 2,
      en: "RECOMMENDED<br/>DIET",
      ja: "ダイエット",
    },
    {
      id: 3,
      en: "RECOMMENDED<br/>BEAUTY",
      ja: "美容",
    },
    {
      id: 4,
      en: "RECOMMENDED<br/>HEALTH",
      ja: "健康",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-8 mt-[56px]">
      {recommendItems.map((item) => (
        <div key={item.id} className="col-span-1">
          <div className="w-full h-[144px] bg-(--color-dark-600) py-6 px-2 text-center">
            <h2
              className="text-(--color-primary-300)"
              dangerouslySetInnerHTML={{ __html: item.en }}
            />
            <div className="text-white text-[18px] leading-[26px] border-break">
              {item.ja}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
