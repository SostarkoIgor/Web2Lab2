import React, { useEffect } from 'react'

const XSScomponent : React.FC = () => {
    const [value, setValue] = React.useState<string>('')
    const [isEnabled, setIsEnabled] = React.useState<boolean>(false)
    useEffect(() => {
        const inputParam = new URLSearchParams(window.location.search).get('ime')
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

        }
        else {
            setValue('')
        }
    }, [isEnabled, value])
    return (
        <div className='container'>
            <h2 className='title'>XSS</h2>
            <div className='explanationContainer'>
                <p className='explanation'>This is an example of DOM based cross site scripting (XSS) attack</p>
                <p className='explanation'>The user can change the "ime" parameter of the URL to trigger the attack</p>
            </div>
            <div className='exampleContainer'>
                <p className='example'>
                    We can show cookie with:
                    <a href={'https://localhost:5173/?ime=<script>alert(document.cookie)</script>'}>
                        {'https://localhost:5173/?ime=<script>alert(document.cookie)</script>'}
                    </a>
                </p>
                <p className='example'>
                    Or redirect to a different page:
                    <a href={'https://localhost:5173/?ime=<script>document.location.href = "https://google.com"</script>'}>
                        {'https://localhost:5173/?ime=<script>document.location.href = "https://google.com"</script>'}
                    </a>
                </p>
            </div>
            <div className='buttonContainer'>
                <p className='label'>
                    {isEnabled ? 'XSS is enabled' : 'XSS is disabled'}
                </p>
                <button id='checkbox' name='checkbox' onClick={() => setIsEnabled(!isEnabled)}>
                    {isEnabled ? 'Disable XSS' : 'Enable XSS'}
                </button>
            </div>

            <div className='explanationContainer'>
                <p className='label'>
                    P element where we output value of "ime" parameter:
                </p>
                <p id='output'>
                    {!isEnabled? value : ''}
                </p>
            </div>
        </div>
    )
}

export default XSScomponent