const errorMessage = (message) => {
    return {
        error: true,
        message
    }
}


const successMessage = (message) => {
    return {
        success: true,
        message
    }
}

module.exports.errorMessage = errorMessage;
module.exports.successMessage = successMessage;