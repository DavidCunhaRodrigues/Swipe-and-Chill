type Movie = { id: number; title: string; vote_average: number };

async function getTrending(): Promise<Movie[]> {
  const res = await fetch("https://api.themoviedb.org/3/trending/movie/week?language=fr-FR", {
    headers: { Authorization: `Bearer ${process.env.TMDB_TOKEN}` },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`TMDB a répondu ${res.status}`);
  }

  const data = await res.json();
  return data.results;
}
export default async function Home() {
  const movies = await getTrending();
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Swipe&Chill</h1>
      <ul className="space-y-2">
        {movies.slice(0, 5).map((m) => (
          <li key={m.id}>{m.title} ({m.vote_average.toFixed(1)}/10)</li>
        ))}
      </ul>
    </main>
  );
}