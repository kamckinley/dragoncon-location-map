## 🗺️ DragonCon Map

This project is an interactive location map designed to help attendees navigate DragonCon’s many hotels and event spaces. It’s built with React and models buildings, connections, and routes as a graph to make routing intuitive.

## Features

🔍 Start & End Selection – choose a starting building and destination from dropdowns.
🏨 Grouped by Building – locations are organized by building to reduce dropdown clutter.
🛤️ Routing Logic (in progress) – find paths between locations using building connections.
♿ Accessibility Mode (planned) – generate elevator-only routes for improved accessibility.
⬆️ Multi-Level Navigation (planned) – account for stairs, escalators, elevators, and skybridges.

## Planned Features

- **Expanded Map Coverage**: Add data for additional hotels (Marriott, Hilton, Sheraton, Westin), America's Mart, Peachtree Center, and MARTA stations.  
- **Accessibility Options**: Routing that prioritizes elevators over stairs/escalators.  
- **Path Visualization**: Show the computed route visually on a simple map view.  
- **Favorites / Frequent Routes**: Save common start and end points for quick access.  



## 🚀 Tech Stack

 React (frontend)
 JavaScript (routing + data structures)
 Nodes/Graph Modeling (custom JSON files for buildings & connections)

## 📂 Project Structure
/src
  App.jsx          # Main app logic
  /data
    buildings.js   # Building definitions
    nodes.js       # Location nodes & connections

## Getting Started

Clone the repo:
 git clone https://github.com/kamckinley/dragoncon-location-map.git
 cd dragoncon-map

Install dependencies:
 npm install

Start development server:
 npm start

## Roadmap

Building & node data model

Dropdown selection for start/end

Display selected route

Implement routing algorithm

Accessibility mode

Visual map display

