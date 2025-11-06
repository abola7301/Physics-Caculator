document.addEventListener('DOMContentLoaded', function(){

    

    allowedDistances = ['M', 'KM']

    allowedTimes = ['S', 'H']

    allowedSpeeds = ['M/S', 'KM/H']

    speedBtn = document.getElementById('speedSubmitButton')

    distanceBtn = document.getElementById('distanceSubmitButton')

    timeBtn = document.getElementById('timeSubmitButton')

    speedBtn.addEventListener('click', function(){


        distance = document.getElementById('distanceForSpeed').value.trim()

        time = document.getElementById('timeForSpeed').value.trim()

        speedTxt = document.getElementById('speedAns')

        distanceChoice = document.getElementById('distanceChoiceForSpeed').value.trim()

        timeChoice = document.getElementById('timeChoiceForSpeed').value.trim()

        if (isNaN(distance) || distance === '' || isNaN(time) || time =='')
        {
            speedTxt.style.color = 'red'


            speedTxt.innerHTML = 'Please Enter Valid Numbers'

            return
        }

        if(!allowedDistances.includes(distanceChoice) || !allowedTimes.includes(timeChoice))

        {
            speedTxt.style.color = 'red'


            speedTxt.innerHTML = 'Please Choose Units' 

            return
        }

        else
        {
            speed = Math.trunc((parseFloat(distance) / parseFloat(time)) * 100) / 100

            speedTxt.style.color = 'green'


            speedTxt.innerHTML = 'Speed= ' + speed + ' ' + distanceChoice + '/' + timeChoice
        }


    })

    distanceBtn.addEventListener('click', function(){


        speed = document.getElementById('speedForDistance').value.trim()

        time = document.getElementById('timeForDistance').value.trim()

        speedChoice = document.getElementById('speedChoiceForDistance').value.trim()

        timeChoice = document.getElementById('timeChoiceForDistance').value.trim()

        distanceTxt = document.getElementById('distanceAns')

        if (isNaN(speed) || speed === '' || isNaN(time) || time ==='')
        {
            distanceTxt.style.color = 'red'


            distanceTxt.innerHTML = 'Please Enter Valid Numbers'

            return
        }

        if (!allowedSpeeds.includes(speedChoice) || !allowedTimes.includes(timeChoice))
        {
            distanceTxt.style.color = 'red'


            distanceTxt.innerHTML = 'Please Choose Units'

            return 
        }

        else
        {
            if(speedChoice === 'KM/H')
            {
                speed = speed / 3.6
            }

            if(timeChoice === 'H')
            {
                time = time * 3600
            }


            distance = Math.trunc((parseFloat(speed) * parseFloat(time)) * 100) / 100

            distanceTxt.style.color = 'green'


            distanceTxt.innerHTML = 'Distance= ' + distance +' M'
        }


    })

    timeBtn.addEventListener('click', function(){


        speed = document.getElementById('speedForTime').value.trim()

        distance = document.getElementById('distanceForTime').value.trim()

        speedChoice = document.getElementById('speedChoiceForTime').value.trim()

        distanceChoice = document.getElementById('distanceChoiceForTime').value.trim()

        timetxt = document.getElementById('timeAns')

        if (isNaN(speed) || speed === '' || isNaN(distance) || distance ==='')
        {
            timetxt.style.color = 'red'


            timetxt.innerHTML = 'Please Enter Valid Numbers'

            return
        }

        if (!allowedSpeeds.includes(speedChoice) || !allowedDistances.includes(distanceChoice))
        {
            timetxt.style.color = 'red'


            timetxt.innerHTML = 'Please Choose Units'

            return 
        }

        else
        {
            if(speedChoice === 'KM/H')
            {
                speed = speed / 3.6
            }

            if(distanceChoice === 'KM')
            {
                distance = distance * 1000
            }


            time = Math.round((parseFloat(distance) / parseFloat(speed)) * 100) / 100

            timetxt.style.color = 'green'


            timetxt.innerHTML = 'Time= ' + time +' S OR ' + Math.trunc((time / 3600) * 10000) / 10000+' H'
        }


    })

})