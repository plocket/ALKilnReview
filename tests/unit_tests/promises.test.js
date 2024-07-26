const chai = require('chai');
const expect = chai.expect;

const scope = require('../../lib/scope.js');
const get_cancellable_promise = scope.get_cancellable_promise;

describe(`get_cancellable_promise()`, async function() {

  it(`with \`do_throw\` as\`false\` cancels without throwing`, function() {
    let timeout_promise = new Promise(function (resolve, reject) {
      setTimeout(function () { resolve(`Timeout ended`); }, 4000);
    });
    let { promise, cancel } = get_cancellable_promise(
      scope,
      { promise: timeout_promise, do_throw: false }
    );
    expect( cancel ).to.not.throw();
  });

  it(`with \`do_throw\` as\`true\` throws when it cancels`, function() {

    let reject_val = `Threw correctly`
    let timeout_promise = new Promise(function (resolve, reject) {
      setTimeout(function () { resolve(`Timeout ended`); }, 4000);
    });
    let { promise, cancel } = get_cancellable_promise(
      scope,
      { promise: timeout_promise, do_throw: true, reject_val }
    );
    expect( cancel ).to.throw( reject_val );
  });

  it(`can let the promise resolve`, async function() {

    const to_resolve = `Timeout resolved`;

    let timeout_promise = new Promise(function (resolve, reject) {
      setTimeout(function () { resolve(to_resolve); }, 300);
    });
    let { promise, cancel } = get_cancellable_promise(
      scope,
      { promise: timeout_promise, do_throw: true }
    );

    promise.then(function( result ) {
      console.log(`result:`, result);
      expect( result ).to.equal( to_resolve );
    }).catch(function( error ) {
      expect( error ).to.be.undefined;
    });
  });

  it(`can let the promise reject`, async function() {

    const to_throw = `Timeout error`;

    let timeout_promise = new Promise(function (resolve, reject) {
      setTimeout(function () { reject(to_throw); }, 300);
    });

    let { promise, cancel } = get_cancellable_promise(
      scope,
      { promise: timeout_promise, do_throw: true }
    );

    promise.then(function( result ) {
      expect( result, `Original promise should have rejected` ).to.be.undefined;
    }).catch(function( error ) {
      expect( error ).to.equal( to_throw );
    });
  });

});
