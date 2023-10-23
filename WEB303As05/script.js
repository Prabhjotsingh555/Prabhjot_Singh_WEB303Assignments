/*
    Assignment 05
*/

$(document).ready(function () {

    class ContentItem {

        constructor(id, name, description, categoryGenre) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
        }
    
        updateContentItem(id, name, description, categoryGenre) {

            if (id === this.id) {
                if (name !== null) this.name = name;
                if (description !== null) this.description = description;
                if (categoryGenre !== null) this.categoryGenre = categoryGenre;
            }
        }
    
        toString() {

            return `

                <div class="content-item-wrapper" id="content-item-${this.id}">

                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <div>${this.categoryGenre}</div>
                    
                </div>

            `;
        }
    }
    
    const contentItems = [

        new ContentItem(0, "1", "Item 1", "Type A"),
        new ContentItem(1, "2", "Item 2", "Type B"),
        new ContentItem(2, "3", "Item 3", "Type C"),
        new ContentItem(3, "4", "Item 4", "Type D"),
        new ContentItem(4, "5", "Item 5", "Type E")

    ];
    
    $(document).ready(function() {

        const contentList = $("#content-item-list");
        
        contentItems.forEach(item => {

            contentList.append(item.toString());
        });
    
    
        $(".content-item-wrapper").css({

            border: "2px solid black",
            width: "295.5px",
            padding: "4%",
            margin: "4%",

        });

    });
    
});


