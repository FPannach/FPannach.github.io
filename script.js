$(document).ready(function() {
    $('a').attr('target', '_blank');
    

       $("#toggle-arrow").click(function() {
        $("#supervision-list").slideToggle("slow", function() {
            $("#toggle-arrow").toggleClass("rotate");
        });
    });
    $("#toggle-arrow-pub").click(function() {
        $("#publication-list").slideToggle("slow", function() {
            $("#toggle-arrow-pub").toggleClass("rotate");
        });
    });
	$('nav ul li a').click(function(e) {
	    e.preventDefault();
	    $('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	});

    // Handle language selection
    $("#language-select").change(function() {
        var selectedLang = $(this).val();
        switchLanguage(selectedLang);
    });

    function switchLanguage(lang) {
        switch (lang) {
            case 'en':
                // Switch to English
                $('body').attr('lang', 'en');
                break;
            case 'de':
                // Switch to German
                $('body').attr('lang', 'de');
                break;
            case 'nl':
                // Switch to Dutch
                $('body').attr('lang', 'nl');
                break;
            default:
                $('body').attr('lang', 'en');
        }
        // Here you would implement any additional logic needed to update the text/content
        alert('Language switched to: ' + lang);
    }
});

