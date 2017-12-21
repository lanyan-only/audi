$(function () {

	//接口url地址
	var url = "http://xy.qichedaquan.com/medias/public/index.php/port/";
	
	//省份url地址
	var p="Dzcc/SelectProvince";

	//城市url地址
	var c="Dzcc/Selectcity";

	//经销商url地址
	var d="Dzcc/Selectdealer";

	//数据提交url地址
	var s="aodi/aodiadd";

	$(".submit-box").click(function () {

		//项目来源
		var source = 2; // 1 pc   0 mobile

		//名字不为空
		var name = $("input[name='name']").val();
		if (name == "" || name == "姓名") {
			showalert("请输入姓名");
			//$("input[name='name']").focus();
			return false;
		}

		if (!name.match(/^([\u4E00-\u9FA5]{2,4}$)|(^[a-zA-Z]{1,8}$)/)) {
			showalert("抱歉，姓名需要输入2-4位汉字或八个英文字母");
			return false;
		}
//      console.log(name)
		//性别，必选 1男。2女
//		var thesex = $("input[name='sex']:checked").val();
//      console.log(thesex)
		//手机号验证
		var phone = $("input[name='phone']").val();
		if (phone == "" || phone == "手机号") {
			showalert("手机号码不能为空！");
			// $("input[name='phone']").focus();
			return false;
		}

		if (!phone.match(/^(((1[3|5|7|8][0-9]{1}))+\d{8})$/)) {
			showalert("手机号码格式不正确！");
			//$("input[name='phone']").focus();
			return false;
		}

//       console.log(phone)
		//省，必选
//		var province = $("select[name='provinceId']").val();
//		//console.log(province);
//		if (province == "请选择省份") {
//			showalert("请选择省份");
//			// $("select[name='provinceId']").focus();
//			return false;
//		}
////       console.log(province)
		//市，必选
//		var city = $("select[name='cityId']").val();
//		if (city == "请选择城市") {
//			showalert("请选择城市");
//			// $("select[name='cityId']").focus();
//			return false;
//		}
//      console.log(city)
		//经销商，必选
//		var dealer = $("select[name='dealerId']").val();
//		if (dealer == "请选择经销商") {
//			showalert("请选择经销商");
//			//$("select[name='dealer']").focus();
//			return false;
//		}
//     console.log(dealer)


		////////////////////////////
		/*意向车型和购车时间为拓展字段*/
		////////////////////////////


          //意向车型
          var cartype = $("#cartype").val();
          if (cartype == "0") {
              showalert("请选择意向车型")
              return false;
          }
//        //购买时间
//        var buycartime = $("#buycartime").val();
//        if(buycartime == "0"){
//            showalert("请选择购买时间");
//            //$("select[name='dealer']").focus();
//            return false;
//        }

		//注册信息提交
		$.getJSON(url + s, {
			name: name,
			mobile: phone,
			car_type: cartype,
			source: source
		}, function (json) {
			console.log(json);
			if (jQuery.type(json) == "string") {
				var json = eval('(' + json + ')'); //字符串转为json格式
				showalert(json.msg);
				if(json.code == '1'){
            	   $("input[name='name']").val('');
            	   $("input[name='phone']").val('');
            	   $("select[name='cartype']").val('0');
                }
			}
			else {
				showalert(json.msg);
				if(json.code == '1'){
            	   $("input[name='name']").val('');
            	   $("input[name='phone']").val('');
            	   $("select[name='cartype']").val('0');
                }
			}
            

		})


	});
})