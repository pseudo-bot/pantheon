import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Scores() {
  const [score, setScore] = useState('');
  const [tid, setTid] = useState('');
  const [newScore, setNewScore] = useState('');
  const router = useRouter();

  const getCurrentScore = async () => {
    try {
      const token = localStorage.getItem('jwt');
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APIBASE}/score/${tid}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if (data.authFail) {
        alert(data.msg);
        router.push('/admin');
      } else if (data.status) {
        setScore(data.score);
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const updateScore = async () => {
    try {
      const token = localStorage.getItem('jwt');
      const res = await fetch(`${process.env.NEXT_PUBLIC_APIBASE}/score`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          tid,
          score: newScore,
        }),
      });
      const data = await res.json();
      if (data.authFail) {
        alert(data.msg);
        router.push('/admin');
      } else if (data.status) {
        alert(data.msg);
        setScore(newScore);
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const logout = () => {
    localStorage.setItem('jwt', '');
    router.push('/admin');
  };
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4 w-screen">
      <input
        type="text"
        placeholder="Team ID"
        className="p-2 px-4 rounded-md outline-none w-48"
        onChange={(e) => {
          setTid(e.target.value);
        }}
        value={tid}
      />
      <input
        type="text"
        placeholder="Current Score"
        className="p-2 px-4 rounded-md outline-none w-48"
        value={score}
        readOnly
      />
      <button
        className="bg-yellow-700 text-white p-2 px-4 rounded-md"
        onClick={getCurrentScore}
      >
        Get Current Score
      </button>
      <input
        type="text"
        placeholder="New Score"
        className="p-2 px-4 rounded-md outline-none w-48"
        onChange={(e) => {
          setNewScore(e.target.value);
        }}
        value={newScore}
      />
      <button
        className="p-2 bg-yellow-700 rounded-md px-4 text-white"
        onClick={updateScore}
      >
        Update Score
      </button>
      <button
        className="p-2 bg-red-700 rounded-md px-4 text-white"
        onClick={logout}
      >
        Log out
      </button>
    </div>
  );
}
