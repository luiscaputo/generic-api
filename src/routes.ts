// Module
import { Router } from 'express';

// Controllers
// import authRoutes from './routes/auth.routes';
// import userRoutes from './routes/user.routes';


// Middleware
// import tokenGuard from './middlewares/token-guard';

// Router instance
const router = Router();

/**
 * Not found
 */
// router.use('*', (_, res) => {
//   res.status(404).json({ success: false, message: 'Route not found' });
// });

/**
 * Routes without restrictions
 */
router.get('/', (_, res) => {
  res.send({ base: 'Welcome to app for sercices to services!', message: 'Application server on air' });
});

// router.use(authRoutes);

/**
 * Putting restrictions
 */
// router.use(tokenGuard());

/**
 * Routes with restrictions
 */
// router.use(userRoutes);


export default router;
