	

	var set_time_box = document.getElementsByClassName('timebox')[0];
  	var set_time_day = set_time_box.getElementsByClassName('day_time')[0];
    var set_time_minutes = set_time_box.getElementsByClassName('minutes_time')[0];
    var set_time_second = set_time_box.getElementsByClassName('second_time')[0];
  	var set_time_millisecond = set_time_box.getElementsByClassName('millisecond_time')[0];
  
  	var end_time = new Date("2022-10-19 22:00"); 	
  
  function time(){
  
  	var now_time = new Date(); 
    var count_time = parseInt((end_time.getTime - now_time.getTime)/1000);
    
    if( count_time<=0){
      
      set_time_day.innerHTML = "秒";
      set_time_minutes.innerHTML = "杀";
      set_time_second.innerHTML = "结";
      set_time_millisecond.innerHTML = "束";
      
    }else {
     	
      set_time_day.innerHTML = (count_time/(3600*24));
      set_time_minutes.innerHTML = (count_time/3600%24);
      set_time_second.innerHTML = (count_time/60%60);
      set_time_millisecond.innerHTML = (count_time%60);
      
    }
    
    
  
  }
        
        
        