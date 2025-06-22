import Image from "next/image";

const layanan = [
  {
    title: "Social Media Management",
    desc: "Meningkatkan kehadiran dan engagement brand Anda di berbagai platform sosial media.",
    icon: "/globe.svg",
    items: [
      "Strategi Konten & Penjadwalan",
      "Desain Visual & Copywriting",
      "Analisa & Laporan Performa",
    ],
  },
  {
    title: "Business Development",
    desc: "Membantu bisnis Anda tumbuh dengan strategi pengembangan yang tepat sasaran.",
    icon: "/window.svg",
    items: [
      "Riset Pasar & Analisa Kompetitor",
      "Strategi Pemasaran Digital",
      "Konsultasi Bisnis & Branding",
    ],
  },
];

// Paket Hosting Niagahoster Style
const paket = [
  {
    name: "Single",
    price: "Rp 12.900",
    desc: "Ideal untuk pemula",
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "Gratis SSL",
      "Backup Mingguan",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "Rp 24.900",
    desc: "Untuk blog & website sederhana",
    features: [
      "25 Website",
      "25 GB SSD Storage",
      "Gratis Domain",
      "Backup Mingguan",
    ],
    highlight: true,
  },
  {
    name: "Business",
    price: "Rp 39.900",
    desc: "Untuk bisnis & toko online",
    features: [
      "50 Website",
      "50 GB NVMe Storage",
      "Backup Harian",
      "Gratis Domain & SSL",
    ],
    highlight: false,
  },
];

const keunggulan = [
  {
    icon: "/vercel.svg",
    title: "Gratis Domain & SSL",
    desc: "Domain dan SSL gratis untuk semua paket tahunan.",
  },
  {
    icon: "/globe.svg",
    title: "Uptime 99.9%",
    desc: "Website selalu online dengan server terbaik.",
  },
  {
    icon: "/window.svg",
    title: "Support 24/7",
    desc: "Tim support siap membantu kapan saja.",
  },
  {
    icon: "/next.svg",
    title: "Migrasi Gratis",
    desc: "Pindah website ke kami tanpa biaya tambahan.",
  },
];

const testimoni = [
  {
    nama: "Hanif Fathony",
    avatar: "/globe.svg",
    quote: "Hostinger memudahkan saya membuat website profesional, bahkan tanpa keahlian teknis sekalipun.",
  },
  {
    nama: "Darcy Recio",
    avatar: "/window.svg",
    quote: "Saya masih banyak belajar, dan Hostinger sangat membantu perkembangan bisnis saya sejak awal.",
  },
];

const ulasan = [
  {
    nama: "Rina Wijaya",
    review: "Pelayanan sangat ramah dan website saya jadi lebih profesional!",
    rating: 5,
  },
  {
    nama: "Budi Santoso",
    review: "Migrasi website sangat mudah dan cepat, supportnya mantap.",
    rating: 5,
  },
  {
    nama: "Siti Aminah",
    review: "Harga terjangkau, fitur lengkap, sangat recommended!",
    rating: 4,
  },
];

const portofolio = [
  {
    nama: "Toko Online Sukses",
    deskripsi: "Website ecommerce dengan fitur lengkap dan tampilan modern.",
    gambar: "/globe.svg",
  },
  {
    nama: "Konsultan Digital",
    deskripsi: "Landing page profesional untuk jasa konsultasi bisnis.",
    gambar: "/window.svg",
  },
  {
    nama: "Startup Edukasi",
    deskripsi: "Platform edukasi online dengan sistem membership.",
    gambar: "/next.svg",
  },
];

const faq = [
  {
    q: "Bagaimana cara mendapatkan domain gratis?",
    a: "Domain gratis didapatkan untuk pembelian paket tahunan tertentu. Setelah aktivasi, Anda bisa klaim domain di dashboard.",
  },
  {
    q: "Apakah bisa upgrade paket di kemudian hari?",
    a: "Tentu, Anda bisa upgrade paket kapan saja sesuai kebutuhan website Anda.",
  },
  {
    q: "Bagaimana cara migrasi website ke sini?",
    a: "Cukup kirim permintaan migrasi, tim kami akan membantu prosesnya secara gratis.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between font-sans">
      {/* Hero Section */}
      <header className="w-full py-16 px-4 bg-gradient-to-br from-blue-700/90 via-blue-400/80 to-white/80 text-white text-center relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/80 via-blue-400/60 to-white/60 blur-2xl opacity-60 -z-10" />
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-tight">SNA Digital Technology</h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto font-medium drop-shadow">
          Solusi Terbaik untuk <span className="font-semibold">Social Media Management</span> & <span className="font-semibold">Business Development</span> di Era Digital.
        </p>
        <a href="#layanan" className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-200 border-2 border-blue-100">Lihat Layanan</a>
      </header>

      {/* Paket Section ala Niagahoster */}
      <section className="w-full max-w-5xl py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-blue-700 tracking-tight text-center">Pilih Paket Bisnis Terbaik</h2>
        <div className="grid gap-8 md:grid-cols-3 w-full">
          {paket.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 shadow-xl border-2 ${p.highlight ? "border-blue-600 bg-gradient-to-br from-blue-100/90 via-white/90 to-blue-50/80 scale-105 z-10" : "border-blue-100 bg-white"} flex flex-col items-center transition-all duration-200`}
            >
              {p.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow">PALING POPULER</span>
              )}
              <h3 className="text-xl font-bold text-blue-700 mb-2">{p.name}</h3>
              <div className="text-3xl font-extrabold text-blue-800 mb-1">{p.price}<span className="text-base font-medium text-gray-500">/bln</span></div>
              <div className="mb-4 text-gray-600 text-sm">{p.desc}</div>
              <ul className="mb-6 text-gray-700 text-sm space-y-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="text-blue-500">•</span> {f}</li>
                ))}
              </ul>
              <button className={`w-full py-2 rounded-lg font-bold text-white shadow ${p.highlight ? "bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600" : "bg-blue-400 hover:bg-blue-500"} transition-all`}>Pilih Paket</button>
            </div>
          ))}
        </div>
      </section>

      {/* Keunggulan Section ala Niagahoster */}
      <section className="w-full max-w-5xl py-10 px-4 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-700 text-center">Keunggulan Kami</h2>
        <div className="grid gap-8 md:grid-cols-4 w-full">
          {keunggulan.map((k) => (
            <div key={k.title} className="flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl p-6 shadow border border-blue-100">
              <Image src={k.icon} alt={k.title} width={40} height={40} className="mb-3" />
              <h3 className="font-bold text-blue-700 mb-1 text-center">{k.title}</h3>
              <p className="text-sm text-gray-600 text-center">{k.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimoni Section ala Niagahoster */}
      <section className="w-full max-w-4xl py-10 px-4 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-700 text-center">Dipercaya Pelanggan</h2>
        <div className="grid gap-8 md:grid-cols-2 w-full">
          {testimoni.map((t) => (
            <div key={t.nama} className="bg-white rounded-xl p-6 shadow border border-blue-100 flex flex-col items-center text-center">
              <Image src={t.avatar} alt={t.nama} width={48} height={48} className="mb-3 rounded-full" />
              <p className="italic text-gray-700 mb-2">&ldquo;{t.quote}&rdquo;</p>
              <div className="font-bold text-blue-700">{t.nama}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ulasan Section */}
      <section className="w-full max-w-3xl py-10 px-4 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-700 text-center">Ulasan Pelanggan</h2>
        <div className="grid gap-6 md:grid-cols-3 w-full">
          {ulasan.map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow border border-blue-100 flex flex-col items-center text-center">
              <div className="font-bold text-blue-700 mb-1">{u.nama}</div>
              <div className="flex gap-1 mb-2">{Array.from({length: u.rating}).map((_, idx) => (<span key={idx} className="text-yellow-400">★</span>))}</div>
              <div className="text-gray-700 text-sm">{u.review}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Portofolio Section */}
      <section className="w-full max-w-4xl py-10 px-4 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-700 text-center">Portofolio</h2>
        <div className="grid gap-8 md:grid-cols-3 w-full">
          {portofolio.map((p, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl p-6 shadow border border-blue-100 flex flex-col items-center text-center">
              <Image src={p.gambar} alt={p.nama} width={56} height={56} className="mb-3" />
              <div className="font-bold text-blue-700 mb-1">{p.nama}</div>
              <div className="text-gray-600 text-sm">{p.deskripsi}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section ala Niagahoster */}
      <section className="w-full max-w-3xl py-10 px-4 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-700 text-center">FAQ</h2>
        <div className="w-full space-y-4">
          {faq.map((f, i) => (
            <div key={i} className="bg-white rounded-lg shadow border border-blue-100 p-5">
              <div className="font-semibold text-blue-700 mb-1">{f.q}</div>
              <div className="text-gray-600 text-sm">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="w-full max-w-5xl py-20 px-4 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-blue-700 tracking-tight">Layanan Kami</h2>
        <div className="grid gap-10 md:grid-cols-2 w-full">
          {layanan.map((lay, idx) => (
            <div
              key={lay.title}
              className="bg-gradient-to-br from-blue-100/80 via-white/90 to-blue-50/80 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-200 border border-blue-100 group relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image src={lay.icon} alt="icon" width={40} height={40} className="drop-shadow-md group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold text-blue-700 group-hover:text-blue-900 transition">{lay.title}</h3>
              </div>
              <p className="mb-3 text-gray-700 font-medium">{lay.desc}</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {lay.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-tr from-blue-200/40 to-white/0 rounded-full blur-2xl opacity-60 -z-10" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontak" className="w-full max-w-xl py-14 px-4 flex flex-col items-center bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl mb-10 shadow-xl border border-blue-100">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-700">Hubungi Kami</h2>
        <form className="w-full flex flex-col gap-5">
          <input type="text" name="nama" placeholder="Nama" className="border border-blue-200 rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm" required />
          <input type="email" name="email" placeholder="Email" className="border border-blue-200 rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm" required />
          <textarea name="pesan" placeholder="Pesan" className="border border-blue-200 rounded-lg px-5 py-3 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm resize-none" rows={4} required />
          <button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-200">Kirim Pesan</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full py-5 text-center text-sm text-gray-500 bg-white border-t border-blue-100 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-blue-200 via-white to-blue-200 rounded-b-full opacity-70" />
        &copy; {new Date().getFullYear()} SNA Digital Technology. All rights reserved.
      </footer>
    </div>
  );
}
