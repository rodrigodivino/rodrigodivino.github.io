import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.76f5484d.js';

/* src/routes/about.svelte generated by Svelte v3.23.0 */

const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
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

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Hi there! I'm Rodrigo Divino, and I work with data.");
			t2 = space();
			p0 = element("p");
			t3 = text("I do projects on data visualization and analysis, developing software for visual analytics problems.");
			t4 = space();
			p1 = element("p");
			t5 = text("My main focus is on Visual Analytics for Business Intelligence and Exploratory Data Analysis,\nleveraging human habilities and machine learning algorithms to support the transformation of data into insights.");
			t6 = space();
			p2 = element("p");
			t7 = text("In this site you'll find several projects, including interactive dashboards,\ndataset analysis, analytics solutions for data problems,\nand machine learning applications.");
			t8 = space();
			p3 = element("p");
			t9 = text("If you're interested in my work and have a data project or problem,\nfeel free to contact me at rodrigodivino.ufpa@gmail.com.");
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
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "I do projects on data visualization and analysis, developing software for visual analytics problems.");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "My main focus is on Visual Analytics for Business Intelligence and Exploratory Data Analysis,\nleveraging human habilities and machine learning algorithms to support the transformation of data into insights.");
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			var p2_nodes = children(p2);
			t7 = claim_text(p2_nodes, "In this site you'll find several projects, including interactive dashboards,\ndataset analysis, analytics solutions for data problems,\nand machine learning applications.");
			p2_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			p3 = claim_element(nodes, "P", {});
			var p3_nodes = children(p3);
			t9 = claim_text(p3_nodes, "If you're interested in my work and have a data project or problem,\nfeel free to contact me at rodrigodivino.ufpa@gmail.com.");
			p3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
			add_location(h1, file, 4, 0, 52);
			add_location(p0, file, 6, 0, 114);
			add_location(p1, file, 10, 0, 225);
			add_location(p2, file, 16, 0, 443);
			add_location(p3, file, 22, 0, 622);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, p2, anchor);
			append_dev(p2, t7);
			insert_dev(target, t8, anchor);
			insert_dev(target, p3, anchor);
			append_dev(p3, t9);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(p2);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(p3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuMzFmZjAyNTcuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
