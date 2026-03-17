import { useState, useEffect } from "react";
import Header from "./components/Header";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";
import { shortenUrl } from "./api";

function App() {
  const [links, setLinks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem("links")) || [];
    setLinks(savedLinks);
  }, []);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const handleShorten = async (url) => {
    setError("");

    if (!url) {
      setError("Please add a link");
      return;
    }

    if (!url.startsWith("http")) {
      setError("Invalid URL");
      return;
    }

    try {
      const data = await shortenUrl(url);

      setLinks([
        ...links,
        {
          original: url,
          short: data.link,
        },
      ]);
    } catch (err) {
      setError("Failed to shorten URL");
    }
  };

  return (
    <div>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights
              on how your links are performing.
            </p>
            <button className="btn">Get Started</button>
          </div>

          <img
            src="/illustration-working.svg"
            alt="Working illustration"
            className="hero-img"
          />
        </div>
      </section>

      {/* SHORTENER */}
      <section className="shortener-section">
        <div className="container">
          <UrlForm onShorten={handleShorten} error={error} />
          <UrlList links={links} />
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <h2>Advanced Statistics</h2>
          <p className="stats-desc">
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>

          <div className="cards">
            <div className="card">
              <h3>Brand Recognition</h3>
              <p>Boost your brand recognition with each click...</p>
            </div>

            <div className="card">
              <h3>Detailed Records</h3>
              <p>Gain insights into who is clicking your links...</p>
            </div>

            <div className="card">
              <h3>Fully Customizable</h3>
              <p>Improve brand awareness and content discovery...</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOST */}
      <section className="boost">
        <h2>Boost your links today</h2>
        <button className="btn">Get Started</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <h2>Shortly</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;