import React from 'react'

export default function Navigation() {

    return (
        <div className="fixed bg-slate-200 w-full p-2">
            <div className="container w-full mx-auto flex justify-between items-center">
                <span className="font-bold text-slate-500"><a href={"/"}>Logo</a></span>
                <span className="font-bold text-slate-500"><a href={"/contacts"}>Contact</a></span>
            </div>
        </div>
    )
}
