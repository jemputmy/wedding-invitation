'use client';
import useSound from 'use-sound';


export function BoopButton() {
  const [play] = useSound('song.mp3');

  const handleClick = () => {
    play();
  };

  return (
    <button
      className="bg-blue-600 text-white text-4xl px-10 py-6 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
      onClick={handleClick}
    >
      Boop!
    </button>
  );
}
