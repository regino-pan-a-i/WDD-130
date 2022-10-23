const articles = [
    {
      id: 1,
      title: "Septimus Heap Book One: Magyk",
      date: "July 5, 2022",
      description:
        "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
      imgAlt: "Book cover for Septimus Heap 1",
      ages: "10-14",
      genre: "Fantasy",
      stars: "****"
    },
    {
      id: 2,
      title: "Magnus Chase Book One: Sword of Summer",
      date: "December 12, 2021",
      description:
        "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
      imgSrc:
        "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
      imgAlt: "Book cover for Magnus Chase 1",
      ages: "12-16",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐"
    },
    {
      id: 3,
      title: "The Hunger Games",
      date: "September 14, 2008",
      description:
        "The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. It is written in the perspective of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic nation of Panem in North America.",
      imgSrc:
        "https://catalog.kentonlibrary.org/opac/extras/ac/jacket/large/r/593617",
      imgAlt: "Book cover for The Hunger Games",
      ages: "12-16",
      genre: "Dystopian, Sci-Fi",
      stars: "⭐⭐⭐⭐"
    }
  ];

  function articleTemplate(article){
    return `<div class="info">
    <p class="date"> ${article.date}</p>
    <p> ${article.ages}</p>
    <p> ${article.genre}</p>
    <p> ${article.stars}</p>
    </div>
    <div class="book">
    <h2> ${article.title}</h2>
    <img alt="${article.imgAlt}" src="${article.imgSrc}">
    <p> ${article.description}</p>
    </div>`;
  }

  function renderArticle(){
    const htmlArticle = articles.map(articleTemplate);
    const newArticle = document.createElement('article');
    newArticle.classList.add('article1')
    newArticle.insertAdjacentHTML('afterbegin', htmlArticle.join(''));
    document.querySelector('main').insertAdjacentElement('beforeend', newArticle);
  }

  renderArticle()