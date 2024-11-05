import React from "react"

const BrokenAccessControl : React.FC = () =>{
    const [iframeLink, setIframeLink] = React.useState<string>("https://web2lab2-l3fi.onrender.com/account?accNumber=600")
    const [iframeLinkTemp, setIframeLinkTemp] = React.useState<string>("https://web2lab2-l3fi.onrender.com/account?accNumber=600")
    const [isEnabled, setIsEnabled] = React.useState<boolean>(false)
    const iframeRef=React.useRef<HTMLIFrameElement>(null)
    const formatLink = () =>{
        if (iframeLink.indexOf('?')>=0)
            return iframeLink+'&enabled='+(isEnabled?'true':'false')
        else
            return iframeLink+'?enabled='+(isEnabled?'true':'false')
    }

    return (
        <div className="container">
            <h2 className="title">Broken Access Control</h2>
            <div className="explanationContainer">
                <p className="explanation">Ovdje prikazujem ranjivosti gdje korisnik može, mijenjajući broj računa u linku, pristupiti drugim računima, te mijenjajući ulogu u linku pristupiti neovlaštenim resursima.</p>
                <p className="explanation">Na početku je ranjivost <b>onemogućena</b>! Može se omogućiti klikom na gumb na kraju teksta.</p>
                <p className="explanation">Radi jednostavnosti ovdje je simulirano da je prijavljen korisnik 600. Nije implementirana prava prijava korisnika pošto mi se to nije činilo potrebnim za ovu demonstraciju.</p>
                <p className="explanation">Radi jednostavnosti korištenja i demonstracije se koristi iframe, napravljen da izgleda kao mali browser. Proizvoljni link se upisuje u input polje u simuliranom browseru te se pretražuje klikom na malo povećalo desno od tog polja.</p>
                <p className="explanation">Prvo se prikazuje ranjivost kod koje korisnik promjenom broja računa u linku može pristupiti računima drugih korisnika.</p>
            </div>
            <div className="exampleContainer">
                <p className="example">
                    Korisnik vidi svoj račun kroz ovaj link:
                    <a href="javascript:void(0);" onClick={()=>{setIframeLink(('https://web2lab2-l3fi.onrender.com/account?accNumber=600')); setIframeLinkTemp(('https://web2lab2-l3fi.onrender.com/account?accNumber=600'))}}>https://web2lab2-l3fi.onrender.com/account?accNumber=600</a>
                </p>
                <p className="example">
                    Ali mijenjajući broj računa u linku može pristupiti i drugima, npr.:
                    <a href="javascript:void(0);" onClick={()=>{setIframeLink(('https://web2lab2-l3fi.onrender.com/account?accNumber=601')); setIframeLinkTemp(('https://web2lab2-l3fi.onrender.com/account?accNumber=601'))}}>https://web2lab2-l3fi.onrender.com/account?accNumber=601</a>
                </p>
            </div>
            <div className="explanationContainer">
                <p className="explanation">
                    Druga ranjivost je ona kod koje korisnik iz URL-a vidi svoju ulogu i to mijenja u neku drugu, poput admin.
                </p>
            </div>
            <div className="exampleContainer">
                <p className="example">
                    Originalni link s kojim korisnik pristupa podatcima kojima treba je ovaj:
                    <a href="javascript:void(0);" onClick={()=>{setIframeLink('https://web2lab2-l3fi.onrender.com/info/user/details'); setIframeLinkTemp(('https://web2lab2-l3fi.onrender.com/info/user/details'))}}>https://web2lab2-l3fi.onrender.com/info/user/details</a>
                </p>
                <p className="example">
                    No on to može promijeniti na nešto drugo, kao na primjer ovo:
                    <a href="javascript:void(0);" onClick={()=>{setIframeLink('https://web2lab2-l3fi.onrender.com/info/admin/details'); setIframeLinkTemp(('https://web2lab2-l3fi.onrender.com/info/admin/details'))}}>https://web2lab2-l3fi.onrender.com/info/admin/details</a>
                </p>
            </div>
            <div className='buttonContainer'>
                <p className='label'>
                    {isEnabled ? 'Ranjivost je omogućena' : 'Ranjivost je onemogućena'}
                </p>
                <button id='checkbox' name='checkbox' onClick={() => setIsEnabled(!isEnabled)}>
                    {isEnabled ? 'Onemogući ranjivost' : 'Omogući ranjivost'}
                </button>
            </div>
            <div className="browser">
                <div className="topBar">
                    <div className="leftTopBar">
                        <span className="browserIcon material-symbols-outlined">arrow_back</span>
                        <span className="browserIcon material-symbols-outlined">arrow_forward</span>
                        <span className="browserIcon material-symbols-outlined">refresh</span>
                        <div className="tab">
                            <span>Web page</span>
                            <span className="browserIcon material-symbols-outlined">close</span>
                        </div>
                    </div>
                    <div className="rightTopBar">
                        <span className="browserIcon material-symbols-outlined">minimize</span>
                        <span className="browserIcon material-symbols-outlined">crop_square</span>
                        <span className="browserIcon material-symbols-outlined">close</span>
                    </div>
                </div>
                <div className="urlBar">
                    <p className="urlLabel">Page address:</p>
                    <input className="urlInput" value={iframeLinkTemp} onChange={(e)=>setIframeLinkTemp(e.target.value)}></input>
                    <span className="browserIcon material-symbols-outlined search" onClick={()=>setIframeLink(iframeLinkTemp)}>search</span>
                </div>
                <iframe ref={iframeRef} className="browserBody" src={formatLink()}>

                </iframe>
            </div>
        </div>
    )
}

export default BrokenAccessControl