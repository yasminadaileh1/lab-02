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
        // console.log(this.keyword)
        // $cloningHorns.attr("class" , this.keyword )
        $cloningHorns.addClass(this.keyword)
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


    $('#selected').on('change' , function(){
      let $selectedItem = $(this).val()
      // let $selectedItem = idX.target.value
      // console.log($selectedItem)
          $("div").hide();
          // $("#container").append( $(`.${$selectedItem}`));
          $(`.${$selectedItem}`).fadeIn(1000);
          console.log($selectedItem);
 
    })
    

     

});



