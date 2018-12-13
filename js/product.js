$(function(){

	// $('.daohang').hover(function(){
	// 	$('.dhcontent').addClass('.aaa');
	// },function(){
	// 	$('.dhcontent').removeClass('.aaa');
	// })
	
	$(".daohang").hover(function(){
		$(this).find(".dhcontent").slideToggle(600);
		$(this).find(".dhcontent").toggleClass("aaa");
	})	

	// 导航条粘贴特效
	$(function(){
		// var sTop=$("html,body").scrollTop;
		$(window).scroll(function(){
			if($(window).scrollTop()>350){
				$("#contentt").addClass("fixed");
			}else{
				$("#contentt").removeClass("fixed");
			}
		})
	})

// 搜索框特效
	// 聚焦的时候
	$("#searchTxt").focus(function(){
		var $txtVal=$("#searchTxt").val();
		if($txtVal == "请输入您要搜索的商品"){
			$(this).val("");
			$(this).css("color","#000");
		}
	})
	// 失焦的时候
	$("#searchTxt").blur(function(){
		var $txtVal=$("#searchTxt").val();
		if($txtVal == ""){
			$(this).val("请输入您要搜索的商品");
			$(this).css("color","#888");
		}
	})






})