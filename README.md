# 🛍️ AR-based E-commerce Platform with 360° View and Virtual Tour

A next-generation **Augmented Reality (AR)** e-commerce platform that transforms the way users shop online. This platform offers a seamless experience across web and mobile, allowing users to explore virtual 3D stores, interact with lifelike product models, and complete secure purchases—all from their devices.

---

## 🌟 Key Features

- 🔄 **360° Product Interaction**  
  Rotate, zoom, and inspect 3D models in real-time.

- 🏬 **Virtual AR Store (Unity-powered)**  
  Browse a virtual showroom, select products, and add to cart within an immersive environment.

- 📱 **Cross-platform Support**  
  Use on mobile (React Native app) or web browser (React app).

- 🔔 **Real-time Notifications**  
  Get alerts for order confirmations and updates.

- 💳 **Integrated Razorpay Payments**  
  Secure and fast checkout process.

- 🧑‍🦯 **Inclusive and Accessible Design**  
  Optimized for elderly and differently-abled users.

---

## 🧭 User Workflow

### Step-by-step Flow

1. **Entry Point**  
   - Users can access the platform either through the **web application** or the **mobile app**.

2. **Browsing Options (Web)**  
   - Shop through a **conventional product listing UI**, **OR**  
   - Launch the **Unity-based AR 3D Virtual Store** for an immersive experience.

3. **Product Interaction**  
   - Users can view products in **360°**, interact with them in AR (on supported devices), and check product details.

4. **Cart and Checkout**  
   - Selected items appear in the cart.  
   - Users proceed to checkout and complete payment via **Razorpay**.

5. **Post-Purchase**  
   - Notifications are triggered to confirm the order.  
   - Users can track order history and delivery status.

---

## 🧰 Tech Stack

### Frontend (Web)
- React
- Chakra UI
- Bootstrap
- Font Awesome

### Mobile App
- React Native
- Rapi UI
- Awesome Alert

### Backend
- Node.js
- Express.js
- MongoDB Atlas

### AR & 3D
- Unity (AR environment)
- Blender (3D asset creation)
- WebGL (browser rendering)

### Other Tools
- Notiflix (notifications)
- Razorpay (payment gateway)

---

## 🖥️ How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ar-ecommerce-platform.git
cd ar-ecommerce-platform
```

### 2. Start the Backend

```bash
cd backend
npm install
npm start
```
⚠️ Make sure to configure your .env file with:

```bash
MONGO_URI=<your_mongodb_connection_string>
RAZORPAY_KEY_ID=<your_key_id>
RAZORPAY_KEY_SECRET=<your_secret>
```

### 3. Start the Web Frontend
```bash
cd web-client
npm install
npm run dev
```
Visit: http://localhost:5173 (or the port shown in the terminal)

### 4. Download and Use the Mobile App

🔗 **[Download the Mobile App](https://drive.google.com/file/d/1BVK86xQbKG-em-eK2DSpB16TbtgYKaTV/view?usp=sharing)**  

### 5. Access the Unity 3D AR Store

Use this link inside the AR view <a> tag

🔗 **[AR View Link (Unity WebGL Build)](https://augment-kart.bristidevburman.site)**  

---

### 5. 📂 Project Structure

```
ar-ecommerce-platform/
├── backend/              # Node.js + Express API
├── web-client/           # React web application
├── mobile-app/           # React Native mobile application
├── unity-ar/             # Unity project for 3D virtual store
├── assets/               # Images and 3D models
└── README.md             # Project documentation
```


---

### 6. 🔧 Future Enhancements

- [ ] Voice command support
- [ ] ARKit/ARCore enhancements
- [ ] Admin dashboard
- [ ] Wishlist & product reviews

---


### 7. 🙋‍♂️ Contributions

Contributions, feature requests, and suggestions are welcome.  
Feel free to fork this repo and open a pull request!

---

### 7. 📬 Contact

For questions or collaborations, reach out on [LinkedIn](https://www.linkedin.com/in/bristidev-burman1903/) or open an issue.

