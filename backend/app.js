const express = require('express');
const app = express();
const http = require("http");
const cors = require('cors');
const { Server } = require("socket.io");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const PetAdopterRoute = require('./routes/PetAdopterRoute');
const SignUpRoute = require('./routes/SignUpRoute');
const PetStoreRoute = require('./routes/PetStoreRoute');
const errorHandler = require('./utils/errorHandler');
const AdminRoute = require('./routes/AdminRoute');
const PetAdopterRoute=require('./routes/PetAdopterRoute');
const staffMemberRoute=require('./routes/staffMemberRoute');
const PharmacyRoute=require('./routes/PharmacyRoute');
const DoctorRoute = require('./routes/DoctorRoute');

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use(cors({
//     origin: 'http://localhost:5000', 
//     credentials: true,
// }));
app.use(bodyParser.json());

app.use("/Admin",AdminRoute);
app.use('/petadopter',PetAdopterRoute);
app.use("/SignUp",SignUpRoute);
app.use("/petstore",PetStoreRoute);
app.use('/staffmember',staffMemberRoute);
app.use("/pharmacy",PharmacyRoute);
app.use('/Doctor', DoctorRoute);



// app.use(cors());
app.use(errorHandler);



const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
})


const server = http.createServer(app);


const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING for chat");
});