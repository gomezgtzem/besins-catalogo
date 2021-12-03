      function dibujarCanvas(){
        var canvas = document.getElementById('miCanvas');
        var ctx = canvas.getContext('2d');
		
		
			/*  sombra 1 */
			
			ctx.beginPath();
			ctx.strokeStyle="#2A282C";
			ctx.fillStyle="#2A282C";			
			ctx.moveTo(141,165);		
			ctx.lineTo(299,165);
			ctx.lineTo(305,175);
			ctx.lineTo(161,175);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			/*  sombra 1.5 */
			
			ctx.beginPath();
			ctx.strokeStyle="#2E4C57";
			ctx.fillStyle="#2E4C57";
			ctx.moveTo(299,165);		
			ctx.lineTo(289,165);
			ctx.lineTo(294,171);
			ctx.lineTo(152.7,171);
			ctx.lineTo(161,175);
			ctx.lineTo(305,175);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			/*  sombra 2 */
			
			ctx.beginPath();
			ctx.strokeStyle="#2E4C57";
			ctx.fillStyle="#2E4C57";			
			ctx.moveTo(63,322);		
			ctx.lineTo(57,332);
			ctx.lineTo(220,332);
			ctx.lineTo(220,322);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			/*  sombra 3 */
			
			ctx.beginPath();
			ctx.strokeStyle="#2A282C";
			ctx.fillStyle="#2A282C";			
			ctx.moveTo(260,322);		
			ctx.lineTo(220,322);
			ctx.lineTo(220,332);
			ctx.lineTo(280,332);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			/*  sombra 4 */
			
			ctx.beginPath();
			ctx.strokeStyle="#2E4C57";
			ctx.fillStyle="#2E4C57";
			ctx.moveTo(10,425);			
			ctx.lineTo(220,425);		
			ctx.lineTo(220,430);
			ctx.lineTo(9.5,426);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			/* triangulo izquierdo */
			
			ctx.beginPath();
			ctx.strokeStyle="#E99AAD";
			ctx.fillStyle="#E99AAD";
			ctx.moveTo(220,5);
			ctx.lineTo(141,165);
			ctx.lineTo(220,165);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			/*  centro izquierdo */
			
			ctx.beginPath();
			ctx.strokeStyle="#E99AAD";
			ctx.fillStyle="#E99AAD";
			ctx.moveTo(135,175);
			ctx.lineTo(63,322);
			ctx.lineTo(220,322);
			ctx.lineTo(220,175);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			/*  base izquierdo */
			
			ctx.beginPath();
			ctx.strokeStyle="#E99AAD";
			ctx.fillStyle="#E99AAD";
			ctx.moveTo(57,332);
			ctx.lineTo(10,425);
			ctx.lineTo(220,425);
			ctx.lineTo(220,332);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			/* triangulo derecha */
			
			ctx.beginPath();
			ctx.strokeStyle="#EA8698";
			ctx.fillStyle="#EA8698";
			ctx.moveTo(220,5);
			ctx.lineTo(299,165);
			ctx.lineTo(220,165);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			/* centro derecha */
			
			ctx.beginPath();
			ctx.strokeStyle="#EA8698";
			ctx.fillStyle="#EA8698";
			ctx.moveTo(220,175);
			ctx.lineTo(220,322);
			ctx.lineTo(377,322);
			ctx.lineTo(305,175);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			/*  base derecho */
			
			ctx.beginPath();
			ctx.strokeStyle="#EA8698";
			ctx.fillStyle="#EA8698";
			ctx.moveTo(220,332);
			ctx.lineTo(220,425);
			ctx.lineTo(430,425);
			ctx.lineTo(383,332);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			var canvas = document.getElementById('miCanvas2');
			var ctx = canvas.getContext('2d');
						
			/* sombras piramide rosa invertida */
			
			ctx.beginPath();
			ctx.strokeStyle="#DBDFDF";
			ctx.fillStyle="#DBDFDF";
			ctx.moveTo(584,160);
			ctx.lineTo(576,175);
			ctx.lineTo(450,175);
			ctx.lineTo(420,160);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			ctx.beginPath();
			ctx.strokeStyle="#DBDFDF";
			ctx.fillStyle="#DBDFDF";
			ctx.moveTo(398,322);
			ctx.lineTo(480,322);  			
			ctx.lineTo(490,330);
			ctx.lineTo(405,330);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			ctx.beginPath();
			ctx.strokeStyle="#DBDFDF";
			ctx.fillStyle="#DBDFDF";
			ctx.moveTo(442,0);
			ctx.lineTo(442,5);  			
			ctx.lineTo(540,3);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			/* piramide rosa invertida */
			
			ctx.lineWidth=3;
			ctx.beginPath();
			ctx.strokeStyle="#e6879a";
			ctx.fillStyle="#f8ecef";
			ctx.moveTo(230,5);
			ctx.lineTo(306,160);
			ctx.lineTo(583,160);
			ctx.lineTo(662,5);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			ctx.lineWidth=3;
			ctx.beginPath();
			ctx.strokeStyle="#e6879a";
			ctx.fillStyle="#f8ecef";
			ctx.moveTo(230,5);
			ctx.lineTo(306,160);
			ctx.lineTo(583,160);
			ctx.lineTo(662,5);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			ctx.lineWidth=3;
			ctx.beginPath();
			ctx.strokeStyle="#e6879a";
			ctx.fillStyle="#f8ecef";
			ctx.moveTo(315,175);
			ctx.lineTo(388,322);
			ctx.lineTo(499,322); 
			ctx.lineTo(575,175);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			
			ctx.lineWidth=3;
			ctx.beginPath();
			ctx.strokeStyle="#e6879a";
			ctx.fillStyle="#f8ecef";
			ctx.moveTo(393,330);
			ctx.lineTo(494,330); 
			ctx.lineTo(442,429);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();

}