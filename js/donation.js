

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
    const unHideAll = document.getElementById('donation-container');
    unHideAll.classList.remove('hidden')
    const history = document.getElementById('history-container');
    history.classList.add('hidden');
})
document.getElementById('history-btn').addEventListener('click', function () {
    coloredBgById('history-btn')
    const hideAll = document.getElementById('donation-container');
    hideAll.classList.add('hidden')
    const history = document.getElementById('history-container');
    history.classList.remove('hidden');
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
    // history section
    const historyContainer = document.getElementById('history-container');
    const section = document.createElement('section');
    section.innerHTML = `<div class="border border-gray-300 rounded-2xl p-5">
    <h3 class="font-bold text-xl mb-3">${donation} Taka Donate for Flood at Noakhali, Bangladesh </h3>
    <p>Date : ${date()}</p>
    </div>`;
    historyContainer.appendChild(section);
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
    // history section
    const historyContainer = document.getElementById('history-container');
    const section = document.createElement('section');
    section.innerHTML = `<div class="border border-gray-300 rounded-2xl p-5">
    <h3 class="font-bold text-xl mb-3">${donation} Taka is Donated for Famine-2024 at Feni, Bangladesh </h3>
    <p>Date : ${date()}</p>
    </div>`;
    historyContainer.appendChild(section);
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
    // history section
    const historyContainer = document.getElementById('history-container');
    const section = document.createElement('section');
    section.innerHTML = `<div class="border border-gray-300 rounded-2xl p-5">
       <h3 class="font-bold text-xl mb-3">${donation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
       <p>Date : ${date()}</p>
       </div>`;
    historyContainer.appendChild(section);
})
// Quota section end

// blog button section

document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = './blog.html';
})

document.getElementById('blog-btn-mob').addEventListener('click', function () {
    window.location.href = './blog.html';
})




