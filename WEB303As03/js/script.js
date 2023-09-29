function Data() 
{

    $('#team').text('Loading...');

    $.ajax
    ({
            
        url: 'team.json',
        dataType: 'json',

        success: function(data) 
        {
           
            $('#team').empty();

           
            $.each(data.members, function(index, staff) 
            {
                var informationOfMember = '<h2>' + staff.name + '</h2>' +
                                 '<h5>' + staff.position + '</h5>' +
                                 '<p>' + staff.bio + '</p>';

                $('#team').append(informationOfMember);

            });

        },

        error: function() 
        {
            
            $('#team').text('Error: Content could not be retrieved.');

        }

    });

}

$(document).ready(function() 
{
    
    Data();

});
