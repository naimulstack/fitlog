export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="max-w-xl text-center">

        {/* 404 */}
        <h1 className="text-[120px] sm:text-[180px] font-black leading-none tracking-tighter bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
          Page not found
        </h2>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        {/* Home Button */}
        <div className="mt-8">
          <a href="/"
            className="inline-flex items-center rounded-xl bg-white px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-slate-200"
          >
            ← Back to Home
          </a>
        </div>

        {/* Decoration */}
        <div className="mt-12 flex justify-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500 [animation-delay:200ms]" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-purple-500 [animation-delay:400ms]" />
        </div>

      </div>
    </main>
  );
}