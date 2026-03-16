"use client";
import { useState } from "react";

const rooms = [
  {
    id: 1,
    main: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=500&fit=crop",
    side: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=280&h=380&fit=crop",
  },
  {
    id: 2,
    main: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=500&fit=crop",
    side: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=280&h=380&fit=crop",
  },
  {
    id: 3,
    main: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=500&fit=crop",
    side: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=280&h=380&fit=crop",
  },
];

export default function RoomInspiration() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (i) => {
    if (i === active || animating) return;

    setAnimating(true);

    setTimeout(() => {
      setActive(i);
      setAnimating(false);
    }, 300);
  };

  return (
    <section className="bg-[#fbe8dc] rounded-3xl flex flex-col lg:flex-row items-center px-6 sm:px-10 lg:px-16 py-12 gap-10 w-full overflow-hidden">
      
      {/* LEFT TEXT */}
      <div className="max-w-sm">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
          50+ Beautiful rooms inspiration
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          Our designer already made a lot of beautiful prototype of rooms that inspire you
        </p>

        <button className="bg-[#e07b54] hover:bg-[#c96840] active:scale-95 text-white text-sm font-semibold px-7 py-3 rounded-lg transition-all duration-200">
          Explore more
        </button>
      </div>

      {/* RIGHT IMAGES */}
      <div className="flex flex-col sm:flex-row items-end gap-6 flex-1">

        {/* MAIN BIG IMAGE */}
        <div
          className={`w-full sm:w-[300px] lg:w-[360px] h-[380px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
            animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
          }`}
        >
          <img
            src={rooms[active].main}
            alt="Room"
            className="w-full h-full object-cover"
          />
        </div>

        {/* SIDE IMAGE + DOTS */}
        <div className="w-full sm:w-[280px] lg:w-[360px] h-[380px] sm:h-[420px] lg:h-[480px] flex flex-col gap-4">

          <div
            className={` rounded-xl overflow-hidden shadow-md transition-all duration-300 delay-75 ${
              animating ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"
            }`}
          >
            <img
              src={rooms[active].side}
              alt="Room side"
              className="w-full h-full object-cover"
            />
          </div>

          {/* DOTS */}
          <div className="flex items-center gap-2 pl-1">
            {rooms.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-7 bg-[#e07b54]" : "w-2.5 bg-[#c8b5ab]"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
