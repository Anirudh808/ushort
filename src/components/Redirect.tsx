import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Redirect() {
  const { id } = useParams();

  useEffect(() => {
    async function redirectTo() {
      try {
        const response = await axios.get(
          `https://url-shortner-backend-production-5339.up.railway.app/${id}`
        );
        console.log(response);
        const { url } = response.data; // assuming the long URL is in the 'longUrl' field
        if (url) {
          window.location.href = url; // Use window.location.href to redirect
        } else {
          // Handle the case where the longUrl is not found
          console.error("URL not found");
        }
      } catch (error) {
        console.error("Error fetching long URL:", error);
      }
    }
    redirectTo();
  }, [id]);

  return null;
}
