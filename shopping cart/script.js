$(document).ready(function(){
	var text = "";
	for(let i=0; i < grocery.length; i++) {
		text += '<div class="item"><img src="' + grocery[i].image + '"><div class="price">Price: ' + grocery[i].price + '</div><div class="name">Name: ' + grocery[i].name + '</div><div class="btn">Add to cart</div><div class="btnd">Delete</div></div>';
	}
	
	$('.product').append(text);

	var btn = document.getElementsByClassName("btn");
	var btnD=document.getElementsByClassName("btnd");

	for(let i=0; i<btn.length; i++) {
		btn[i].onclick= function(){
			addItemCart(i);
			displayCart();
		}
	}

	for(let i=0; i<btn.length; i++) {
		btnD[i].onclick= function(){
			deleteItemCart(i);
			displayCart();
		}
	}

	var cart=[];

	var Item=function(name,price,count){
	this.name=name;
	this.price=price;
	this.count=count;
	}

//-----Increase Items from shopping cart------//

	function addItemCart(x){
		
			for (let i=0;i<cart.length; i++){
				if (cart[i].name === grocery[x].name){
					cart[i].count ++;
					return
				}
			} 
			 
				item = new Item(grocery[x].name, grocery[x].price, grocery[x].count);
					cart.push(item);
					console.log(cart);
					
		
		}
//-----Decrease Items from shopping cart------//

	function deleteItemCart(x){
		
			for (let i=0;i<cart.length; i++){
				if (cart[i].name === grocery[x].name){
					cart[i].count --;
					if (cart[i].count ===0){
						cart.splice(i,1);
					}
					break
				}
			} 
					
		console.log(cart)
		}

//-----SUM Function------//

	function sumItemCart(){
		var sum=0;
		for(i=0; i<cart.length; i++) {
			sum+=cart[i].price*cart[i].count;
		}
		return sum;
	} 
	

	function shipping()	{
		sum=sumItemCart();
		if (sum > 80) {
			var shipCost=6;
		}
		else {
			shipCost=9;
		}
		return shipCost;
	}

	function tax() {
		sum=sumItemCart();
		var tax= sum*22/100;
		return tax;
	}

	function discount() {
		sum=sumItemCart();
		if (sum<40) {
			var disc=0;
		}
		else if (sum<100) {
			disc=sum*7/100;
		}
		else {
			disc=sum*12/100;
		}
		return disc;
	}


	console.log(sumItemCart());

//-----Display Carte------//

	function displayCart(){
		var output="";
		for(i=0; i<cart.length; i++) {
			output+= "<li>" + cart[i].name + " Price: " +cart[i].price + "$ Count:" + cart[i].count +"</li>"
		}
		$(".cart").html(output);
		$(".total").html("Total: " + sumItemCart() +" $ ");
		$(".shipping").html("Shipping: " + shipping() +" $ ");
		$(".tax").html("Tax Cost: " + tax() +" $ ");
		$(".discount").html("Discount: " + discount() +" $ ")
	}
//-----Panel------//

	$("#flip").click(function(){
        $(".cart").slideToggle("slow");
    });
	
  });