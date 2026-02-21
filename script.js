const container = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    // chiqarish funksiyasi
    function render(items) {
      container.innerHTML = "";

      items.forEach((item) => {
        container.innerHTML += `
  <div class="card">
    <img src="${item.image}" alt="${item.title}" width="100" />
    <h3>${item.title}</h3>
    <p>$${item.price}</p>
  </div>
`;
      });
    }

    // boshida hammasini chiqaramiz
    render(data);

    // A-Z
    document.getElementById("az").onclick = () => {
      const sorted = [...data].sort((a, b) => a.title.localeCompare(b.title));
      render(sorted);
    };

    // Z-A
    document.getElementById("za").onclick = () => {
      const sorted = [...data].sort((a, b) => b.title.localeCompare(a.title));
      render(sorted);
    };

    // Arzon
    document.getElementById("priceLow").onclick = () => {
      const sorted = [...data].sort((a, b) => a.price - b.price);
      render(sorted);
    };

    // Qimmat
    document.getElementById("priceHigh").onclick = () => {
      const sorted = [...data].sort((a, b) => b.price - a.price);
      render(sorted);
    };
  });
