# TODO: Fix CORS Error in Swiggy API Fetch

## Steps to Complete
- [x] Update `vite.config.js` to add proxy configuration for '/dapi' to 'https://www.swiggy.com'
- [x] Update `src/hooks/useRestaurantsData.js` to change fetch URL to use '/dapi' path instead of VITE_BASE_URL
- [x] Update `src/components/RestaurantMenu.jsx` to change fetch URL to use '/dapi' path instead of VITE_BASE_URL
- [x] Update `src/components/Search.jsx` to change fetch URLs to use '/dapi' path instead of VITE_BASE_URL
- [ ] Restart the development server to apply proxy changes
- [ ] Test the application to ensure API fetch works without CORS errors
- [ ] Set production environment variable `VITE_BASE_URL` to `https://www.swiggy.com/dapi` in Vercel
