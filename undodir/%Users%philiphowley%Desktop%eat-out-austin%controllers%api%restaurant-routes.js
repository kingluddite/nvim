Vim�UnDo� ����c�*7��n�C��?�Y��z�f�X�   }                                   `nw)    _�                             ����                                                                                                                                                                                                                                                                                                                                                  V        `nw     �                =======     Restaurant.findAll()       .then((homeData) => {         res.render('restaurant');         // res.json(homeData);       })       .catch((err) => {         console.log(err);          res.status(500).json(err);       });   });   >>>>>>> juan/handlebars5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `nw      �                <<<<<<< HEAD5�_�                             ����                                                                                                                                                                                                                                                                                                                                                  V        `nw(    �              y       Restaurant.findAll()       .then(restData => {   "        res.render('restaurants');           // res.json(homeData);         })         .catch(err => {           console.log(err);   "        res.status(500).json(err);   	      });     });        // get restaurants by food style   +router.get('/fs/:foodstyle', (req,res) => {          Restaurant.findAll({       where: {   &      food_style: req.params.foodstyle       },       include:   	        {             model: Review,   &          attributes: ['res_reviewed']   	        }     }).then(restData => {       console.log('Testing')   R    const restaurant = restData.map(restaurant => restaurant.get({ plain: true}));   .    //res.render('restaurants', {restaurant});       res.json(restaurant)           })     .catch(err => {       console.log(err);       res.status(500).json(err);     });   });       //get one restaurant   "router.get('/:id', (req, res) => {     Review.findOne({       where: {         id: req.params.id       }     })       .then(ResData => {         if (!ResData) {   N        res.status(404).json({ message: 'No Restaurant found with this id' });           return;         }         res.json(ResData);       })       .catch(err => {         console.log(err);          res.status(500).json(err);       });   });       // create restaurant   *router.post('/', withAuth, (req, res) => {     Restaurant.create({        res_name: req.body.res_name,   "    res_phone: req.body.res_phone,   &    res_website: req.body.res_website,   &    res_address: req.body.res_address,   $    food_style: req.body.food_style,   (    brick_mortar: req.body.brick_mortar,       trailer: req.body.trailer,        delivery: req.body.delivery,   0    takeout_curbside: req.body.takeout_curbside,   (    reservations: req.body.reservations,   .    on_site_parking: req.body.on_site_parking,     })   +    .then((restData) => res.json(restData))       .catch((err) => {         console.log(err);          res.status(500).json(err);       });   });       // update restaurant (REVIEW)   ,router.put('/:id', withAuth, (req, res) => {     Restaurant.update(req.body, {       individualHooks: true,       where: {         id: req.params.id,       },     })       .then((restData) => {         if (!restData) {   N        res.status(404).json({ message: 'No restaurant found with this id' });           return;         }         res.json(restData);       })       .catch((err) => {         console.log(err);          res.status(500).json(err);       });   });       // delete restaurant   /router.delete('/:id', withAuth, (req, res) => {     Post.destroy({       where: {         id: req.params.id,       },     })       .then((restData) => {         if (!restData) {   N        res.status(404).json({ message: 'No restaurant found with this id' });           return;         }         res.json(restData);       })       .catch((err) => {         console.log(err);          res.status(500).json(err);       });   });       module.exports = router;    5��