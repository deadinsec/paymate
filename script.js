
document.getElementById('loginBtn').addEventListener('click', function (e){
    e.preventDefault()
    const preNum=12345678910
    const prePinNum=1234
    let num = document.getElementById('mobile').value
    let pinNum = document.getElementById('pin').value
    if(preNum==num && prePinNum==pinNum){
        console.log('pin and pass correct')
        document.getElementById('pinPara').style.display = 'none'
        document.getElementById('numPara').style.display = 'none'
        window.location.href = "./main.html"

    }
    else if(preNum==num && prePinNum!==pinNum){
        document.getElementById('pinPara').style.display = 'block'
        document.getElementById('numPara').style.display = 'none'
    }
    else if(preNum  !==num && prePinNum==pinNum){
        document.getElementById('numPara').style.display = 'block'
        document.getElementById('pinPara').style.display = 'none'
    } 
    else{
        document.getElementById('pinPara').style.display = 'block'
        document.getElementById('numPara').style.display = 'block'
    }          
})