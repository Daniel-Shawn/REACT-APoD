import { useState, useEffect } from "react"


function Main(props){
    const {data} = props
    const [isActive, setIsActive] = useState(false)
    const [isDark, setIsDark] = useState(false)

    return(
        <>
        <div className="switchBox">
            <label className="switch" onClick={(e) => {
                e.preventDefault()
                setIsActive((currentState) => {
                    if (currentState){
                        e.target.classList.remove('active')
                        
                    }
                    else {
                        e.target.classList.add('active')
                    }
                    return !isActive
                })
                setIsDark((currentState) => {
                    if (currentState){
                        document.body.children[0].classList.remove('dark')
                    }
                    else {
                        document.body.children[0].classList.add('dark')
                    }
                    return !isDark
                })
            }}>
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
        </div>

        <div className="imageContainer">
            <img src={data?.hdurl} className="bg-image" alt={data?.title || "bg-image"}/>
        </div>
        </>
    )
}

export default Main

