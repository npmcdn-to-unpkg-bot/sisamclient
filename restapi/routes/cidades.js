var router = require('express').Router();
var wsdl = 'http://sisam.cptec.inpe.br/sisam_webservice/services/CidadesWebService?wsdl';
var controller = require('rest-to-soap-mapper');

router.post('/cidades', validateParams, controller(wsdl, setMethodToCall, setArgs ) );

function setArgs(req){
	return {
		cidade: req.body.cidade
	};
}

function setMethodToCall(client){
	return client.getMunicipios;
}

function validateParams(req, res, next){
	if(!req.body.cidade){
		res.status(404);
		res.json({"message":"cidade não presente na requisição"});
		return;
	}
	next();
}

module.exports = router;

