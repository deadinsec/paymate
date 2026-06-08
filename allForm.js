document.getElementById('addMoneyCard').addEventListener('click', function(){
    // console.log('got add money form')
    document.getElementById('addMoney').style.display = 'block'
    document.getElementById('cashOut').style.display = 'none'
    document.getElementById('transferMoney').style.display = 'none'
    document.getElementById('getBonus').style.display = 'none'
    document.getElementById('payBill').style.display = 'none'
})
document.getElementById('cashOutCard').addEventListener('click', function(){
    // console.log('got cashout form')
    document.getElementById('addMoney').style.display = 'none'
    document.getElementById('cashOut').style.display = 'block'
    document.getElementById('transferMoney').style.display = 'none'
    document.getElementById('getBonus').style.display = 'none'
    document.getElementById('transcationHis').style.display = 'none'
    document.getElementById('payBill').style.display = 'none'
})
document.getElementById('transferCard').addEventListener('click', function(){
    document.getElementById('addMoney').style.display = 'none'
    document.getElementById('cashOut').style.display = 'none'
    document.getElementById('transferMoney').style.display = 'block'
    document.getElementById('getBonus').style.display = 'none'
    document.getElementById('transcationHis').style.display = 'none'
    document.getElementById('payBill').style.display = 'none'
})
document.getElementById('getBonusCard').addEventListener('click', function(){
    document.getElementById('addMoney').style.display = 'none'
    document.getElementById('cashOut').style.display = 'none'
    document.getElementById('transferMoney').style.display = 'none'
    document.getElementById('getBonus').style.display = 'block'
    document.getElementById('payBill').style.display = 'none'
    document.getElementById('transcationHis').style.display = 'none'

})
document.getElementById('payBilCard').addEventListener('click', function(){
    document.getElementById('addMoney').style.display = 'none'
    document.getElementById('cashOut').style.display = 'none'
    document.getElementById('transferMoney').style.display = 'none'
    document.getElementById('getBonus').style.display = 'none'
    document.getElementById('payBill').style.display = 'block'
    document.getElementById('transcationHis').style.display = 'none'
})
document.getElementById('transactionsCard').addEventListener('click', function(){
    document.getElementById('addMoney').style.display = 'none'
    document.getElementById('cashOut').style.display = 'none'
    document.getElementById('transferMoney').style.display = 'none'
    document.getElementById('getBonus').style.display = 'none'
    document.getElementById('payBill').style.display = 'none'
    document.getElementById('transcationHis').style.display = 'block'
})