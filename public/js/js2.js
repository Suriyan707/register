// Define an array to store room data
let rooms = [];

// Function to add a room
function addRoom() {
    // Generate a unique room ID
    let roomId = rooms.length + 1;
    
    // Add the room to the array
    rooms.push({ id: roomId, name: `Room ${roomId}` });
    
    // Update the room list in the HTML
    updateRoomList();
}

// Function to update the room list in the HTML
function updateRoomList() {
    let roomListElement = document.getElementById('room-list');
    roomListElement.innerHTML = ''; // Clear the current list
    
    // Loop through the rooms array and create list items for each room
    rooms.forEach(room => {
        let listItem = document.createElement('li');
        listItem.textContent = room.name;
        roomListElement.appendChild(listItem);
    });
}
