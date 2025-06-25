// src/App.tsx
import React from "react"

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <header className="w-full py-4">
        <h1 className="text-center text-2xl font-bold text-blue-600">Kwakhanya Drivers Training</h1>
      </header>

      <div className="text-center mt-4">
        <h2 className="text-3xl font-bold">Kwakhanya Drivers Training</h2>
        <p className="text-gray-600 mt-2">
          South Africa's Premier Driving School Booking Platform
        </p>

        <button className="mt-6 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
          🌐 Get Help
        </button>
      </div>

      <form className="mt-10 w-full max-w-md bg-white shadow-md rounded px-6 py-6 space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            placeholder="Enter your city or area"
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Service Requesting
          </label>
          <select className="w-full px-4 py-2 border rounded">
            <option>Select service type</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Find Driving Schools
        </button>
      </form>
    </main>
  )
}

export default App
