# Workout

### Exercise One: Set up Firebase
1. Open the following [link](https://firebase.google.com/docs/web/setup) and follow these steps.
2. Goto the firebase [console](https://console.firebase.google.com).
3. Setup a new project. The name of your project will be the URL.
<p><img src="/img/new_project.png" alt="" data-canonical-src="/img/new_project.png" /></p>

4. Add a Firebase app on the Firebase console.
<p><img src="/img/firebase_app.png" alt="" data-canonical-src="/img/irebase_app.png" /></p>

1. Add Firebase SDKs and [initialize](https://firebase.google.com/docs/web/setup#add-sdks-initialize) Firebase. Use the Hosting URLs and copy the folliwng:

   ```html 
   <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
   <script src="/__/firebase/8.0.1/firebase-app.js"></script>
   <!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
   <script src="/__/firebase/8.0.1/firebase-analytics.js"></script>
   <!-- Add Firebase products that you want to use -->
   <script src="/__/firebase/8.0.1/firebase-auth.js"></script>
   <script src="/__/firebase/8.0.1/firebase-firestore.js"></script>
   ``` 
   * Copy the above into the following files:
     * src/public/home.html
     * src/public/index.html
     * src/public/login.html
2. On VisualCode open a new terminal and type the following.
   ```shell
   foo@bar:~$ npm install --save firebase
   foo@bar:~$ npm install -g firebase-tools
   ```
3. Install [CLI](https://firebase.google.com/docs/hosting/quickstart#initialize) and deploy to Firebase Hosting
4. Initialize your Firebase project.
   ```shell
   foo@bar:~$ firebase init hosting
   ```
5.  dd

   