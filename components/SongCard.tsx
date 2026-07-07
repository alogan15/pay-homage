// "use client";

// import { useState } from "react";
// import { Song } from "@/types/Song";
// import { Star } from "lucide-react";

// interface SongCardProps {
//   song: Song;
// }

// export default function SongCard({ song }: SongCardProps) {
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");

//   return (
//     <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-6 shadow-lg">
//       <h2 className="text-2xl font-semibold mb-4">
//         {song.id}. {song.title}
//       </h2>

//       <div className="flex gap-2 mb-5">
//         {[1, 2, 3, 4, 5].map((star) => (
// <button
//   type="button"
//   onClick={() => alert("Button works!")}
//   className="bg-blue-500 text-white px-4 py-2 rounded"
// >
//   Test Button
// </button>
//         ))}
//       </div>

//       <textarea
//         placeholder="What did you think about this song?"
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//         className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         rows={3}
//       />
//     </div>
//   );
// }

"use client";

import { Song } from "@/types/Song";

interface SongCardProps {
  song: Song;
}

export default function SongCard({ song }: SongCardProps) {
  return (
    <div className="bg-zinc-900 p-6 mb-6 rounded-xl">
      <h2>{song.title}</h2>
    </div>
  );
}