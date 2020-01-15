/**
 * 
 * fonctions de Faq by nkd
 */
    //initialement on ferme tout
    $(".reponse").hide();

    //le q est l'element global de la question    
    $('.q').click(function(){
        //veur de la span qui a le -/+ 
        value=$(this).children(".ind").html();
        
        if (value=="+") {
            $('.reponse').hide("slow"); 
            $('.q>span').html("+");
            $(this).children(".ind").html("-");           
            $(this).next().show("slow");
            
            }
            
        }

    );
   
/**fin faq */