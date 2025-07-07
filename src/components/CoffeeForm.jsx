import { useState } from 'react'
import { coffeeOptions } from "../utils"

export default function CoffeeForm() {
    const [showCoffeeTypes, setShowCoffeeTypes] = useState(false)
    const [selectedCoffee, setSelectedCoffee] = useState(null)


    return (
        <>
            <div className="section-header">
                <i className="fa-solid fa-pencil" />
                <h2>Start Tracking Today</h2>
            </div>
            <h4>Select coffee type</h4>
            <div className="coffee-grid">
                {coffeeOptions.slice(0, 5).map((option, optionIndex) => {
                    return (
                        <button onClick={() => {
                            setSelectedCoffee(option.name)
                            setShowCoffeeTypes(false)
                        }} className={"button-card " + (selectedCoffee === option.name ? 'coffee-button-selected' : '')} key={optionIndex}>
                            <h4>{option.name}</h4>
                            <p>{option.caffeine} mg</p>
                        </button>
                    )
                })}
                <button onClick={() => {
                    setShowCoffeeTypes(true)
                    setSelectedCoffee(null)
                }} className={"button-card " + (showCoffeeTypes ? 'coffee-button-selected' : '')}>
                    <h4>Other</h4>
                    <p>n/a</p>
                </button>
            </div>
            {
                showCoffeeTypes &&
                <select onChange={(e) => {
                    setSelectedCoffee(e.target.value)
                }} id="coffee-list" name="coffee-list">
                    <option value={null}>Select type</option>
                    {coffeeOptions.map((option, optionIndex) => {
                        return (
                            <option value={option.name} key={optionIndex}>
                                {option.name} ({option.caffeine}mg)
                            </option>
                        )
                    })}
                </select>
            }
            <h1>Add the cost ($)</h1>
            <input type="number" className="w-full" placeholder="4.50" />
            <h4>Time since consumption</h4>
            <div className="time-entry">
                <div>
                    <h6>Hours</h6>
                    <select id="hours-select">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((hour, hourIndex) => {
                            return (
                                <option key={hourIndex} value={hour}>{hour}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <h6>Minutes</h6>
                    <select id="mins-select">
                        {[0, 5, 15, 30, 45].map((minute, minuteIndex) => {
                            return (
                                <option key={minuteIndex} value={minute}>{minute}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <button>Add Entry</button>
        </>
    )
}