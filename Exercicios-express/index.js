const express = require('express')
const app = express()


// quuando essa porta ser validade ele chama a callback
app.listen(3000, () => {
    console.log('Worked ')
})

