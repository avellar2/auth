import { useContext } from "react"
import { AuthContext } from "../contexts/authContexts"

export default function Dashboard() {

    const {user} = useContext(AuthContext)

    return (
        <h1>Dashboad {user?.email}</h1>
    )
}