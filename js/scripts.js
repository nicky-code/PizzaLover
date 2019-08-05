$(document).ready(function() {
    $('#yourOrderSummary').hide();
})

$(document).ready(function() {
    var deliveryPrice = 0;
    $('#location').click(function() {
        var checkValue = document.getElementById('delivery').value;
        if (checkValue === 'yes') {
            deliveryPrice += 1500;
            alert(deliveryPrice)
            var location = prompt('Say your location:');
            alert('pizza will be delivered at' + ' ' + location);
        }
    });
    $('form#pizza').submit(function(event) {
        var pizzaSize = parseFloat(document.getElementById('size').value);
        var pizzaCrust = parseFloat(document.getElementById('crust').value);
        var pizzaTopping = parseFloat(document.getElementById('topping').value);
        var pizzaQuantity = parseFloat(document.getElementById('quantity').value);
        console.log(pizzaQuantity);
        var total = pizzaSize + pizzaCrust + pizzaTopping + deliveryPrice;
        if (pizzaQuantity >= 1) {
            document.getElementById('displayTotal').innerHTML = total * pizzaQuantity;
            console.log(total * pizzaQuantity);
        }

        document.getElementById('seeYourSizeChoice').innerHTML = pizzaSize;
        document.getElementById('seeYourCrustChoice').innerHTML = pizzaCrust;
        document.getElementById('seeYourToppingsChoice').innerHTML = pizzaTopping;
        document.getElementById('seeYourQuantityChoice').innerHTML = pizzaQuantity;
        $('#yourOrderSummary').show();

        event.preventDefault();
    });
});