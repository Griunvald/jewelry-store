# Jewelry Store

An e-commerce website with a PayPal payment gateway.

Admin user can add selling goods to the store page with a title, description, item details, and picture.

Guest user can browse items on the store page, view the detailed item descriptions, and add them to the shopping cart.

During checkout, the user will be asked for registration/login in order to complete the payment.

## Tech stack

React, Redux, Bootstrap, Node, Express, MongoDB

## Prerequisites

Node.js v14 or greater and NPM v6 or greater

## Projet setup

```bash
git clone https://github.com/Griunvald/jewelry-store.git
```

client:

```bash
cd jewelry-store && cd client
mkdir public/images
npm install
npm start

```

server:

```bash
npm install
node server/index.js
```

## API keys

Create .env file in the root of a project.

NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/shop
JWT_SECRET=RANDOM_STRING
PAYPAL_CLIENT_ID=YOUR_PAYPAL_CLIENT_ID

## Admin user

Register admin user with following email: admin@mail.com

## Usage

Create an item for sale:

Register admin user to gain access to the Admin Dashboard. On the dashboard, fill all required fields, choose an image for upload, save created item to the database by clicking the 'Save item' button. It will appear on the 'Store' page.

Buy item:

From the 'Store' page go to the item details page and click the "Add to cart" button. Go to the cart page and proceed to checkout.

## Future improvements

- Show the number of items in the cart
- Add ability to edit saved items
- Add ability to delete items
- Search items by color
- Add price range filter
- Show liked items on the 'Favorites' page
