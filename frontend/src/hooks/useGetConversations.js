import { useState, useEffect } from "react"
// get users to start conversation with
const useGetConversations = () => {
    const [conversations, setConversations] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch('api/users') // get request to server.js / user.routes / user.controller
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error)
                }
                setConversations(data);
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(true)
            }
        }
        getConversations()
    }, [])

    return { loading, conversations }
}

export default useGetConversations
