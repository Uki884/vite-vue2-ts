export default {
  isProduction: import.meta.env.PROD === true,
  isDevelopment: import.meta.env.DEV === true,
  baseUrl: import.meta.env.BASE_URL || '',
};