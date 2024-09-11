export const errorHndler = (statusCode, message) => {
    //Extra erros-manuais
    const error = new Error();
    error.statusCode = statusCode
    error.message = message
    return error

}