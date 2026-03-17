import UrlItem from "./UrlItem";

function UrlList({ links }) {
  return (
    <div className="list">
      {links.map((link, index) => (
        <UrlItem key={index} link={link} />
      ))}
    </div>
  );
}

export default UrlList;