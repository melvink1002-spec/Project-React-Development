import { useState } from "react";

function UrlForm({ onShorten, error }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onShorten(url);
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Shorten a link here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Shorten It!</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default UrlForm;