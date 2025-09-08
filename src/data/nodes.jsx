import { Building, NodeType } from "./buildings.js";

export const nodes = {
  // --Skybridges--
  hyattMarriottSkybridge: {
    name: "Hyatt-Marriott Skybridge",
    type: NodeType.SKYBRIDGE,
    building: Building.CONNECTOR,
    connections: ["hyattLobby"],
  },
  marriottHiltonSkybridge: {
    name: "Marriott-Hilton Skybridge",
    type: NodeType.SKYBRIDGE,
    building: Building.CONNECTOR,
    connections: [],
  },
  hyattPeachtreeCenterSkybridge: {
    name: "Hyatt-Peachtree Center Skybridge",
    type: NodeType.SKYBRIDGE,
    building: Building.CONNECTOR,
    connections: ["hyattLobby"],
  },
  marriottPeachtreeCenterSkybridge: {
    name: "Marriott-Peachtree Center Skybridge",
    type: NodeType.SKYBRIDGE,
    building: Building.CONNECTOR,
    connections: [],
  },

  // ---Hyatt---
  // floor nodes
  hyattLobby: {
    name: "Hyatt Lobby",
    type: NodeType.FLOOR,
    building: Building.HYATT,
    connections: ["hyattMarriottSkybridge", "hyattPeachtreeCenterSkybridge"],
  },
  hyattInternationalBallroom: {
    name: "Hyatt International Tower Ballroom Level",
    type: NodeType.FLOOR,
    building: Building.HYATT,
    connections: [
      "hyattInternationalBallroomNorth",
      "hyattInternationalBallroomSouth",
    ],
  },
  hyattInternationalExhibit: {
    name: "Hyatt International Tower Exhibit Level",
    type: NodeType.FLOOR,
    building: Building.HYATT,
    connections: [],
  },
  hyattAtriumBallroom: {
    name: "Hyatt Atrium Tower Ballroom Level",
    type: NodeType.FLOOR,
    building: Building.HYATT,
    connections: [
      "hyattAtriumCentennial1",
      "hyattAtriumCentennial234",
      "hyattAtriumRegency5",
      "hyattAtriumRegency67",
    ],
  },
  hyattAtriumExhibit: {
    name: "Hyatt Atrium Tower Exhibit Level",
    type: NodeType.FLOOR,
    building: Building.HYATT,
    connections: [],
  },
  hyattConference: {
    name: "Hyatt Conference Level",
    type: NodeType.FLOOR,
    building: Building.HYATT,
    connections: [],
  },

  // room nodes
  hyattInternationalBallroomNorth: {
    name: "Hyatt International Ballroom North",
    type: NodeType.ROOM,
    building: Building.HYATT,
    connections: ["hyattInternationalBallroom"],
  },
  hyattInternationalBallroomSouth: {
    name: "Hyatt International Ballroom South",
    type: NodeType.ROOM,
    building: Building.HYATT,
    connections: ["hyattInternationalBallroom"],
  },
  hyattAtriumCentennial1: {
    name: "Hyatt Centennial I",
    type: NodeType.ROOM,
    building: Building.HYATT,
    connections: ["hyattAtriumBallroom"],
  },
  hyattAtriumCentennial234: {
    name: "Hyatt Centennial II-IV",
    type: NodeType.ROOM,
    building: Building.HYATT,
    connections: ["hyattAtriumBallroom"],
  },
  hyattAtriumRegency5: {
    name: "Hyatt Regency V",
    type: NodeType.ROOM,
    building: Building.HYATT,
    connections: ["hyattAtriumBallroom"],
  },
  hyattAtriumRegency67: {
    name: "Hyatt Regency VI-VII",
    type: NodeType.ROOM,
    building: Building.HYATT,
    connections: ["hyattAtriumBallroom"],
  },

  // vertical nodes - stairs, escalator, elevator
};
