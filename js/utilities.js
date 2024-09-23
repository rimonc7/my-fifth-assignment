
function coloredBgById(id) {
    document.getElementById('donation-primary-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    document.getElementById(id).classList.add('bg-[#B4F461]')

}


function getAmountById(id) {
    const amount = document.getElementById(id).innerText;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function getDonationAmountById(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}


function date(){
    const now = new Date();
    const currentDateTime = now.toString();
    return currentDateTime;;
}

