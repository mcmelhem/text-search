import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [textSearch, settextSearch] = useState('');
  const [foundArticles, setFoundArticles] = useState([]);

  //AI GENERATED
  const articles = [
    { id: 1, title: "React Basics", content: "Learn components, props, and state", date: 'Oct 18, 2018' },
    { id: 2, title: "JavaScript Arrays", content: "Map, filter, reduce explained", date: 'Jan 2, 2023' },
    { id: 3, title: "CSS Flexbox", content: "Layout system for modern UI", date: 'Jan 3, 2023' },
    { id: 4, title: "Node.js Intro", content: "Backend runtime for JavaScript", date: 'Jan 4, 2023' },
    { id: 5, title: "Frontend Performance", content: "Optimize rendering and speed", date: 'Jan 5, 2023' },
  ];
  function highlight(text) {
    if (!textSearch) return text;
    var regex = new RegExp(`(${textSearch})`, "gi");
    return text.split(regex).map((part, i) =>//had to search this
      part.toLowerCase() === textSearch.toLowerCase() ? (
        <mark key={i} className="bg-warning px-1">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }
  const handleChange = (e) => {
    settextSearch(e.target.value);
    var value = (e.target.value).toLowerCase().trim();
    var foundArticles = articles.filter((article) => {
      if (article.title.toLowerCase().includes(value) ||
        article.content.toLowerCase().includes(value)) {
        return article;
      }
    }
    );
    setFoundArticles(foundArticles);
  };
  const resetText = (e) => {
    settextSearch('');

    setFoundArticles([]);
  };
  return (
    <>

      <div className="container-fluid main-container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="mb-5">Search</h1>
            <div className='p-2 row'>
              <div className='input-group'>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={textSearch}
                  onChange={handleChange}
                  className="input-style p-2 border rounded mb-4"
                />
                <button className="btn btn-outline-secondary border rounded mb-4" type="button" onClick={resetText}>
                  ×
                </button>
              </div>

              <h6 className="mt-2">{foundArticles.length.toString()} articles found</h6>
              <div className="">
                {foundArticles.length > 0 ? (
                  foundArticles.map((article) => (
                    <div key={article.id} className="col-12">
                      <div className="p-3 border">
                        <h5 className='bold'>
                          {highlight(article.title)}
                        </h5>
                        <p className="fst-italic">
                          {article.date}
                        </p>
                        <p>
                          {highlight(article.content)}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
