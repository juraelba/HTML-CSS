var current = [];
  		current[0] = 0;
  		current[1] = 0;
  		current[2] = 0;
	$(document).ready(function(){

		$("#floorSelect li").click(function(){

			var floor = parseInt($(this).data("floor")),
			height = floor*5;

			if( $.inArray(floor, current) !== -1 ) return;

			var counts = current;

			var closest = counts.reduce(function(prev, curr) {
			  return (Math.abs(curr - floor) < Math.abs(prev - floor) ? curr : prev);
			});

			var elevator_number = counts.indexOf(closest);
			var animate = Math.abs(current[elevator_number]-floor)*500;

			$("#elevatorContainer"+elevator_number+" .rightDoor").removeClass("active-right");   
			$("#elevatorContainer"+elevator_number+" .leftDoor").removeClass("active-left");  
			setTimeout(function(){
				$("#elevatorContainer"+elevator_number).css("transition","all "+animate+"ms linear");
					$("#elevatorContainer"+elevator_number).css("bottom",height+"%");
			current[elevator_number] = floor;
			setTimeout(function(){

				$("#elevatorContainer"+elevator_number+" .rightDoor").addClass("active-right");   
				$("#elevatorContainer"+elevator_number+" .leftDoor").addClass("active-left");  

			},animate);},300);
		});

});