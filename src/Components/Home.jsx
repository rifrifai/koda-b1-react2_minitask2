export default function Home() {
    return (
    <>
		<section id="home" className="px-5 py-15 min-h-[80vh] border-b border-[#ddd]">
			<h2 className="mb-3.75 text-[#2c3e50]">selamat datang para pengunjung diweb kami!</h2>
			<p>ini adalah halaman utama yang dibuat menggunakan tag semantic yaitu main</p>

            <div className="relative bg-[#1abc9c] p-10 rounded-lg max-w-150 mt-5">
                <span className="absolute top-2.5 right-2.5 bg-[#e74c3c] text-white py-1.25 px-3 text-[12px] rounded-[20px] font-bold">New!</span>
                <h3>leaning CSS positioning</h3>
                <p>kotak ini menggunakan posisi relative, dan label New! dipojok menggunakan posisi absolute</p>
            </div>
        </section>

		<a href="https://wa.me/6233445678910" className="fixed b-[20px] r-[20px] bg-[#25d366] text-white py-3 px-4.5 rounded-[50px] font-bold shadow-[0_4px_8px_rgba(0,0,0,0.2)] z-999">chat whatsapp</a>

		<footer className="items-center p-5 bg-[#2c3e50] text-white">
			<p>&copy; 2026 Java .NET developer. All right reserved</p>
		</footer>
    </>
    )
}