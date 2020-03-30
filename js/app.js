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
        $cloningHorns.append($("<h2></h2>").text(this.title));
        $cloningHorns.append($("<img></img>").attr("src", this.image_url));
        $cloningHorns.append($("<p></p>").text(this.description));
        $cloningHorns.attr("id" , this.keyword )
        console.log(this.keyword)
        $("section").append($cloningHorns);
        

    }
    Horns.prototype.selector = function(){
   let $selector = $("select")
   if(!(kayW.includes(this.keyword))){
        kayW.push(this.keyword);
        $selector.append(`<option> ${this.keyword} </option>`);
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
      
    $('select').change(function(){
      var selectItem = $(this).children('option:selected').val();
      kayW.forEach(function(val){
        if( selectItem === val ){
          $("section").hide();
          $(`.${val}`).show();
        }
      }
        )
    })

     

});



