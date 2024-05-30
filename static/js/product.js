document.addEventListener('DOMContentLoaded', function () {
    // Initial calculation when the page is loaded
    calculatePrice();
});

function calculatePrice() {
    var size = document.getElementById('size').value;
    var quantity = document.getElementById('quantity').value;
    var basePrice = parseFloat(document.getElementById('price').value);
    var sizePrices = {
        M: 0,
        L: 5
    };
    var totalPrice = (basePrice + parseFloat(sizePrices[size])) * quantity;

    // Hiển thị giá trên trang web
    document.getElementById('total_price').innerHTML = 'Giá: ₫ ' + totalPrice.toFixed(3);
}

window.setTimeout(function() {
    $(".alert").fadeTo(50, 0)
}, 40);