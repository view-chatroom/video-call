importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

// Initialize Aplu
const apluPushConfig = {
    apiKey: "AIzaSyD50PA0t7xgQMhvAnX2J73wIn-QmxWt5F8",
	authDomain: "aplu-j.firebaseapp.com",
	projectId: "aplu-j",
	storageBucket: "aplu-j.firebasestorage.app",
	messagingSenderId: "1032257200771",
	appId: "1:1032257200771:web:8b292231ecad118038b1b6"
};

try {
    importScripts('https://push.aplu.io/import-aplu-messaging.js');
} catch (err) {
    console.warn("Couldn't load aplu-script, falling back: ", err);
}