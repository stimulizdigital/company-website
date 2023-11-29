const baseApiUrl = process.env.NODE_ENV === "production" 
? 'http://3.96.56.102:1337' 
: 'http://localhost:1337';

export default baseApiUrl;