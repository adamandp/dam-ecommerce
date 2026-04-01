import Image from "next/image";

export const COMMITMENT_ITEMS = [
  {
    id: 1,
    image: "/specialOffers/commitment-icon1.png",
    title: "Free Shipping",
    description: "Enjoy the convenience of free shipping on all orders!",
    backgroundImage: "pink",
  },
  {
    id: 2,
    image: "/specialOffers/commitment-icon2.png",
    title: "Unique Packaging",
    description: "Experience our commitment to uniqueness with every order.",
    backgroundImage: "purple",
  },
  {
    id: 3,
    image: "/specialOffers/commitment-icon3.png",
    title: "100% Money Back",
    description: "Rest assured with our money-back guarantee at any time.",
    backgroundImage: "pink",
  },
  {
    id: 4,
    image: "/specialOffers/commitment-icon4.png",
    title: "Fast Delivery",
    description: "Experience swift and efficiently reliable delivery with us",
    backgroundImage: "purple",
  },
];

function Card({
  title,
  description,
  image,
  backgroundImage = "pink",
}: {
  title: string;
  description: string;
  image: string;
  backgroundImage?: string;
}) {
  return (
    <div className="font-archivo bg-card shadow-2xl rounded-c-5 p-c-6 w-c-80 md:w-c-64 h-full grid gap-c-5 justify-items-center content-between text-center">
      <div
        className={`size-c-20 grid place-items-center rounded-full ${
          backgroundImage === "pink" ? "bg-pink-500" : "bg-purple-700"
        }`}
      >
        <Image
          src={image}
          width={1000}
          height={1000}
          alt=""
          className="w-c-9"
        />
      </div>
      <h1 className="font-bold text-c-5 text-foreground">{title}</h1>
      <p className="text-c-4 text-card-foreground">{description}</p>
    </div>
  );
}

export default function CommitmentSection() {
  return (
    <div className="grid gap-c-10 place-items-center pt-c-10 overflow-hidden ">
      <section className="grid gap-c-5 text-center">
        <h1 className="title-text">
          Our <span>Commitments</span> to You
        </h1>
        <h2 className="desc-text">
          Exceeding expectations with every promise we make.
        </h2>
      </section>
      <section className="flex flex-col md:flex-row justify-center items-center gap-c-24 h-full">
        <div className="flex flex-row md:flex-col gap-c-8">
          {COMMITMENT_ITEMS.slice(0, 2).map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
        <div className="relative grid place-items-center">
          <div className="bg-[#FAEBE1] dark:bg-[#4B3A35] size-c-100 rounded-full absolute -z-10 -left-1/20 top-1/20"></div>
          <Image
            src="/specialOffers/commitment-image.png"
            alt="Banner"
            width={1000}
            height={1000}
            className="object-contain  left-c-10 top-c-5 w-c-80"
          />
        </div>
        <div className="flex flex-row md:flex-col gap-c-8 h-full">
          {COMMITMENT_ITEMS.slice(2, 4).map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
