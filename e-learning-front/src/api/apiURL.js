export const apiURL = (files) => {
  var COS = require('cos-js-sdk-v5')
  // var Bucket = 'e-learning-1259256089'
  // var Region = 'ap-guangzhou'
  // 初始化实例
  var cos = new COS({
    SecretId: 'AKIDTM5jFlNk06hP0Pc5iBf1DVmp7EByongd',
    SecretKey: 'aGk4EHArXEKFzY6TqxQm150nQtcCbp16'
  })
  cos.putObject({
    Bucket: 'e-learning-1259256089',
    Region: 'ap-guangzhou',
    Key: 'e-learning/' + files.name,
    Body: files
  }, function (err, data) {
    // console.log(err || data)
    if (data) {
      console.log(data.Location)
      let url = 'https://' + data.Location
      alert(url)
      return 'https://' + data.Location
    }
    if (err) {
      return 0
    }
  })
}
