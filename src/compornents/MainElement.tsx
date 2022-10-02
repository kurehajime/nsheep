import "./MainElement.css"
import { useTimer } from 'use-timer'
import { useEffect } from "react"
import SheepElement from "./SheepElement"


export default function MainElement() {
    const { time: time, start: start } = useTimer({ interval: 1000 * 5 })

    useEffect(() => {
        start()
    }, [])

    return (
        <div className='main'>
            <div className="title">羊が{Math.ceil(time / 2)}匹</div>
            <SheepElement
            ></SheepElement>
        </div>
    )
}