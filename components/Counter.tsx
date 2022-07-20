import { useState } from "react"


export default function Counter({ defaultCounter, description }: { defaultCounter: number, description: string }) {

    const [count, setCount] = useState(defaultCounter)
    const [incrementer, setIncrementer] = useState(1)

    return (
        <div>
            <p>{description}</p>
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <div>
                    <label htmlFor="number">Incrementer:</label>
                    <input id="number" value={incrementer} onChange={(e) => { setIncrementer(parseInt(e.target.value) || 0); }} type="text" />
                </div>
                <button aria-label="Decrement counter" onClick={() => setCount(count - incrementer)}>-</button>
                <div >
                    Current count:{count}
                </div>
                <button aria-label="Increment counter" onClick={() => setCount(count + incrementer)}>+</button>
            </div>
        </div>
    )
}