import Image from "next/image";
import Carousel from "../carousel/carousel";

const DUMMMY_FOLLOW = [
  {
    id: 1,
    image: "/home/follow/follow-image1.jpg",
  },
  {
    id: 2,
    image: "/home/follow/follow-image2.jpg",
  },
  {
    id: 3,
    image: "/home/follow/follow-image3.jpg",
  },
  {
    id: 4,
    image: "/home/follow/follow-image4.jpg",
  },
  {
    id: 5,
    image: "/home/follow/follow-image5.jpg",
  },
];

const Circle = ({ className }: { className: string }) => {
  return (
    <div
      className={`absolute size-c-32 rounded-full -z-10 hidden lg:block ${className}`}
    />
  );
};

export default function FollowUs() {
  return (
    <div className="grid gap-c-10 place-items-center py-c-34">
      <section className="grid gap-c-5 text-center lg:text-start">
        <h1 className="title-text">
          Follow Us on <span>Instagram</span>
        </h1>
        <h2 className="desc-text">
          Join our Instagram community for updates, special deals, and more!
        </h2>
      </section>
      <section className="grid place-items-center relative">
        <Carousel
          options={{ loop: true }}
          size={262}
          spacing={10}
          visibleSlides={5}
          paddingSlide="py-c-20"
        >
          {DUMMMY_FOLLOW.map((item) => (
            <div key={item.id} className="mx-c-2 lg:mx-auto">
              <div className="relative w-c-65-5 h-c-81-5 rounded-c-8 overflow-hidden cursor-pointer">
                <div className="relative w-full h-full ">
                  <Image
                    src={item.image}
                    width={1000}
                    height={1000}
                    alt={item.image}
                    className="object-contain w-full h-full drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <Circle className="bg-pink-500 top-10 -left-c-10" />
        <Circle className="bg-purple-500 bottom-10 -right-c-10" />
      </section>
    </div>
  );
}
