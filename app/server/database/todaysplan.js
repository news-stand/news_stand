/* 

** WHEN I LOG IN I WANT TO SEE ARTICLES FROM THE TOPICS AND SOURCES I'M INTERESTED IN **
  - A user logs in via google chrome
    - GET request to DB for user document associated with that googleID (userDoc)
    - then User's topics are pulled from userDoc and stored for future API GET request (userTopics)
    - then users's sources are pulled from userDoc and stored for future API get request (userSourcesModels)
    - then normal GET request with the customized paramaters (userTopics and the source IDs from userSourcesModels)
  - news stories are rendered upon receiving information from the userTopics/userSources GET request
  - Topics and Sources boxes are rendered appropriately (with topic strings and sources names) for user to see


------------------------------------------------------------

** WHEN I CLICK 'SAVE CONFIGURATION' I WANT THE CURRENT TOPICS AND SOURCES TO BE SET AS MY PERMANENT TOPICS AND SOURCES **
  - User is logged in and reading news, browsing topics, and likes the search results he is seeing
  - Clicks 'Save Configuration' or 'Make Default' to save the sources/topics
    - Current GET request (or other?) is parsed and all topics are pulled as an array of strings (topicsArray)
    - Current GET request (or other?) is parsed and all source IDs are pulled as an array of strings (sourceIdArray)
      - SourceIdArray is looped over and a source DB query is performed for each source document
      - A new array is created with each source document (sourceDocArray)
    - User document is looked up/found using current loggedIn userID and their preferred topics is reset to topicsArray
    - User's preferred sources is reset to SourceDocArray
  - User recieves confirmation that their favorite topics and sources were set 

  
------------------------------------------------------------

** WHEN I CLICK 'favorite/like' ON AN ARTICLE, I WANT THAT ARTICLE TO BE SAVED FOR ME TO LOOK AT LATER **

  - 



*/ 