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
| Route             | HTTP       | Description                              | Success Res        | Error Res  |
|-------------------|:-----------|:-----------------------------------------| :------------------| :----------|
| /users/register     | POST       | Register new user                        | 201: object user created | 500: internal server error
| /users/login        | POST       | Login                                    | 200: token containing id, name, email | 404: user not found, 400: wrong username/password, 500: internal server error



### Items Route
| Route             | HTTP       | Description                              | Success Res        | Error Res  |
|-------------------|:-----------|:-----------------------------------------| :------------------| :----------|
| /items        | GET        | Get all item                     | 200: array of object all items created by user | 500: internal server error
| /items/:id    | GET        | Get a single item (Authenticated users only)           | 200: object of item | 403: not authorized, 404: item not found, 500: internal server error
| /items        | POST       | Create a item (Authenticated users only) | 201: object item created | 403: not authenticated, 500: internal server error
| /items/:id    | DELETE     | Delete a item (Authenticated and authorizedusers only)               | 200: info of deleted item's |403: not authorized, 404: item not found, 500: internal server error
| /items/:id    | PATCH        | Update a item to status complete (Authenticated and authorizedusers only) | 200: updated items object | 403: not authorized, 404: item not found, 500: internal server error

