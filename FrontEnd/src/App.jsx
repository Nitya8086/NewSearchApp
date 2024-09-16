import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewsDetail from './components/NewsDetail';

function App() {
  const [articles,setArticles] = useState([]);
  const [query,setQuery]= useState('');
  const [selectedArticle,setSelectedArticle]= useState(null);

  const handleSearch=async()=>{
    if(!query){
      return;
    }
    try{
      const response = await axios.get(`http://localhost:5000/news?query=${query}`);
      setArticles(response.data);
    }
    catch(e){
      console.log("Error fetching news:", error);
    }
  };
 



  return (
   <div className='app'>
    <header>
      <input type="text"
      value={query} onChange={(e)=>e.setQuery(e.target.value)} placeholder="Search for news..." />
      <button onClick={handleSearch}>Search</button>
    </header>
    <main>
     {selectedArticle ? (
      <NewsDetail article={selectedArticle}/>
     ):
     (
       
      <div className='news-list'>
{articles.map((article,index)=>(
  <NewsCard 
  key={index} 
  article={article} 
  onSelect={handleSelectArticle} 
/>
))}
      </div>
     )}
    </main>
   </div>
  )
}

export default App
