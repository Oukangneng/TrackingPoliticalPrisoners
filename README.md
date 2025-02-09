# ccec-ppd

This project is a simple website that displays 5 stages—each associated with a different person. Every stage includes a series of swipes/scrolls. Each swipe shows a content box (with text and image(s)) on the left side of the screen while the background displays a dynamically changed, zoomed-in portion of a world map focused on China.

## File Structure

- **index.html**: The main HTML file that loads the map and handles scroll-based interactions.
- **config.js**: Contains configuration details for the map and chapters (swipes/scrolls). Customize the content, images, and map location here.
- **data/data.csv**: A sample CSV file where you can update the content details such as stage, person, swipe number, text, image filename, longitude, latitude, and zoom level.
- **images/**: Folder for your JPG images (e.g., personA1.jpg, personA2.jpg, etc.).

## Setup Instructions

1. Replace `YOUR_MAPBOX_ACCESS_TOKEN` in `config.js` with your own Mapbox access token.
2. Customize the chapters in `config.js` or update the CSV file in `data/data.csv` with your own content.
3. Add your own JPG images to the `images/` folder.
4. Open `index.html` in your browser to see your customized site in action.
