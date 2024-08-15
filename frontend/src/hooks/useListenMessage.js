import { useSocketContext } from "../context/SocketCOntext"
import useConversation from '../zustand/useConversation'
import { useEffect } from "react"
import notificationSound from '../assets/sounds/notification.mp3'

const useListenMessage = () => {
    const { socket } = useSocketContext()
    const { messages, setMessages } = useConversation()
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            // to play any song/notification create a sound = new Audio(song) and put the song inside it now sound.play()
            const sound = new Audio(notificationSound)
            sound.play()
            setMessages([...messages, newMessage])
        })
        // Necessary so we do not listen for "newMessage" more than once
        return () => socket?.off("newMessage")
    }, [socket, setMessages, messages])

}

export default useListenMessage
