import AlbumHeader from "@/components/AlbumHeader";
import SongCard from "@/components/SongCard";
import { songs } from "./data/album";
import WelcomeCard from "@/components/WelcomeCard";
import OverallReview from "@/components/OverallReview";

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

