# TODO: Fix CORS Error in Swiggy API Fetch

## Steps to Complete
- [x] Update `vite.config.js` to add proxy configuration for '/dapi' to 'https://www.swiggy.com'
- [x] Update `src/hooks/useRestaurantsData.js` to change fetch URL to use '/dapi' path instead of VITE_BASE_URL
- [ ] Restart the development server to apply proxy changes
- [ ] Test the application to ensure API fetch works without CORS errors
