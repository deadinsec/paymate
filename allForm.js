document.getElementById('addMoneyCard').addEventListener('click', function(){
    // console.log('got add money form')
    document.getElementById('addMoney').style.display = 'block'
    document.getElementById('cashOut').style.display = 'none'

})
document.getElementById('cashOutCard').addEventListener('click', function(){
    // console.log('got cashout form')
    document.getElementById('addMoney').style.display = 'none'
    document.getElementById('cashOut').style.display = 'block'
})
