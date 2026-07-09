"use client";

import { useState } from "react";
import { songs } from "@/app/data/album";

interface OverallReviewProps {
  reviews: Record<
    number,
    {
      rating: number;
      comment: string;
    }
  >;

  reviewerName: string;
}

export default function OverallReview({
  reviews,
  reviewerName,
}: OverallReviewProps) {
  const [overallRating, setOverallRating] = useState(0);
  const [favoriteTrack, setFavoriteTrack] = useState("");
  const [finalThoughts, setFinalThoughts] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit() {
    setSubmitting(true);

    const feedback = {
      overallRating,
      favoriteTrack,
      finalThoughts,
      reviews,
      reviewerName,
      submittedAt: new Date().toISOString(),
    };

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedback),
    });

    if (res.ok) {
      alert("Thanks! Your feedback has been submitted.");
    } else {
      alert("Something went wrong.");
    }

    setSubmitting(false);
  }

  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mt-12 shadow-xl">

      <div className="text-center mb-10">
        <div className="text-5xl mb-4">👑</div>

        <h2 className="text-4xl font-bold mb-4">
          Ready to submit?
        </h2>

        <p className="text-zinc-300 text-lg">
          You've made it to the end.
        </p>
      </div>

      <div className="border-t border-zinc-700 my-10"></div>

      <h3 className="text-2xl font-bold mb-5">
        Overall Album Rating
      </h3>

      <div className="flex gap-2 mb-10">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setOverallRating(star)}
            className={`text-5xl ${
              overallRating >= star
                ? "text-yellow-400"
                : "text-zinc-600"
            }`}
          >
            ★
          </button>
        ))}
      </div>

      <label className="block text-xl font-semibold mb-3">
        Favorite Track
      </label>

      <select
        value={favoriteTrack}
        onChange={(e) => setFavoriteTrack(e.target.value)}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 mb-8 text-white"
      >
        <option value="">Select your favorite</option>

        {songs.map((song) => (
          <option key={song.id} value={song.title}>
            {song.title}
          </option>
        ))}
      </select>

      <label className="block text-xl font-semibold mb-3">
        Final Thoughts
      </label>

      <textarea
        rows={6}
        value={finalThoughts}
        onChange={(e) => setFinalThoughts(e.target.value)}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-white mb-10"
      />

      <button
        onClick={handleSubmit}
        disabled={submitting}
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black text-xl font-bold py-5 rounded-xl"
      >
        {submitting ? "Submitting..." : "Finish Listening Session"}
      </button>

    </section>
  );
}