Vim�UnDo� {�B�[/g�H�MX���^d���0����Iw�   7                                   `e�    _�                     /        ����                                                                                                                                                                                                                                                                                                                            /           1           V        `ed     �   .   /          #router.get('/login', (req,res) => {       res.render("login");   });5�_�                            ����                                                                                                                                                                                                                                                                                                                            /           /           V        `ef     �         2    �         2    5�_�                            ����                                                                                                                                                                                                                                                                                                                            2           2           V        `eg    �              1   #router.get('/login', (req,res) => {       res.render("login");   });   // homepage   router.get('/', (req,res) => {       Post.findAll({           include: [               {                   model: User,   (                attributes: ['username']               }   	        ]       }).then(data => {   B        const posts = data.map(post => post.get({ plain: true }));            res.render('homepage', {               posts,   *            loggedIn: req.session.loggedIn             });       }).catch(err => {           console.log(err);   "        res.status(404).json(err);       });   });   // users page   !router.get('/:id', (req,res) => {       Post.findAll({           where: {               id: req.params.id   
        },           include: [               {                   model: User,   (                attributes: ['username']               }   	        ]       }).then(data => {   B        const posts = data.map(post => post.get({ plain: true }));           res.json(posts);       }).catch(err => {           console.log(err);   "        res.status(404).json(err);       });   })       // login page               module.exports = router;5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       `e�     �                $router.get('/login', (req, res) => {     res.render('login');   });5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       `e�     �         5    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       `e�    �         6    �         6    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `e�     �                $router.get('/login', (req, res) => {     res.render('login');   });5�_�      	              4        ����                                                                                                                                                                                                                                                                                                                                                  V        `e�     �   4   8   6    �   4   5   6    5�_�      
           	   4        ����                                                                                                                                                                                                                                                                                                                                                  V        `e�     �   3   4           5�_�   	              
   4        ����                                                                                                                                                                                                                                                                                                                                                  V        `e�    �   7               5�_�   
                 2        ����                                                                                                                                                                                                                                                                                                                            2           6           V        `e�     �   1   2              // login page   $router.get('/login', (req, res) => {     res.render('login');   });5�_�                            ����                                                                                                                                                                                                                                                                                                                            2           2           V        `e�     �      !   2    �         2    5�_�                            ����                                                                                                                                                                                                                                                                                                                            7           7           V        `e�    �         7       5�_�                             ����                                                                                                                                                                                                                                                                                                                            6           6           V        `e�    �      !   6    5��