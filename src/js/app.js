// import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const bodyElement = document.querySelector('body')
  bodyElement.addEventListener('click', () => {
    const articleElement1 = document.createElement('article');
    const articleElement2 = document.createElement('article');
    const articleElement3 = document.createElement('article');
    const articleElement4 = document.createElement('article');
    const articleElement5 = document.createElement('article');

    articleElement1.className = 'message';
    articleElement2.className = 'message';
    articleElement3.className = 'message';
    articleElement4.className = 'message';
    articleElement5.className = 'message';

    articleElement1.innerHTML = 'some text';
    articleElement2.innerHTML = 'some text';
    articleElement3.innerHTML = 'some text';
    articleElement4.innerHTML = 'some text';
    articleElement5.innerHTML = 'some text';

    bodyElement.appendChild(articleElement1);
    bodyElement.appendChild(articleElement2);
    bodyElement.appendChild(articleElement3);
    bodyElement.appendChild(articleElement4);
    bodyElement.appendChild(articleElement5);
  })
});
