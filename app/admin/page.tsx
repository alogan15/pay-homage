export const dynamic = "force-dynamic";

import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { songs } from "@/app/data/album";

export default async function AdminPage() {
  const { data: feedback, error } = await supabaseAdmin
    .from("feedback")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1 className="text-3xl font-bold">Artist Dashboard</h1>

        <p className="text-red-400 mt-6">
          Error loading feedback.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10 max-w-5xl mx-auto">

      <h1 className="text-5xl font-bold mb-2">
        👑 Artist Dashboard
      </h1>

      <p className="text-zinc-400 mb-10">
        {feedback.length} submission{feedback.length !== 1 ? "s" : ""}
      </p>

      {feedback.map((item) => (
        <div
          key={item.id}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8 shadow-xl"
        >
          <p className="text-lg font-bold mb-4">
            👤 {item.reviewer_name || "Anonymous"}
          </p>

          {/* Overall Rating */}

          <h2 className="text-2xl font-bold mb-4">
            Overall Rating
          </h2>

          <p className="text-3xl text-yellow-400 mb-6">
            {"⭐".repeat(item.overall_rating || 0)}
          </p>

          {/* Favorite Track */}

          <p className="mb-3">
            <span className="font-semibold">
              Favorite Track:
            </span>{" "}
            {item.favorite_track || "None selected"}
          </p>

          {/* Final Thoughts */}

          <div className="mb-8">
            <p className="font-semibold mb-2">
              Final Thoughts
            </p>

            <p className="text-zinc-300 whitespace-pre-wrap">
              {item.final_thoughts || "No comments left."}
            </p>
          </div>

          {/* Song Reviews */}

          {item.song_reviews && (
            <div className="border-t border-zinc-700 pt-6">

              <h3 className="text-2xl font-bold mb-5">
                Song Reviews
              </h3>

              {Object.entries(item.song_reviews).map(
                ([songId, review]: any) => {
                  const song = songs.find(
                    (s) => s.id === Number(songId)
                  );

                  return (
                    <div
                      key={songId}
                      className="bg-zinc-800 rounded-xl p-5 mb-4"
                    >
                      <p className="text-lg font-semibold">
                        🎵 {song?.title ?? `Track ${songId}`}
                      </p>

                      <p className="text-yellow-400 text-xl mt-2">
                        {"⭐".repeat(review.rating || 0)}
                      </p>

                      <p className="text-zinc-300 mt-3 whitespace-pre-wrap">
                        {review.comment?.trim()
                          ? review.comment
                          : "No comment"}
                      </p>
                    </div>
                  );
                }
              )}

            </div>
          )}

          {/* Submitted */}

          <div className="border-t border-zinc-700 mt-8 pt-4">
            <p className="text-sm text-zinc-500">
              Submitted{" "}
              {new Date(item.created_at).toLocaleString()}
            </p>
          </div>

        </div>
      ))}

    </main>
  );
}