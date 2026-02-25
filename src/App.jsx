import { useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import DarkVeil from "./DarkVeil";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const nav = document.getElementById("nav-bar");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.remove("backdrop-blur-xl", "bg-white/5");
        nav.classList.add("bg-[#190532]");
      } else {
        nav.classList.add("backdrop-blur-xl", "bg-white/5");
        nav.classList.remove("bg-[#190532]");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const carsData = [
    {
      id: 1,
      img: "/images/daciaSandero.webp",
      title: "Dacia Sandero",
      price: 250,
    },
    {
      id: 2,
      img: "/images/daciaLogan.jpg",
      title: "Dacia Logan",
      price: 200,
    },
    {
      id: 3,
      img: "/images/daciaDuster.jpg",
      title: "Dacia Duster",
      price: 350,
    },
    {
      id: 4,
      img: "/images/clio5.webp",
      title: "Clio 5",
      price: 300,
    },
    {
      id: 5,
      img: "/images/golf7.webp",
      title: "Golf 7",
      price: 600,
    },
    {
      id: 6,
      img: "/images/golf8.png",
      title: "Golf 8",
      price: 750,
    },
  ];

  const links = [
    { label: "Home", href: "#home" },
    { label: "Fleet", href: "#fleet" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="fixed top-8 w-full flex justify-center z-50 transition-all duration-300">
        <div
          id="nav-bar"
          className="w-[600px] bg-white/5 flex justify-between items-center backdrop-blur-xl border border-white/20 px-8 py-4 rounded-full transition-all duration-300"
        >
          <div id="nav-items" className="flex gap-4">
            {links.map((link) => {
              return (
                <div className="h-9 flex flex-col rounded-full overflow-hidden group">
                  <span className="px-4 py-2 text-white cursor-pointer group-hover:scale-0 duration-300">
                    {link.label}
                  </span>

                  <a
                    href={link.href}
                    className="bg-[#500dca] px-4 py-2 rounded-full text-white cursor-pointer scale-50 group-hover:-translate-y-[41.5px] group-hover:scale-100 duration-300"
                  >
                    {link.label}
                  </a>
                </div>
              );
            })}
          </div>

          <button className="flex items-center gap-2">
            <LogoutIcon className="text-white" />
            <span className="text-white/70">Logout</span>
          </button>
        </div>
      </div>

      <div id="home" className="relative w-full h-screen">
        <DarkVeil warp={0.4} speed={1.2} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] flex flex-col items-center space-y-8">
          <h1 className="text-6xl text-white font-bold uppercase">
            Your Perfect Ride Awaits
          </h1>
          <p className="w-[860px] text-lg text-white/70 text-center leading-9">
            Discover top-quality cars at unbeatable prices. Whether it's a
            weekend getaway or a business trip, CarRent makes it easy to hit the
            road in style and comfort.
          </p>
          <a
            href="#fleet"
            className="bg-[#500dca] border border-[#500dca] hover:bg-transparent duration-300 text-white font-medium px-10 py-4 rounded-full"
          >
            Book Now
          </a>
        </div>
      </div>

      <section
        id="fleet"
        className="w-full h-screen flex justify-center items-center py-20"
      >
        <div className="w-[1200px] grid grid-cols-3 gap-4 mt-20">
          {carsData.map((car) => {
            return (
              <div
                key={car.id}
                onClick={() => navigate(`/car/${car.id}`)}
                className="relative border border-[#500dca] rounded-3xl shadow-lg overflow-hidden flex flex-col cursor-pointer group"
              >
                <img
                  src={car.img}
                  alt={car.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 flex flex-col gap-2">
                  <h2 className="text-xl font-bold uppercase">{car.title}</h2>
                  <span className="font-semibold">MAD {car.price}</span>
                </div>

                <button className="absolute bottom-0 right-0 m-4 px-6 py-3 bg-[#500dca] rounded-full text-white font-medium translate-y-16 group-hover:translate-y-0 duration-300">
                  Book Now
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <div id="contact" className="w-full bg-[#190532] flex justify-center">
        <div className="flex gap-10 py-10">
          <div className="w-72 h-52 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1112916.5223422032!2d-11.72391170734785!3d32.48138445462754!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sma!4v1772041932367!5m2!1sen!2sma"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <div className="flex gap-2">
                <MailIcon className="text-white"></MailIcon>
                <h1 className="text-white font-bold">Email</h1>
              </div>
              <h2 className="text-white/70">example@gmail.com</h2>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <CallIcon className="text-white"></CallIcon>
                <h1 className="text-white font-bold">Phone Number</h1>
              </div>
              <h2 className="text-white/70">+212000000000</h2>
            </div>
            <div className="flex gap-4">
              <a href="#">
                <img src="/icons/facebook.png" alt="" className="w-6" />
              </a>
              <a href="#">
                <img src="/icons/instagram.png" alt="" className="w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
