Vim�UnDo� ���N������3e1��'ˌF�Y�r	4#�                                      `
]B    _�                              ����                                                                                                                                                                                                                                                                                                                                                  V        `
]A    �                module.exports = router;�                 �                Brouter.route('/books/:bookId').delete(authMiddleware, deleteBook);�                 �                7router.route('/me').get(authMiddleware, getSingleUser);�                 �                #router.route('/login').post(login);�                 �                Arouter.route('/').post(createUser).put(authMiddleware, saveBook);�                O// put authMiddleware anywhere we need to send a token for verification of user�                 �   
             7const { authMiddleware } = require('../../utils/auth');�   	             // import middleware�      
           �      	          1} = require('../../controllers/user-controller');�                  login,�                  deleteBook,�                  saveBook,�                  getSingleUser,�                  createUser,�                const {�                 +const router = require('express').Router();5��