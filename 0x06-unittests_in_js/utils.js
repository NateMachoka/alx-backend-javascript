const Utils = {
  calculateNumber: function (type, a, b) {
    switch (type) {
      case 'SUM':
        return Math.round(a) + Math.round(b);
      case 'SUBTRACT':
        return Math.round(a) - Math.round(b);
      case 'DIVIDE':
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);
        if (roundedB === 0) return 'Error';
        return roundedA / roundedB;
      default:
        throw new Error('Invalid type');
    }
  }
};

module.exports = Utils;
