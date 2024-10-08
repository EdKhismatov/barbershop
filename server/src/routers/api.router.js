const router = require('express').Router();
const gamesRouter = require('./games.api.router');
const authRouter = require('./auth.api.router');
const tokenRouter = require('./token.api.router');

const fotoRouter = require('./barberfoto.api.router');
const homefotoRouter = require('./homefoto.api.router');
const productRouter = require('./product.api.router');
const basketRouter = require('./basket.api.router');
const editUserNameRouter = require('./api.editUserName.router');
const editUserSurNameRouter = require('./api.editUserSurName.router');
const editUserAvatarRouter = require('./api.editUserAvatar.router');
const oneUserByIdRouter = require('./api.oneUserById.router');
const serviceRouter = require('./service.api.router');
const messagesRouter = require('./api.messages.router');
const moreRouter = require('./more.api.router')

router.use('/tokens', tokenRouter); 
router.use('/auth', authRouter);
router.use('/', gamesRouter);
router.use('/foto', fotoRouter);
router.use('/fotoH', homefotoRouter);
router.use('/product', productRouter);
router.use('/', editUserNameRouter);
router.use('/', editUserSurNameRouter);
router.use('/', editUserAvatarRouter);
router.use('/', oneUserByIdRouter);
router.use('/service', serviceRouter);
router.use('/busket', basketRouter);
router.use('/messages', messagesRouter);
router.use('/more', moreRouter);

module.exports = router;
