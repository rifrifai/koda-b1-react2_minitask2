import { useEffect } from "react";
import { useState } from "react";

export default function UserSearch() {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const url = "https://jsonplaceholder.typicode.com/users";
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.error(`gagal mengambil data: `, err));
    }, [])

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()));

    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-[#2c3e50]">mencari user dari API</h3>

            <input type="text" placeholder="cari berdasarkan nama" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full max-w-md p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-blue-500 bg-white shadow-sm"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <div key={user.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between hover:shadow-md transition">
                            <div>
                                <h4 className="font-bold text-lg text-blue-600 mb-1">{user.name}</h4>
                                <p className="text-xs text-gray-400 mb-3">@{user.username}</p>
                                
                                <div className="space-y-1 text-sm text-gray-700">
                                    <p><span className="font-semibold">Email:</span> {user.email}</p>
                                    <p>
                                        <span className="font-semibold">Website:</span>{' '}
                                        <a 
                                        href={`https://${user.website}`} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="text-blue-500 hover:underline"
                                        >
                                        {user.website}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 col-span-full">user tidak ditemukan.</p>
                )}
            </div>
        </div>
    );
}
