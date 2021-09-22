import { Response, Request, NextFunction } from 'express';
import * as Yup from 'yup';
import { AppResponse } from '../@types';

export const changePassword = async (
  req: Request<any, any, any, any>,
  res: Response<AppResponse<string>>,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    oldPassword: Yup.string().required('Informe a senha antiga'),
    newPassword: Yup.string()
      .min(8, 'A nova senha deve ter no mínimo 8 caracteres')
      .max(30, 'Limite de caracteres excedido')
      .required('Informe a nova senha')
  });

  try {
    await schema.validate(req.body, { abortEarly: true });
    next();
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return res.status(400).json({ success: false, message: err.message });
    }

    return res
      .status(500)
      .json({ success: false, message: 'Falha ao processar a requisição' });
  }
};
