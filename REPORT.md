# BUSINESS AND E-COMMERCE WEB APPLICATION
## Project Report / Synopsis Working Draft

**Student:** Shweta Bhusale  
**Roll No.:** 24-315  
**Course:** B.Sc. Computer Science – Third Year  
**College:** Pune Vidyarthi Grihā's College of Science and Technology  
**Guide:** Shraddha Mam  
**Academic Year:** 2026–2027

## 1. Introduction
The Business and E-Commerce Web Application is a web-based shopping system that allows customers to browse products, search and filter the catalogue, manage a shopping cart, register/login, place orders and view order history.

## 2. Problem Statement
Traditional shopping can require physical visits and manual order handling. The proposed application provides a centralized online catalogue and digital ordering workflow.

## 3. Objectives
- Provide an online product catalogue.
- Provide search and category filtering.
- Implement customer registration and login.
- Implement cart management.
- Implement checkout and order creation.
- Provide order history.
- Demonstrate frontend, backend and database/API concepts.

## 4. Scope
The prototype includes customer shopping, authentication, products, cart, checkout and orders. Payment gateway, administrator dashboard, delivery tracking and production infrastructure are future enhancements.

## 5. Technologies
HTML5, CSS3, JavaScript, Node.js and Express.js. The current demo stores users/orders in server memory and products in server code; this keeps setup simple. For final college deployment, SQLite/MySQL persistence should be added.

## 6. Modules
1. Registration/Login
2. Product Catalogue
3. Search & Category Filter
4. Shopping Cart
5. Checkout
6. Order History
7. Backend API
8. Validation

## 7. System Architecture
Browser → HTML/CSS/JavaScript → Express/Node.js API → Data layer.

## 8. Database Design
Recommended final tables:
- users(id, name, email, password_hash, created_at)
- products(id, name, category, description, price, stock)
- orders(id, user_id, total, address, status, created_at)
- order_items(id, order_id, product_id, quantity, price)

## 9. Testing
Test registration, invalid login, product search, category filter, cart quantity changes, checkout validation, successful order creation and order history.

## 10. Future Scope
Online payment, admin dashboard, inventory management, reviews/ratings, wishlist, delivery tracking, notifications, cloud deployment and analytics.

## 11. Conclusion
The application demonstrates a complete basic e-commerce workflow and provides a foundation for a larger business shopping system.

## 12. References
MDN Web Docs; Node.js Documentation; Express.js Documentation; SQLite Documentation; course material on Software Engineering, DBMS and E-Commerce.
