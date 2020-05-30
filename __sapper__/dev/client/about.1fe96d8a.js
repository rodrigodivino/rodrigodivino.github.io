import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.8fd5f94e.js';

/* src/routes/about.svelte generated by Svelte v3.23.0 */

const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let div0;
	let p0;
	let t3;
	let t4;
	let p1;
	let t5;
	let t6;
	let p2;
	let t7;
	let t8;
	let p3;
	let t9;
	let t10;
	let div1;
	let figure;
	let img;
	let img_src_value;
	let t11;
	let figcaption;
	let t12;
	let br;
	let t13;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Hi there! I'm Rodrigo Divino, and I work with data.");
			t2 = space();
			div0 = element("div");
			p0 = element("p");
			t3 = text("I do projects on data visualization and analysis, developing software for visual analytics problems.");
			t4 = space();
			p1 = element("p");
			t5 = text("My main focus is Visual Analytics for Business Intelligence and Exploratory Data Analysis,\nleveraging human habilities and machine learning algorithms to support the transformation of data into insights.");
			t6 = space();
			p2 = element("p");
			t7 = text("In this site you'll find several projects, including interactive dashboards,\ndataset analysis, analytics solutions for data problems,\nand machine learning applications.");
			t8 = space();
			p3 = element("p");
			t9 = text("If you're interested in my work and have a data project or problem,\nfeel free to contact me at rodrigodivino.ufpa@gmail.com.");
			t10 = space();
			div1 = element("div");
			figure = element("figure");
			img = element("img");
			t11 = space();
			figcaption = element("figcaption");
			t12 = text("Presentation at the Visual Analytics Challenge (VAST), Vancouver 2019.\n\t");
			br = element("br");
			t13 = text(" Award for Supporting Siutation Awareness and Anomaly Detection");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Hi there! I'm Rodrigo Divino, and I work with data.");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "I do projects on data visualization and analysis, developing software for visual analytics problems.");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", {});
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "My main focus is Visual Analytics for Business Intelligence and Exploratory Data Analysis,\nleveraging human habilities and machine learning algorithms to support the transformation of data into insights.");
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(div0_nodes);
			p2 = claim_element(div0_nodes, "P", {});
			var p2_nodes = children(p2);
			t7 = claim_text(p2_nodes, "In this site you'll find several projects, including interactive dashboards,\ndataset analysis, analytics solutions for data problems,\nand machine learning applications.");
			p2_nodes.forEach(detach_dev);
			t8 = claim_space(div0_nodes);
			p3 = claim_element(div0_nodes, "P", {});
			var p3_nodes = children(p3);
			t9 = claim_text(p3_nodes, "If you're interested in my work and have a data project or problem,\nfeel free to contact me at rodrigodivino.ufpa@gmail.com.");
			p3_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t10 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			figure = claim_element(div1_nodes, "FIGURE", {});
			var figure_nodes = children(figure);
			img = claim_element(figure_nodes, "IMG", { alt: true, src: true, class: true });
			t11 = claim_space(figure_nodes);
			figcaption = claim_element(figure_nodes, "FIGCAPTION", { class: true });
			var figcaption_nodes = children(figcaption);
			t12 = claim_text(figcaption_nodes, "Presentation at the Visual Analytics Challenge (VAST), Vancouver 2019.\n\t");
			br = claim_element(figcaption_nodes, "BR", {});
			t13 = claim_text(figcaption_nodes, " Award for Supporting Siutation Awareness and Anomaly Detection");
			figcaption_nodes.forEach(detach_dev);
			figure_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
			add_location(h1, file, 4, 0, 52);
			add_location(p0, file, 7, 0, 142);
			add_location(p1, file, 11, 0, 254);
			add_location(p2, file, 17, 0, 470);
			add_location(p3, file, 23, 0, 650);
			attr_dev(div0, "class", "textcontainer svelte-16g63y1");
			add_location(div0, file, 6, 0, 114);
			attr_dev(img, "alt", "Success Kid");
			if (img.src !== (img_src_value = "presentation.jpeg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-16g63y1");
			add_location(img, file, 31, 1, 832);
			add_location(br, file, 33, 1, 965);
			attr_dev(figcaption, "class", "svelte-16g63y1");
			add_location(figcaption, file, 32, 1, 881);
			add_location(figure, file, 30, 0, 822);
			attr_dev(div1, "class", "imagecontainer svelte-16g63y1");
			add_location(div1, file, 29, 0, 793);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div0, anchor);
			append_dev(div0, p0);
			append_dev(p0, t3);
			append_dev(div0, t4);
			append_dev(div0, p1);
			append_dev(p1, t5);
			append_dev(div0, t6);
			append_dev(div0, p2);
			append_dev(p2, t7);
			append_dev(div0, t8);
			append_dev(div0, p3);
			append_dev(p3, t9);
			insert_dev(target, t10, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, figure);
			append_dev(figure, img);
			append_dev(figure, t11);
			append_dev(figure, figcaption);
			append_dev(figcaption, t12);
			append_dev(figcaption, br);
			append_dev(figcaption, t13);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t10);
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("About", $$slots, []);
	return [];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuMWZlOTZkOGEuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
