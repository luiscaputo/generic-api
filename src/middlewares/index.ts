import { Request, Response, NextFunction } from 'express';
import * as Yup from 'yup';
import { AppResponse } from '../@types/data';

export const showError = async (
  req: Request<any>,
  res: Response<AppResponse<string>>,
  next: NextFunction,
  schema: any
) => {
  try {
    await schema.validate(req.body);

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

export const requestVerification = async (
  req: Request,
  res: Response<AppResponse<any>>,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    code: Yup.string()
      .trim()
      .required('Informe o código do contacto')
      .equals(['+244'], 'Código do contacto com formato incorrecto'),
    contact: Yup.string()
      .min(9, 'Contacto com formato inválido')
      .max(9, 'Contacto com formato inválido')
      .trim()
      .required('O contacto é obrigatório')
  });

  await showError(req, res, next, schema);
};

export const typeOperation = async (
  req: Request,
  res: Response<AppResponse<any>>,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    designation: Yup.string()
      .min(1, 'Require 1 caracter')
      .max(50, 'Require 50 caracter')
      .trim()
      .required('The "designation" field is required')
  });

  await showError(req, res, next, schema);
};

export const typeOperationUpdate = async (
  req: Request<any>,
  res: Response<AppResponse<any>>,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    designation: Yup.string()
      .min(1, 'Require 1 caracter')
      .max(50, 'Require 50 caracter')
      .trim()
  });

  await showError(req, res, next, schema);
};
