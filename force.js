document.addEventListener('DOMContentLoaded', function(){

    

    allowedAccelerations = ['M/S2', 'KM/H2']

    allowedMasses = ['KG', 'G']

    allowedForces = ['N']

    accelerationBtn = document.getElementById('accelerationSubmitButton')

    forceBtn = document.getElementById('forceSubmitButton')

    massBtn = document.getElementById('massSubmitButton')

    forceBtn.addEventListener('click', function(){


        acceleration = document.getElementById('accelerationForForce').value.trim()

        mass = document.getElementById('massForForce').value.trim()

        forceTxt = document.getElementById('forceAns')

        accelerationChoice = document.getElementById('accelerationChoiceForForce').value.trim()

        massChoice = document.getElementById('massChoiceForForce').value.trim()

        if (isNaN(acceleration) || acceleration === '' || isNaN(mass) || mass =='')
        {
            forceTxt.style.color = 'red'


            forceTxt.innerHTML = 'Please Enter Valid Numbers'

            return
        }

        if(!allowedAccelerations.includes(accelerationChoice) || !allowedMasses.includes(massChoice))

        {
            forceTxt.style.color = 'red'


            forceTxt.innerHTML = 'Please Choose Units' 

            return
        }

        else
        {
            if(accelerationChoice === 'KM/H2')
            {
                acceleration = parseFloat(acceleration) * 1000 / (3600 ** 2)
            }

            if(massChoice === 'G')
            {
                mass = mass / 1000
            }

            force = Math.trunc((parseFloat(mass) * parseFloat(acceleration)) * 1000) / 1000

            forceTxt.style.color = 'green'


            forceTxt.innerHTML = 'Force= ' + force + ' N'
        }


    })

    massBtn.addEventListener('click', function(){


        acceleration = document.getElementById('accelerationForMass').value.trim()

        force = document.getElementById('forceForMass').value.trim()

        accelerationChoice = document.getElementById('accelerationChoiceForMass').value.trim()

        massTxt = document.getElementById('massAns')

        if (isNaN(acceleration) || acceleration === '' || isNaN(force) || force ==='')
        {
            massTxt.style.color = 'red'


            massTxt.innerHTML = 'Please Enter Valid Numbers'

            return
        }

        if(!allowedAccelerations.includes(accelerationChoice))
        {
            massTxt.style.color = 'red'


            massTxt.innerHTML = 'Please Choose Units'

            return 
        }

        else
        {
            if(accelerationChoice === 'KM/H2')
            {
                acceleration = parseFloat(acceleration) * (1000 / (3600 ** 2))
            }

            mass = Math.round((parseFloat(force) / parseFloat(acceleration)) * 100) / 100


            massTxt.style.color = 'green'


            massTxt.innerHTML = 'Mass = ' + mass +' KG'
        }


    })

    accelerationBtn.addEventListener('click', function(){


        force = document.getElementById('forceForAcceleration').value.trim()

        mass = document.getElementById('massForAcceleration').value.trim()

        massChoice = document.getElementById('massChoiceForAcceleration').value.trim()

        accelerationTxt = document.getElementById('accelerationAns')

        if (isNaN(force) || force === '' || isNaN(mass) || mass ==='')
        {
            accelerationTxt.style.color = 'red'


            accelerationTxt.innerHTML = 'Please Enter Valid Numbers'

            return
        }

        if(!allowedMasses.includes(massChoice))
        {
            accelerationTxt.style.color = 'red'


            accelerationTxt.innerHTML = 'Please Choose Units'

            return
        }

        else
        {
            if(massChoice === 'G')
            {
                mass /= 1000
            }

            acceleration = Math.trunc((parseFloat(force) / parseFloat(mass)) * 100) / 100

            accelerationTxt.style.color = 'green'


            accelerationTxt.innerHTML = 'Acceleration= ' + acceleration +' M/S'
        }


    })


})