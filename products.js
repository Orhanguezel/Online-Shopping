const products = [
    {
        category: "Laptop",
        items: [
            { name: "Basic Laptop", image: "./assets/beautiful.jpg", description: "A simple laptop for everyday use.", price: "$500" },
            { name: "Gaming Laptop", image: "./assets/gaming-laptop.jpg", description: "High-performance gaming laptop.", price: "$1200" }
        ]
    },
    {
        category: "Flat-computer",
        items: [
            { name: "Standard Flat Computer", image: "./assets/flat-computer.jpg", description: "Office use flat computer.", price: "$600" },
            { name: "Touchscreen Flat Computer", image: "./assets/touchscreen-flat.jpg", description: "Interactive touchscreen computer.", price: "$800" }
        ]
    },
    {
        category: "Modern-desktop",
        items: [
            { name: "High-End Desktop", image: "./assets/modern-desktop.jpg", description: "Latest spec desktop.", price: "$1500" },
            { name: "Budget Desktop", image: "./assets/budget-desktop.jpg", description: "Affordable desktop for basic use.", price: "$400" }
        ]
    }
];
function showCategoryProducts(event) {
    const button = event.target;
    const category = button.getAttribute("data-category");
    const categoryData = products.find(product => product.category === category);


    const allImages = document.querySelectorAll('.category-img');
    allImages.forEach(img => img.classList.remove('happy'));


    const categoryContainer = button.closest('.category');
    const img = categoryContainer.querySelector('.category-img');
    if (img) {
        img.classList.add('happy');
    }


    if (categoryData) {
        let productListHTML = `<h2 class="products-title">Products in ${category}</h2>`;
        productListHTML += `<div class="products-container">`;

        for (let i = 0; i < categoryData.items.length; i++) {
            const item = categoryData.items[i];
            productListHTML += `
                <div class="product-card">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>Price: ${item.price}</p>
                </div>
            `;
        }

        productListHTML += `</div>`;

        const productListContainer = document.getElementById("product-list");
        productListContainer.innerHTML = productListHTML;
    }
}
