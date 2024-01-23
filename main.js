async function getposts() {
  const products = await fetch('https://dummyjson.com/products');
  const posts = await products.json();

  const data = posts.products;
  const result = data
    .map(function (post) {
      return `
    <div class="product">
    <h2> ${post.title}</h2>
    <img src=${post.thumbnail}>
    <p> ${post.description}</p>
    <span> ${post.price}</span> 
    </div>
    `;
    })
    .join('');
  document.querySelector('.products').innerHTML = result;
}
getposts();
