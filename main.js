// Get Element Value

function idValue(idName){
    let value1 = document.getElementById(idName).value
    return value1;
}

let tranHisData =[]

// Add money features

document.getElementById('addMnBtn').addEventListener('click', function(e){
    e.preventDefault()
    // console.log(idValue('accNum'))
    // console.log(document.getElementById('accNum'))
    const bankName = idValue('bank')
    const bankNum = idValue('accNum')
    const pass = parseInt(idValue('pinNum'))
    const mnyAmount = parseInt(idValue('amount'))
    let total = mnyAmount + parseInt(document.getElementById('curMny').innerText)
    // console.log(bankNum)
    if(bankName=='' || bankName=='Select A Bank'){
        alert('please chose bank')
        return;
    }
    if(mnyAmount<=0){
        alert('Invalid Amount')
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

    const data = {
        name : 'Added Money',
        money: mnyAmount,
        time : new Date().toLocaleTimeString()

    }
    tranHisData.push(data)
    console.log(tranHisData)
})


// CashOut features

document.getElementById('withdrawBtn').addEventListener('click', function(e){
    e.preventDefault()
    const agent = idValue('agentNum')
    const cashOut = parseInt(idValue('cashOutAmount'))
    const currentMny = parseInt(document.getElementById('curMny').innerText)
    const pass = parseInt(idValue('cashOutpinNum'))
    if(agent.length != 11){
        alert('Agent number is invalid, put 11 digit number')
        return;
    }
    if(cashOut<=0){
        alert('Invalid Amount')
    }
    if(pass !== 1234){
        alert('Your pin is invalid. your pin is 1234')
        return;
    }
    if(cashOut>currentMny){
        alert('Insufficient balance!')
        return;
    }
    let total = parseInt(document.getElementById('curMny').innerText) - cashOut
    document.getElementById('curMny').innerText = total
    document.getElementById('cashOutAmount').value = 0

    const data = {
        name : 'Cashed out Money',
        money: cashOut,
        time : new Date().toLocaleTimeString()
    }
    tranHisData.push(data)
    console.log(tranHisData)
})


// Transfer Money feature

document.getElementById('sendBtn').addEventListener('click', function(e){
    e.preventDefault()
    const userAcc = idValue('userAccNum')
    const transferAmount = parseInt(idValue('tanAmount'))
    const currentMny = parseInt(document.getElementById('curMny').innerText)
    const pass = parseInt(idValue('tanPin'))
    if(userAcc.length != 11){
        alert('User Account number is invalid, put 11 digit number')
        return;
    }
    if(transferAmount<=0){
        alert('Invalid Amount')
    }
    if(pass !== 1234){
        alert('Your pin is invalid. your pin is 1234')
        return;
    }
    if(transferAmount>currentMny){
        alert('Insufficient balance!')
        return;
    }
    let total = parseInt(document.getElementById('curMny').innerText) - transferAmount
    document.getElementById('curMny').innerText = total
    document.getElementById('cashOutAmount').value = 0
    const data = {
        name : 'Transferred Money',
        money : transferAmount,
        time : new Date().toLocaleTimeString()
    }
    tranHisData.push(data)
    console.log(tranHisData)
})


// Get Bonus Feature

document.getElementById('bonusBtn').addEventListener('click', function(e){
    e.preventDefault()
    const coupon = idValue('couponId')
    const transferAmount = 1000
    const currentMny = parseInt(document.getElementById('curMny').innerText)
    if(coupon.length != 5){
        alert('Coupon invalid, put 5 character coupon')
        return;
    }
    let total = parseInt(document.getElementById('curMny').innerText) + transferAmount
    document.getElementById('curMny').innerText = total
    document.getElementById('couponId').value = ""
    const data = {
        name : 'Added Bonus Money',
        money : transferAmount,
        time : new Date().toLocaleTimeString()
    }
    tranHisData.push(data)
})


// Pay Bill Features

document.getElementById('payBillBtn').addEventListener('click', function(e){
    e.preventDefault()
    const payBillName = idValue('billName')
    const billerAccNum = idValue('billAccNum')
    const mnyAmount = parseInt(idValue('billAmount'))
    const pass = parseInt(idValue('billPinNum'))
    const currentMny = parseInt(document.getElementById('curMny').innerText)

    
    // console.log(bankNum)
    if(payBillName =='' || payBillName =='Select Bill'){
        alert('please choose Bill Option')
        return;
    }
    if(billerAccNum.length != 11){
        alert('Biller account number is invalid, put 11 digit number')
        return;
    }
    if(mnyAmount<=0){
        alert('Invalid Amount')
    }
     if(mnyAmount>currentMny){
        alert('Insufficient balance!')
        return;
    }
    if(pass !== 1234){
        alert('Your pin is invalid. your pin is 1234')
        return;
    }
    let total = parseInt(document.getElementById('curMny').innerText) - mnyAmount
    document.getElementById('curMny').innerText = total
    document.getElementById('billAmount').value = 0
    const data = {
        name : 'Bill Payed',
        money : mnyAmount,
        time : new Date().toLocaleTimeString()
    }
    tranHisData.push(data)
 
})



// ALL Form Toggle System
function togForm(formIdName){
    let forms = document.querySelectorAll('.pay-form')
    for(let form of forms){
        let formId = form.id;
        if(formIdName==formId){
        document.getElementById(formIdName).style.display = 'block'
        continue;
        }
        document.getElementById(formId).style.display = 'none'
    }
}

function togCardStyle(cardIdName){
    let cards = document.querySelectorAll('.card')
    for(let card of cards){
        let cardId = card.id;
        // console.log(cardId)
        if(cardIdName==cardId){
        document.getElementById(cardIdName).classList.add("card-style");
        continue;
        }
        document.getElementById(cardId).classList.remove("card-style");
    }
}


document.getElementById('addMoneyCard').addEventListener('click', function(){
    togForm('addMoney')
    togCardStyle('addMoneyCard')
})

document.getElementById('cashOutCard').addEventListener('click', function(){  
    togForm('cashOut')
    togCardStyle('cashOutCard')

})

document.getElementById('transferCard').addEventListener('click', function(){
    togForm('transferMoney')
    togCardStyle('transferCard')  
})

document.getElementById('getBonusCard').addEventListener('click', function(){
    togForm('getBonus')
    togCardStyle('getBonusCard')
})

document.getElementById('payBilCard').addEventListener('click', function(){
    togForm('payBill')
    togCardStyle('payBilCard')
})

document.getElementById('transactionsCard').addEventListener('click', function(){
    togForm('transcationHis')
    togCardStyle('transactionsCard')
    // console.log(tranHisData)
    document.getElementById('toPutInParent').innerText =" "  
    for(let i=tranHisData.length-1; i>=0; i--){
        let toPutInChild = document.createElement('div')
        toPutInChild.innerHTML=`
            <div id="parentHistory" class=" bg-white p-5 mx-2 rounded-xl flex justify-between items-center mb-3">
                <div class="flex items-center">
                    <img src="./assets/wallet1.png" alt=" " class="h-[25px]">
                    <div id="history" class="ml-3">
                        <h1 class="font-bold">${tranHisData[i].name}: $${tranHisData[i].money}</h1>
                        <p class="text-[12px]">${tranHisData[i].time}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `
        document.getElementById('toPutInParent').appendChild(toPutInChild)
    }


})


// LogOUt Feature

document.getElementById('logOutBtn').addEventListener('click', function(){
    window.location.href = './index.html'
})



