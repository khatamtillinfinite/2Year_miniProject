document.addEventListener("DOMContentLoaded", () => {
    const orderItemsList = document.getElementById("order-items");
    const orderTotalsElement = document.querySelector(".order-totals");

    // Retrieve selected items from localStorage
    const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];

    // If no items are selected, display a message and stop further processing
    if (selectedItems.length === 0) {
        orderItemsList.innerHTML = "<li>No items selected.</li>";
        orderTotalsElement.innerHTML = "<p>Please go back and create your Thali.</p>";
        return;
    }

    // Populate the selected items
    let subtotal = 0;
    selectedItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${item.name} x${item.quantity} - ₹${item.price} = ₹${item.total.toFixed(2)}`;
        orderItemsList.appendChild(listItem);
        subtotal += item.total;
    });

    // Calculate totals
    const deliveryFee = 30; // Fixed delivery fee
    const total = subtotal + deliveryFee;

    // Update totals in the HTML
    orderTotalsElement.innerHTML = `
        <p><strong>Subtotal:</strong> ₹${subtotal.toFixed(2)}</p>
        <p><strong>Delivery Fee:</strong> ₹${deliveryFee.toFixed(2)}</p>
        <p><strong>Total:</strong> ₹${total.toFixed(2)}</p>
    `;
});
