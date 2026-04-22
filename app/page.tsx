"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form Data:", form);
    alert(
      "Enquiry sent successfully! Our representative from Faridabad will contact you.",
    );
    setForm({ name: "", phone: "", company: "", message: "" });
  };

  return (
    <div className="bg-[#FAF7F2] text-stone-900 font-serif selection:bg-amber-100">
      {/* --- PREMIUM NAVBAR --- */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-stone-200 sticky top-0 bg-[#FAF7F2]/90 backdrop-blur-md z-50">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold tracking-tighter text-stone-950">
            AETHEL CRAFTS
          </h1>
          <span className="text-[9px] tracking-[0.4em] font-sans uppercase font-bold text-amber-800">
            The Faridabad Collective
          </span>
        </div>

        <div className="hidden lg:flex gap-12 items-center uppercase text-[11px] font-bold tracking-[0.2em] font-sans text-stone-600">
          <a
            href="#collections"
            className="hover:text-amber-800 transition-colors"
          >
            Collections
          </a>
          <a href="#studio" className="hover:text-amber-800 transition-colors">
            The Studio
          </a>
          <a href="#export" className="hover:text-amber-800 transition-colors">
            Export & Bulk
          </a>
          <a href="#contact" className="hover:text-amber-800 transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="tel:7033826056"
            className="hidden md:block text-sm font-sans font-bold border-b-2 border-amber-800"
          >
            +91 70338 26056
          </a>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-stone-950 text-white px-7 py-3 rounded-sm text-[11px] font-sans font-bold tracking-widest hover:bg-amber-900 transition-all shadow-xl"
          >
            GET A QUOTE
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2000&auto=format&fit=crop"
          alt="Handicraft Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="text-amber-800 text-sm font-sans tracking-[0.5em] mb-6 font-bold uppercase">
            Faridabad's Premier Artisan Hub
          </p>
          <h1 className="text-6xl md:text-8xl font-light leading-tight text-stone-950">
            Timeless Art. <br />
            <span className="italic text-amber-900 font-serif">
              Modern Legacy.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-stone-700 max-w-2xl mx-auto font-sans leading-relaxed">
            Wholesale suppliers of premium metal decor, hand-carved wood, and
            architectural artifacts. Custom-crafted in our Faridabad studio for
            global export.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#contact"
              className="bg-amber-900 text-white px-10 py-5 font-sans font-bold tracking-widest hover:bg-stone-900 transition shadow-2xl"
            >
              ENQUIRE FOR BULK
            </a>
            <a
              href="https://wa.me/917033826056"
              className="bg-white border border-stone-300 text-stone-900 px-10 py-5 font-sans font-bold tracking-widest hover:bg-stone-50 transition"
            >
              WHATSAPP CATALOGUE
            </a>
          </div>
        </div>
      </section>

      {/* --- PRODUCT GRID --- */}

      <section id="collections" className="py-28 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-light text-stone-950 uppercase tracking-tight">
              Our Signature Collections
            </h2>
            <div className="h-1 w-24 bg-amber-800 mt-4"></div>
          </div>

          <p className="text-stone-500 max-w-md">
            Premium handcrafted collections from Delhi NCR artisans. Ideal for
            bulk buyers, corporate gifting & interior decor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Metal Artifacts",
              img: "/images/metal.jpg",
            },
            {
              title: "Wooden Handicrafts",
              img: "/images/wood.jpeg",
            },
            {
              title: "Luxury Home Decor",
              img: "/images/decor.jpg",
            },
            {
              title: "Corporate Gift Items",
              img: "/images/gift.jpg",
            },
            {
              title: "Wall Decor Collection",
              img: "/images/wall.jpg",
            },
            {
              title: "Traditional Handcrafts",
              img: "/images/traditional.jpg",
            },
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-[420px] overflow-hidden bg-stone-200 rounded-lg">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition"></div>

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl text-white font-semibold">
                    {item.title}
                  </h3>

                  <a
                    href="https://wa.me/917033826056?text=Hi%20I%20am%20interested%20in%20your%20products"
                    className="text-amber-300 text-xs uppercase tracking-widest mt-2 inline-block"
                  >
                    Enquire Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- STUDIO INFO --- */}
      <section id="studio" className="py-28 bg-stone-950 text-stone-100">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-light leading-tight">
              Mastery in <br />{" "}
              <span className="italic text-amber-400 font-serif">
                Every Detail.
              </span>
            </h2>
            <p className="text-stone-400 font-sans text-lg leading-relaxed">
              Based in the industrial heart of **Faridabad**, Aethel Crafts
              operates a high-capacity manufacturing unit dedicated to bulk
              supply. We cater to interior designers, hotel chains, and retail
              giants across India and Europe.
            </p>
            <ul className="space-y-4 font-sans text-sm tracking-wide">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>{" "}
                Custom 3D Design Prototyping
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>{" "}
                Export-Grade Quality Control
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>{" "}
                PAN-India Logistics Support
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="/images/crafting.jpeg"
              alt="Crafting"
              className="w-full h-[400px]  shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-amber-900 p-10 hidden lg:block">
              <p className="text-4xl font-bold">12+</p>
              <p className="text-[10px] tracking-widest font-sans uppercase">
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT FORM --- */}
      <section
        id="contact"
        className="py-32 px-8 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-5xl text-stone-900 mb-4">Partner With Us</h2>
        <p className="text-stone-500 font-sans mb-12">
          Submit your bulk requirement for specialized pricing.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          <div className="space-y-2">
            <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-stone-400">
              Your Name
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-4 bg-white border border-stone-200 focus:border-amber-800 outline-none font-sans"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-stone-400">
              Phone Number
            </label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full p-4 bg-white border border-stone-200 focus:border-amber-800 outline-none font-sans"
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-stone-400">
              Company / Project Name
            </label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full p-4 bg-white border border-stone-200 focus:border-amber-800 outline-none font-sans"
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-stone-400">
              Requirement Details
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-4 bg-white border border-stone-200 focus:border-amber-800 outline-none font-sans"
            />
          </div>
          <button className="md:col-span-2 bg-stone-950 text-white py-5 font-sans font-bold tracking-widest hover:bg-amber-900 transition shadow-xl mt-4">
            SUBMIT WHOLESALE ENQUIRY
          </button>
        </form>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-100 border-t border-stone-200 pt-20 pb-10 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 font-sans">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-stone-950 tracking-tighter">
              AETHEL CRAFTS
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Premium wholesale manufacturers and exporters of authentic Indian
              handicrafts. Specializing in volume orders for global lifestyle
              brands.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-900">
              Collections
            </h4>
            <ul className="text-sm space-y-3 text-stone-600">
              <li>
                <a href="#" className="hover:text-stone-950 transition">
                  Antique Brass Ware
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-950 transition">
                  Sheesham Wood Art
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-950 transition">
                  Abstract Metal Wall Art
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-950 transition">
                  Sustainable Gift Items
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-900">
              The Company
            </h4>
            <ul className="text-sm space-y-3 text-stone-600">
              <li>
                <a href="#" className="hover:text-stone-950 transition">
                  Our Faridabad Studio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-950 transition">
                  Bulk Sourcing Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-950 transition">
                  Export Standards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-950 transition">
                  Craftsman Stories
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-sm">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-900">
              Reach Us
            </h4>
            <p className="text-stone-600 leading-relaxed">
              Plot 142, Industrial Area, Sector-24
              <br />
              Faridabad, Haryana - 121005
            </p>
            <p className="text-stone-950 font-bold underline">
              enquiry@aethelcrafts.com
            </p>
            <p className="text-stone-950 font-bold">+91 70338 26056</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-widest text-stone-400">
          <p>© 2026 Aethel Crafts Collective. Handmade in Faridabad.</p>

          <p>
            Developed By{" "}
            <a
              href="https://axvionel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-800 transition"
            >
              Axvionel Digital Private Limited
            </a>
          </p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-800 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-stone-800 transition">
              Terms
            </a>
            <a href="#" className="hover:text-stone-800 transition">
              Cookies
            </a>
          </div>
        </div>
      </footer>

      {/* --- WHATSAPP FLOAT --- */}
      <a
        href="https://wa.me/917033826056"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.406c0 6.555-5.332 11.887-11.888 11.887-2.011 0-3.987-.51-5.742-1.478l-6.142 1.702zm6.113-3.693c1.554.921 3.13 1.385 4.697 1.385 5.093 0 9.241-4.148 9.241-9.241 0-2.467-.962-4.786-2.706-6.531s-4.064-2.707-6.535-2.707c-5.093 0-9.242 4.148-9.242 9.241 0 1.637.433 3.149 1.252 4.49l-.916 3.344 3.43-.95c.001 0 .001 0 0 0z" />
        </svg>
      </a>

      {/* --- MOBILE CTA BAR --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 p-3 flex gap-3 z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <a
          href="tel:7033826056"
          className="flex-1 bg-stone-900 text-white text-center py-4 font-sans font-bold text-xs uppercase tracking-widest"
        >
          Call
        </a>
        <a
          href="https://wa.me/917033826056"
          className="flex-1 bg-amber-900 text-white text-center py-4 font-sans font-bold text-xs uppercase tracking-widest"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
