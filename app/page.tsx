// import AlbumHeader from "@/components/AlbumHeader";
// import SongCard from "@/components/SongCard";
// import { songs } from "./data/album";
// import WelcomeCard from "@/components/WelcomeCard";
// import OverallReview from "@/components/OverallReview";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-black text-white">
//       <div className="max-w-5xl mx-auto px-6 py-10">

//         <AlbumHeader />

//         <WelcomeCard />

//         {songs.map((song) => (
//           <SongCard
//             key={song.id}
//             song={song}
//           />
//         ))}

//         <OverallReview />

//       </div>
//     </main>
//   );
// }

"use client";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <button
        type="button"
        onClick={() => alert("🎉 iPhone button works!")}
        className="bg-blue-600 text-white px-8 py-5 rounded-xl text-2xl"
      >
        Test Button
      </button>
    </main>
  );
}