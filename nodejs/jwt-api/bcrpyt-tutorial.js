// test and learn bcryptjs module
const bcrypt = require('bcryptjs');
const user_password = 'abc123'
// hashing plaintext passwords
bcrypt.hash(user_password, 10)
.then(result => {
    console.log(result)
})

const sentbyfront = "123123";


// it returns to the boolean data
bcrypt.compare(sentbyfront, '$2a$10$LdrN43MvRjWhCMAmDko04..rlJxyUS/Jozkfy.DRsmYYf2PxxxhXu')
.then(result => console.log(result))