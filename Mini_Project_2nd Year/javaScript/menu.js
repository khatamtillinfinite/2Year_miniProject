document.addEventListener("DOMContentLoaded", () => {
    const createMyThalBtn = document.getElementById("createMyThalBtn");

    // Get all the menu items
    const menuItems = document.querySelectorAll(".menu-column label");
    const selectedItems = [];

    if (createMyThalBtn) {
        createMyThalBtn.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default action

            menuItems.forEach((item) => {
                const checkbox = item.querySelector("input[type='checkbox']");
                const quantityInput = item.querySelector("input[type='number']");
                
                if (checkbox.checked) {
                    const itemName = checkbox.value;
                    const quantity = parseInt(quantityInput.value, 10);
                    const price = getPrice(itemName); // Define pricing logic
                    
                    if (quantity > 0) {
                        selectedItems.push({
                            name: itemName,
                            quantity: quantity,
                            price: price,
                            total: price * quantity,
                        });
                    }
                }
            });

            if (selectedItems.length === 0) {
                alert("Please select at least one item to proceed.");
                return;
            }

            // Save the selected items to localStorage
            localStorage.setItem("selectedItems", JSON.stringify(selectedItems));

            // Redirect to the final page
            window.location.href = "/pages/final_page.htm";
        });
    }

    // Pricing logic
    function getPrice(itemName) {
        const prices = {
            Naan: 20,
            Roti: 10,
            Paratha: 30,
            Puri: 25,
            "Aaloo Paratha": 40,
            "Paneer Paratha": 50,
            "Tadka Dal": 100,
            "Daal Makhani": 120,
            "Arhar Dal": 90,
            "Masoor Dal": 80,
            "Aloo Gobi": 70,
            "Baingan Bharta": 80,
            "Mix Veg": 90,
            "Shahi Paneer": 150,
            "Seasonal Veggy": 60,
            Kadhi: 100,
            Sweet: 50,
            Dahi: 30,
            Chach: 20,
            Papad: 10,
        };
        return prices[itemName] || 0;
    }
});
