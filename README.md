This is Frontend Developer Take Home assesssment.
It implements the Table Management Feature of a Restaurant.

Features implemented are:

- Authentication
- An admin flow for setting discount prices
- Table reservation
- Route guards based on user roles
- Basic error handling

### 1. Authentication

Using firebase as my database, I built an authentication flow to identify a new user and authorize existing user to gain access to the page depending on their roles (customer or admin).

### 2. Admin Flow

I setup an admin part of the application to simulate a real world experience where an admin (maybe the owner of the restaurant or the manager) can easily update:

- The price of each table when there is discount being offered
- The price of a given number of tables when there is a discount
- The number of tables for which a discount is available
  If there's a discount of 2 for 150 dollars, it can be easily updated to 3 for $250 if necessary and if the price per table changes at any point, an admin can easily make those updates and it get reflected on th customer's view.

##### PS: There can only be one admin account:

email: cordelia@breeze.com
password: 123456

### 3. Table Reservation

After a user creates an account and login on the application and view the tables aavailable in the restaurant.
A customer can:

- select a table only if the table is vacant (hasn't already been booked)
- see the discount available at the time of login.
- select multiple tables and see all the selected tables as well as their total cost after the discount has been applied.
- unselect/delete an already selected table

### 4. Route guards based on user roles

Once a user logs in, the user's role is immediately verified and necessary route guards are initiated.
- A user who has the role of amin can only have access to the admin screen to update discount settings.
- A user who has the role of customer can only view tables and has only access to the '/home' route.
- If a user who isn't an admin routes to the '/admin' route, he is immediately redirected to the '/home' route and vice-versa.

### 5. Basic error handling
To ensure that users are kept in the loop and can understand what has gone wrong when there is an error, I implemented basic error handling.
