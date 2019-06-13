const lt = require('./lucene-tokenizers.babel');

exports.tokenize_js = function (text) {
    var ts = new lt.StandardTokenizer();
    ts.setReader(new lt.StringReader(text));
    var res = [], token = null;
    while ((token = ts.incrementToken()) !== null) {
      var pretty_token = {};
      for (var prop in token) {
        if(token.hasOwnProperty(prop)) {
          pretty_token[prop.substring('_$esjava$'.length)] = token[prop];
        } 
      }
      res.push(pretty_token);
    }
    return res
}
