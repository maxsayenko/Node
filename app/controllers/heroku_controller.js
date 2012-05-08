/**
 * Created with JetBrains WebStorm.
 * User: msaienko
 * Date: 5/8/12
 * Time: 11:41 AM
 * To change this template use File | Settings | File Templates.
 */
var qs = require("querystring");

action("index", function(){
    var qsModel = req.query;
    render(qsModel);
});