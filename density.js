document.addEventListener('DOMContentLoaded', function(){

    

    allowedMasses = ['KG', 'G']

    allowedVolumes = ['M3', 'CM3', 'LIT']

    allowedDensities = ['KG/M3', 'G/CM3']

    densityBtn = document.getElementById('densitySubmitButton')

    massBtn = document.getElementById('massSubmitButton')

    volumeBtn = document.getElementById('volumeSubmitButton')

    densityBtn.addEventListener('click', function(){


        mass = document.getElementById('massForDensity').value.trim()

        volume = document.getElementById('volumeForDensity').value.trim()

        densityTxt = document.getElementById('densityAns')

        massChoice = document.getElementById('massChoiceForDensity').value.trim()

        volumeChoice = document.getElementById('volumeChoiceForDensity').value.trim()

        if (isNaN(mass) || mass === '0' || mass === '' || isNaN(volume) ||volume ==='0' || volume =='')
        {
            densityTxt.style.color = 'red'


            densityTxt.innerHTML = 'Please Enter Valid Numbers'

            return
        }

        if(!allowedMasses.includes(massChoice) || !allowedVolumes.includes(volumeChoice))

        {
            densityTxt.style.color = 'red'


            densityTxt.innerHTML = 'Please Choose Units' 

            return
        }

        else
        {

            density = Math.trunc((parseFloat(mass) / parseFloat(volume)) * 100) / 100

            densityTxt.style.color = 'green'


            densityTxt.innerHTML = 'Density = ' + density + ' ' + massChoice + ' / ' + volumeChoice
        }


    })

    massBtn.addEventListener('click', function(){


        density = document.getElementById('densityForMass').value.trim()

        volume = document.getElementById('volumeForMass').value.trim()

        densityChoice = document.getElementById('densityChoiceForMass').value.trim()

        volumeChoice = document.getElementById('volumeChoiceForMass').value.trim()

        massTxt = document.getElementById('massAns')

        if (isNaN(density) || density === '0' || density === '' || isNaN(volume) || volume ==='0' || volume ==='')
        {
            massTxt.style.color = 'red'


            massTxt.innerHTML = 'Please Enter Valid Numbers'

            return
        }

        if(!allowedDensities.includes(densityChoice) || !allowedVolumes.includes(volumeChoice))
        {
            massTxt.style.color = 'red'


            massTxt.innerHTML = 'Please Choose Units'

            return
        }



        else
        {

            if(densityChoice === 'G/CM3')
            {
                density = density * 1000
            }

            if(volumeChoice === 'CM3')
            {
                volume = volume / 1000000
            }

            mass = Math.trunc((parseFloat(density) * parseFloat(volume)) * 100) / 100

            massTxt.style.color = 'green'


            massTxt.innerHTML = 'Mass = ' + mass + ' KG'
        }


    })

    volumeBtn.addEventListener('click', function(){


        density = document.getElementById('densityForVolume').value.trim()

        mass = document.getElementById('massForVolume').value.trim()

        densityChoice = document.getElementById('densityChoiceForVolume').value.trim()

        massChoice = document.getElementById('massChoiceForVolume').value.trim()

        volumeTxt = document.getElementById('volumeAns')

        if (isNaN(density) || density === '0' || density === '' || isNaN(mass) || mass ==='0' || mass ==='')
        {
            volumeTxt.style.color = 'red'


            volumeTxt.innerHTML = 'Please Enter Valid Numbers'

            return
        }

        if (!allowedDensities.includes(densityChoice) || !allowedMasses.includes(massChoice))
        {
            volumeTxt.style.color = 'red'


            volumeTxt.innerHTML = 'Please Choose Units'

            return
        }

        else
        {
            if(densityChoice === 'G/CM3')
            {
                density = density * 1000
            }

            if(massChoice === 'G')
            {
                mass = mass / 1000
            }

            volume = Math.trunc((parseFloat(mass) / parseFloat(density)) * 10000000) / 10000000

            volumeTxt.style.color = 'green'


            volumeTxt.innerHTML = 'Volume = ' + volume +' M3'
        }


    })


})