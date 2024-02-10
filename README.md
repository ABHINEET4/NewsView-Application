# NewsView Application

A news application built using ReactJS (Reusable Components) and [NewsAPI](https://newsapi.org/) that helps list and preview news articles from various sources as well as display latest and trending news on the home page. Get up-to-date breaking news and articles from news sources and blogs all over the web.
You will need an API key from https://newsapi.org.

Once you have the API, goto 'src/api/index.js' and paste your API key.

## Screenshots :

![Screenshot (3907)](https://github.com/ABHINEET4/NewsView-Application/assets/108821830/f10e4a69-6b73-47ba-9907-533136755052)


![Screenshot (3906)](https://github.com/ABHINEET4/NewsView-Application/assets/108821830/866ac678-d5fe-40fe-aa69-4386fd4f4fcd)


![Screenshot (3904)](https://github.com/ABHINEET4/NewsView-Application/assets/108821830/f8f2f401-d52a-4b2e-8066-4d7d211a9fbe)



![Screenshot (3905)](https://github.com/ABHINEET4/NewsView-Application/assets/108821830/58048508-654a-409b-a6cd-71426584a129)



## Files and Components

### `src/api/index.js`
- **fetchSources**: Asynchronous function to fetch news sources from the News API.
- **fetchNews**: Asynchronous function to fetch news articles based on a given request object.

### `src/components/Layout.js`
- **MainLayout Component**: Root component of the application, responsible for rendering the layout, including the sidebar, header, and content.
- **toggle Function**: Toggles the collapsed state of the sidebar.
- **loadNews Function**: Handles loading news data based on a given query.
- **State**: Uses useState hook to manage state for collapsed, sources, and loading.

### `src/components/News.js`
- **News Component**: Component responsible for rendering multiple NewsSection components.
- **State**: Utilizes React's useState hook to manage internal state.

### `src/components/NewsSection.js`
- **NewsSection Component**: Displays a section of news articles.
- **State**: Utilizes React's useState hook to manage newsSection state.
- **useEffect Hook**: Fetches news data when the component mounts or when the request prop changes.
- **fetchNews Function**: Asynchronously fetches news data based on a given request object.

## Dependencies
- **axios**: Used for making HTTP requests to the News API.
- **antd**: Provides UI components for the application layout.
- **react-html-parser**: Used for parsing HTML content from news articles.

## How to Use
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Obtain a News API key and replace `'YOUR_API_KEY'` in `src/api/index.js` with your actual API key.
4. Run the application using `npm start`.
5. The application will be accessible at `http://localhost:3000`.



## License
This project is licensed under the MIT License .


