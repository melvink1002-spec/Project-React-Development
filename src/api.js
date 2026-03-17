const BITLY_TOKEN = "140cfa6b244948bae9419328000b8bd72cc53f4b";

export const shortenUrl = async (longUrl) => {
  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${BITLY_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      long_url: longUrl,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to shorten URL");
  }

  const data = await response.json();
  return data;
};