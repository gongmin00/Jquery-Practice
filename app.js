$(".btn").on("click",function(){
    var btnAction =$(this).attr("data-panelid");
    $("#"+btnAction).toggle(1000);
})