import { useParams } from "react-router-dom";
import "./index.css";

const carsData = [
  {
    id: 1,
    img: "/images/daciaSandero.webp",
    title: "Dacia Sandero",
    description:
      "Compact 5-door hatchback, affordable city car with modern design, LED lights, up to 410L boot, touchscreen infotainment, and safety aids like emergency braking.",
    price: 250,
  },
  {
    id: 2,
    img: "/images/daciaLogan.jpg",
    title: "Dacia Logan",
    description:
      "Budget family sedan or wagon, spacious interior with extra rear legroom, Y-shaped LEDs, smartphone integration, and efficient engines for daily use.",
    price: 200,
  },
  {
    id: 3,
    img: "/images/daciaDuster.jpg",
    title: "Dacia Duster",
    description:
      "Rugged compact SUV, optional 4x4, hybrid options, bold styling, 475L boot, off-road modes, and tech like digital cluster and navigation.",
    price: 350,
  },
  {
    id: 4,
    img: "/images/clio5.webp",
    title: "Clio 5",
    description:
      "Stylish subcompact hatchback, refined interior, hybrid/diesel variants, driver assists, digital cockpit, and compact yet spacious design.",
    price: 300,
  },
  {
    id: 5,
    img: "/images/golf7.webp",
    title: "Golf 7",
    description:
      "Reliable compact hatchback (2012-2019), turbo engines, safety features like adaptive cruise, comfortable cabin, and good fuel economy.",
    price: 600,
  },
  {
    id: 6,
    img: "/images/golf8.png",
    title: "Golf 8",
    description:
      "Modern compact hatchback, mild-hybrid options, LED matrix lights, digital interfaces, ambient lighting, and advanced assists for premium feel.",
    price: 750,
  },
];

export default function CarPage() {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === Number(id));

  if (!car) return <div>Car not found!</div>;

  return (
    <div className="w-full h-screen flex justify-center items-center p-4">
      <div className="w-[1200px] grid grid-cols-2 gap-10">
        <div className="car-img w-fit border border-[#500dca] rounded-3xl overflow-hidden">
          <img src={car.img} alt={car.title} className="rounded-2xl"/>
        </div>

        <div className="flex flex-col justify-between">
          <h1 className="text-4xl font-bold">{car.title}</h1>
          <p className="text-black/70 text-justify leading-9">{car.description}</p>
          <span className="text-lg font-bold">
            MAD {car.price}
            <span className="text-black/70 font-normal">/24h</span>
          </span>
          <button className="px-6 py-5 bg-[#500dca] rounded-full text-white font-medium shadow-xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
