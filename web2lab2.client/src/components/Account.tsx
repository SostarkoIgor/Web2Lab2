import React, { useEffect } from "react"
import axios from 'axios'

const Account : React.FC = () =>{
    const [accNumber, setAccNumber] = React.useState<number | null>(600)
    const [enabled, setEnabled] = React.useState<boolean>(false)
    const [loggedIn, setLoggedIn] = React.useState<boolean>(false)
    const [userInfo, setUserInfo] = React.useState<string>('')

    useEffect(()=>{
        async function start(){
            const accountNumber = new URLSearchParams(window.location.search).get('accNumber')
            const enabled_ = new URLSearchParams(window.location.search).get('enabled')
            const loggedIn = new URLSearchParams(window.location.search).get('loggedIn')
            if (accountNumber) setAccNumber(parseInt(accountNumber))
            if (enabled) setEnabled(enabled_=="true")
            if (loggedIn) setLoggedIn(loggedIn=="true")
            try{
                if (accountNumber==null) return
                const response=await axios.get("https://localhost:7261/api/App/account/"+accountNumber+'?isVulnerable='+enabled_)
                setUserInfo(response.data)
            }
            catch (E){
                setUserInfo("unauthorized")
            }
        }
        start()
    }, [])

    if (accNumber==null) return (<div className="centerContainer">Unknown account</div>)
    return (
        <div className="centerContainer">
            <p className="accountTitle">Welcome user 600!</p>
            <p>
            User info for user {accNumber}:
            </p>
            <p>
            {userInfo}
            </p>
            
        </div>
    )
}

export default Account