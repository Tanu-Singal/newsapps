import React, { useCallback, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import NewsItem from './NewsItem';



const News = (props) => {
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(false);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);

const fetchnews = useCallback(async () => {
  setLoading(true);
  const url = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}&category=${props.category}&page=1&pageSize=${props.pageSize}`;
  try {
    let data = await fetch(url);
    let parsed = await data.json();
    console.log(parsed);
    setArticles(parsed.articles || []);
    setTotalResults(parsed.totalResults || 0);
    setLoading(false);
  } catch (error) {
    console.error("Error fetching news:", error);
    setLoading(false);
  }
}, [props.category, props.pageSize]);
  useEffect(()=>{
    fetchnews();
  },[fetchnews])
  const fetchmoredata=async()=>{
    const nextpage=page+1;
    setPage(nextpage);
    let url=`https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}&category=${props.category}&page=${nextpage}&pageSize=${props.pageSize}`;
try{
  let data=await fetch(url);
  let parsed=await data.json();
  setArticles(articles.concat(parsed.articles || []));
}
catch(error)
{
  console.error("Error fetching news:", error);
}
  }
  return (
    <div>
      <>
             <h1 className="text-center" style={{marginTop:'90px',margin:'55px 0px'}}>Newsapp-Top {props.category} Headlines</h1>
           {loading && <Spinner/>}
         
  <InfiniteScroll
         dataLength={articles.length}
          next={fetchmoredata}
          hasMore={articles.length<totalResults}
          loader={<Spinner/>}
          >
          <div className="container">
             < div className="row">
             {articles.map((element,i)=>{ 
              return <div className="col-md-4" key={i}>
              <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url}
              author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
          })}
              </div> 
              </div>
          </InfiniteScroll>

         </>
    </div>
  )
}

export default News
