
function Auto_Login_Skylom()
{
	var full_ip_sv = "103.125.191.10 , 103.125.191.13 , 74.121.190.26 , 216.244.78.26:6868 , 216.244.79.194:6868 , 173.208.239.130:6868 , 38.141.42.250:6868 , 216.244.76.90:6868 , 216.244.77.138:6868";
	if(full_ip_sv.includes(ip_server_captcha69))
	{
		var _now = Date.now();
		var _location_this = window.location;
		
		console.log(_now + " - Key OK");
		var src = document.documentElement.innerHTML;
		if(src.includes("Continue With Google"))
		{
			console.log(_now + " - Continue With Google");
			var ele = document.evaluate("//a[text()='Continue With Google']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
			if (ele) 
			{
				console.log(_now + " - OK ele 1 - Continue With Google");
				ele.click();
			}
		}else
		if(src.includes("Choose an account") || _location_this.includes("accounts.google.com/signin/oauth"))
		{
			console.log(_now + " - Choose an account");
			var ele = document.evaluate("html/body/div[1]/div[1]/div[2]/div[2]/div/div/div[2]/div/div/div/form/span/section/div/div/div/div/ul/li[1]/div/div[1]/div/div[2]/div[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
			if (ele) 
			{
				console.log(_now + " - OK ele 1 - Choose an account");
				ele.click();
			}
			var ele2 = document.getElementById("profileIdentifier").click();
			if(ele2)
			{
				console.log(_now + " - OK ele 2 - ID => profileIdentifier");
				ele2.click();
			}
			setTimeout(Auto_Login_Skylom, 15000);
		}else
		if(src.includes("2019, Skylom"))
		{
			console.log(_now + " - Ket Thuc Loop Auto Login - " + window.location);
		}else{
			console.log(_now + " - SET Loop Auto Login - " + window.location);
			if(src.includes("Choose an account"))
			{
				console.log(_now + " - Set time out - Choose an account");
				setTimeout(Auto_Login_Skylom, 15000);
			}
		}
	}else{
		console.log("Sai Key - Phone => 0372.972.971");
		alert("Liên Hệ 0372.972.971 Để Mua Key Bạn Nha - CaptCha69.Com");
	}
}
setTimeout(Auto_Login_Skylom, 1000);
