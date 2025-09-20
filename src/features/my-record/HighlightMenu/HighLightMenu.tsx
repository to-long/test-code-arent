export const HighLightMenu = () => {
  return (
    <div className="mt-[56px] grid grid-cols-3 gap-[48px]">
      <div className="col-span-1">
        <MenuItem
          title="BODY RECORD"
          button="自分のカラダの記録"
          link="#my-record"
          image="/images/MyRecommend-1.jpg"
        />
      </div>
      <div className="col-span-1">
        <MenuItem
          title="MY EXERCISE"
          button="自分の運動の記録"
          link="#my-exercise"
          image="/images/MyRecommend-2.jpg"
        />
      </div>
      <div className="col-span-1">
        <MenuItem
          title="MY DIARY"
          button="自分の日記"
          link="#my-diary"
          image="/images/MyRecommend-3.jpg"
        />
      </div>
    </div>
  );
};

const MenuItem = ({
  title,
  button,
  link,
  image,
}: {
  title: string;
  button: string;
  link: string;
  image: string;
}) => {
  return (
    <div
      className=" bg-(--color-dark-500) relative"
      style={{ border: "24px solid var(--color-primary-300)" }}
    >
      <div
        className="aspect-square bg-center bg-no-repeat bg-cover opacity-25"
        style={{
          backgroundImage: `url(${image})`,
          filter: "grayscale(100%)",
        }}
      ></div>
      <div className="absolute top-1/2 -translate-y-1/2 text-center w-full">
        <div className="text-(--color-primary-300) h1 mb-3">{title}</div>
        <a
          type="button"
          href={link}
          className="bg-(--color-primary-400) px-6 py-1"
        >
          <span className="text-white text-base">{button}</span>
        </a>
      </div>
    </div>
  );
};
