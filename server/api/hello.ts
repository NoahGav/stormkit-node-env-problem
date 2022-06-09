export default defineEventHandler(event => {
  return {
    message: process.env.NODE_ENV || 'undefined',
  };
});