<script>
	import Link from '$lib/Link.svelte';
	import arrowLeftIcon from '$lib/assets/arrow-left.svg';

	import P5 from 'p5-svelte';

	const sketch = (p5) => {
		// Inspiration: https://www.renderhub.com/jet29/low-poly-tree-version-1/low-poly-tree-version-1-01.jpg

		let shapes;

		p5.setup = () => {
			p5.createCanvas(400, 400);
			p5.angleMode(p5.DEGREES);

			let lighterTrunkColor = p5.color(145, 100, 45);
			let darkerTrunkColor = p5.color(125, 80, 40);
			let leafColor = p5.color(128, 150, 54);

			// center point
			let centerDodecahedron = new Dodecahedron(
				new Point(0, 0, 0),
				new Point(8, 8, 8),
				lighterTrunkColor
			);

			// starting in center of tree and moving down trunk
			let trunk1 = new Rectangle(new Point(0, 35, 0), new Point(10, 35, 10), lighterTrunkColor);
			trunk1.rotateAroundPointY(20, new Point(0, 0, 0));
			trunk1.rotateAroundPointZ(5, new Point(0, 0, 0));
			trunk1.rotateAroundPointX(5, new Point(0, 0, 0));

			let trunk2 = new Rectangle(new Point(0, 90, 0), new Point(10, 20, 10), darkerTrunkColor);
			trunk2.rotateAroundPointY(20, new Point(0, 0, 0));
			trunk2.rotateAroundPointZ(5, new Point(0, 0, 0));
			trunk2.rotateAroundPointX(5, new Point(0, 0, 0));
			trunk2.rotateAroundPointX(-10, new Point(0, 70, 0));
			trunk2.rotateAroundPointZ(-10, new Point(0, 70, 0));

			let trunk3 = new Rectangle(new Point(0, 130, 0), new Point(10, 20, 10), lighterTrunkColor);
			trunk3.rotateAroundPointY(20, new Point(0, 0, 0));
			trunk3.rotateAroundPointZ(5, new Point(0, 0, 0));
			trunk3.rotateAroundPointX(5, new Point(0, 0, 0));
			trunk3.rotateAroundPointX(-10, new Point(0, 70, 0));
			trunk3.rotateAroundPointZ(-10, new Point(0, 70, 0));
			trunk3.rotateAroundPointX(5, new Point(0, 110, 0));
			trunk3.rotateAroundPointZ(5, new Point(0, 110, 0));

			// left fork from center
			let trunk4 = new Rectangle(new Point(0, -25, 0), new Point(7, 25, 7), darkerTrunkColor);
			trunk4.rotateAroundPointY(20, new Point(0, 0, 0));
			trunk4.rotateAroundPointZ(-45, new Point(0, 0, 0));
			trunk4.rotateAroundPointX(-5, new Point(0, 0, 0));

			let trunk5 = new Rectangle(new Point(0, -75, 0), new Point(7, 25, 7), lighterTrunkColor);
			trunk5.rotateAroundPointY(20, new Point(0, 0, 0));
			trunk5.rotateAroundPointZ(-45, new Point(0, 0, 0));
			trunk5.rotateAroundPointX(-5, new Point(0, 0, 0));
			trunk5.rotateAroundPointZ(-20, new Point(-30, -40, 0));
			trunk5.rotateAroundPointY(-30, new Point(-30, -40, 0));

			let trunk6 = new Rectangle(new Point(0, -110, 0), new Point(7, 10, 7), lighterTrunkColor);
			trunk6.rotateAroundPointY(20, new Point(0, 0, 0));
			trunk6.rotateAroundPointZ(-45, new Point(0, 0, 0));
			trunk6.rotateAroundPointX(-5, new Point(0, 0, 0));
			trunk6.rotateAroundPointZ(-20, new Point(-30, -40, 0));
			trunk6.rotateAroundPointY(-30, new Point(-30, -40, 0));
			trunk6.rotateAroundPointZ(-20, new Point(-70, -60, 0));

			// right fork from center
			let trunk7 = new Rectangle(new Point(0, -25, 0), new Point(7, 25, 7), lighterTrunkColor);
			trunk7.rotateAroundPointY(20, new Point(0, 0, 0));
			trunk7.rotateAroundPointZ(50, new Point(0, 0, 0));
			trunk7.rotateAroundPointX(-5, new Point(0, 0, 0));

			let trunk8 = new Rectangle(new Point(0, -75, 0), new Point(7, 25, 7), lighterTrunkColor);
			trunk8.rotateAroundPointY(20, new Point(0, 0, 0));
			trunk8.rotateAroundPointZ(50, new Point(0, 0, 0));
			trunk8.rotateAroundPointX(-5, new Point(0, 0, 0));
			trunk8.rotateAroundPointZ(40, new Point(35, -35, 0));
			trunk8.rotateAroundPointY(-10, new Point(35, -35, 0));

			let trunk9 = new Rectangle(new Point(0, -110, 0), new Point(7, 10, 7), lighterTrunkColor);
			trunk9.rotateAroundPointY(20, new Point(0, 0, 0));
			trunk9.rotateAroundPointZ(50, new Point(0, 0, 0));
			trunk9.rotateAroundPointX(-5, new Point(0, 0, 0));
			trunk9.rotateAroundPointZ(40, new Point(35, -35, 0));
			trunk9.rotateAroundPointY(-10, new Point(35, -35, 0));
			trunk9.rotateAroundPointZ(-20, new Point(85, -30, 0));

			// branch on right fork
			let trunk10 = new Rectangle(new Point(0, -60, 0), new Point(7, 10, 7), lighterTrunkColor);
			trunk10.rotateAroundPointY(20, new Point(0, 0, 0));
			trunk10.rotateAroundPointZ(50, new Point(0, 0, 0));
			trunk10.rotateAroundPointX(-5, new Point(0, 0, 0));
			trunk10.rotateAroundPointZ(-45, new Point(35, -35, 0));

			// the three leaves
			let leftLeaves = new Dodecahedron(new Point(-130, -70, 40), new Point(30, 30, 30), leafColor);
			// leftLeaves.rotateAroundPointY(21, new Point(40, -90, -5));
			// leftLeaves.rotateAroundPointZ(30, new Point(40, -90, -5));

			let centerLeaves = new Dodecahedron(new Point(40, -90, -5), new Point(30, 30, 30), leafColor);
			centerLeaves.rotateAroundPointY(21, new Point(40, -90, -5));
			centerLeaves.rotateAroundPointZ(30, new Point(40, -90, -5));

			let rightLeaves = new Dodecahedron(
				new Point(130, -45, -15),
				new Point(20, 20, 20),
				leafColor
			);
			rightLeaves.rotateAroundPointY(5, new Point(130, -45, -15));

			shapes = [
				centerDodecahedron,
				trunk1,
				trunk2,
				trunk3,
				trunk4,
				trunk5,
				trunk6,
				trunk7,
				trunk8,
				trunk9,
				trunk10,
				leftLeaves,
				centerLeaves,
				rightLeaves
			];
		};

		p5.draw = () => {
			p5.background(71, 71, 71);

			// Make 0, 0 the center
			p5.translate(200, 200);

			for (let i = 0; i < shapes.length; i++) {
				shapes[i].rotateAroundPointY(1, new Point(0, 0, 0));
				shapes[i].draw();
			}
		};

		p5.mouseDragged = () => {
			for (let i = 0; i < shapes.length; i++) {
				shapes[i].rotateAroundPointX(p5.pmouseY - p5.mouseY, new Point(0, 0, 0));
				shapes[i].rotateAroundPointY(p5.mouseX - p5.pmouseX, new Point(0, 0, 0));
			}
		};

		p5.keyPressed = () => {
			// this will download the first 5 seconds of the animation!
			if (p5.key === ' ') {
				p5.saveGif('mySketch', 5);
			}
		};

		class Point {
			constructor(x, y, z) {
				this.x = x;
				this.y = y;
				this.z = z;
			}
		}

		// Contains the rotation and drawing logic since it is the same for every shape
		class Shape {
			constructor(edgeColor, nodeColor, nodeSize) {
				this.edgeColor = edgeColor;
				this.nodeColor = nodeColor;
				this.nodeSize = nodeSize;
			}

			draw() {
				// drawing edges
				if (this.nodes && this.edgeColor) {
					p5.stroke(this.edgeColor);
					for (let e = 0; e < this.edges.length; e++) {
						let n0 = this.edges[e][0];
						let n1 = this.edges[e][1];
						let node0 = this.nodes[n0];
						let node1 = this.nodes[n1];

						let x0 = node0.x;
						let y0 = node0.y;
						let x1 = node1.x;
						let y1 = node1.y;

						p5.line(x0, y0, x1, y1);
					}
				}

				// drawing nodes
				if (this.nodes && this.nodeColor && this.nodeSize) {
					p5.noStroke();
					p5.fill(this.nodeColor);
					for (let n = 0; n < this.nodes.length; n++) {
						let node = this.nodes[n];
						p5.ellipse(node.x, node.y, this.nodeSize, this.nodeSize);
					}
				}
			}

			rotateAroundPointX(theta, point) {
				let cosTheta = p5.cos(theta);
				let sinTheta = p5.sin(theta);

				for (let n = 0; n < this.nodes.length; n++) {
					let node = this.nodes[n];
					let z = node.z;
					let c = point.z;
					let y = node.y;
					let b = point.y;
					node.z = point.z + (z - c) * cosTheta - (y - b) * sinTheta;
					node.y = point.y + (z - c) * sinTheta + (y - b) * cosTheta;
				}
			}

			rotateAroundPointY(theta, point) {
				let cosTheta = p5.cos(theta);
				let sinTheta = p5.sin(theta);

				for (let n = 0; n < this.nodes.length; n++) {
					let node = this.nodes[n];
					let x = node.x;
					let a = point.x;
					let z = node.z;
					let c = point.z;
					node.x = point.x + (x - a) * cosTheta - (z - c) * sinTheta;
					node.z = point.z + (x - a) * sinTheta + (z - c) * cosTheta;
				}
			}

			rotateAroundPointZ(theta, point) {
				let cosTheta = p5.cos(theta);
				let sinTheta = p5.sin(theta);

				for (let n = 0; n < this.nodes.length; n++) {
					let node = this.nodes[n];
					let x = node.x;
					let a = point.x;
					let y = node.y;
					let b = point.y;
					node.x = point.x + (x - a) * cosTheta - (y - b) * sinTheta;
					node.y = point.y + (x - a) * sinTheta + (y - b) * cosTheta;
				}
			}
		}

		class Rectangle extends Shape {
			constructor(center, scale, edgeColor, nodeColor, nodeSize) {
				super(edgeColor, nodeColor, nodeSize);

				this.nodes = [
					new Point(center.x + scale.x, center.y + scale.y, center.z + scale.z),
					new Point(center.x + scale.x, center.y - scale.y, center.z + scale.z),
					new Point(center.x - scale.x, center.y - scale.y, center.z + scale.z),
					new Point(center.x - scale.x, center.y + scale.y, center.z + scale.z),
					new Point(center.x + scale.x, center.y + scale.y, center.z - scale.z),
					new Point(center.x + scale.x, center.y - scale.y, center.z - scale.z),
					new Point(center.x - scale.x, center.y - scale.y, center.z - scale.z),
					new Point(center.x - scale.x, center.y + scale.y, center.z - scale.z)
				];

				this.edges = [
					[0, 1],
					[0, 3],
					[0, 4],
					[1, 2],
					[1, 5],
					[2, 3],
					[2, 6],
					[3, 7],
					[4, 5],
					[4, 7],
					[5, 6],
					[6, 7]
				];
			}
		}

		// https://en.wikipedia.org/wiki/Regular_dodecahedron#Cartesian_coordinates
		class Dodecahedron extends Shape {
			constructor(center, scale, edgeColor, nodeColor, nodeSize) {
				super(edgeColor, nodeColor, nodeSize);

				let golden_ratio = (1 + p5.sqrt(5)) / 2;
				let inverse_golden_ratio = 1 / golden_ratio;

				this.nodes = [
					new Point(center.x + scale.x, center.y + scale.y, center.z + scale.z),
					new Point(center.x + scale.x, center.y - scale.y, center.z + scale.z),
					new Point(center.x - scale.x, center.y - scale.y, center.z + scale.z),
					new Point(center.x - scale.x, center.y + scale.y, center.z + scale.z),
					new Point(center.x + scale.x, center.y + scale.y, center.z - scale.z),
					new Point(center.x + scale.x, center.y - scale.y, center.z - scale.z),
					new Point(center.x - scale.x, center.y - scale.y, center.z - scale.z),
					new Point(center.x - scale.x, center.y + scale.y, center.z - scale.z),
					new Point(
						center.x,
						center.y + golden_ratio * scale.y,
						center.z + inverse_golden_ratio * scale.z
					),
					new Point(
						center.x,
						center.y + golden_ratio * scale.y,
						center.z - inverse_golden_ratio * scale.z
					),
					new Point(
						center.x,
						center.y - golden_ratio * scale.y,
						center.z + inverse_golden_ratio * scale.z
					),
					new Point(
						center.x,
						center.y - golden_ratio * scale.y,
						center.z - inverse_golden_ratio * scale.z
					),
					new Point(
						center.x + inverse_golden_ratio * scale.x,
						center.y,
						center.z + golden_ratio * scale.z
					),
					new Point(
						center.x + inverse_golden_ratio * scale.x,
						center.y,
						center.z - golden_ratio * scale.z
					),
					new Point(
						center.x - inverse_golden_ratio * scale.x,
						center.y,
						center.z + golden_ratio * scale.z
					),
					new Point(
						center.x - inverse_golden_ratio * scale.x,
						center.y,
						center.z - golden_ratio * scale.z
					),
					new Point(
						center.x + golden_ratio * scale.x,
						center.y + inverse_golden_ratio * scale.y,
						center.z
					),
					new Point(
						center.x + golden_ratio * scale.x,
						center.y - inverse_golden_ratio * scale.y,
						center.z
					),
					new Point(
						center.x - golden_ratio * scale.x,
						center.y + inverse_golden_ratio * scale.y,
						center.z
					),
					new Point(
						center.x - golden_ratio * scale.x,
						center.y - inverse_golden_ratio * scale.y,
						center.z
					)
				];

				// 4 groups of nodes
				// 0-7
				// 8-11
				// 12-15
				// 16-19

				this.edges = [
					[0, 16],
					[0, 8],
					[0, 12],
					[1, 12],
					[1, 17],
					[1, 10],
					[2, 10],
					[2, 19],
					[2, 14],
					[3, 8],
					[3, 14],
					[3, 18],
					[4, 9],
					[4, 13],
					[4, 16],
					[5, 11],
					[5, 13],
					[5, 17],
					[6, 11],
					[6, 15],
					[6, 19],
					[7, 9],
					[7, 15],
					[7, 18],
					[8, 9],
					[10, 11],
					[12, 14],
					[13, 15],
					[16, 17],
					[18, 19]
				];
			}
		}
	};
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
