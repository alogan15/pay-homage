import Image from "next/image";
import { albumInfo } from "./../app/data/album";

export default function AlbumHeader() {
  return (
    <section className="mb-14">
      <div className="overflow-hidden rounded-3xl shadow-2xl border border-zinc-800">
        <Image
          src="/album-cover.png"
          alt={albumInfo.albumTitle}
          width={1200}
          height={700}
          priority
          className="w-full h-auto"
        />
      </div>

      <div className="text-center mt-8">

        <p className="uppercase tracking-[0.45em] text-zinc-500 text-sm">
          {albumInfo.eventTitle}
        </p>

        {/* <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
          {albumInfo.artist}
        </h1> */}

        {/* <h2 className="text-3xl text-yellow-400 mt-2 font-semibold">
          {albumInfo.albumTitle}
        </h2> */}

        <div className="flex justify-center gap-8 mt-6 text-zinc-400 text-sm">
          <span>📅 Friday, July 10</span>
          <span>🕕 8:00 PM</span>
        </div>

        <div className="mt-8 max-w-lg mx-auto">
          {/* <p className="text-zinc-300 text-lg">
            Rate each track honestly.
          </p> */}

          <p className="text-zinc-500 mt-2">
            Your responses are anonymous.
          </p>
        </div>
      </div>
    </section>
  );
}