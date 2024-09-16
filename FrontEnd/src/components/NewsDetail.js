import React, { useEffect } from 'react'

const NewsDetail = () => {
    const { title, source, publishedAt, urlToImage, content } = article;
  const [summary, setSummary] = useState('');
  useEffect(()=>{
    const getSummery = async()=>{
        try{
            const response= await axios.post('http://localhost:5000/summarize', { text: content });
            setSummary(response.data.summary);
        }
        catch(e){
            console.log("Error fetching summary:", error);

            
        }
    }
    getSummery();
  },[content]);

  return (
    <div className='news-details'>
        <h2>{title}</h2>
        <p>{source.name} - {new Date(publishedAt).toLocaleDateString()}</p>
        <img src={urlToImage} alt={title} />
        <div className="content">
        <p>{content}</p>
        <h4>Summary:</h4>
        <p>{summary}</p>
      </div>

    </div>
  )
}

export default NewsDetail
