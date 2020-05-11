function validator (email, password) {

    //Regular expression checks email value for "any@any.com" format.
    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    /*Regular expression checks for uppercase, lowercase, number,
    non-alphanumeric character and sets a minimum length.*/
    let passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/; 

    /*test() searches the input string for the patterns defined
    by the emailCheck and passwordCheck regular expressions and
    the if statement returns the appropriate object*/
    if (emailCheck.test(email) && passwordCheck.test(password)) {
        return {
            email: true,
            password: true,
        };
    } else if (emailCheck.test(email) && !passwordCheck.test(password)) {
        return {
            email: true,
            password: false,
        };
    } else {
        return {
            email: false,
            password: false,
        };
    }
}

validator("jud@gl.com", "H1@hhhhh")