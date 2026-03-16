"use client";

const gallery = {
  leftTop: ["/assets/pic-1.png", "/assets/pic-2.png", "/assets/Sofa.png"],
  leftBottom: ["/assets/pic-3.png", "/assets/Sofa.png", "/assets/pic-1.png"],
  center: ["/assets/Hero.png"],
  rightTop: ["/assets/pic-2.png", "/assets/pic-3.png", "/assets/Sofa.png"],
  rightBottom: ["/assets/Sofa.png", "/assets/pic-1.png", "/assets/pic-2.png"],
};

export default function FurnitureGallery() {
  return (
    <section className="py-16 bg-[#f9f6f2]">
      <div className="text-center mb-10">
        <p className="text-sm text-gray-400 tracking-[0.2em] uppercase mb-2">
          Share your setup with
        </p>
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#1f2937]">
          #FuniroFurniture
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr_1fr]">
          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-4">
              {gallery.leftTop.map((src, index) => (
                <a key={`lt-${index}`} href={src} className="block rounded-2xl overflow-hidden">
                  <img src={src} alt="Gallery" className="h-28 w-full object-cover" />
                </a>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {gallery.leftBottom.map((src, index) => (
                <a key={`lb-${index}`} href={src} className="block rounded-2xl overflow-hidden">
                  <img src={src} alt="Gallery" className="h-28 w-full object-cover" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <a href={gallery.center[0]} className="block">
              <img
                src={gallery.center[0]}
                alt="Gallery"
                className="h-[420px] w-full object-cover"
              />
            </a>
          </div>

          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-4">
              {gallery.rightTop.map((src, index) => (
                <a key={`rt-${index}`} href={src} className="block rounded-2xl overflow-hidden">
                  <img src={src} alt="Gallery" className="h-28 w-full object-cover" />
                </a>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {gallery.rightBottom.map((src, index) => (
                <a key={`rb-${index}`} href={src} className="block rounded-2xl overflow-hidden">
                  <img src={src} alt="Gallery" className="h-28 w-full object-cover" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:hidden">
          {[
            ...gallery.leftTop,
            ...gallery.leftBottom,
            ...gallery.center,
            ...gallery.rightTop,
            ...gallery.rightBottom,
          ].map((src, index) => (
            <img
              key={`mobile-${index}`}
              src={src}
              alt="Gallery"
              className="h-52 w-full object-cover rounded-2xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
