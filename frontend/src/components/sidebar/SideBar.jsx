import React from 'react'
import SearchUser from './SearchUser'
import Conversations from './Conversations'
import LogoutBtn from './LogoutBtn'
import CurrentUser from './CurrentUser'
const SideBar = () => {
  return (
    <div className='border-r border-slate-500 py-4 px-4  flex flex-col h-[calc(90vh-32px)]'>
        <CurrentUser/>
        <SearchUser/>
        <div className="divider px-3"></div>
        <Conversations/>
        <LogoutBtn/>
    </div>
  )
}

export default SideBar
