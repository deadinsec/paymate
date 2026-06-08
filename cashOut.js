document.getElementById('withdrawBtn').addEventListener('click', function(e){
    e.preventDefault()
    console.log('get')
    const agent = document.getElementById('agentNum').value
    const cashOut = parseInt(document.getElementById('cashOutAmount').value)
    const pass = parseInt(document.getElementById('cashOutpinNum').value)
    let total = parseInt(document.getElementById('curMny').innerText) - cashOut
  
    if(agent.length != 11){
        alert('Agent number is invalid, put 11 digit number')
        return;
    }
    if(pass !== 1234){
        alert('Your pin is invalid. your pin is 1234')
        return;
    }
    document.getElementById('curMny').innerText = total
    document.getElementById('cashOutAmount').value = 0
})