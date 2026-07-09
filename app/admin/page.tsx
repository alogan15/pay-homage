export const dynamic = "force-dynamic";

import { supabaseAdmin } from "@/lib/supabaseAdmin";

export default async function AdminPage() {
  const { data: feedback, error } = await supabaseAdmin
    .from("feedback")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <p className="text-red-400 mt-6">
          Error loading feedback.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Artist Dashboard
      </h1>

      <p className="text-zinc-400 mb-10">
        {feedback.length} submissions
      </p>

      {feedback.map((item) => (
        <div
          key={item.id}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-6"
        >
          <p className="text-yellow-400 text-xl">
            ⭐ {item.overall_rating}/5
          </p>

          <p className="mt-3">
            <strong>Favorite Track:</strong>{" "}
            {item.favorite_track || "None selected"}
          </p>

          <div className="mt-4">
            <strong>Thoughts:</strong>

            <p className="mt-2 text-gray-300 whitespace-pre-wrap">
              {item.final_thoughts}
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            {new Date(item.created_at).toLocaleString()}
          </p>
        </div>
      ))}

    </main>
  );
}