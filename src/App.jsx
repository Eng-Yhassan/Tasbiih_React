import { useState } from "react"

function App() {
    const [count, setCount] = useState(0)

    function incriment() {
        

        setCount(count + 1)
    }

    function Deccriment() {
        if (count > 0) {

            setCount(count - 1)
        }
    }

    function Reset() {
        setCount(0)
    }

    const getEmoji = () => {
        if (count === 10) return "🎉";
        if (count === 20) return "🌟";
        if (count === 30) return "🥗";
        if (count === 40) return "💕";
        if (count === 50) return "👌";
        if (count === 100) return "❤️";
        return "";
    };

    return (
        <div className="flex justify-center h-screen flex-col ml-[30%]">
            <p className="ml-64 mb-10 text-5xl font-bold">{getEmoji()}</p>

            <h1 style={{
                color: count === 10 || count === 20 || count === 30
                    || count === 40 || count === 50 || count === 100 ? "red" : ""
            }}
                className="ml-64 mb-10 text-5xl font-bold">{count}</h1>


            <div className="space-x-10">

                <button onClick={incriment} className="bg-blue-600 px-10 py-3 rounded-lg  text-white text-2xl">incriment</button>
                <button onClick={Deccriment} className="bg-blue-600 px-10 py-3 rounded-lg  text-white text-2xl">Deccriment</button>
                <button onClick={Reset} className="bg-blue-600 px-10 py-3 rounded-lg  text-white text-2xl">Reset</button>
            </div>

        </div>
    )
}

export default App