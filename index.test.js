var expect = require('chai').expect;
var fs = require('fs');

describe('playground-test', function () {
    it('should work', function () {
        expect(true).to.be.true;
    });
});

describe('Code of Conduct Test', function () {
    it('Code of Coduct exists', function () {
        expect(fs.existsSync('CODE_OF_CONDUCT.md')).to.be.true;
    });
});

describe('Contributing Test', function () {
    it('Contributing.md exists', function () {
        expect(fs.existsSync('CONTRIBUTING.md')).to.be.true;
    });
});

describe('License Test', function () {
    it('License exists', function () {
        expect(fs.existsSync('LICENSE')).to.be.true;
    });
});
