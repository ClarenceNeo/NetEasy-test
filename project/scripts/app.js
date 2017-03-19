// 轮播图
	// 淡入效果
		function fadein (ele) {
			var stepLength = 1/25 * 100;
			setOpacity(ele,0);
			var o = 0;
			function step () {
				if ( o +stepLength <= 100) {
					o += stepLength;
					setOpacity(ele,o);
				} else {
					o = 100;
					clearInterval(setIntervalId);
				}
			}
			var setIntervalId = setInterval(step, 20);
		}
	// 为轮播点点击触发事件
	function clickWrap (){
		var wrap = document.querySelector('.m-bnwrap');
			bnr = wrap.querySelector('.m-bnr');
			items = bnr.querySelectorAll('a');
			pointer = wrap.querySelector('.pointer');
			p_i = pointer.querySelectorAll('i'),
			num = 0;
		for (var i = 0; i <p_i.length; i++) {
			(function(i){
				addEvent(p_i[i],'click',function(event){
					for(var j=0;j< p_i.length;j++){
						removeClassName(p_i[j],'active');
						removeClassName(items[j],'active');
					}
					addClassName(p_i[i],'active');
					addClassName(items[i],'active');
					fadein(items[i]);
				})
			})(i);
		}
		function autoplay(wrap){
			var bnr = wrap.querySelector('.m-bnr').querySelectorAll('a');
			function step(){
                var index = (++num)%items.length,x = 0;
                for(var j=0;j< items.length;j++){
						removeClassName(p_i[j],'active');
						removeClassName(items[j],'active');
				}
                addClassName(items[index],'active');
                addClassName(p_i[index],'active');
                fadein(items[index]);
			}
			var timer = setInterval(step,4500);
			// 鼠标进入轮播图暂停动画。
			addEvent(wrap,'mouseover',function(event){
				clearInterval(timer);
			});
		}
		autoplay(wrap);
		// 鼠标离开轮播图开始动画。
		addEvent(wrap,'mouseout',function(event){
			autoplay(wrap);
		})
	}
	clickWrap();