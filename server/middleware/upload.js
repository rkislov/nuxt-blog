const path = require('path')
const multer = require('multer')
const moment = require('moment')


const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.resolve(__dirname,'../..', 'static'))
    },
    filename(req, file,cb) {
        cb(null, `${filw.originalname}-${moment().format('DDMMYYYY-HHmmss_SSS')}`)
    }
})


const fileFilter = (req, file,cb) => {
    if(file.mimeType === 'image/png' || file.mimeType === 'image/jpg'){
        cb(null,true)
    } else {
        cb(null,false)
    }
}

module.exports = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 1024*1025*5
    }
})