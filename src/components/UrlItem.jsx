import { useState } from "react";

function UrlItem({ link }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link.short);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="item">
      <p className="original">{link.original}</p>
      <div className="right">
        <a href={link.short} target="_blank" rel="noreferrer">
          {link.short}
        </a>
        <button
  className={copied ? "copied" : ""}
  onClick={handleCopy}>
  {copied ? "Copied!" : "Copy"}
</button>
      </div>
    </div>
  );
}

export default UrlItem;