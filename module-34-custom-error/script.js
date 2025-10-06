// Custom Error Example
// class ValidationError extends Error {
// 	constructor(message) {
// 		super(message);
// 		this.name = 'ValidationError';
// 	}
// }

// // Example usage
// function validateUsername(username) {
// 	if (!username || username.length < 3) {
// 		throw new ValidationError('Username must be at least 3 characters long.');
// 	}
// 	return true;
// }

// try {
// 	validateUsername('ab');
// } catch (error) {
// 	if (error instanceof ValidationError) {
// 		console.error('Validation Error:', error.message);
// 	} else {
// 		console.error('Unknown Error:', error);
// 	}
// }


class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }

}


function validateUsername(username) {
    if (!username || username.length < 3) {
        throw new ValidationError('Username must be at least 3 characters long.');
    }
    return true;
}

try {
    validateUsername('ab');
}catch (error) {
    if (error instanceof validateUsername){
        console.error('Validation Error:', error.message);
    } else {
        console.error('Unknown Error:', error);
    }
}
