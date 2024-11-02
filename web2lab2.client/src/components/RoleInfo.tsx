import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const RoleInfo: React.FC = () => {
    const {role}=useParams()
    const [enabled, setEnabled] = React.useState<boolean>(false)
    const [details, setDetails] = React.useState<string>('')

    React.useEffect(()=>{
        async function start(){
            const enabled_ = new URLSearchParams(window.location.search).get('enabled')
            if (enabled) setEnabled(enabled_=="true")
            try{
                const response=await axios.get("https://localhost:7261/api/App/details/"+role+'?isVulnerable='+enabled_)
                setDetails(response.data)
            }
            catch (E){
                setDetails("unauthorized")
            }
        }
        start()
    }, [])
    return (
        <div className="centerContainer">
            <p className="accountTitle">Hello! Your user role is "user".</p>
            <p>Page details for role {role}:</p>
            {details}
        </div>
    )
}

export default RoleInfo