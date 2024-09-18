import React, { useState } from 'react';
import './App.css'; // Import CSS for custom styling

// Task 1: Small Programming Learning Tasks
function Task1() {
    const [isVisible, setIsVisible] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true);
    const [text, setText] = useState('');
    const [components, setComponents] = useState([]);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const items = ['Apple', 'Banana', 'Cherry'];

    return (
        <div className="task-card">
            <h2>Task 1: Small Programming Learning Tasks</h2>
            
            {/* Display Simple JSX */}
            <div className="task-section">
                <h3>Display Simple JSX</h3>
                <p>Hello, React!</p>
            </div>

            {/* Display an Array of Records */}
            <div className="task-section">
                <h3>Display an Array of Records</h3>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Show/Hide Element on Screen */}
            <div className="task-section">
                <h3>Show/Hide Element</h3>
                <button className="unique-button" onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? 'Hide' : 'Show'}
                </button>
                {isVisible && <p className="fade-in">This is a toggled paragraph.</p>}
            </div>

            {/* Enable/Disable a Button */}
            <div className="task-section">
                <h3>Enable/Disable a Button</h3>
                <input
                    type="checkbox"
                    onChange={() => setIsDisabled(!isDisabled)}
                />
                Enable Button
                <button className="unique-button" disabled={isDisabled}>Click Me!</button>
            </div>

            {/* 2-Way Data Binding */}
            <div className="task-section">
                <h3>2-Way Data Binding</h3>
                <input
                    className="styled-input"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <p>{text}</p>
            </div>

            {/* Dynamically Add Child Components */}
            <div className="task-section">
                <h3>Dynamically Add Child Components</h3>
                <button className="unique-button" onClick={() => setComponents([...components, <p key={components.length}>New Component {components.length + 1}</p>])}>
                    Add Component
                </button>
                <div className="dynamic-components">
                    {components}
                </div>
            </div>

            {/* Do Sum of Two Numbers */}
            <div className="task-section">
                <h3>Sum of Two Numbers</h3>
                <input
                    className="styled-input"
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(Number(e.target.value))}
                />
                <input
                    className="styled-input"
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(Number(e.target.value))}
                />
                <p>Sum: {num1 + num2}</p>
            </div>
        </div>
    );
}

// Task 2: Create a Counter
function Task2() {
    const [count, setCount] = useState(0);

    return (
        <div className="task-card">
            <h2>Task 2: Create a Counter</h2>
            <div className="counter-container">
                <button className="unique-button" onClick={() => setCount(count - 1)}>Decrease</button>
                <span className="counter-display">{count}</span>
                <button className="unique-button" onClick={() => setCount(count + 1)}>Increase</button>
                <button className="unique-button reset-button" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

// Task 3: Build Search Filter
function Task3() {
    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'];
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="task-card">
            <h2>Task 3: Build Search Filter</h2>
            <input
                className="styled-input"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p>Found {filteredItems.length} items</p>
            <ul className="filtered-list">
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

// Main App Component
function App() {
    return (
        <div className="app-container">
            <h1>React Learning Tasks</h1>
            <Task1 />
            <Task2 />
            <Task3 />
        </div>
    );
}

export default App;
