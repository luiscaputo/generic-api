import { NextFunction, Request, Response } from 'express';
import * as Yup from 'yup';
import { showError } from '.';
import { AppResponse } from '../@types';

export const verifyConfirmationCode = async (
  req: Request,
  res: Response<AppResponse<any>>,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    confirmation_token: Yup.string()
      .trim()
      .required('The "confirmation_token" field is required'),
    code: Yup.string()
      .min(4, 'Code bad formated')
      .max(4, 'Code bad formated')
      .trim()
      .required('The "code" field is required')
  });

  await showError(req, res, next, schema);
};

export const register = async (
  req: Request,
  res: Response<AppResponse<any>>,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    username: Yup.string()
      .min(6, 'username demasiado curto')
      .required('Informe o username'),
    confirmed_token: Yup.string().required(
      'The "confirmed_token" field is required'
    ),
    password: Yup.string()
      .min(8, 'Senha demasiado curta')
      .trim()
      .required('A senha é obrigatória'),
    type_identification: Yup.string()
      .trim()
      .required('Informe o tipo de identificação ["bi", "password"]'),
    number_identification: Yup.string()
      .trim()
      .required('O número de identificação é obrigatório')
  });

  await showError(req, res, next, schema);
};

export const login = async (
  req: Request,
  res: Response<AppResponse<any>>,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    username: Yup.string().required('Informe o username'),
    password: Yup.string()
      .min(8, 'Senha demasiado curta')
      .trim()
      .required('A senha é obrigatória')
  });

  await showError(req, res, next, schema);
};

export const recover = async (
  req: Request,
  res: Response<AppResponse<any>>,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    confirmed_token: Yup.string()
      .trim()
      .required('The "confirmed_token" field is required '),
    password: Yup.string()
      .min(8, 'Senha demasiado curta')
      .trim()
      .required('A senha é obrigatória')
  });

  await showError(req, res, next, schema);
};
