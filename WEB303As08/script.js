let $table = $('<table/>');

$('body').append($table);

$table.append('<thead/>');
$table.append('<tbody/>');
$table.addClass('Tbl');

let $rowOfHeading = $('<tr/>').addClass('headingRow');
$('thead').append($rowOfHeading);


$rowOfHeading.append($('<td/>').text('FirstName'));
$rowOfHeading.append($('<td/>').text('LastName'));
$rowOfHeading.append($('<td/>').text('Age'));
$rowOfHeading.append($('<td/>').text('Occupation'));
$rowOfHeading.append($('<td/>').text('Place'));
$rowOfHeading.append($('<td/>').text('RoleName'));
$rowOfHeading.append($('<td/>').text('Role'));


$('h1').after('<input/>');
$('input').attr('id', 'search');


$table.after('<button id="filterAM">A-M (0)</button>');
$table.after('<button id="filterNZ">N-Z (0)</button>');


$.ajax(
    {

    type: "get",
    url: "mandalorian.json",

    error: function () {

        $table.empty().append('<h1> Content can not be retrieved</h1>');

    },

    success: function (response) {

        $.each(response, function (index, value) 
        {

            let $row = $('<tr/>').addClass('row');
            $row.append($('<td id="fname"></td>').text(value.FirstName));
            $row.append($('<td></td>').text(value.LastName));
            $row.append($('<td></td>').text(value.Age));
            $row.append($('<td> </td>').text(value.Occupation));
            $row.append($('<td></td>').text(value.Place));
            $row.append($('<td></td>').text(value.RoleName));
            $row.append($('<td></td>').text(value.Role));

            $('tbody').append($row);

        });

        let $names = $('tbody #fname');
        let $search = $('#search');

        let $catch = [];
        let $Rows = $('tr');

        $names.each(function ()
         {

            $catch.push({

                element: this,
                text: this.textContent.trim().toLowerCase()

            });

        });

        function searchFirstName() 
        {

            let Querys = this.value.trim().toLowerCase();
            $catch.forEach(function (FirstName) {

                let index = 0;
                if (Querys) 
                {

                    index = FirstName.text.indexOf(Querys);

                }

                FirstName.element.style.background = index === -1 ? 'grey' : 'LightBlue';
                FirstName.element.style.color = index === -1 ? 'black' : 'white';

                if ($search.val() == " ") 
                {

                    FirstName.element.style.color = 'black';
                    FirstName.element.style.background = 'rgb(221, 230, 173)';

                }

            });

        }

        if ('oninput' in $search[0]) 
        {
            $search.on('input', searchFirstName);

        } else 
        {

            $search.on('input', searchFirstName);

        }
    },
});

$('#filterAM').on('click', function () 
{

    filterTable('A', 'M');
});

$('#filterNZ').on('click', function () 
{

    filterTable('N', 'Z');
});

function filterTable(First, LastChar) 
{

    let Count = 0;

    $('tbody .row').each(function () 
    {

        let LastName = $(this).find('td:nth-child(2)').text();
        let FirstRoleLetter = LastName.trim().charAt(0).toUpperCase();

        if (FirstRoleLetter >= First && FirstRoleLetter <= LastChar) 
        {

            $(this).show();
            Count++;

        } else 
        {

            $(this).hide();
            
        }
    });

    if (First === 'A') 
    {

        $('#filterAM').text(`A - M (${Count})`);

    } else {

        $('#filterNZ').text(`N - Z (${Count})`);

    }
}
