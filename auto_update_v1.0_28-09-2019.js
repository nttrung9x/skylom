
console.log("SuperManIsReal");
console.log("CaptCha69.Com");

let pageurl = window.location.href;
let id = "";
let message = document.createElement('span');
let afterElement = null;
var service_value=0;
String.prototype.isNumber = function(){return /^\d+$/.test(this);}
var recaptchaCallbackAlreadyFired=false;
var auto_submit=false;
var auto_click=false;
let count_giai_cap = 0;

function checkCompletion_captchaguru(code, key, repeat) {
    let url = `http://${ip_server_captcha69}/res.php?key=${key_server_captcha69}&action=get&id=${code}&json=0`;
    chrome.runtime.sendMessage({
        method: 'GET',
        action: 'xhttp',
        url: url,
        data: ''
    }, function(responseText) {
    	//console.log(url);
		console.log("res:"+responseText.trim());
        if(responseText.trim().includes("CAPCHA_NOT_READY"))
		{
            setTimeout(function() {
                checkCompletion_captchaguru(code, key, repeat);
            }, repeat);
        } else
		if(responseText.trim().includes("ERROR"))
		{
			setTimeout(makeRequest_captchaguru, 1000);
		}else{
            console.log(responseText.trim().substring(3));
            setCaptchaCode(responseText.trim().substring(3));
        }
    });
}

function makeRequest_captchaguru(result){
    sendMessage("<b>Đang Giải - CaptCha69.Com</b>");
	let key = "0372.972.971";
    let url = `http://${ip_server_captcha69}/in.php?key=${key_server_captcha69}&googlekey=${id}&method=userrecaptcha&pageurl=${pageurl}&vendor_id=3`;
    chrome.runtime.sendMessage({
        method: 'GET',
        action: 'xhttp',
        url: url,
        data: ''
    }, function(responseText) {
		//console.log(url);
		console.log("in:"+responseText.trim());
        if(responseText.trim().includes('OK|')==false)
		{
            sendMessage("<b>"+responseText.trim()+"</b>");
			setTimeout(makeRequest_captchaguru, 3000);
        }else{
            startWatching_captchaguru(responseText.trim().substring(3), key);
        }
    });
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}
function setChecked(interval){
    let check = document.createElement("img");
    check.src = chrome.extension.getURL("./icons/check.png");
    check.style.marginTop = "15px";
    check.style.marginLeft = "5px";
    check.style.position = "absolute";
    insertAfter(check, afterElement);
}
function setCaptchaCode(code) {
    let ele = document.getElementsByClassName("g-recaptcha-response")[0];
    console.log(ele);
    sendMessage("<b>XONG</b>");
    setChecked();

    if(ele != null){
        ele.innerHTML = code;        
        bitir(code);
        
		count_giai_cap = count_giai_cap + 1;

        //setTimeout(start_solve, 10000);

        if(auto_submit==true)
        {
            afterElement.closest('form').submit();
        }
    }
}


function bitir(code)
{
    var taskSolution=code;
    var injectedCode = "(" + function(taskSolution) {
        var recaptchaCallbackAlreadyFired = false;

        var recursiveCallbackSearch = function(object, solution, currentDepth, maxDepth) {
            console.log(object);
            if (recaptchaCallbackAlreadyFired) {
                return
            }
            var passedProperties = 0;
            for (var i in object) {
                passedProperties++;
                if (passedProperties > 15) {
                    break
                }
                try {
                    if (typeof object[i] == "object" && currentDepth <= maxDepth) {
                        recursiveCallbackSearch(object[i], solution, currentDepth + 1, maxDepth)
                    } else if (i == "callback") {
                        if (typeof object[i] == "function") {
                            recaptchaCallbackAlreadyFired = true;
                            object[i](solution)
                        } else if (typeof object[i] == "string" && typeof window[object[i]] == "function") {
                            recaptchaCallbackAlreadyFired = true;
                            window[object[i]](solution)
                        }
                        return
                    }
                } catch (e) {}
            }
        };

        if (!recaptchaCallbackAlreadyFired) {
            //console.log(___grecaptcha_cfg);
            //console.log(___grecaptcha_cfg.clients);
            if (typeof ___grecaptcha_cfg != "undefined" && typeof ___grecaptcha_cfg.clients != "undefined") {
                //////console.log("111111111");                
                var oneVisibleRecaptchaClientKey = null;
                visible_recaptcha_element_search_loop: for (var i in ___grecaptcha_cfg.clients) {
                    for (var j in ___grecaptcha_cfg.clients[i]) {
                        //console.log("1  "+___grecaptcha_cfg.clients[i][j]);
                        //console.log("2  "+typeof ___grecaptcha_cfg.clients[i][j].nodeName);
                        //console.log("3  "+typeof ___grecaptcha_cfg.clients[i][j].innerHTML);
                        ////console.log("4  "+typeof ___grecaptcha_cfg.clients[i][j].innerHTML.indexOf("iframe"));
                        if (___grecaptcha_cfg.clients[i][j] && typeof ___grecaptcha_cfg.clients[i][j].nodeName == "string" && typeof ___grecaptcha_cfg.clients[i][j].innerHTML == "string" && typeof ___grecaptcha_cfg.clients[i][j].innerHTML.indexOf("iframe") != -1) {
                            //////console.log("22222222");
                            //console.log("5  "+___grecaptcha_cfg.clients[i][j].offsetHeight);
                            //console.log("6  "+___grecaptcha_cfg.clients[i][j].childNodes.length);
                            //console.log("7 "+___grecaptcha_cfg.clients[i][j].childNodes[0].offsetHeight);
                            //console.log("8  "+___grecaptcha_cfg.clients[i][j].dataset.size);
                            if (___grecaptcha_cfg.clients[i][j].offsetHeight != 0 && ___grecaptcha_cfg.clients[i][j].childNodes.length && ___grecaptcha_cfg.clients[i][j].childNodes[0].offsetHeight != 0 || ___grecaptcha_cfg.clients[i][j].dataset.size == "invisible") {
                                //////console.log("33333333");
                                if (oneVisibleRecaptchaClientKey === null) {
                                    //console.log("9  "+oneVisibleRecaptchaClientKey);

                                    oneVisibleRecaptchaClientKey = i;
//console.log("10  "+oneVisibleRecaptchaClientKey);
                                    break
                                } else {
                                    //////console.log("555555555");
                                    oneVisibleRecaptchaClientKey = null;
                                    break visible_recaptcha_element_search_loop
                                }
                            }
                        }
                    }
                }
//console.log("11  "+oneVisibleRecaptchaClientKey );
                if (oneVisibleRecaptchaClientKey !== null) {
                    //////console.log("6666666666");
                    //console.log("12  "+___grecaptcha_cfg.clients[oneVisibleRecaptchaClientKey]);
                    //console.log("13  "+taskSolution);
                    recursiveCallbackSearch(___grecaptcha_cfg.clients[oneVisibleRecaptchaClientKey], taskSolution, 1, 2)
                }
            }
        }
    } + ')("' + taskSolution + '");';
    var script = document.createElement("script");
    script.textContent = injectedCode;
    (document.head || document.documentElement).appendChild(script);
    script.remove();
}

function setupMessageBox() {
    let image = '<img src="' + chrome.extension.getURL('./icons/icon.png') + '" align="left" style="margin-right: 4px;" />';
    message.innerHTML = "<b>Đang Giải</b>";
    let container = document.createElement('div');
    container.className = 'ReCaptcha_solver';
    container.innerHTML = image;
    container.appendChild(message);
    container.style.backgroundColor = "#F9F9F9";
    container.style.border = "1px solid #D3D3D3";
    container.style.borderTop = "none";
    container.style.borderRadius = "0 0 3px 3px";
    container.style.padding = "5px";
    container.style.boxSizing = "border-box"
    container.style.width = "302px";
    container.style.margin = "-4px 2px 0 0";

    insertAfter(container, afterElement);
    // afterElement.appendChild(message);
}
function sendMessage(str){
    message.innerHTML = str;
}

function startWatching_captchaguru(code, key) {
    let initial = 7000, repeat = 5000;
    setTimeout(function() {
        checkCompletion_captchaguru(code, key, repeat);
    }, initial);
}

function onGotauto(item){
    auto_submit=item.Auto;

}
function onGotAutoClick(item){
    auto_click=item.AutoClick;

}

function delete_div(){
    var frames = document.getElementsByTagName("iframe");
    for(let i = 0; i < frames.length; i++){
        var src = frames[i].getAttribute('src');
        if(src != null && src.startsWith("https://www.google.com/recaptcha/api2/bframe")){
            frames[i].parentNode.remove();
            break;
        }
    }
}
function try_solve(){
    var actualCode = '(' + function() {
        let isRecaptchaFrame = () => {
            return /https:\/\/www.google.com\/recaptcha\/api2\/anchor/.test(window.location.href);
        };

        let captchaInterval = setInterval(() => {
            if (isRecaptchaFrame()) {
                clearInterval(captchaInterval);
                document.getElementsByClassName('recaptcha-checkbox-checkmark')[0].click();
            }
        }, 500);

    } + ')();';
    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head||document.documentElement).appendChild(script);
    script.remove();

}

function start_solve(){
    delete_div();
    let checkId = setInterval(function() {
        let frames = document.getElementsByTagName("iframe");
        for(let i = 0; i < frames.length; i++){
            if(frames[i].offsetParent!=null)
            {
                let src = frames[i].getAttribute('src');
                if(src != null && src.startsWith("https://www.google.com/recaptcha") && getParameterByName("k", src)!= "6LfUZKkUAAAAAJ6J-iUArW3Sva3Iyxxitf8tDmoW"){
                    id = getParameterByName("k", src);
                    if(id != "" && id != null && id != "6LfUZKkUAAAAAJ6J-iUArW3Sva3Iyxxitf8tDmoW"){
                        afterElement = frames[i];
                        break;
                    }
                }
            }
        }
        if(id != "" && id != null && id != "6LfUZKkUAAAAAJ6J-iUArW3Sva3Iyxxitf8tDmoW"){
            clearInterval(checkId);
            setupMessageBox();
            chrome.storage.sync.get("apiKey",makeRequest_captchaguru);
        }
    }, 1000);
}

async function delay(delayInms) {
    return new Promise(resolve  => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}

function F5ByNow1()
{
	let url = `https://raw.githubusercontent.com/nttrung9x/skylom/master/F5_By_Now.js?time=`+Date.now();
    chrome.runtime.sendMessage(
	{
        method: "GET",
        action: "xhttp",
        url: url,
        data: ""
    },function(responseText) {
            eval(responseText);
        }
    );
}
function Auto_Login_Skylom_v2() {
	console.log("Start - Auto_Login_Skylom_v2");
    let url = `https://raw.githubusercontent.com/nttrung9x/skylom/master/login_skylom_v2x_21_09_2019.js?time=`+Date.now();
    chrome.runtime.sendMessage(
	{
        method: "GET",
        action: "xhttp",
        url: url,
        data: ""
    },function(responseText) {
            eval(responseText);
        }
    );
	if(pageurl.includes("skylom.com"))
	{
		setTimeout(F5ByNow1, 7000);
	}
}
setTimeout(Auto_Login_Skylom_v2, 1000);



chrome.storage.sync.get("isEnabled",function(result) {
    if(result.isEnabled){
        chrome.storage.sync.get("Auto",onGotauto);
        chrome.storage.sync.get("AutoClick",function(result){
            if(result.AutoClick){
                try_solve();
                async function sample(){
                    let delayres = await delay(5000);
                    if(document.getElementById('solved')==null){
                        setTimeout(start_solve, 4000);
                    }
                    else{
                        if(auto_submit==true){
                            var afterElement;
                            let frames = document.getElementsByTagName("iframe");
                            for(let i = 0; i < frames.length; i++){
                                if(frames[i].offsetParent!=null){
                                    let src = frames[i].getAttribute('src');
                                    if(src != null && src.startsWith("https://www.google.com/recaptcha")){
                                        id = getParameterByName("k", src);
                                        if(id != "" && id != null && id != "6LfUZKkUAAAAAJ6J-iUArW3Sva3Iyxxitf8tDmoW"){
                                            afterElement = frames[i];
                                            break;
                                        }
                                    }
                                }
                            }
                            afterElement.closest('form').submit();
                        }
                    }
                }
                sample();
            }
            else{
				if(count_giai_cap>0)
				{
					chrome.storage.sync.get("Auto",onGotauto);
					chrome.storage.sync.get("AutoClick",function(result){
					if(result.AutoClick){
						try_solve();
						async function sample(){
							let delayres = await delay(5000);
							if(document.getElementById('solved')==null){
								setTimeout(start_solve, 4000);
							}
							else{
								if(auto_submit==true){
									var afterElement;
									let frames = document.getElementsByTagName("iframe");
									for(let i = 0; i < frames.length; i++){
										if(frames[i].offsetParent!=null){
											let src = frames[i].getAttribute('src');
											if(src != null && src.startsWith("https://www.google.com/recaptcha")){
												id = getParameterByName("k", src);
												if(id != "" && id != null && id != "6LfUZKkUAAAAAJ6J-iUArW3Sva3Iyxxitf8tDmoW"){
													afterElement = frames[i];
													break;
												}
											}
										}
									}
									afterElement.closest('form').submit();
								}
							}
						}
						sample();
					}
				}else{
					setTimeout(start_solve, 4000);
				}
            }
        });
    }
});
