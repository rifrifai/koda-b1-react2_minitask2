import UserSubmit from "./UserSubmit";

export default function Contact() {
    return (
        <>
        <section id="contact" className="py-16 px-5 min-h-[80vh] border-b border-gray-300 bg-[#ecf0f1]">
            <h2 className="text-2xl font-bold mb-4 text-[#2c3e50]">Contact</h2>
            <p className="text-gray-700 mb-4">
                silahkan hubungi jika Anda mempunya tawaran pekerjaan dengan bagus dan perkembangan pada software engineer Anda, silahkan hubungi kami melalui formulir atau tombol whatsapp dipojok kanan bawah jika ada pertanyaan
            </p>
            <div className="space-y-1 text-gray-700 font-medium">
                <p>email: info@developer.com</p>
                <p>telp: +62 334 4567 8910</p>
            </div>
        </section>
        <UserSubmit />
        </>
    )
}