import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Scores() {
  const [score, setScore] = useState(0);
  const [tid, setTid] = useState('');
  const [newScore, setNewScore] = useState();
  const [name, setName] = useState();
  const router = useRouter();
  const [editmode, setEditmode] = useState(false);

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
        return false;
      } else if (data.status) {
        setScore(data.score);
        setName(data.name);
        return true;
      } else {
        alert(data.msg);
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  const updateScore = async (newScore) => {
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
        setScore(data.score);
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
  const editScore = async () => {
    if (await getCurrentScore()) setEditmode(true);
  };
  return (
    <div className="flex items-center justify-center flex-col gap-4 w-screen px-8 relative top-32">
      <input
        type="text"
        placeholder="Team ID"
        className="p-2 px-4 rounded-md outline-none w-48"
        onChange={(e) => {
          setTid(e.target.value);
        }}
        value={tid}
        disabled={editmode}
      />
      {editmode ? null : (
        <button
          className="p-2 bg-yellow-700 rounded-md px-4 text-white"
          onClick={editScore}
        >
          Edit Score
        </button>
      )}

      {editmode ? (
        <>
          <div>
            <div className="text-white">Team Name</div>
            <input
              type="text"
              placeholder="Team Name"
              className="p-2 px-4 rounded-md outline-none w-48"
              value={name}
              readOnly
            />
          </div>
          <div>
            <div className="text-white">Current Score</div>
            <input
              type="text"
              placeholder="Current Score"
              className="p-2 px-4 rounded-md outline-none w-48"
              value={score}
              readOnly
            />
          </div>
          <div>
            <div className="text-white">Update Score</div>

            <input
              type="number"
              min={0}
              max={1000}
              placeholder="Enter score"
              className="p-2 px-4 rounded-md outline-none w-48"
              onChange={(e) => {
                setNewScore(e.target.value);
              }}
              value={newScore}
            />
          </div>
          <div className="flex flex-col gap-2 flex-wrap justify-center items-center">
            <button
              className="p-2 bg-green-700 rounded-md px-4 text-white"
              onClick={() => {
                if (newScore < 0 || newScore > 1000 || newScore === undefined) {
                  alert('Score must be between 0-1000');
                  return;
                }
                updateScore(newScore);
              }}
            >
              Add to Current Score
            </button>
            <button
              className="p-2 bg-red-700 rounded-md px-4 text-white"
              onClick={() => {
                if (newScore < 0 || newScore > 1000 || newScore === undefined) {
                  alert('Score must be between 0-1000');
                  return;
                }
                updateScore(-newScore);
              }}
            >
              Deduct from Current Score
            </button>
          </div>
        </>
      ) : null}
      <div className="flex gap-2">
        {editmode ? (
          <button
            className="p-2 bg-yellow-700 rounded-md px-4 text-white"
            onClick={() => {
              setEditmode(false);
            }}
          >
            Go back
          </button>
        ) : null}
        <button
          className="p-2 bg-yellow-700 rounded-md px-4 text-white"
          onClick={logout}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
