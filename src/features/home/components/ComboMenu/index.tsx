export const ComboMenu = () => {
  const comboItems = [
    {
      id: 1,
      name: "Morning",
      icon: "/icons/knife.svg",
    },
    {
      id: 2,
      name: "Lunch",
      icon: "/icons/knife.svg",
    },

    {
      id: 3,
      name: "Dinner",
      icon: "/icons/knife.svg",
    },

    {
      id: 4,
      name: "Snack",
      icon: "/icons/cup.svg",
    },
  ];
  return (
    <div className="flex align-center">
      <div className="flex gap-[64px] mx-auto py-8 inline-flex">
        {comboItems.map((item) => (
          <div
            key={item.id}
            className="w-[136px] h-[136px] bg-[url('/icons/hexagon.svg')] bg-center bg-no-repeat flex items-center justify-center"
          >
            <div className="text-center cursor-pointer">
              <img src={item.icon} alt={item.name} className="inline" />
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
