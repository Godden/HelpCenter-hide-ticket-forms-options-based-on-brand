
Brand = HelpCenter.account.name

//This bit looks for the user tag
var BrandLookingFor = Brand.indexOf("kickware");

if (BrandLookingFor >= 0) { 

//This bit changes text or adds in stuff based on what content is being shown.

$('option[value="48924"]').wrap('<span class="hide-option"></span>');

};

