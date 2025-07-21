const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  dbName: 'appointmentdb'
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => console.log('Connection done'));

// Root route
app.get('/', (req, res) => {
  res.send('Backend is running successfully!');
});

// Schemas & Models
const contactSchema = mongoose.Schema({
  Name: String,
  email: String,
  subject: String,
  message: String,
});
const Contact = mongoose.model('Contact', contactSchema);

const registerSchema = mongoose.Schema({
  Name: String,
  email: String,
  subject: String,
  message: String,
});
const Register = mongoose.model('Register', registerSchema);

const loginSchema = mongoose.Schema({
  Name: String,
  PASSWORD: String,
});
const Login = mongoose.model('Login', loginSchema);

const blogSchema = mongoose.Schema({
  title: String,
  description: String,
  pic: String,
  poston: String,
  postby: String
});
const Blog = mongoose.model('Blog', blogSchema);

// Routes

// Contact form
app.post('/api/insertcontact', async (req, res) => {
  console.log(req.body);
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error in submission' });
  }
});

// Registration form
app.post('/api/insertregister', async (req, res) => {
  console.log(req.body);
  try {
    const register = new Register(req.body);
    await register.save();
    res.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error in submission' });
  }
});

// Login form
app.post('/api/insertlogin', async (req, res) => {
  console.log(req.body);
  try {
    const login = new Login(req.body);
    await login.save();
    res.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error in submission' });
  }
});

// Blog insert
app.post('/api/insertblog', async (req, res) => {
  console.log(req.body);
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error in submission' });
  }
});

// Blog by ID
app.post('/viewblogbyid', async (req, res) => {
  try {
    const data = await Blog.find({ _id: req.body.id });
    res.json(data);
    console.log(data);
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error fetching blog' });
  }
});

// Delete blog by ID
app.post('/api/deleteblogbyid', async (req, res) => {
  console.log(req.body);
  try {
    const data = await Blog.deleteOne({ _id: req.body.id });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error in deletion' });
  }
});

// View data
app.get('/viewenquiries', async (req, res) => {
  const data = await Contact.find();
  res.json(data);
});

app.get('/viewregisteration', async (req, res) => {
  const data = await Register.find();
  res.json(data);
});

app.get('/viewblogs', async (req, res) => {
  const data = await Blog.find();
  res.json(data);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
