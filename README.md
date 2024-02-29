LRU stands for "Least Recently Used," and it is a caching strategy used in computer science to manage the storage of data. The basic idea is to keep track of the order in which items are accessed or used. In the context of an LRU cache:

1.)	Least Recently Used:
* The "least recently used" item is the one that has not been accessed for the longest time.

2.) Cache:
* A cache is a place where data is temporarily stored to make it quicker to retrieve.

How LRU Cache Works:

Imagine you have a limited amount of space in your cache, and you want to store some items. Each time you access or use an item, it becomes the most recently used item. If the cache is full and you want to add a new item, you need to remove the least recently used item to make room.

Example:

1.) Empty Cache:
*  Cache is empty, and you access Item A. A is now the most recently used item.

2.) Cache with A:
* Cache has Item A. You access Item B. B becomes the most recently used item, and A is now the second most recently used.

3.) Cache with B and A:
* Cache has both A and B. You access Item C. C becomes the most recently used item, B is now second, and A is third.

4.) Cache Full - Remove Least Recently Used:
* If you try to add Item D and the cache is full, the least recently used item (A) is removed to make space for D. Now, the order is D (most recent), C, and B.

The goal of using LRU is to optimize the cache for the most frequently used items, ensuring that the data you need more often is readily available in the cache.


How to Run the LRU Cache APP:

Backend Setup:
1.) Navigate to the backend directory:
* cd backend
2.) Start the server using the following command:
* go run main.go
This command launches the backend server for the LRU cache.

Frontend Setup:
1.) Move to the frontend/cache-app directory:
* cd frontend/cache-app
2.) Install required modules using npm:
* npm install
This command installs the necessary dependencies for the frontend application.
3.) Start the frontend server:
* npm start

This command initiates the frontend development server, allowing you to interact with the LRU cache app.