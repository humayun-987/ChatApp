// To create a Global State and access a similar function of useState globally
// No need to send states as props, can access it globally like context but useContext is for variable not for state and action
import { create } from 'zustand'
// create the state store.
const useConversation = create((set)=>({
    // (set) => ({ ... }): This is a function that takes the set function as an 
    // argument and returns an object that defines the state and actions for the store.
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages: [],
    setMessages: (messages) => set({messages}),
    openMessage: false,
    setOpenMessage: (openMessage) => set({openMessage})
}))
export default useConversation;
// useConversation, manages the state of a conversation in your application. 