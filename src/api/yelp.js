import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer p80qG52jW4u-ny04BvnaRaGX6NumWNmtEANFSU1oQL1-ODeY0316uVH2LS49idOEBxfhziGDJ4vKQhUadMBAegecgobPTnqEh-qc0OXqwwK5Bk--GdX9meunk5hqXXYx"
  }
});
