/*
	WEB 303 Assignment 1 - jQuery
	{Prabhjot Singh}
    {0828035}
    {Section C}
    {B950-Web Develo Class}
*/

$(document).ready(function() {  // This function is executed when the document is fully loaded and ready.


    $("#yearly-salary, #percent, #amount").on("keyup", function() {

        
        let mainSalary = parseFloat($("#yearly-salary").val());
        let mainPercent = parseFloat($("#percent").val());
        let amount = parseFloat($("#amount").val());

        
        let mainAmount = ((mainSalary * mainPercent) / 100);
        let roundAmount = (mainAmount.toFixed(2));
        
        $("#amount").text("$" + roundAmount);
    });
});
