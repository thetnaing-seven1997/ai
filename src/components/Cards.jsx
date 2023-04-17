import React from "react";
import {FaUserAlt} from "react-icons/fa"
const Cards = () => {
    return(
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="container mx-auto">
                <div className="max-w[1240px] mx-auto grid md:grid-cols-3 gap-8">
                    {/* first box */}
                    <div className="w-full shadow-green-400 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 rolling-design">
                        <FaUserAlt size={70} color="green" className="w-20 mx-auto mt-[-3rem] bg-white" alt="" />
                        <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                        <p className="text-center text-4xl font-bold">$149</p>
                            <div className="text-center font-medium">
                                <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                                <p className="py-2 border-b mx-8">1 Granted User</p>
                                <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                            </div>
                            <button className="bg-yellow-400 rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
                    </div>

                    {/* second box */}
                    <div className="w-full bg-gray-100 shadow-green-400 shadow-2xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-500 rolling-design">
                    <FaUserAlt size={70} color="green" className="w-20 mx-auto mt-[-3rem] bg-transparent" alt="" />
                        <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                        <p className="text-center text-4xl font-bold">$149</p>
                            <div className="text-center font-medium">
                                <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                                <p className="py-2 border-b mx-8">1 Granted User</p>
                                <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                            </div>
                            <button className="bg-green-500 rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
                    </div>

                    {/* third box */}
                    <div className="w-full shadow-green-400 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 rolling-design">
                    <FaUserAlt size={70} color="green" className="w-20 mx-auto mt-[-3rem] bg-white" alt="" />
                        <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                        <p className="text-center text-4xl font-bold">$149</p>
                            <div className="text-center font-medium">
                                <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                                <p className="py-2 border-b mx-8">1 Granted User</p>
                                <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                            </div>
                            <button className="bg-yellow-400 rounded-md font-medium my-6 mx-auto px-6 py-3">Start Trial</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Cards;