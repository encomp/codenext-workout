# Workout

### Exercise Three: Setting up Firestore
1. What is a [database](https://en.wikipedia.org/wiki/Database)?
   * Is an organized collection of data, generally stored and accessed electronically from a computer system.
2. What is a [NoSQL](https://www.youtube.com/watch?v=v_hR4K4auoQ) database?
   * A NoSQL database provides a mechanism for storage and retrieval of data that does not have a strict schema.
   <p><img src="/img/sql_schema.png" alt="" data-canonical-src="/img/sql_schema.png" /></p>

3. What is [Firestore](https://www.youtube.com/watch?v=2Vf1D-rUMwE)?
   * Is a document database.
   * The data is stored in a tree structure.
  
4.  Create a Cloud Firestore database. Follow this [instructions](https://firebase.google.com/docs/firestore/quickstart).
   * Goto Firebase console, select Cloud Firestore and create a new database.
   <p><img src="/img/create_firestore.png" alt="" data-canonical-src="/img/create_firestore.png" /></p>

   * Select test mode.
   <p><img src="/img/test_mode.png" alt="" data-canonical-src="/img/test_mode.png" /></p>

   * Finally select a region and enable it.
   <p><img src="/img/enable_database.png" alt="" data-canonical-src="/img/enable_database.png" /></p>

5. We need to define how we will store the data of our exercise card.
   <p><img src="/img/exercise_card.png" alt="" data-canonical-src="/img/exercise_card.png" /></p>

6. Here are all the collections that we will need.
   <p><img src="/img/collections.png" alt="" data-canonical-src="/img/collections.png" /></p>