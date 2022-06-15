import react, { useEffect, useState } from 'react'
import Nav from './components/Nav';
import axios from "axios";
import NewsContent from './components/NewsContent';

import ArticleComponent from './components/ArticleComponent';

function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
  const [category, setCategory] = useState("general");

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=5cd5687d55ac4c28b38af73b1447518d&pageSize=${loadMore}&category=${category}`
      );
      // console.log(news);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
      console.log(news.data.articles)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, loadMore, category]);
  // console.log(newsResults)
  return (
    <div className="App">
      <Nav setCategory={setCategory} />
      {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
    </div>
  );
}

export default App;
