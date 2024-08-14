# Fibonacci Clock and Alarm Application

## Overview

This React-based application displays the current time in three different cities, calculates the angle between clock hands, and manages alarms based on the Fibonacci sequence.

## Design Pattern

**MVVM (Model-View-ViewModel)**

- **Model**: Manages data and logic (e.g., `FibonacciAlarm`).
- **View**: UI components like `AlarmDisplay` and `CityTime`.
- **ViewModel**: Connects the Model to the View, managing state and UI updates using React's hooks.

## Assumptions

1. **City Time Zones**: Predefined and manually set.
2. **Fibonacci Sequence**: Starts with 1 hour, with alarms scheduled based on this sequence.
3. **User Notifications**: Alarms trigger a simple `alert` message.
4. **Progress Bar**: Implemented using pure CSS for simplicity.

## Installation and Setup

### Prerequisites

- **Node.js**: Version 14 or higher.
- **npm**: Bundled with Node.js.

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/fibonacci-clock.git

2. **Navigate to the Project Directory**:
   ```bash
   cd fibonacci-clock

3. **Start the development server**:
   ```bash
   npm run dev
