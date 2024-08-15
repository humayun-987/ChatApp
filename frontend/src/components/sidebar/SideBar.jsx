import React from 'react'
import SearchUser from './SearchUser'
import Conversations from './Conversations'
import LogoutBtn from './LogoutBtn'
import CurrentUser from './CurrentUser'
import useConversation from '../../zustand/useConversation'
const SideBar = () => {
  const {openMessage} = useConversation()
  return (
    <div className={`${openMessage ? 'hidden' : '' } border-r w-[330px] xl:w-[400px] border-slate-500 py-4 px-4  md:flex md:flex-col h-[calc(90vh-32px)]`}>
        <CurrentUser/>
        <SearchUser/>
        <div className="divider px-3"></div>
        <Conversations/>
        <LogoutBtn/>
    </div>
  )
}

export default SideBar
