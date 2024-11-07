import React, { useEffect } from 'react'
import axios from 'axios'

const XSScomponent : React.FC = () => {
    const [value, setValue] = React.useState<string>('')
    const [isEnabled, setIsEnabled] = React.useState<boolean>(false)
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false)
    useEffect(() => {
        const start = async () => {
            let inputParam = new URLSearchParams(window.location.search).get('param')
            if (!isLoaded){
                const enableXSSparam= new URLSearchParams(window.location.search).get('xss')
                if (enableXSSparam && enableXSSparam==='enable') setIsEnabled(true)
                else setIsEnabled(false)
                setIsLoaded(true)
            }
            if (inputParam) {
                setValue(inputParam)
                if (isEnabled) {
                    //pošto samo postavljanje innerHTML-a neće dovesti do pokretanja js koda, ovdje se to simulira
                    //zvanjem eval i takvim pokretanjem koda
                    //te se u html-u stranice pojavljuje očekivani <script> element
                    const scriptContent = inputParam.match(/<script>([\s\S]*?)<\/script>/)
                    if (scriptContent && scriptContent[1]) {
                        try{
                            eval(scriptContent[1])
                        }
                        catch(E){

                        }
                    }
                    document.getElementById('output')!.innerHTML = inputParam
                }
                else{
                    //micanje znakova < i > iz parametra
                    inputParam = inputParam.replace(/</g, '').replace(/>/g, '')
                    document.getElementById('output')!.innerHTML = inputParam
                }

                //ovo zovem čisto jer je rečeno da treba postojati backend
                let response = await axios.post('https://localhost:7261/api/App/postData', inputParam)
                console.log(response)

            }
            else {
                setValue('')
            }
        }
        start()
    }, [isEnabled,value])
    return (
        <div className='container'>
            <h2 className='title'>Cross-site scripting (XSS)</h2>
            <div className='explanationContainer'>
                <p className='explanation'>Ovo je primjer DOM baziranog cross site scripting (XSS) napada</p>
                <p className='explanation'>Korisnik može promijeniti "param" parametar URL-a i tako izvršiti napad</p>
            </div>
            <div className='exampleContainer'>
                <p className='example'>
                    Možemo pristupiti kolačiću sa:
                    <a href={'https://localhost:5173/?param=<script>alert(document.cookie)</script>&xss='+(isEnabled?'enable':'disable')}>
                        {'https://localhost:5173/?param=<script>alert(document.cookie)</script>'}
                    </a>
                </p>
                <p className='example'>
                    Ili preusmjeriti na drugu stranicu:
                    <a href={'https://localhost:5173/?param=<script>document.location.href = "https://google.com"</script>&xss='+(isEnabled?'enable':'disable')}>
                        {'https://localhost:5173/?param=<script>document.location.href = "https://google.com"</script>'}
                    </a>
                </p>
            </div>
            <div className='buttonContainer'>
                <p className='label'>
                    {isEnabled ? 'XSS je omogućen' : 'XSS je onemogućen'}
                </p>
                <button id='checkbox' name='checkbox' onClick={() => setIsEnabled(!isEnabled)}>
                    {isEnabled ? 'Onemogući XSS' : 'Omogući XSS'}
                </button>
            </div>

            <div className='explanationContainer'>
                <p className='label'>
                    P element u kojem ispisujemo vrijednost parametra "param" je ispod:
                    <a className='secondaryText'>
                        Kada je XSS omogućen, nećemo vidjeti dijelove "param"-a koju su između {'<script>'} tagova (i drugih) jer će to postati script html element
                    </a>
                </p>
                <p id='output'>
                    {!isEnabled? value : ''}
                </p>
            </div>
        </div>
    )
}

export default XSScomponent