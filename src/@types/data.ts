export interface AppResponse<Data> {
  success: boolean;
  message?: string;
  data?: Data;
}

export type IdentificationType = 'bi' | 'passport';

export type PaymentReferenceType = 'active' | 'used' | 'expired' | null;

export type WalletStateType =
  | 'active'
  | 'deactive'
  | 'removed'
  | 'suspense'
  | null;

export type RequestType = 'pending' | 'accepted' | 'rejected' | 'canceled';
