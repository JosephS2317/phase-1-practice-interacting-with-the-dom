document.addEventListener('DOMContentLoaded', () => {
    let counterValue = 0
    const timerValue = document.querySelector('#counter')
    const plus = document.querySelector('#plus')
    const minus = document.querySelector('#minus')
    const pause =  document.querySelector('#pause')
    const heart = document.querySelector('#heart')
    const likes = document.getElementById('list')
    let intervalid = setInterval(updateTimer, 1000)
    let isPaused = false  
    


    function updateTimer() {
        if(!isPaused) {
       timerValue.textContent = counterValue
        counterValue++
        }
    }
    function pauseTimer() {
        clearInterval(intervalid)
        isPause = true
    }
    function toggleTimer() {
        if(isPaused) {
            clearInterval(intervalid)
            intervalid = setInterval(updateTimer, 1000)
            pause.textContent = 'pause'
            isPaused = false
        }
        else {
            pauseTimer()
            pause.textContent = 'resume'
            isPaused = true
            
        }
   
    }
    heart.addEventListener('click', () => {
        const likeComment =
        document.createElement('h3')
        likeComment.textContent = `Number ${timerValue.textContent} was liked!`
        likes.appendChild(likeComment)
    })
    
    plus.addEventListener('click', () => {
        counterValue++
        updateTimer()
    })
    minus.addEventListener('click', () => {
        if (counterValue > 0) {
        counterValue--
        timerValue.textContent = counterValue
        }
    })
    
    pause.addEventListener('click', () =>{
        toggleTimer()
    })
    
})







