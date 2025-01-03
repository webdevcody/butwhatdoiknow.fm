import { episodes, podcastInfo } from "@/data/episodes";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="pt-20 pb-16 px-8 text-center bg-gradient-to-b from-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {podcastInfo.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {podcastInfo.description}
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <a
              href="/feed.xml"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27zm0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 13.07z" />
              </svg>
              RSS Feed
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 pb-20">
        <div className="space-y-8">
          {episodes
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((episode) => (
              <article
                key={episode.id}
                className="bg-gray-800/50 backdrop-blur rounded-2xl p-6 hover:bg-gray-800/70 transition-colors flex gap-6"
              >
                <div className="flex-shrink-0 w-24 h-24 flex flex-col items-center justify-center bg-white/10 rounded-xl">
                  <div className="text-xs text-gray-400 mb-1">EP</div>
                  <div className="text-3xl font-bold text-white">
                    {episode.episode}
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-white">
                        {episode.title}
                      </h2>
                      <div className="text-sm text-gray-400 flex items-center gap-2">
                        <time dateTime={episode.date}>
                          {new Date(episode.date).toLocaleDateString(
                            undefined,
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </time>
                        <span>•</span>
                        <span>{episode.duration}</span>
                      </div>
                    </div>
                    {episode.explicit && (
                      <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded-full text-xs">
                        Explicit
                      </span>
                    )}
                  </div>
                  <p className="mb-6 text-gray-300 leading-relaxed">
                    {episode.description}
                  </p>
                  <audio
                    controls
                    className="w-full [&::-webkit-media-controls-panel]:bg-gray-700 [&::-webkit-media-controls-current-time-display]:text-white [&::-webkit-media-controls-time-remaining-display]:text-white"
                    preload="metadata"
                  >
                    <source src={episode.file} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </article>
            ))}
        </div>
      </main>
    </div>
  );
}
