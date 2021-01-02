
function tipAmount(){
	var bill_amount = Number(document.getElementById('billamount').value);
	//alert(bill_amount);
	var tip_percent = Number(document.getElementById('tippercent').value);
	// alert(tip_percent);
	if (bill_amount <= 0) {
		alert("Enter correct bill amount !!!");
	}

	tip_amount = bill_amount * (tip_percent / 100);
	total_amount = Number(tip_amount) + bill_amount;
	// alert(tip_amount);
	// alert(total_amount);
		
	document.getElementById("tipamount").value = tip_amount;
	document.getElementById("totalamount").value = total_amount;	
}
