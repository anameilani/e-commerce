# e-commerce


## Geting Started
- npm init
- npm install
- Run `nodemon app.js or npm run dev` to start the server.
- Run `live-server --host=localhost` to start the client

## Feature
- Register
- Login
- Add Item
- Update Item
- Delete Item
- View Detail Item
- Add to Cart
- Checkout


## Routes
### User Route
#### Register

    URL: /users/register
    Method: POST
    Headers: none
    params: none
    body: {name: String, email: String, password: String}
    Success Response: 
        Code 201:
            {
                "_id":"5d10a8fb6776a53e8f8f12ed",
                "name":"Ana",
                "email":"ana@mail.com",
                "password":"$2b$10$iZWscBJjoGT8keRIOthySuwOIFMgIpHChImQtG5ZqdaJ/.MxnD8Fi",
                "__v":0
            }
    Error Response:
        Code 500:
        Content: {message: <error message>}

#### Login

    URL: /users/login
    Method: POST
    Headers: none
    params: none
    body: {email: String, password: String}
    Success Response: 
        Code 200:
            {
                "token": 
                "userId":"5d10a8fb6776a53e8f8f12ed",
                "name":"Ana",
            }
    Error Response:
        Code 404:
        Content: {message: 'Wrong Email/Password}


### Item Route

#### Create Item

    URL: /items
    Method: POST
    Headers: token
    Authenticate : YES
    params: none
    body: {name: String, image:String, price: Number, stock: Number, owner: ObjectId}
    Success Response: 
        Code 201:
            {
                "_id":"5d10ac4549ae974089eda01b",
                "name":"laptop",
                "image":"https://id-test-11.slatic.net/original/1a41141c912c0b5e8eb635b76e4da43a.jpg",
                "price":8000000,
                "stock":2,
                "owner":"5d10a8fb6776a53e8f8f12ed",
                "__v":0
            }
    Error Response:
        Code 500:
        Content: {message: <error message>}

#### Get All Items

    URL: /items
    Method: GET
    Headers: token
    params: none
    body: none
    Success Response: 
        Code 200:
            {
                "_id":"5d10ac4549ae974089eda01b",
                "name":"laptop",
                "image":"https://id-test-11.slatic.net/original/1a41141c912c0b5e8eb635b76e4da43a.jpg",
                "price":8000000,
                "stock":2,
                "owner":"5d10a8fb6776a53e8f8f12ed",
                "__v":0
            }
    Error Response:
        Code 500:
        Content: {message: <error message>}

#### Get Item with specific owner Id

    URL: /items/:id
    Method: GET
    Headers: token
    params: ownerId
    Authenticate : YES
    body: none
    Success Response: 
        Code 200:
            {
                "_id":"5d10ac4549ae974089eda01b",
                "name":"laptop",
                "image":"https://id-test-11.slatic.net/original/1a41141c912c0b5e8eb635b76e4da43a.jpg",
                "price":8000000,
                "stock":2,
                "owner":"5d10a8fb6776a53e8f8f12ed",
                "__v":0
            }
    Error Response:
        Code 500:
        Content: {message: <error message>}

#### Get Details Item

    URL: /items/details/:id
    Method: GET
    Headers: token
    params: itemId
    Authenticate : YES
    body: none
    Success Response: 
        Code 200:
            {
                "_id":"5d10ac4549ae974089eda01b",
                "name":"laptop",
                "image":"https://id-test-11.slatic.net/original/1a41141c912c0b5e8eb635b76e4da43a.jpg",
                "price":8000000,
                "stock":2,
                "owner":"5d10a8fb6776a53e8f8f12ed",
                "__v":0
            }
    Error Response:
        Code 500:
        Content: {message: <error message>}

#### Update Data Item

    URL: /items/:id
    Method: PATCH
    Headers: token
    params: itemId
    Authenticate : YES
    Authorization: YES
    body: {price: Number, stock: Number}
    Success Response: 
        Code 200:
            {
                "_id":"5d10ac4549ae974089eda01b",
                "name":"laptop",
                "image":"https://id-test-11.slatic.net/original/1a41141c912c0b5e8eb635b76e4da43a.jpg",
                "price":8000000,
                "stock":2,
                "owner":"5d10a8fb6776a53e8f8f12ed",
                "__v":0
            }
    Error Response:
        Code 500:
        Content: {message: <error message>}

#### Update Stock Item

    URL: /items/updatestock/:id
    Method: PATCH
    Headers: token
    params: itemId
    Authenticate : YES
    Authorization: YES
    body: {price: Number, stock: Number}
    Success Response: 
        Code 200:
            {
                "_id":"5d10ac4549ae974089eda01b",
                "name":"laptop",
                "image":"https://id-test-11.slatic.net/original/1a41141c912c0b5e8eb635b76e4da43a.jpg",
                "price":8000000,
                "stock":2,
                "owner":"5d10a8fb6776a53e8f8f12ed",
                "__v":0
            }
    Error Response:
        Code 500:
        Content: {message: <error message>}

#### Delete Item

    URL: /items/:id
    Method: DELETE
    Headers: token
    params: itemId
    Authenticate : YES
    Authorization: YES
    body: none
    Success Response: 
        Code 200:
            {
                "_id":"5d10ac4549ae974089eda01b",
                "name":"laptop",
                "image":"https://id-test-11.slatic.net/original/1a41141c912c0b5e8eb635b76e4da43a.jpg",
                "price":8000000,
                "stock":2,
                "owner":"5d10a8fb6776a53e8f8f12ed",
                "__v":0
            }
    Error Response:
        Code 500:
        Content: {message: <error message>}

### Cart Route

### Transaction Route