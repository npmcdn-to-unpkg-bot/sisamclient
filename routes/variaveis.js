var express = require('express');
var router = express.Router();
var createRequestSoapClient = require('./request_client_soap');

var variaveisUrl = 'http://sisam.cptec.inpe.br/sisam_webservice/services/VariaveisWebService?wsdl';

var requestSoapClient = createRequestSoapClient(router);

requestSoapClient(variaveisUrl, function(client, req, errcallback, resultcallback){

	var args = {};

	console.log("carregando variaveis");

	client.getListaVariaveis(args, function(err, result){
		
		errcallback(err);
		
		resultcallback(result);

	});

} );

module.exports = router;
