# Netflix Clone

A Netflix clone built with React, TypeScript, and The Movie Database (TMDB) API. Features user authentication with Firebase.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Get TMDB API Key:
- Go to [TMDB website](https://www.themoviedb.org/)
- Create an account and log in
- Go to Settings > API and request an API key
- Copy your API key

3. Set up Firebase:
- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project
- Enable Authentication (Email/Password)
- Go to Project Settings > General
- Scroll down to "Your apps" and click the web icon (</>)
- Register your app and copy the Firebase config

4. Create a `.env` file in the root directory and add:
```
REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
REACT_APP_TMDB_BASE_URL=https://api.themoviedb.org/3
REACT_APP_IMAGE_BASE_URL=https://image.tmdb.org/t/p

REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
```

5. Start the development server:
```bash
npm start
```

## Deployment

1. Install Firebase CLI:
```bash
sudo npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Update `.firebaserc` with your project ID:
```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```

4. Build the project:
```bash
npm run build
```

5. Deploy to Firebase:
```bash
firebase deploy
```

Your app will be deployed to `https://your-project-id.web.app`

## Features

- Netflix-like UI with rows of movies/shows
- Dynamic navbar that changes on scroll
- Movie/Show data from TMDB API
- User authentication (signup, login, logout)
- Protected routes
- Profile management
- Responsive design
- Smooth animations and transitions

## Technologies Used

- React
- TypeScript
- Styled Components
- React Router
- Firebase Authentication
- Firebase Hosting
- Axios
- TMDB API
