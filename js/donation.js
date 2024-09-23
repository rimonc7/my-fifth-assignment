

// Sticky header blur start

const header = document.getElementById('sticky-header')
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        header.classList.add('blurry');
    } else {
        header.classList.remove('blurry');
    }
});

// button color js start

document.getElementById('donation-primary-btn').addEventListener('click', function () {
    coloredBgById('donation-primary-btn')
})
document.getElementById('history-btn').addEventListener('click', function () {
    coloredBgById('history-btn')
})

// button color end

// noakhali donation start

document.getElementById('noakhali-donate-btn').addEventListener('click', function () {
    const balance = getAmountById('noakhali-donation-balance');
    const donation = getDonationAmountById('noakhali-donation-amount');
    let availableBalance = getAmountById('available-balance');
    if (isNaN(donation) || donation <= 0) {
        alert('Invalid Donation Amount')
        return;
    }
    if (donation > availableBalance) {
        alert("You Don't Have Enough Balance")
        return;
    }
    const totalDonation = balance + donation;
    document.getElementById('noakhali-donation-balance').innerText = totalDonation;
    const newBalance = availableBalance - donation;
    document.getElementById('available-balance').innerText = newBalance;
    my_modal_1.showModal();
    document.getElementById('noakhali-donation-amount').value = '';
})

// noakhali donation end

// Feni section start
document.getElementById('feni-donate-btn').addEventListener('click', function () {
    const balance = getAmountById('feni-donation-balance');
    const donation = getDonationAmountById('feni-donation-amount');
    let availableBalance = getAmountById('available-balance');
    if (isNaN(donation) || donation <= 0) {
        alert('Invalid Donation Amount')
        return;
    }
    if (donation > availableBalance) {
        alert("You Don't Have Enough Balance")
        return;
    }
    const totalDonation = balance + donation;
    document.getElementById('feni-donation-balance').innerText = totalDonation;
    const newBalance = availableBalance - donation;
    document.getElementById('available-balance').innerText = newBalance;
    my_modal_1.showModal();
    document.getElementById('feni-donation-amount').value = '';
})

// Feni section end

// Quota section start
document.getElementById('quota-donate-btn').addEventListener('click', function () {
    const balance = getAmountById('quota-donation-balance');
    const donation = getDonationAmountById('quota-donation-amount');
    let availableBalance = getAmountById('available-balance');
    if (isNaN(donation) || donation <= 0) {
        alert('Invalid Donation Amount')
        return;
    }
    if (donation > availableBalance) {
        alert("You Don't Have Enough Balance")
        return;
    }
    const totalDonation = balance + donation;
    document.getElementById('quota-donation-balance').innerText = totalDonation;
    const newBalance = availableBalance - donation;
    document.getElementById('available-balance').innerText = newBalance;
    my_modal_1.showModal();
    document.getElementById('quota-donation-amount').value = '';
})
// Quota section end