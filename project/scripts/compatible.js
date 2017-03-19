/* 兼容IE8事件操作 */
	var addEvent = document.addEventListener?function(elem,type,listener,userCapture){
		elem.addEventListener(type,listener,userCapture);
	}:function(elem,type,listener){
		elem.attachEvent('on'+type,listener);
	}
	var removeEvent = document.removeEventListener?function(elem,type,listener,userCapture){
		elem.removeEventListener(type, listener,userCapture);
	}:function(elem,type,listener){
		elem.detachEvent('on'+type,listener);
	}

  /* addClassName和removeClassName */
	/* 兼容indexOf() */
		if(!Array.prototype.indexOf){
			Array.prototype.indexOf = function(str){
				var len = this.length,form,index;
				if(arguments.length>1){
					from = Number(arguments[1]);
					index = (from<0)?Math.ceil(from):Math.floor(from);
				}else {
					index = 0;
				}
				if(index<0) index+=length;
				for(;index<len;index++){
					if (index in this && this[index] === str)
						return index;
				}
				return -1;
			};
		}
	// 添加类名，如果类名存在，则不添加。
	function addClassName(node,name){
		var arr = node.className.split(' ');
		if(node.className == ''){
			node.className = name;
		}else if (arr.indexOf(name) == -1){
			node.className += ' '+name;
		}
	}
	// 清除类名，为了防止类名相同
	function removeClassName(node,name){
		var arr = [];
		if(node.className != ''){
			arr = node.className.split(' ');
			var _index = arr.indexOf(name);
			if(_index != -1){
				arr.splice(_index, 1);
				node.className = arr.join(' ');
			}
		}
	}

  // 兼容IE的透明度
function setOpacity(ele, opacity) { 
	if (ele.style.opacity != undefined) { 
		ele.style.opacity = opacity / 100; 
	}else { 
		ele.style.filter = "alpha(opacity=" + opacity + ")"; 
	} 
} 