import React from 'react'

const TabletNavbar = ({
  Logo,
  NavButton,
  Search,
  UserIcon,
  GiHamburgerMenu,
}) => {
  return (
     <div className="flex flex-col">
      <div className="flex border-0 bg-secondary w-full p-2 items-center h-14">
        <div className=" border-0 ">
          <Logo />
        </div>
        <div className="w-full justify-center flex ">
          <NavButton />
        </div>

        <div className=" flex justify-end border-0 p-2">
          <GiHamburgerMenu />
        </div>
      </div>
      <div>
      <div className="w-full mx-2 flex justify-center">
        <Search />
      </div>
      </div>
    </div>
  )
}

export default TabletNavbar