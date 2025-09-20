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
    <div className="grid grid-cols-4 gap-[64px] mx-auto py-8">
      {comboItems.map((item) => (
        <div className="col-span-1" key={item.id}>
          <div className="w-[136px] h-[136px] bg-[url('/icons/hexagon.svg')] bg-center bg-no-repeat flex items-center justify-center">
            <div className="text-center cursor-pointer">
              <img src={item.icon} alt={item.name} className="inline" />
              <h3>{item.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
