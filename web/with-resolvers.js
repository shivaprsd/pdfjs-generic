/* From: https://unpkg.com/@ungap/with-resolvers@0.1.0/index.js */

Promise.withResolvers || (Promise.withResolvers = function withResolvers() {
    var a, b, c = new this(function (resolve, reject) {
      a = resolve;
      b = reject;
    });
    return {resolve: a, reject: b, promise: c};
  });