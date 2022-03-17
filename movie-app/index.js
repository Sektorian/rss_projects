let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9fdcc49988bf6e78e317cc3b98947905';
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    
       for (let i = 0; i< data.results.length; i++) {
        showData(data.results[i].poster_path, data.results[i].title, data.results[i].vote_average, data.results[i].overview);
       }
  }
  getData();
  
  const showData = (data, title, vote, overview) => {

    const cont = document.createElement('div');
    
    cont.innerHTML = `<div class="card"> 
                <img src="https://image.tmdb.org/t/p/w1280${data}" alt="image" class="poster"> 
                <div class="title"> 
                    <span class="sp-title">${title}</span> 
                    <div class="vote">${vote}</div> 
                </div> 
                <div class="overview">${overview}</div> 
            </div>`
    movieContainer.append(cont);
    
    
  };
    
  let request = document.querySelector('.search');
  request.addEventListener('keydown', (event) => {
    if (event.code == 'Enter' && request.value !== '') {
      let mvCtnr = document.querySelector('.container');
      
      while (mvCtnr.firstChild) {mvCtnr.removeChild(mvCtnr.firstChild);}
      url = `https://api.themoviedb.org/3/search/movie?query=${request.value}&api_key=9fdcc49988bf6e78e317cc3b98947905`;
      getData();
    }
    return false;
  });
  
  