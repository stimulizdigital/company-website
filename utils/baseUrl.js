const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://stimuliz.ca"
    : "http://localhost:3000";

export default baseUrl;