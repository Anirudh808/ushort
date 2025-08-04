import { useState } from "react";
import axios from "axios";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export function Main() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  async function handleOnclick() {
    const data = await axios.post(
      "https://url-shortner-backend-production-5339.up.railway.app/shorten",
      {
        url: url,
      }
    );
    console.log(data);
    setShortUrl(`${window.location.origin}/${data.data.shortId}`);
  }

  const handleCopy = () => {
    navigator.clipboard
      .writeText(shortUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Topbar */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-semibold">URL Shortener</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg space-y-6">
          <h2 className="text-xl font-semibold text-center">
            Enter URL to shorten
          </h2>
          <input
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter URL here..."
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
          <button
            onClick={handleOnclick}
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Shorten URL
          </button>

          {shortUrl && (
            <div className="mt-4">
              <input
                readOnly
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                value={shortUrl}
              />
              <div className="flex items-center justify-between mt-2">
                <button
                  onClick={handleCopy}
                  className="text-blue-500 flex items-center space-x-1 hover:underline"
                >
                  <ContentCopyIcon />
                  <span>Copy</span>
                </button>
                {copied && <p className="text-green-500 text-sm">Copied!</p>}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer (Optional) */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p className="text-sm">Made with ❤️ by Your Name</p>
      </footer>
    </div>
  );
}
