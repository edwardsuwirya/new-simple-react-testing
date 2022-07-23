export const errorLoggerInterceptor = (error) => {
    console.log('Error===>', error)
    return Promise.reject(error);
}
