module.exports = function toReadable (number) {
  this.words = {
    l0: ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','nineteen'],
    l1: ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
    l2: ['hundred']
  };
  let outNumber = '';
  let levelOfNumber = Math.floor(number / 10)
}
