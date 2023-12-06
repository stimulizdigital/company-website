const baseApiUrl = process.env.NODE_ENV === "production" 
? process.env.NEXT_PUBLIC_STRAPI_API_URL 
: 'http://localhost:1337';

export default baseApiUrl;