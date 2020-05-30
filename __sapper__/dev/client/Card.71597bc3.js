import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, f as claim_element, g as children, c as claim_space, h as claim_text, b as detach_dev, k as attr_dev, y as set_style, j as add_location, l as insert_dev, m as append_dev, n as noop } from './client.172a2ff9.js';

/* src/components/Card.svelte generated by Svelte v3.23.0 */

const file = "src/components/Card.svelte";

function create_fragment(ctx) {
	let div1;
	let img;
	let img_src_value;
	let t0;
	let div0;
	let h4;
	let b;
	let t1;
	let t2;
	let p;
	let t3;

	const block = {
		c: function create() {
			div1 = element("div");
			img = element("img");
			t0 = space();
			div0 = element("div");
			h4 = element("h4");
			b = element("b");
			t1 = text("Título");
			t2 = space();
			p = element("p");
			t3 = text("Subtítulo");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { src: true, alt: true, style: true });
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h4 = claim_element(div0_nodes, "H4", {});
			var h4_nodes = children(h4);
			b = claim_element(h4_nodes, "B", {});
			var b_nodes = children(b);
			t1 = claim_text(b_nodes, "Título");
			b_nodes.forEach(detach_dev);
			h4_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "Subtítulo");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "placeholder.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Project");
			set_style(img, "width", "100%");
			add_location(img, file, 1, 2, 21);
			add_location(b, file, 3, 8, 116);
			add_location(h4, file, 3, 4, 112);
			add_location(p, file, 4, 4, 139);
			attr_dev(div0, "class", "container svelte-1x2pulm");
			add_location(div0, file, 2, 2, 84);
			attr_dev(div1, "class", "card svelte-1x2pulm");
			add_location(div1, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, img);
			append_dev(div1, t0);
			append_dev(div1, div0);
			append_dev(div0, h4);
			append_dev(h4, b);
			append_dev(b, t1);
			append_dev(div0, t2);
			append_dev(div0, p);
			append_dev(p, t3);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Card> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Card", $$slots, []);
	return [];
}

class Card extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Card",
			options,
			id: create_fragment.name
		});
	}
}

export { Card as C };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC43MTU5N2JjMy5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
