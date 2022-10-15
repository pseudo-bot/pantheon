import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Admin() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_APIBASE}/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
            const data = await res.json();
            if (!data.status) {
                alert(data.msg);
                setUsername('');
                setPassword('');
            } else {
                localStorage.setItem('jwt', data.token);
                router.push('/admin/score');
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="h-screen flex items-center justify-center flex-col gap-4 w-screen">
            <input
                type="text"
                placeholder="Username"
                className="p-2 px-4 rounded-md outline-none w-48"
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                value={username}
            />
            <input
                type="text"
                placeholder="Password"
                className="p-2 px-4 rounded-md outline-none w-48"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                value={password}
            />
            <button
                className="p-2 bg-yellow-700 rounded-md px-4 text-white"
                onClick={login}
            >
                Login
            </button>
        </div>
    );
}
