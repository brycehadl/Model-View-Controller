const router = require('express').Router();
import blogRoutes from './blogRoutes';
import commentRoutes from './commentRoutes';
import userRoutes from './userRoutes';

router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

export default router;