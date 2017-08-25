'use strict';
var ditcoinWallet = require('../lib/wallet');

describe('ditcoinWallet', () => {
    const Wallet = new ditcoinWallet();

    describe('constructor', () => {
        it('should have default host set to `127.0.0.1`', () => {
            new ditcoinWallet().hostname.should.equal('127.0.0.1');
        });

        it('should have default port set to 19092', () => {
            new ditcoinWallet().port.should.equal(19092);
        });
    });

    describe('methods', () => {
        describe('balance()', () => {
            it('should retrieve the account balance', (done) => {
                Wallet.balance().then(function(result){
                    result.balance.should.be.a.Number();
                    done();
                })
            })
        })

        describe('address()', () => {
            it('should return the account address', (done) => {
                Wallet.address().then(function(result){
                    result.address.should.be.a.String();
                    done();
                })
            })
        })
    })
})
