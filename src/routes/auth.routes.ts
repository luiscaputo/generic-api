// /**
//  * Modules
//  */
// import { Router } from 'express';

// import LoginController from '../controllers/login.controller';
// import RecoverPasswordController from '../controllers/recoverPassword.controller';
// import RegisterController from '../controllers/register.controller';
// import RequestVerificationController from '../controllers/requestVerification.controller';
// import ValidateCodeController from '../controllers/validadeCode.controller';

// // Router
// const router = Router();

// // Controllers
// const verification = new RequestVerificationController();
// const validateCodeController = new ValidateCodeController();
// const registerController = new RegisterController();
// const loginRegister = new LoginController();
// const recoverPasswordController = new RecoverPasswordController();

// /**
//  * Middlewares
//  */
// import {
//   register,
//   recover,
//   verifyConfirmationCode,
//   login
// } from '../middlewares/auth';

// import { requestVerification } from '../middlewares';

// router.post(
//   '/auth/request-verification',
//   requestVerification,
//   verification.handle
// );
// router.post(
//   '/auth/verify-code',
//   verifyConfirmationCode,
//   validateCodeController.handle
// );
// router.post('/auth/login', login, loginRegister.handle);
// router.post('/auth/register', register, registerController.handle);

// /**
//  * Password routes
//  */
// router.post('/forgot-password', requestVerification, verification.handle);
// router.post('/password-recover', recover, recoverPasswordController.handle);

// export default router;
