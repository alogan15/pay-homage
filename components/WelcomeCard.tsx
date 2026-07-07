export default function WelcomeCard() {
  return (
    <section className="text-center max-w-2xl mx-auto py-10">
      <div className="text-5xl mb-4">👑</div>

      <h2 className="text-4xl font-bold mb-6">
        Welcome
      </h2>

      <p className="text-2xl text-zinc-200 mb-8">
        Help shape the album.
      </p>

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