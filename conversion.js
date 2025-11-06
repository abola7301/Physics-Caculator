document.addEventListener('DOMContentLoaded', function(){

    


    GCM3Btn = document.getElementById('G/CM3SubmitButton')

    KGM3Btn = document.getElementById('KG/M3SubmitButton')

    MSBtn = document.getElementById('M/SSubmitButton')

    KMHBtn = document.getElementById('KM/HSubmitButton')

    GCM3Btn.addEventListener('click', function(){


        GCM3 = document.getElementById('G/CM3toKG/M3').value.trim()

        GCM3Ans = document.getElementById('G/CM3Ans')

        

        if (isNaN(GCM3) || GCM3 === '')
        {
            GCM3Ans.style.color = 'red'


            GCM3Ans.innerHTML = 'Please Enter Valid Numbers'

            return
        }

        else
        {

            KGM3 = Math.trunc((parseFloat(GCM3) * 1000) * 100) / 100

            GCM3Ans.style.color = 'green'


            GCM3Ans.innerHTML = 'Density = ' + KGM3 + ' KG/M3'
        }


    })

    KGM3Btn.addEventListener('click', function(){


        KGM3 = document.getElementById('KG/M3toG/CM3').value.trim()

        

        KGM3Ans = document.getElementById('KG/M3Ans')

        if (isNaN(KGM3) || KGM3 === '0' || KGM3 === '')
        {
            KGM3Ans.style.color = 'red'


            KGM3Ans.innerHTML = 'Please Enter Valid Numbers'

            return
        }



        else
        {
            GCM3 = Math.trunc((parseFloat(KGM3) / 1000) * 100) / 100

            KGM3Ans.style.color = 'green'


            KGM3Ans.innerHTML = 'Density = ' + GCM3 + ' G/CM3'
        }


    })

    MSBtn.addEventListener('click', function(){


        MS = document.getElementById('M/StoKM/H').value.trim()

        

        MSans = document.getElementById('M/SAns')

        if (isNaN(MS) || MS === '0' || MS === '')
        {
            MSans.style.color = 'red'


            MSans.innerHTML = 'Please Enter Valid Numbers'

            return
        }

        else
        {

            KMH = Math.trunc((parseFloat(MS) * 3.6) * 100) / 100

            MSans.style.color = 'green'


            MSans.innerHTML = 'Speed = ' + KMH +' KM/H'
        }


    })


    KMHBtn.addEventListener('click', function(){


        KMH = document.getElementById('KM/HtoM/S').value.trim()

        

        KMHAns = document.getElementById('KM/HAns')

        if (isNaN(KMH) || KMH === '0' || KMH === '')
        {
            KMHAns.style.color = 'red'


            KMHAns.innerHTML = 'Please Enter Valid Numbers'

            return
        }

        else
        {

            MS = Math.trunc((parseFloat(KMH) / 3.6) * 100) / 100

            KMHAns.style.color = 'green'


            KMHAns.innerHTML = 'Speed = ' + MS +' M/S'
        }


    })


})