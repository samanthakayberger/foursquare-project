$(document).ready(function() {
    
// this function collects the user input and runs it through the API to return results accordingly

    $("#search").click(function(){
        
        var url = 'https://api.foursquare.com/v2/venues/search?client_id=YXYU5W4JWX4VPLIN5KU11RO2CUZDVMJRKGQCJJIFPCDTMHQR&client_secret=LCB5XTPVNKGALW1KSEG2GXSG4UX5NLREPKB5PLSUQU0NK4NO&v=20130815&near=location&query='+$('input').val();

        $.getJSON(url, function(data){
         
            var number_of_results = data.response.venues.length;
        
            console.log(data.response.venues[0]);
        
        // this loop prints the data of all the resteraunts in the search field 
            
               for (var i = 0; i <= number_of_results; i++){
                   
            $("#area").append(data.response.venues[i].name);
            $("#area").append(data.response.venues[i].location.address);
            $("#area").append(data.response.venues[i].contact.formatted_number);
            
             if (input = undefined){
                 alert("Not a valid location or food");
             }
         }
        
        
        
    
        });
    });
    
    $("#clear").click(function(){
        location.reload();
    });
});