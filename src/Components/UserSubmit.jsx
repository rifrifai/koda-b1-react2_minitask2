import { useEffect } from "react";
import { useState } from "react";

export default function UserSubmit() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        messages: "",
        gender: "",
        hobbies: [],
        domisili: "",
    });
    const [message, setMessage] = useState(() => {
        try {
            const saved = localStorage.getItem("contactMessages");
            const data = saved ? JSON.parse(saved) : [];
            return Array.isArray(data) ? data : [];

        } catch (e) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("contactMessages", JSON.stringify(message));
    }, [message]);

    function handleChange(event){
        const {name, value, type, checked} = event.target;
        if(type === 'checkbox') {
            setForm((prev) => {
                const currentHobbies = prev.hobbies;
                if(checked) {
                    return {...prev, hobbies: [...currentHobbies, value] };
                } else {
                    return {...prev, hobbies: currentHobbies.filter((h) => h !== value) };
                }
            });
        } else {
            setForm((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    }

    function handleSubmit (event){
        event.preventDefault();

        if(!form.name || !form.email || !form.messages || !form.gender || !form.domisili) {
            alert("tidak boleh ada yang kosong!");
            return;
        }
        const newMessage   = {
            id: crypto.randomUUID(),
            nama: form.name,
            email: form.email,
            messages: form.messages,
            gender: form.gender,
            hobbies: form.hobbies,
            domisili: form.domisili,
        };

        setMessage((prev) => [newMessage, ...prev]);
        setForm({
            name: "",
            email: "",
            messages: "",
            gender: "",
            hobbies: [],
            domisili: "",
        });
    }
    return(<>
        <div className="mt-6 max-w-xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-[#2c3e50]">Kotak Formulir</h3>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Nama: </label>
                    <input 
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="nama Anda..."
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"/>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email: </label>
                    <input 
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email Anda..."
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"/>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Gender:</label>
                    <div className="flex gap-4 items-center">
                        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                            <input
                                type="radio"
                                name="gender"
                                value="Laki-laki"
                                checked={form.gender === "Laki-laki"}
                                onChange={handleChange}
                                className="text-blue-600 focus:ring-blue-500"
                            />
                            laki-laki
                        </label>
                        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                            <input
                                type="radio"
                                name="gender"
                                value="Perempuan"
                                checked={form.gender === "Perempuan"}
                                onChange={handleChange}
                                className="text-blue-600 focus:ring-blue-500"
                            />
                            perempuan
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Hobi:</label>
                    <div className="flex flex-wrap gap-4">
                        {["Membaca", "Olahraga", "Coding"].map((hobi) => (
                            <label key={hobi} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="hobbies"
                                    value={hobi}
                                    checked={form.hobbies.includes(hobi)}
                                    onChange={handleChange}
                                    className="rounded text-blue-600 focus:ring-blue-500"
                                />
                                {hobi}
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Domisili (Kota):</label>
                    <select
                        name="domisili"
                        value={form.domisili}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white"
                    >
                        <option value="">-- Pilih Kota --</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value="Bandung">Bandung</option>
                        <option value="Semarang">Semarang</option>
                        <option value="Surabaya">Surabaya</option>
                        <option value="Lainnya">Lainnya</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Messages: </label>
                    <textarea 
                    name="messages"
                    value={form.messages}
                    onChange={handleChange}
                    placeholder="write your thoughts here.."
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"/>
                </div>

                <button type="submit" className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    send it
                </button>
            </form>

            <div className="mt-8">
                <h4 className="text-lg font-bold mb-3 text-[#2c3e50]">Daftar Pesan by localStorage</h4>
                
                {message.length === 0 ? (
                    <p className="text-gray-500 text-sm">there is no message sent!</p>
                ) : (
                    <div className="space-y-3">
                        {message.map((item) => (
                            <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 space-y-1">
                                <div className="flex justify-between items-center">
                                    <p className="font-bold text-blue-600">
                                        {item.nama} <span className="text-xs text-gray-400 font-normal">({item.email})</span>
                                    </p>
                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                                        {item.domisili}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500">
                                    Gender: <span className="font-medium text-gray-700">{item.gender}</span> | 
                                    Hobi: <span className="font-medium text-gray-700">{item.hobbies.length > 0 ? item.hobbies.join(', ') : '-'}</span>
                                </p>
                                <p className="text-gray-700 pt-1 text-sm border-t border-gray-100 mt-2">{item.messages}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </>)

}