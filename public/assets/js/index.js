$(document).ready(function () {

    var burgerInput = $("burger-name");

    $(document).on("submit", "#burger-form", handleBurgerFormSubmit);

    // getBurgers();

    function handleBurgerFormSubmit(event) {
        event.preventDefault();

        if (!burgerInput.val().trim()) {
            return;
        }
        upsertBurger({
            burger_name: burgerInput.val().trim(),
            devoured: false
        });
    }

    function upsertBurger(burgerData){
        $.post("/api/burgers", burgerData).then(getBurgers);
    }

    // function getBurgers(){
    //     $.get("/api/burgers", function(data){
    //         var rowToAdd = [];
    //         for(var i = 0; i <data.length; i++) {
    //             rowsToAdd.push()
    //         }
    //     })
    // };

})