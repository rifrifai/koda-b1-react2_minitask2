import { useEffect } from "react";
import { useState } from "react";

export default function UserSubmit() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        messages: "",
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
        const {name, value} = event.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    function handleSubmit (event){
        event.preventDefault();

        const newMessage   = {
            id: crypto.randomUUID(),
            nama: form.name,
            email: form.email,
            messages: form.messages,
        }
        setMessage((prev) => [newMessage, ...prev]);
        setForm({
            name: "",
            email: "",
            messages: "",
        });
    }
    return(<>
        <div className="mt-6 max-w-xl">
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
                <h4 className="text-lg font-bold mb-3 ml-3 text-[2c3e50]">Daftar Pesan by localStorage</h4>

                {message.length === 0 ? (
                    <p className="text-gray-500 text-sm">there is no message sent!</p>
                ) : (
                    <div className="space-y-3 p-3">
                        {message.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                                <p className="font-bold text-blue-600">
                                    {item.nama} <span className="text-xs text-gray-400 font-normal">{item.email}</span>
                                </p>
                                <p className="text-gray-700 mt-1 text-sm">{item.messages}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </>)

}