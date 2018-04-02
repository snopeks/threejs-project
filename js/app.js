window.onload = function(){

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 1, 20000 );
			camera.position.set( 0, 0, 20 );
			camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

			var controls = new THREE.OrbitControls( camera, renderer.domElement );
			// controls.movementSpeed = 1000;
			// controls.lookSpeed = 0.125;
			// controls.lookVertical = true;
			// controls.update();
			var scene = new THREE.Scene();
			scene.background = new THREE.Color( 0xbfd1e5 );
			var geometry2 = new THREE.Geometry();
			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			geometry2.vertices.push(new THREE.Vector3( -10, 0, 0) );
			geometry2.vertices.push(new THREE.Vector3( 0, 10, 0) );
			geometry2.vertices.push(new THREE.Vector3( 10, 0, 0) );
			// console.log(geometry2.vertices)

			var cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x9932CC } );
			var lineMaterial = new THREE.LineBasicMaterial( { color: 0xff0000 } );
			var line = new THREE.Line( geometry2, lineMaterial );


			var cube = new THREE.Mesh( geometry, cubeMaterial );
			scene.add( cube );
			scene.add( line );
			renderer.render( scene, camera );
			// camera.position.z = 5;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.09;
				cube.rotation.y += 0.08;

				renderer.render(scene, camera);
			};


  console.log("js is running")
  animate();
}