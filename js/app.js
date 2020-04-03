$(function(){
    var hornsArr = [];
    var kayW = [];
  function Horns (hornItem){

        this.title = hornItem.title;
        this.image_url = hornItem.image_url ;
        this.description = hornItem.description;
        this.keyword = hornItem.keyword;
        hornsArr.push(this);

  }

  Horns.prototype.render = function() {
   let $cloningHorns = $("#container").clone();
        $cloningHorns.find("h2").text(this.title);
        $cloningHorns.find("img").attr("src", this.image_url);
        $cloningHorns.find("p").text(this.description);
        $cloningHorns.attr("id" , this.keyword )
        $cloningHorns.addClass(this.keyword)
        $("section").append($cloningHorns);
        

    }
    Horns.prototype.selector = function(){
   let $selector = $("#selected");
   if(!(kayW.includes(this.keyword))){
        kayW.push(this.keyword);
        $selector.append(`<option> ${this.keyword} </option>`);
// in 31 line we are creating option tags dyinamic if we have 5 option or if we have 50 optin it will be created
// in this function we stored the keyword in the option without repeated also here, so we can use this to reffered to the data in the select tag any time.
        // console.log(this)
 // this console will show us all the objects not only the keyword I think because we are in a prototype function and this will be reffered to the constructor
 // okay :) !
   }
  }
    const readJson = () => {
        $.ajax("data/page-1.json", { method: "GET", dataType: "JSON" }).then(data => {
          data.forEach(hornItem => {
            let horns = new Horns(hornItem);
            horns.selector();
            horns.render();
      
          });
        });
      };
      readJson();


    $('#selected').on('change' , function(){
      let $selectedItem = $(this).val()

console.log(this)
// this here will reffered to the stored keywords (<option>) because in the prototype function we stored in the #selector the value of the keyword key in it

console.log($selectedItem)
// this console will give us the keyword selected 

          $("div").hide();
          $(`.${$selectedItem}`).fadeIn(1000);
// the render function will show the selected items reffered to the keyword keyword > object > data 
         
 
    })
    

     

});



