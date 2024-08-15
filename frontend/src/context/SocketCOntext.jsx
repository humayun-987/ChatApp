import { createContext, useContext, useEffect, useState } from "react"
import { useAuthContext } from "./AuthContext";
// socket io for client/frontend side
import io from "socket.io-client"
export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])

  const { authUser } = useAuthContext()
  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:5000", {
        query: {
          userId: authUser._id
        }
      })

      setSocket(socket);
      // socket.on is used to listen events. Can be used both on server and client side
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      })
      // close the connection when component unmounts
      return () => socket.close()
    }
    else {
      if (socket) {
        socket.close()
        setSocket(null)
      }
    }
  }, [authUser])

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  )
}