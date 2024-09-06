# Game Detail Page

This project is a React application that displays detailed information about games. It uses various components and hooks to fetch and display game data, including attributes, trailers, and screenshots.

## Features

- **Game Details**: Displays detailed information about a game.
- **Expandable Text**: Allows long text to be expanded and collapsed.
- **Game Attributes**: Shows various attributes of the game.
- **Game Trailer**: Embeds a trailer video for the game.
- **Game Screenshots**: Displays screenshots of the game.
- **Loading Spinner**: Shows a loading spinner while data is being fetched.
- **Error Handling**: Handles errors gracefully and displays appropriate messages.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling routing in the application.
- **Chakra UI**: A simple, modular, and accessible component library for React.
- **Custom Hooks**: For fetching game data.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Jordilla08/Gamehub.git
   ```
2. Navigate to the project directory:
   ```sh
   cd game-detail-page
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- **src**
  - **components**
    - `ExpandableText.tsx`: Component for expandable text.
    - `GameAttributes.tsx`: Component for displaying game attributes.
    - `GameTrailer.tsx`: Component for embedding game trailers.
    - `GameScreenshots.tsx`: Component for displaying game screenshots.
  - **Hooks**
    - `useGame.ts`: Custom hook for fetching game data.
  - `GameDetailPage.tsx`: Main page component for displaying game details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
