"use client";

import { useState } from "react";

import AlbumHeader from "@/components/AlbumHeader";
import WelcomeCard from "@/components/WelcomeCard";
import SongCard from "@/components/SongCard";
import OverallReview from "@/components/OverallReview";
import Footer from "@/components/Footer";

import { songs } from "./data/album";

export default function Home() {
  const [reviews, setReviews] = useState<
    Record<number, { rating: number; comment: string }>
  >({});
  const [reviewerName, setReviewerName] = useState("");

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-10">

        <AlbumHeader />

        <WelcomeCard
          reviewerName={reviewerName}
          setReviewerName={setReviewerName}
        />
        {songs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            review={reviews[song.id]}
            setReview={(review) =>
              setReviews((prev) => ({
                ...prev,
                [song.id]: review,
              }))
            }
          />
        ))}

          <OverallReview
            reviews={reviews}
            reviewerName={reviewerName}
          />
      </div>
    </main>
  );
}