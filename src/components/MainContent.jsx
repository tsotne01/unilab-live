import React, { useCallback, useEffect, useState } from 'react'
import Button from './Button'
import { dogAndCat } from '../api/api';

const MainContent = () => {
    const [images, setImages] = useState([]);
    const [gameState, setGameState] = useState("initial")
    const [score, setScore] = useState(0);
    const handleImageClick = (type) => {
        console.log(type);
        if (type === "dog") {
            setScore((prev) => prev + 1);
            dogAndCat().then((data) => {
                console.log(data);
                setImages(() => data)
            })
        }
    }

    useEffect(() => {
        dogAndCat().then((data) => {
            console.log(data);
            setImages(() => data)
        })
    }, [])

    if (gameState === "finished") {

        return (
            <>
                <h2 className='font-bold text-3xl whitespace-nowrap  mb-8'>Start dog finder game</h2>
                <p className='inline-block mb-8 text-center'>You will have to choose an image of a
                    dog from 5 total pictures, try to get the highest score</p>
                <Button onClick={() => setGameState(() => "initial")}>Try Again</Button>
            </>
        )
    }
    if (gameState === "started") {

        return (
            <>
                <div className='flex gap-12 items-center justify-center mb-12'>
                    {
                        images.length > 0 && images.map((image) => {
                            return (
                                <button key={image.url} onClick={() => {
                                    // console.log(image.type);
                                    handleImageClick(image.type)
                                }}>
                                    <img className='blur-md w-[190px] h-[190px]' src={image.url} />
                                </button>
                            )
                        })
                    }
                </div>
                <span>Score: {score}</span>
                < Button onClick={() => setGameState(() => "finished")}> Finish</Button >
            </>
        )
    }

    if (gameState == "initial") {
        return (<div className='mx-auto w-fit max-w-[400px]'>
            <h2 className='font-bold text-3xl whitespace-nowrap  mb-8'>Start dog finder game</h2>
            <p className='inline-block mb-8 text-center'>You will have to choose an image of a
                dog from 5 total pictures, try to get the highest score</p>
            <Button onClick={() => setGameState(() => "started")}>Start Game</Button>
        </div>
        )
    }
}

export default MainContent