const productDetails = {
    name: "Rice",
    pricePerKg: 62,
    name: "Wheat",
    pricePerKg:42,
    name: "Chana Dal",
    pricePerKg: 40
    
};



document.getElementById('product-name').textContent = productDetails.name;
document.getElementById('product-price').textContent = `RS ${productDetails.pricePerKg}/kg`;

const form = document.getElementById('purchase-form');
const totalAmount = document.getElementById('total-amount');
const thankYouMessage = document.getElementById('thank-you');


document.getElementById('quantity').addEventListener('input', function () {
    const quantity = parseInt(this.value);
    if (quantity > 0) {
        const total = quantity * productDetails.pricePerKg;
        totalAmount.textContent = `Total Amount: RS ${total}`;
    } else {
        totalAmount.textContent = '';
    }
});


form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.style.display = 'none';
    thankYouMessage.style.display = 'block';
});