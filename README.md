# Jurysoft Machine Test Backend Post

Scenario:
Suppose you are making an ecommerce system where you are
handling the whole development of the backend. The products
you are going to sell in the website/application will have a
category for that you have to store id and name. For each
category there will be N numbers of products. Product will contain
name, price, stock, selling count, category. As a Database you
have to use arrays.

What needs to be done?
1. Single api to login for user and admin using username and
password. If the username is user@gmail.com and
password is 1234 then the user should be able to login as
user if admin@gmail.com and password 1234 then it should
login as admin.
2. Api to create (only for admin), update (only for admin),
delete (only for admin) (If there is any product in that
category then it should not delete), fetch all with search
(for all), fetch single by id for category (for all).
3. Api to create (only for admin), update (only for admin),
delete (only for admin) (If the product has been added to
cart then it should not be deleted), fetch all with search
(for all), fetch single by id for products (for all).
4. Api for adding the product to cart by user
5. Api for removing from cart by user

6. Api to increase the quantity in cart by user

Jurysoft Machine Test Backend Post

What should be submitted?
1. Zipped code (Laravel / Node js / Python)
2. Postman collection zip
Time allotted: 2 Hours

## Installation

1. Install dependencies:


## Usage

### Running the Server

To start the server, run the following command:

run server: npm start

### Running the Client

To run the client, use the following command:

run client: npm run dev

### Other Commands

To get node_modules

npm install

### Endpoints

#### User Signup
- **Method:** POST
- **URL:** http://localhost:4000/user/signup
- **Description:** Endpoint for user registration/signup.

#### User Login
- **Method:** GET
- **URL:** http://localhost:4000/user/login
- **Description:** Endpoint for user login.

#### Product and Category CRUD Operations
- **Method:** GET/POST/PUT/PATCH/DELETE
- **URL:** http://localhost:4000/user
- **Description:** Endpoint to perform CRUD operations for products or categories. Depending on the request type and parameters, you can create, retrieve, update, or delete products or categories.

