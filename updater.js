/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

console.log("updater.js here");
$("section.viewtypes").hide();
$("section.views").hide();
$("#auctions input").click(function(e){
$("section.viewtypes").each(
function(i){
$(this).show();
if (this.id!=e.target.getAttribute("id-data")){
$(this).hide();
//console.log(this.id, e.target.getAttribute("id-data"));
}
}
);
$("section.views").show();
});