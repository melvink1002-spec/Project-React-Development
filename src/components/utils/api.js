const BITLY_TOKEN = import.meta.env.VITE_BITLY_TOKEN;

export async function shortenUrl(longUrl) {

    if (!longUrl || !longUrl.startsWith('http')) {
    throw new Error('Please enter a valid URL starting with http:// or https://');
  }

  const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${BITLY_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ long_url: longUrl }),
  });

  if (!response.ok) {

    if (response.status === 422) {
      throw new Error('This URL could not be shortened. Try a different one.');
    }
    throw new Error(`Something went wrong (${response.status}). Please try again.`);
  }

  const data = await response.json();
  return data.link; // e.g. "https://bit.ly/3xYzAbc"
}