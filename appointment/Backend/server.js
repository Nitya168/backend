const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MONGO_URL instead of MONGO_URI (Fix for Render)
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'appointmentdb',
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => console.log('MongoDB connected successfully'));

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
  postby: String,
});
const Blog = mongoose.model('Blog', blogSchema);

// Routes

// Contact Form
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

// Registration Form
app.post('/api/insertregister', async (req, res) => {
  console.log(req.body);
  try {
    const register = new Register(req.body);
    await register.save();
    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error in submission' });
  }
});

// Login Form
app.post('/api/insertlogin', async (req, res) => {
  console.log(req.body);
  try {
    const login = new Login(req.body);
    await login.save();
    res.json({ success: true, message: 'Login data stored' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error in submission' });
  }
});

// Blogs
app.post('/api/insertblog', async (req, res) => {
  console.log(req.body);
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.json({ success: true, message: 'Blog added' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error in submission' });
  }
});

app.post('/viewblogbyid', async (req, res) => {
  try {
    const data = await Blog.find({ _id: req.body.id });
    res.json(data);
    console.log(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error retrieving blog' });
  }
});

app.post('/api/deleteblogbyid', async (req, res) => {
  try {
    const data = await Blog.deleteOne({ _id: req.body.id });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error deleting blog' });
  }
});

// View APIs
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

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
