<script>
	import Link from '$lib/Link.svelte';
	import arrowLeftIcon from '$lib/assets/arrow-left.svg';

	import P5 from 'p5-svelte';

	const sketch = (p5) => {
		const DEADMAU5_RADIUS = 900;

		let deadmau5;
		let cam;
		let d = 35;
		let boxes = [];


		p5.preload = () => {
			// Load model with normalise parameter set to true
			deadmau5 = p5.loadModel('deadmau5.obj', true);
		}


		p5.setup = () => {
			p5.createCanvas(400, 400, p5.WEBGL);
			cam = p5.createCamera();
			cam.perspective(p5.PI / 3.0, p5.width / p5.height, 0.1, 4000);
			document.oncontextmenu = () => false;
			for (let x = -d * 15; x < d * 15; x += d) {
				for (let y = -d * 15; y < d * 15; y += d) {
					let r = p5.random(255);
					let g = p5.random(255);
					let b = p5.random(255);
					let a = 127;
					for (let n = 0; n < Math.ceil(p5.random(9)); n++) {
						let z = n * d;
						let box = new Box(x, y, z, r, g, b, a);
						boxes.push(box);
					}
				}
			}
		}

		p5.draw = () => {
			p5.background(0);

			p5.angleMode(p5.DEGREES);

			p5.ambientLight(70, 70, 70);
			p5.pointLight(130, 130, 130, cam.eyeX, cam.eyeY, cam.eyeZ);

			p5.push();
			p5.noStroke();
			p5.translate(0, 0, -200);
			p5.ambientMaterial(50, 50, 50);
			p5.plane(2000, 2000);
			p5.pop();

			p5.push();
			p5.noStroke();
			p5.rotateX(90);
			p5.translate(0, -100, 0);
			p5.ambientMaterial(30, 30, 30);
			p5.cylinder(800, 200);
			p5.pop();

			p5.push();
			p5.normalMaterial();
			let x = p5.sin(p5.frameCount)*DEADMAU5_RADIUS;
			let y = p5.cos(p5.frameCount)*DEADMAU5_RADIUS;
			p5.translate(x, y, 500);
			p5.rotateX(180);
			p5.rotateY(180);
			p5.rotateZ(p5.atan2(y, x)+90);
			p5.scale(5);
			p5.model(deadmau5);
			p5.pop()

			for (let i = 0; i < boxes.length; i++) {
				let currentBox = boxes[i];
				p5.push();
				p5.ambientMaterial(currentBox.r, currentBox.g, currentBox.b);
				p5.specularMaterial(currentBox.r, currentBox.g, currentBox.b);
				p5.shininess(20);
				p5.translate(currentBox.x, currentBox.y, currentBox.z);
				p5.box(d);
				p5.pop();
			}
		}

		class Box {
			constructor(x, y, z, r, g, b, a) {
				this.x = x;
				this.y = y;
				this.z = z;
				this.r = r;
				this.g = g;
				this.b = b;
				this.a = a;
			}
		}
	}
</script>

<div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
	<Link href="/projects" class="flex flex-row gap-2 pt-4">
		<img src={arrowLeftIcon} />
		<p>Projects</p>
	</Link>
	<div class="pt-4 pb-8 space-y-2 md:space-y-5">
		<h2
			class="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14"
		>
			3D Wireframe
		</h2>
	</div>
	<div class="relative mb-auto">
		<P5 {sketch} />
	</div>
</div>
