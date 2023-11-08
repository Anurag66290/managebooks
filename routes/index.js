import express from 'express';
import { Update_Books, create_Books, delete_Books, getbyid_Books, list_Books } from '../controller/controller.js';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.route("/create_Books").post(create_Books);
router.route("/list_Books").get(list_Books);
router.route("/getbyid_Books").post(getbyid_Books);
router.route("/Update_Books").post(Update_Books);
router.route("/delete_Books/:BookID").delete(delete_Books);


export default router;
