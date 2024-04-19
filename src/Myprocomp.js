import { useCallback, useEffect, useState } from "react"
import React from 'react'

const Mypro = () => {
    const [password, setPassword] = useState('')
    const [length, setLength] = useState(8)
    const [splchar , setSplchar] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const  copymsg = () => {
        navigator.clipboard.writeText(password)
        alert('Password copied to clipboard')
    }
    const passGen = useCallback(() => {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let spcl = '!@#$%^&*()_+'
        let nums = '123456789'
        let pass = ''
        if (splchar) {
            chars += spcl
        }
        if (numbers) {
            chars += nums
        }
        for(let i = 0; i < length; i++) {
            pass += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        setPassword(pass)
    },[splchar, numbers, length])


    useEffect(() => {
        passGen()
    }, [length, splchar, numbers, passGen])

    return (
        <div className="bg-black w-screen h-screen flex justify-center items-center">
            <div className="bg-slate-700 shadow-md p-10">
                <div className="font-bold text-center text-white text-4xl">Password Generator</div>
                <form className="flex flex-col items-center">
                <div className="flex">
                    <input 
                        type="text" 
                        className=" w-full p-2 m-2 text-center" 
                        placeholder="Password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        className="bg-blue-500 p-2 m-2 hover:bg-blue-700"
                        onClick={copymsg}>copy</button>
                </div>
                    <div className="flex items-center">
                        <input
                            type="range"
                            className="w-1/4 p-2 m-2"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            min="8"
                            max="100"
                        />
                        <label className="text-white">{length}</label>
                        <input
                            type="checkbox"
                            className="m-2"
                            checked={splchar}
                            onChange={(e) => setSplchar(e.target.checked)}
                        />
                        <label className="text-white">Special Characters</label>
                        <input
                            type="checkbox"
                            className="m-2"
                            checked={numbers}
                            onChange={(e) => setNumbers(e.target.checked)}
                        />
                        <label className="text-white">Numbers</label>
                    </div>
                    <button
                        type="button"
                        className="bg-blue-500 p-2 m-2"
                        onClick={passGen}
                    >
                        Generate
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Mypro
