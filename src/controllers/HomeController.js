let _HomeService = null

class HomeController {

    constructor({HomeService}){
        _HomeService = HomeService;        
    }

    index(req, res) {
        return res.send(_HomeService.index())
    }
    
}

module.exports = HomeController