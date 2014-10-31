/*!
 * package-license-types | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/package-license-types
*/
module.exports = function packageLicenseTypes(pkg) {
  'use strict';

  var licenses;

  if (Array.isArray(pkg.licenses)) {
    licenses = pkg.licenses;
  } else if (pkg.license) {
    licenses = [pkg.license];
  } else {
    licenses = [];
  }

  return licenses.reduce(function(result, license) {
    if (typeof license === 'string') {
      result.push(license);
    } else if (license && license.type) {
      result.push(license.type);
    }
    return result;
  }, []);
};
