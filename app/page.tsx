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
//       <h2 className="text-2xl font-semibold mb-5">
//         {song.id}. {song.title}
//       </h2>

//       <div className="flex gap-2 mb-5">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <button
//             key={star}
//             type="button"
//             onClick={() => setRating(star)}
//             className="transition-transform active:scale-90"
//             aria-label={`Rate ${star} stars`}
//           >
//             <Star
//               size={38}
//               className={
//                 rating >= star
//                   ? "fill-yellow-400 text-yellow-400"
//                   : "text-zinc-600"
//               }
//             />
//           </button>
//         ))}
//       </div>

//       <textarea
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//         placeholder="What did you think about this song?"
//         rows={3}
//         className="w-full rounded-lg bg-zinc-800 border border-zinc-700 p-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//       />
//     </div>
//   );
// }

import AlbumHeader from "@/components/AlbumHeader";
import SongCard from "@/components/SongCard";
import WelcomeCard from "@/components/WelcomeCard";
import OverallReview from "@/components/OverallReview";
import { songs } from "./data/album";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <AlbumHeader />

        <WelcomeCard />

        {songs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
          />
        ))}

        <OverallReview />
      </div>
    </main>
  );
}