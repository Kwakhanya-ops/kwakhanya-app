import React from "react"
import "./App.css"

function App() {
  return (
    <div className="app-container">
      <header className="top-bar">
        Kwakhanya Drivers Training
      </header>

      <div className="main-content">
        <h1 className="main-title">Kwakhanya Drivers Training</h1>
        <p className="subtitle">South Africa's Premier Driving School Booking Platform</p>

        <button className="help-button">🌐 Get Help</button>

        <form className="search-form">
          <div className="form-group">
            <label>Location</label>
            <input type="text" placeholder="Enter your city or area" />
          </div>

          <div className="form-group">
            <label>Service Requesting</label>
            <select>
              <option>Select service type</option>
            </select>
          </div>

          <button type="submit" className="submit-button">Find Driving Schools</button>
        </form>
      </div>
    </div>
  )
}

export default App
