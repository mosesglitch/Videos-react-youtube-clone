import axios from "axios";

const KEY = "AIzaSyBKs7Pp-_Zyfe1PqEqK5DKM_dZrCutHLmA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
