import { Router } from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import { registerUser } from '../controllers/registerUser.controller.js';
import { allUsers } from '../controllers/allUsers.controller.js';

const routes = new Router();

routes.get("/all", allUsers);

routes.post('/user', upload.fields([{ name: 'avatar', maxCount: 1 }]), registerUser);

routes.get("/login", (req, res) => {
    res.render('login'); // Ensure your view engine is set up to render EJS templates
});

routes.post("/login", (req, res) => {
    console.log(req.body); // Corrected from req.params.body to req.body
    res.send("ok");
});

export default routes;
