interface WelcomeCardProps {
  reviewerName: string;
  setReviewerName: (name: string) => void;
}

export default function WelcomeCard({
  reviewerName,
  setReviewerName,
}: WelcomeCardProps) {
  
  return (
    <section className="text-center max-w-2xl mx-auto py-10">
      <div className="text-5xl mb-4">👑</div>

      <h2 className="text-4xl font-bold mb-6">
        Welcome
      </h2>

      <p className="text-2xl text-zinc-200 mb-8">
        Help shape the album.
      </p>

      <div className="mb-8">
        <label className="block text-lg font-semibold mb-2">
          Your Name <span className="text-zinc-500">(Optional)</span>
        </label>

        <input
          type="text"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          placeholder="Leave blank to stay anonymous"
          className="w-full rounded-lg bg-zinc-800 border border-zinc-700 p-4 text-white placeholder:text-zinc-500"
        />
      </div>

      <div className="space-y-4 text-xl text-zinc-300">
        <p>⭐ Rate every song.</p>
        <p>💬 Leave comments.</p>
      </div>

      <p className="mt-10 text-zinc-500 uppercase tracking-[0.3em]">
        Swipe down to begin
      </p>

      <div className="mt-6 animate-bounce text-3xl">
        ↓
      </div>
    </section>
  );
}