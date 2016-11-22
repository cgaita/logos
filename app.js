/*1.user selects 
2.click submit button
3.get program type
4. get education level
5. change colors to match the selcetions
6. if none are selected change all to color*/
var getSelections =function(){
	$('.button').click(function(){
		//finds users selected program type 
		var getProgram = $('.programs').val();
		var programSelected = "";
		if (getProgram != "") {
			programSelected = '.' + getProgram;
		} 
		//finds users selected education level
		var getEdu = $('.edu').val();
		var eduSelected = "";
		if (getEdu != ""){
			eduSelected = '.' + getEdu;
		}
		//add both dropdowns together
		var finalSelections = programSelected + eduSelected;
		//changing the color for all
		if (finalSelections === ""){
			$('img').addClass('color-img');
		}
		//resetting and changing color for only selected 
		else{
			$('img').removeClass('color-img');
			$(finalSelections).addClass('color-img');
		}
	});
}
$(document).ready(function () {
getSelections();
});
