export interface IEnvProps {
  [key: string]: string;
}
export interface AuthResponseProps {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  cache_hash: string;
  user_cache_hash: string;
}

export interface AuthProps {
  'entitlements': string;
  'default_profiles': AuthPropsProfile[];
  'auth_type': string;
  'amcn-account-country': string;
  'roles': string[];
  'iss': string;
  'token_type': string;
  'aud': string;
  'amcn-account-id': string;
  'feature_flags': string;
  'exp': number;
  'iat': number;
  'amcn-service-group-id': string;
  'jti': string;
  'amcn-use-account-country': boolean;
}

export interface AuthPropsProfile {
  profileId: number;
  profileName: string;
  serviceId: string;
}

export interface SessionParams {
  geolocation: string;
  networkPath: string;
  token: string;
  partner?: string;
}
