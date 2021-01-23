(function(){

  let header = document.querySelector('#header');
  let addMenuItem = item => {
    let node = document.createElement('li');
    node.classList.add('nav-item');
    if(typeof item == "string"){
      node.innerText = `<a class="nav-link" href="#">${item}</a>`;
    } else {
      node.innerHTML = `<a class="nav-link" href="${item.url || config.baseURL || '#'}">${item.text}</a>`;
      if(item.style) node.style = item.style;
    }
    header.append(node);
  };

  fetch('config.json')
    .then(res => res.json())
    .then(config => {
      self.config = config;
      document.querySelector('title').innerText = config.title;
      config.menu.forEach(addMenuItem);
      header.classList.remove('hidden');
    });

  let main = document.querySelector('main');
  let article = document.querySelector('article');

  let converter = new showdown.Converter({
    'tables': true, 
    'simplifiedAutoLink': true,
    'extensions': ['tufte']
  });

  let parser = new DOMParser();

  const loadScript = async function(url){
    let script   = document.createElement("script");
    script.type  = "text/javascript";
    await fetch(url).then(r => r.text().then(s => script.innerHTML = s));
    document.body.appendChild(script);
  };

  let renderPage = page => {
    main.classList.add('hidden');
    fetch(page)
      .then(res => res.text())
      .then(md => {
        let html = converter.makeHtml(md);
        article.innerHTML = html;

        let content = parser.parseFromString(html, 'text/html');
        let toc = '';
        content.querySelectorAll('h1, h2, h3').forEach(header => {
          if(header.tagName == "H1"){
            toc += `<a class="nav-link w-100 fw-bold" href="#${header.id}">${header.innerText}</a>`;
          } else if(header.tagName == "H2"){
            toc += `<a class="nav-link w-100 fst-italic" href="#${header.id}">${header.innerText}</a>`;
          } else {
            toc += `<a class="nav-link w-100 ms-3 my-1" href="#${header.id}">${header.innerText}</a>`;
          }
        });
        document.querySelector('#toc').innerHTML = toc;
        new bootstrap.ScrollSpy(document.body, { target: '#toc', offset: 40 });

        document.querySelectorAll('pre code').forEach(hljs.highlightBlock);

        renderMathInElement(main, {
          delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false},
            {left: "\\(", right: "\\)", display: false},
            {left: "\\[", right: "\\]", display: true}
          ]
        });

        let promises = [];
        let scripts = [];
        content.querySelectorAll('script').forEach(script => {
          if(script.src) promises.push(loadScript(script.src));
          else scripts.push(script.innerText);
        });
        Promise.all(promises).then(() => scripts.forEach(eval));
        main.classList.remove('hidden');
      });
  }

  let params = new URLSearchParams(document.location.search.substring(1));
  renderPage(params.get('q') || 'README.md');

  // The proper way to do this is with position = "sticky", but...
  // ...that requires the thing to be in the document flow, which creates a bunch of annoying spaces.
  // For now, this is easier and works.
  document.addEventListener('scroll', e => {
    let style = document.querySelector('#toc').style;
    if(window.scrollY > (5 * parseFloat(getComputedStyle(document.documentElement).fontSize))){
      style['position'] = "fixed";
      style['top'] = "3rem";
    } else {
      style['position'] = "absolute";
      style['top'] = "8rem";
    }
  });
})();
