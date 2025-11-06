document.addEventListener('DOMContentLoaded', function(){

    

    allowedVelocitys = ['M/S', 'KM/H']

    allowedTimes = ['S', 'H']

    allowedAccelerations = ['M/S2', 'KM/H2']

    accelerationBtn = document.getElementById('accelerationSubmitButton')

    velocityBtn = document.getElementById('velocitySubmitButton')

    timeBtn = document.getElementById('timeSubmitButton')

    accelerationBtn.addEventListener('click', function(){


        v1 = document.getElementById('velocity1ForAcceleration').value.trim()

        v2 = document.getElementById('velocity2ForAcceleration').value.trim()

        time = document.getElementById('timeForAcceleration').value.trim()

        accelerationTxt = document.getElementById('accelerationAns')

        v1Choice = document.getElementById('velocity1ChoiceForAcceleration').value.trim()

        v2Choice = document.getElementById('velocity2ChoiceForAcceleration').value.trim()

        timeChoice = document.getElementById('timeChoiceForAcceleration').value.trim()

        if (isNaN(v1) || v1 === '' || isNaN(v2) || v2 =='' || isNaN(time) ||time ==='0' || time =='')
        {
            accelerationTxt.style.color = 'red'


            accelerationTxt.innerHTML = 'Please Enter Valid Numbers'

            return
        }

        if(!allowedVelocitys.includes(v1Choice) || !allowedVelocitys.includes(v2Choice) || !allowedTimes.includes(timeChoice))

        {
            accelerationTxt.style.color = 'red'


            accelerationTxt.innerHTML = 'Please Choose Units' 

            return
        }

        else
        {
            if(v1Choice === 'KM/H')
            {
                v1 = v1 / 3.6
            }

            if(v2Choice === 'KM/H')
            {
                v2 = v2 / 3.6
            }

            if(timeChoice === 'H')
            {
                time = time * 3600
            }

            acceleration = Math.trunc(((parseFloat(v2) - parseFloat(v1)) / parseFloat(time)) * 100) / 100

            accelerationTxt.style.color = 'green'


            accelerationTxt.innerHTML = 'Acceleration= ' + acceleration + ' M/S2'
        }


    })

    velocityBtn.addEventListener('click', function(){


        acceleration = document.getElementById('accelerationForVelocity').value.trim()

        time = document.getElementById('timeForVelocity').value.trim()

        accelerationChoice = document.getElementById('accelerationChoiceForVelocity').value.trim()

        timeChoice = document.getElementById('timeChoiceForVelocity').value.trim()

        velocityTxt = document.getElementById('velocityAns')

        if (isNaN(acceleration) || acceleration === '0' || acceleration === '' || isNaN(time) || time ==='0' || time ==='')
        {
            velocityTxt.style.color = 'red'


            velocityTxt.innerHTML = 'Please Enter Valid Numbers'

            return
        }

        if(!allowedTimes.includes(timeChoice) || !allowedAccelerations.includes(accelerationChoice))
        {
            velocityTxt.style.color = 'red'


            velocityTxt.innerHTML = 'Please Choose Units'

            return
        }

        else
        {
            if(accelerationChoice === 'KM/H2')
            {
                acceleration = acceleration * 1000 / (3600 * 3600)
            }

            if(timeChoice === 'H')
            {
                time = time * 3600
            }

            velocity = Math.trunc((parseFloat(acceleration) * parseFloat(time)) * 100) / 100

            velocityTxt.style.color = 'green'


            velocityTxt.innerHTML = 'Velocity Differences= ' + velocity + ' M/S'
        }


    })

    timeBtn.addEventListener('click', function(){


        acceleration = document.getElementById('accelerationForTime').value.trim()

        v1 = document.getElementById('velocity1ForTime').value.trim()

        v2 = document.getElementById('velocity2ForTime').value.trim()

        accelerationChoice = document.getElementById('accelerationChoiceForTime').value.trim()

        v1Choice = document.getElementById('velocity1ChoiceForTime').value.trim()

        v2Choice = document.getElementById('velocity2ChoiceForTime').value.trim()

        timeTxt = document.getElementById('timeAns')

        if (isNaN(acceleration) || acceleration === '0' || acceleration === '' || isNaN(v1) || v1 ==='0' || v1 ==='' || isNaN(v2) || v2 ==='0' || v2 ==='')
        {
            timeTxt.style.color = 'red'


            timeTxt.innerHTML = 'Please Enter Valid Numbers'

            return
        }

        if(!allowedVelocitys.includes(v1Choice) || !allowedVelocitys.includes(v2Choice) || !allowedAccelerations.includes(accelerationChoice))
        {
            timeTxt.style.color = 'red'


            timeTxt.innerHTML = 'Please Choose Units'

            return  
        }

        else
        {
            if(v1Choice === 'KM/H')
            {
                v1 = v1 / 3.6
            }

            if(v2Choice === 'KM/H')
            {
                v2 = v2 / 3.6
            }

            if(accelerationChoice === 'KM/H2')
            {
                acceleration = acceleration * 1000 / (3600 ** 2)
            }
            time = Math.trunc(((parseFloat(v2) - parseFloat(v1)) / parseFloat(acceleration)) * 100) / 100

            timeTxt.style.color = 'green'


            timeTxt.innerHTML = 'Time = ' + time + ' S'
        }


    })


})