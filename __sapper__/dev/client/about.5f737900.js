import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as add_location, k as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.bfad3ddc.js';

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
	let b0;
	let t6;
	let t7;
	let t8;
	let p2;
	let t9;
	let b1;
	let t10;
	let t11;
	let t12;
	let p3;
	let t13;
	let a;
	let t14;
	let t15;
	let div1;
	let figure;
	let img;
	let img_src_value;
	let t16;
	let figcaption;
	let t17;
	let br;
	let t18;

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
			t5 = text("My main focus is ");
			b0 = element("b");
			t6 = text("Visual Analytics for Business Intelligence and Exploratory Data Analysis");
			t7 = text(",\nsupporting the transformation of data into insights.");
			t8 = space();
			p2 = element("p");
			t9 = text("In this site you'll find several projects, including ");
			b1 = element("b");
			t10 = text("interactive dashboards,\ndataset analysis, analytics solutions for data problems,\nand machine learning applications");
			t11 = text(". You'll also find a blog covering several data science topics.");
			t12 = space();
			p3 = element("p");
			t13 = text("If you're interested in my work and have a data project or problem,\nfeel free to contact me at ");
			a = element("a");
			t14 = text("rodrigodivino.ufpa@gmail.com");
			t15 = space();
			div1 = element("div");
			figure = element("figure");
			img = element("img");
			t16 = space();
			figcaption = element("figcaption");
			t17 = text("Presentation at the Visual Analytics Challenge (VAST), Vancouver 2019.\n\t");
			br = element("br");
			t18 = text(" Award for Supporting Situation Awareness and Anomaly Detection");
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
			t5 = claim_text(p1_nodes, "My main focus is ");
			b0 = claim_element(p1_nodes, "B", {});
			var b0_nodes = children(b0);
			t6 = claim_text(b0_nodes, "Visual Analytics for Business Intelligence and Exploratory Data Analysis");
			b0_nodes.forEach(detach_dev);
			t7 = claim_text(p1_nodes, ",\nsupporting the transformation of data into insights.");
			p1_nodes.forEach(detach_dev);
			t8 = claim_space(div0_nodes);
			p2 = claim_element(div0_nodes, "P", {});
			var p2_nodes = children(p2);
			t9 = claim_text(p2_nodes, "In this site you'll find several projects, including ");
			b1 = claim_element(p2_nodes, "B", {});
			var b1_nodes = children(b1);
			t10 = claim_text(b1_nodes, "interactive dashboards,\ndataset analysis, analytics solutions for data problems,\nand machine learning applications");
			b1_nodes.forEach(detach_dev);
			t11 = claim_text(p2_nodes, ". You'll also find a blog covering several data science topics.");
			p2_nodes.forEach(detach_dev);
			t12 = claim_space(div0_nodes);
			p3 = claim_element(div0_nodes, "P", {});
			var p3_nodes = children(p3);
			t13 = claim_text(p3_nodes, "If you're interested in my work and have a data project or problem,\nfeel free to contact me at ");
			a = claim_element(p3_nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t14 = claim_text(a_nodes, "rodrigodivino.ufpa@gmail.com");
			a_nodes.forEach(detach_dev);
			p3_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t15 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			figure = claim_element(div1_nodes, "FIGURE", {});
			var figure_nodes = children(figure);
			img = claim_element(figure_nodes, "IMG", { alt: true, src: true, class: true });
			t16 = claim_space(figure_nodes);
			figcaption = claim_element(figure_nodes, "FIGCAPTION", { class: true });
			var figcaption_nodes = children(figcaption);
			t17 = claim_text(figcaption_nodes, "Presentation at the Visual Analytics Challenge (VAST), Vancouver 2019.\n\t");
			br = claim_element(figcaption_nodes, "BR", {});
			t18 = claim_text(figcaption_nodes, " Award for Supporting Situation Awareness and Anomaly Detection");
			figcaption_nodes.forEach(detach_dev);
			figure_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
			add_location(h1, file, 4, 0, 52);
			add_location(p0, file, 7, 0, 142);
			add_location(b0, file, 12, 17, 274);
			add_location(p1, file, 11, 0, 253);
			add_location(b1, file, 18, 53, 472);
			add_location(p2, file, 17, 0, 415);
			attr_dev(a, "class", "email svelte-1qnbcr3");
			attr_dev(a, "href", "mailto:rodrigodivino.ufpa@gmail.com");
			add_location(a, file, 25, 27, 762);
			add_location(p3, file, 23, 0, 663);
			attr_dev(div0, "class", "textcontainer svelte-1qnbcr3");
			add_location(div0, file, 6, 0, 114);
			attr_dev(img, "alt", "Success Kid");
			if (img.src !== (img_src_value = "presentation.jpeg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-1qnbcr3");
			add_location(img, file, 31, 1, 907);
			add_location(br, file, 33, 1, 1040);
			attr_dev(figcaption, "class", "svelte-1qnbcr3");
			add_location(figcaption, file, 32, 1, 956);
			add_location(figure, file, 30, 0, 897);
			attr_dev(div1, "class", "imagecontainer svelte-1qnbcr3");
			add_location(div1, file, 29, 0, 868);
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
			append_dev(p1, b0);
			append_dev(b0, t6);
			append_dev(p1, t7);
			append_dev(div0, t8);
			append_dev(div0, p2);
			append_dev(p2, t9);
			append_dev(p2, b1);
			append_dev(b1, t10);
			append_dev(p2, t11);
			append_dev(div0, t12);
			append_dev(div0, p3);
			append_dev(p3, t13);
			append_dev(p3, a);
			append_dev(a, t14);
			insert_dev(target, t15, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, figure);
			append_dev(figure, img);
			append_dev(figure, t16);
			append_dev(figure, figcaption);
			append_dev(figcaption, t17);
			append_dev(figcaption, br);
			append_dev(figcaption, t18);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t15);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuNWY3Mzc5MDAuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
