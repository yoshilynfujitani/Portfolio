import React from 'react'

const AboutMeItems = ({ image, Course, Year }) => {
    return (
        <>

            <div className="px-6 flex items-center py-4 gap-2 bg-Main rounded-md my-2">
                <img src={image} alt="" className="w-12 h-12" />
                <p className="text-white text-md font-semibold flex flex-col">
                    {Course}
                    <span className="font-thin text-sm">{Year}</span>
                </p>
            </div></>
    )
}

export default AboutMeItems