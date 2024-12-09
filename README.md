# movies-online-database
# MovieHub

moviehub is a movie search web application built using ReactJS and Tailwind CSS. It allows users to search for movies, filter by type (movie, series, episode), and view detailed information about a specific title. 

## Features

- **Movie Search**: Search for movies, series, and episodes using the OMDB API.
- **Filter by Type**: Dropdown to filter results by movie type (movie, series, episode).
- **Movie Details**: View detailed information about a selected movie.
- **Watch List**: Add and remove movie to watchlist.
- **Error Handling**: Displays user-friendly error messages for API errors and no results.
- **Responsive Design**: Clean and modern UI built with Tailwind CSS.

## Tech Stack

- **Frontend**: ReactJS, HTML, CSS, Tailwind CSS
- **Routing**: React Router
- **API**: [OMDB API](https://www.omdbapi.com/)
- **Deployment**: Netlify

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/vaibhavapriya/movies-online-database.git
   cd movie-app cd watchlater

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Deployment

This project is deployed on Netlify. You can view the live site here: [MovieHub](https://incredible-kangaroo-6fd47a.netlify.app/)


## Example API Requests

- Search for movies:
  ```
  https://www.omdbapi.com/?s=Inception&apikey=e9a4b551
  ```
- Filter by type:
  ```
  https://www.omdbapi.com/?s=Avengers&type=movie&apikey=e9a4b551
  ```

## Project Structure

```
src/
├── api/
│   ├── movieApi.js       // Api requests
├── components/
│   ├── Header.jsx        // Header with search and navigation
│   ├── MovieCard.jsx     // Movie card for displaying results
│   ├── Card.jsx          // Movie card for displaying watchlater
│   └── Menu.jsx          // Dropdown filter menu
├── pages/
│   ├── Home.jsx         // Search page
│   ├── SearchResults.jsx // Results display with filter
│   └── Watchlist.js      // Displays movies in watchlist
│   └── MovieDetails.jsx  // Detailed movie view
├── context/
│   └── MovieContext.jsx  // Use context to store watchlater
├── App.js               // Main app component with routes
└── index.js             // ReactDOM render entry point
```


