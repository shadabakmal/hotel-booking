import React from 'react'

export default function Title({title ,subTitle, align, font}) {
  return (
    <div className={`flex flex-col justify-center items-center ${align=== "left" && "mid:items-start md:text-left"} `}> 
        <h1 className={`text-4xl md:text-[40px] ${font || "font-Playfair"}`}>{title} </h1>
        <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>{subTitle} </p>
    </div>
  )
}
