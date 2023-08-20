import React from 'react'

const DashboardMenu = ({buttons}) => {
  return (
    <div className="border-0 flex flex-wrap">
        {buttons.map((item, index) => (
          <div
            key={index}
            className=" p-5 shadow-xl m-3 mt-4  text-info border-0 flex flex-col border-sky-400"
          >
            {item.title !== "Pages" ? (
              <p className="font-bold text-sm lg:text-lg">{item.title}</p>
            ) : (
              ""
            )}
            <div className="flex">
              {item.items.map((link) => (
                <div
                  key={link.name}
                  className="flex w-8 lg:w-16 flex-row border-0 text-xl lg:text-4xl text-info rounded hover:text-primary p-0 m-1 cursor-pointer"
                >
                  <span className="border-0">{link.icon}</span>
                </div>
              ))}
            </div>{" "}
          </div>
        ))}
      </div>
  )
}

export default DashboardMenu