"use client";

import { Song } from "@/types/Song";
import { Star } from "lucide-react";

interface SongCardProps {
  song: Song;
  review?: {
    rating: number;
    comment: string;
  };
  setReview: (review: {
    rating: number;
    comment: string;
  }) => void;
}

export default function SongCard({
  song,
  review,
  setReview,
}: SongCardProps) {
  const rating = review?.rating ?? 0;
  const comment = review?.comment ?? "";

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-5">
        {song.id}. {song.title}
      </h2>

      <div className="flex gap-2 mb-5">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() =>
              setReview({
                rating: star,
                comment,
              })
            }
            className="transition-transform active:scale-90"
            aria-label={`Rate ${star} stars`}
          >
            <Star
              size={38}
              className={
                rating >= star
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-zinc-600"
              }
            />
          </button>
        ))}
      </div>

      <textarea
        value={comment}
        onChange={(e) =>
          setReview({
            rating,
            comment: e.target.value,
          })
        }
        placeholder="What did you think about this song?"
        rows={3}
        className="w-full rounded-lg bg-zinc-800 border border-zinc-700 p-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );
}