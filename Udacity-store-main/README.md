# MyStore

Project for udacity course.

### Using:

- CSS: Tailwindcss.
- Design systems: Material design for angular.
- Store: localstorage to store cart state, list of orders.

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Description

### home page

components:

- header:
  - logo: link to route home
  - cart logo: link to route cart
- list products:
  - product item:
    - image: link to product route detail, ex: '/product/:id'
    - product name
    - product price
    - button add product into cart: when click, an item is added into cart, and the badge of cart ( the top right of header ) will increase base on number of products in cart
      ![image](https://github.com/minhthien99/Udacity-store/assets/66316860/1ce0f2e3-2925-4b76-9da8-8266fdcc4290)

### Product detail page

Can access via direct link, ex: http://localhost:4200/product/1

components:

- product detail:
  - image
  - product detail: include id, name, price, description
    ![image](https://github.com/minhthien99/Udacity-store/assets/66316860/7da41afc-2720-43a0-b8d2-2ab367d79e17)

### Cart page

Can access via direct link, ex: http://localhost:4200/cart

Cart is store into local storage to save the latest state.

components:

- Cart detail:
  - Cart detail table: have button to clear all all items in cart
    - Cart detail line: name, price, quantity, total price, button remove current line
    - Total Price of all items
  - Form for submitted an order with validate:
    - Full name: string, required
    - Email: string, required, is email
    - Phone number: string, required, minLength
    - Address: string, required, minLength
    - Note: optional

![image](https://github.com/minhthien99/Udacity-store/assets/66316860/46e39375-afa3-43d8-87ca-a936a63f5ea2)

### Order page

Can access via direct link, ex: http://localhost:4200/order/:id

Order is store into local storage to save the list orders, use can access to old order via link http://localhost:4200/order/:old_order_id .

components:

- Order detail:
  - Order information:
  - Cart detail table: reuse component CartTableComponent
    - Cart detail line: name, price, quantity, total price
    - Total Price of all items

when order form is submited, the order will be create

an alert show up show the order id:

![image](https://github.com/minhthien99/Udacity-store/assets/66316860/1fa9fdf4-3672-48d2-bd1f-480aef454ee7)

then go to the order detail page.

![image](https://github.com/minhthien99/Udacity-store/assets/66316860/613e1b67-c39c-407e-8bb4-6102c01ea3d3)
