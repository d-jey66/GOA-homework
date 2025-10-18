import { useState, useEffect } from "react";

export default function App() {
  const [photos, setPhotos] = useState<any[]>([]);
  const [randomPhoto, setRandomPhoto] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [download, setDownload] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const photosRes = await fetch("http://localhost:5000/api/photos");
        const photosData = await photosRes.json();
        setPhotos(photosData);

        const randomRes = await fetch("http://localhost:5000/api/photos/random");
        const randomData = await randomRes.json();
        setRandomPhoto(randomData);

        const photoId = randomData?.id;
        if (!photoId) throw new Error("Random photo ID is missing");

        const statsRes = await fetch(`http://localhost:5000/api/photos/${photoId}/statistics`);
        const statsData = await statsRes.json();
        setStats(statsData);

        const downloadRes = await fetch(`http://localhost:5000/api/photos/${photoId}/download`);
        const downloadData = await downloadRes.json();
        setDownload(downloadData);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data");
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Unsplash API Demo</h1>

      <section>
        <h2>Photo List</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {photos.map((p) => (
            <img
              key={p.id}
              src={p.urls?.thumb}
              alt={p.alt_description || "Photo"}
              width={100}
              height={100}
              style={{ borderRadius: "8px" }}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Random Photo</h2>
        {randomPhoto && (
          <>
            <img
              src={randomPhoto.urls?.small}
              alt={randomPhoto.alt_description || "Random Photo"}
              width={300}
              style={{ borderRadius: "12px" }}
            />
            <p>{randomPhoto.alt_description}</p>
          </>
        )}
      </section>

      <section>
        <h2>Statistics</h2>
        {stats && (
          <ul>
            <li>Likes: {stats?.likes?.total ?? "N/A"}</li>
            <li>Views: {stats?.views?.total ?? "N/A"}</li>
            <li>Downloads: {stats?.downloads?.total ?? "N/A"}</li>
          </ul>
        )}
      </section>

      <section>
        <h2>Download</h2>
        {download?.url && (
          <a href={download.url} target="_blank" rel="noreferrer">
            Download this photo
          </a>
        )}
      </section>
    </div>
  );
}
