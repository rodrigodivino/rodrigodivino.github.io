import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, f as claim_element, g as children, c as claim_space, h as claim_text, b as detach_dev, k as attr_dev, D as set_style, j as add_location, l as insert_dev, m as append_dev, E as set_data_dev, n as noop } from './client.56cd53fb.js';

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
			t1 = text(/*title*/ ctx[0]);
			t2 = space();
			p = element("p");
			t3 = text(/*subtitle*/ ctx[1]);
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
			t1 = claim_text(b_nodes, /*title*/ ctx[0]);
			b_nodes.forEach(detach_dev);
			h4_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, /*subtitle*/ ctx[1]);
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*thumb*/ ctx[2])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Project");
			set_style(img, "width", "100%");
			add_location(img, file, 25, 2, 415);
			add_location(b, file, 28, 6, 509);
			add_location(h4, file, 27, 4, 498);
			add_location(p, file, 30, 4, 538);
			attr_dev(div0, "class", "container svelte-1ot75es");
			add_location(div0, file, 26, 2, 470);
			attr_dev(div1, "class", "card svelte-1ot75es");
			add_location(div1, file, 24, 0, 394);
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
		p: function update(ctx, [dirty]) {
			if (dirty & /*thumb*/ 4 && img.src !== (img_src_value = /*thumb*/ ctx[2])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*title*/ 1) set_data_dev(t1, /*title*/ ctx[0]);
			if (dirty & /*subtitle*/ 2) set_data_dev(t3, /*subtitle*/ ctx[1]);
		},
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

function instance($$self, $$props, $$invalidate) {
	let { title = "Title" } = $$props;
	let { subtitle = "Description" } = $$props;
	let { thumb = "placeholder.png" } = $$props;
	const writable_props = ["title", "subtitle", "thumb"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Card> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Card", $$slots, []);

	$$self.$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("subtitle" in $$props) $$invalidate(1, subtitle = $$props.subtitle);
		if ("thumb" in $$props) $$invalidate(2, thumb = $$props.thumb);
	};

	$$self.$capture_state = () => ({ title, subtitle, thumb });

	$$self.$inject_state = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("subtitle" in $$props) $$invalidate(1, subtitle = $$props.subtitle);
		if ("thumb" in $$props) $$invalidate(2, thumb = $$props.thumb);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [title, subtitle, thumb];
}

class Card extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0, subtitle: 1, thumb: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Card",
			options,
			id: create_fragment.name
		});
	}

	get title() {
		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get subtitle() {
		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set subtitle(value) {
		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get thumb() {
		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set thumb(value) {
		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Card as C };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC43MzFmZGM2Zi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2FyZC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgZXhwb3J0IGxldCB0aXRsZSA9IFwiVGl0bGVcIjtcbiAgZXhwb3J0IGxldCBzdWJ0aXRsZSA9IFwiRGVzY3JpcHRpb25cIjtcbiAgZXhwb3J0IGxldCB0aHVtYiA9IFwicGxhY2Vob2xkZXIucG5nXCI7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuXG4gIC5jYXJkOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMnB4IDE2cHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gIDxpbWcgc3JjPXt0aHVtYn0gYWx0PVwiUHJvamVjdFwiIHN0eWxlPVwid2lkdGg6MTAwJVwiIC8+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDQ+XG4gICAgICA8Yj57dGl0bGV9PC9iPlxuICAgIDwvaDQ+XG4gICAgPHA+e3N1YnRpdGxlfTwvcD5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBNEJVLEdBQUs7OzswQkFFUCxHQUFROzs7Ozs7Ozs7Ozs7OztzQ0FGTixHQUFLOzs7Ozs7eUNBRVAsR0FBUTs7Ozs7Ozs4Q0FMSixHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FFQUFMLEdBQUs7Ozs7dURBR1AsR0FBSzs2REFFUCxHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E3QkgsS0FBSyxHQUFHLE9BQU87T0FDZixRQUFRLEdBQUcsYUFBYTtPQUN4QixLQUFLLEdBQUcsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
