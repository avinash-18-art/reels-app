## Reels App
This is a full-stack mobile application that allows users to upload and play reels seamlessly. The backend is built with Node.js and Express, while the frontend is built using React.

## Features
* Upload Reels: Users can upload video files (reels) with a title.
* Play Reels: Users can view and play uploaded reels in a list.
* Video Playback: Smooth video playback of uploaded reels.

## Technologies Used
Backend (Node.js + Express) 
* Express.js: For building the RESTful API.
* Multer: For handling file uploads.
* MongoDB + Mongoose: For storing reel metadata (title and video URL).
* Dotenv: For managing environment variables.
* Cors: For enabling Cross-Origin requests.

## Frontend (React) 
* React: For building the user interface.
* Axios: For making HTTP requests to the backend API.
## Project Structure :
Backend (Node.js + Express) 

reel-app-backend/
├── controllers/
│   └── reelController.js         # Handles the logic for uploading and retrieving reels
├── models/
│   └── reelModel.js              # MongoDB schema for storing reel metadata
├── routes/
│   └── reelRoutes.js             # Defines API routes for reels
├── uploads/                      # Directory where uploaded reels are stored
├── app.js                        # Main entry point for the backend server
├── package.json                  # Project dependencies and scripts
├── .env                          # Environment variables (e.g., MongoDB URI)

## Frontend (React) :

reel-app-frontend/
├── public/
│   └── index.html                # HTML entry point
├── src/
│   ├── components/
│   │   ├── ReelUpload.js         # Component for uploading reels
│   │   ├── ReelPlayer.js         # Component for playing reels
│   ├── App.js                    # Main React component
│   ├── index.js                  # Entry point for the React app
├── package.json                  # Project dependencies and scripts

## Getting Started
* Prerequisites
* Node.js: Install Node.js
* MongoDB: Make sure MongoDB is installed locally or use a cloud service like MongoDB Atlas
* React: Create the frontend using create-react-app or clone the provided structure.

* git clone https://github.com/avinash-18-art/reels-app.git


## API Endpoints
* Base URL: http://localhost:5000/api/reels
* GET /: Retrieve all uploaded reels.
* POST /upload: Upload a new reel.
* Body: FormData containing title (String) and video (File).

## Running the App
* Start the backend server: npm start in the reel-app-backend directory.
* Start the frontend app: npm start in the reel-app-frontend directory.
* Navigate to http://localhost:3000 to access the frontend.

## License
* This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing
* Fork the repository.
* Create a new branch (git checkout -b feature-branch).
* Commit your changes (git commit -m 'Add some feature').
* Push to the branch (git push origin feature-branch).
* Create a new Pull Request.

## Contact
* For any questions or feedback, feel free to reach out:
* Email: chauhanavinash36869@gmail.com
* GitHub: avinash-18-art

