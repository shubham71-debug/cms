const form = document.getElementById("newTrackingForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Perform form validation
    const trackingNumber = document.getElementById("trackingNumber");
    const date = document.getElementById("date");
    const description = document.getElementById("description");

    if (trackingNumber.value === "") {
        alert("Tracking number is required.");
        return;
    }

    if (date.value === "") {
        alert("Date is required.");
        return;
    }

    if (description.value === "") {
        alert("Description is required.");
        return;
    }

    // Save tracking information
    alert("Tracking saved Successfully");

    // Reset form
    form.reset();
}
);