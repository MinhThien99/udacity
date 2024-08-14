## API Endpoints

I have setuped rest http request using "Rest client" extension in VScode

You can use it instead of using postman or cUrl.

`Extension ID: humao.rest-client`

### Users

`Rest client http file: src/controller/user.http`

I've created 2 account in table user

```
firstName:  admin
password:   admin
```

```
firstName:  user
password:   user
```

- Login: Using account above to login and get access_token jwt
  - ```
    POST http://127.0.0.1:3000/api/user/login
    Accept: application/json
    Content-Type: application/json

    {
        "firstName" : "user",
        "password" : "user"
    }
    ```

## `@accesstoken = {{ token from login api }}`

- Index [token required]
  - ```
    GET http://127.0.0.1:3000/api/user
    Authorization: Bearer {{accesstoken}}
    ```
- Show [token required]
  - ```
    GET http://127.0.0.1:3000/api/user/4
    Authorization: Bearer {{accesstoken}}
    ```
- Create N[token required]
  - ```
    POST http://127.0.0.1:3000/api/user
    Accept: application/json
    Content-Type: application/json
    Authorization: Bearer {{accesstoken}}

    {
        "firstName" : "thientm2thientm2",
        "lastName" : "thientm2",
        "password" : "thientm2thientm2"
    }
    ```

### Products

`Rest client http file: src/controller/product.http`

- Index
  - ```
    GET http://127.0.0.1:3000/api/product
    ```
- Show
  - ```
    GET http://127.0.0.1:3000/api/product/2
    ```
- Create [token required]
  - ```
    POST http://127.0.0.1:3000/api/product
    Accept: application/json
    Content-Type: application/json
    Authorization: Bearer {{accesstoken}}

    {
        "name" : "Xiaomi pad 6",
        "price" : 2000,
      "category": ["Xiaomi"]
    }
    ```

#### Orders

- Current Order by user (args: user id)[token required]
- ```
  GET http://127.0.0.1:3000/api/order/1
  Accept: application/json
  Content-Type: application/json
  Authorization: Bearer {{accesstoken}}
  ```

## Data Shapes

#### Product ( table product )

- id: number
- name: string
- price: number
- category: string[] (using simple-json type)

#### User ( table user )

- id: number
- first_name: string
- last_name: string
- password: string

#### Orders ( table order )

- id: number
- user_id: number ( relation of user.id )
- status: number (active is 1 or complete is 2)

#### Order_Product ( table order_product - many to many relation between Order and Product )

- id: number
- product_id: number ( relation of product.id )
- order_id: number ( relation of order.id )
- quantity: number
