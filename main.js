document.getElementById('addMnBtn').addEventListener('click', function(e){
    e.preventDefault()
    const bankName = document.getElementById('bank').value
    const bankNum = document.getElementById('accNum').value
    const pass = parseInt(document.getElementById('pinNum').value)
    const mnyAmount = parseInt(document.getElementById('amount').value)
    let total = mnyAmount + parseInt(document.getElementById('curMny').innerText)
    if(bankName=='' || bankName=='Select A Bank'){
        alert('please chose bank')
        return;
    }
    if(bankNum.length != 11){
        alert('account number is invalid, put 11 digit number')
        return;
    }
    if(pass !== 1234){
        alert('Your pin is invalid. your pin is 1234')
        return;
    }
    document.getElementById('curMny').innerText = total
    document.getElementById('amount').value = 0
    // let current = document.getElementById('curMny').innerText
    console.log(total)
})