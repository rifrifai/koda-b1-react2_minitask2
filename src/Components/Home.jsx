import UserSearch from "./UserSearch";

export default function Home() {
    return (
    <>
		<section id="home" className="py-16 px-5 min-h-[80vh] border-b border-gray-300 bg-gray-50">
            <h2 className="text-2xl font-bold mb-4 text-[#2c3e50]">
                selamat datang para pengunjung diweb kami!
            </h2>
            <p className="text-gray-700 mb-6">
                ini adalah halaman utama yang dibuat menggunakan tag semantic yaitu main
            </p>

            <div className="relative bg-[#1abc9c] text-white p-10 rounded-lg max-w-150 mt-5 shadow-md">
                <span className="absolute -top-2.5 -right-2.5 bg-[#e74c3c] text-white px-3 py-1 text-xs rounded-full font-bold shadow">
                New!
                </span>
                <h3 className="text-xl font-semibold mb-2">leaning CSS positioning</h3>
                <p className="text-sm">
                    kotak ini menggunakan posisi relative, dan label New! dipojok menggunakan posisi absolute
                </p>
            </div>

            <UserSearch />
            </section>
    </>
    )
}