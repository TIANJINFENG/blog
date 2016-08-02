/**
 * Created by dell on 16-8-1.
 */
$(document).ready(function(){
    replace_info();
    bind_add_reduce();
    del_row();
});
function replace_info(){
    var shopping_string=$(".shopping_item_template").html();
    var shopping_list_info = shopping_string.replace(/kind/,1)
        .replace(/name/,"苹果")
        .replace(/price/,3)
        .replace(/unit/,"斤")
        .replace(/time/,160801)
    $(".shopping_list").append(shopping_list_info);
}
function bind_add_reduce(){
    $(".reduce_count , .add_count" ).click(function (event){
        var num=(event.target.className== "add_count")? 1:-1;
        var count=Number($(".amount").val());
        var number=count+num;
        if(number>0){
            $(".amount").val(number);
        }
        if(number==0){
            $(".amount").val(number);
        }
    });
    return
}
function del_row(){

        $(".delate_button").click(function (){
            $("#delate").remove();
        })

}
