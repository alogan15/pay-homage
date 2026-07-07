"use client";

import { useState } from "react";
import { songs } from "@/app/data/album";

export default function OverallReview() {
  const [rating, setRating] = useState(0);

  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mt-12 shadow-xl">

      {/* Header */}
      <div className="text-center mb-10">

        <div className="text-5xl mb-4">👑</div>

        <h2 className="text-4xl font-bold mb-4">
          Ready to submit?
        </h2>

        <p className="text-zinc-300 text-lg">
          You've made it to the end.
        </p>

        <p className="text-zinc-400 mt-6 leading-8">
          Your ratings and comments will be
          <br />
          shared directly with
          <br />
          <span className="text-yellow-400 font-semibold">
            Big Money Lynchie & Black Plague
          </span>
          .
        </p>

        <p className="text-zinc-500 mt-8">
          Thank you for taking the time
          <br />
          to help shape this album.
        </p>

      </div>

      {/* Divider */}
      <div className="border-t border-zinc-700 my-10"></div>

      {/* Overall Rating */}
      <h3 className="text-2xl font-bold mb-5">
        Overall Album Rating
      </h3>

      <div className="flex gap-2 mb-10">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={`text-5xl transition ${
              rating >= star
                ? "text-yellow-400"
                : "text-zinc-600"
            }`}
          >
            ★
          </button>
        ))}
      </div>

      {/* Favorite Track */}

      <label className="block text-xl font-semibold mb-3">
        Favorite Track
      </label>

      <select className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 mb-8 text-white">

        <option>Select your favorite</option>

        {songs.map((song) => (
          <option key={song.id}>
            {song.title}
          </option>
        ))}

      </select>

      {/* Final Thoughts */}

      <label className="block text-xl font-semibold mb-3">
        Final Thoughts
      </label>

      <textarea
        rows={6}
        placeholder="Tell the artists what you thought..."
        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-white mb-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      {/* Divider */}

      <div className="border-t border-zinc-700 mb-8"></div>

      {/* Submit */}

      <button
        className="
          w-full
          bg-yellow-500
          hover:bg-yellow-400
          text-black
          text-xl
          font-bold
          py-5
          rounded-xl
          transition
          duration-300
        "
      >
        Finish Listening Session
      </button>

    </section>
  );
}