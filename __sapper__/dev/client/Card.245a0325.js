import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, f as claim_element, g as children, c as claim_space, h as claim_text, b as detach_dev, k as attr_dev, D as set_style, j as add_location, l as insert_dev, m as append_dev, E as set_data_dev, n as noop } from './client.91cf4d8d.js';

/* src/components/Card.svelte generated by Svelte v3.23.0 */

const file_1 = "src/components/Card.svelte";

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
			add_location(img, file_1, 9, 2, 180);
			add_location(b, file_1, 11, 8, 267);
			add_location(h4, file_1, 11, 4, 263);
			add_location(p, file_1, 12, 4, 291);
			attr_dev(div0, "class", "container svelte-1x2pulm");
			add_location(div0, file_1, 10, 2, 235);
			attr_dev(div1, "class", "card svelte-1x2pulm");
			add_location(div1, file_1, 8, 0, 159);
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
	let { file = "empty" } = $$props;
	let { thumb = "placeholder.png" } = $$props;
	const writable_props = ["title", "subtitle", "file", "thumb"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Card> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Card", $$slots, []);

	$$self.$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("subtitle" in $$props) $$invalidate(1, subtitle = $$props.subtitle);
		if ("file" in $$props) $$invalidate(3, file = $$props.file);
		if ("thumb" in $$props) $$invalidate(2, thumb = $$props.thumb);
	};

	$$self.$capture_state = () => ({ title, subtitle, file, thumb });

	$$self.$inject_state = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("subtitle" in $$props) $$invalidate(1, subtitle = $$props.subtitle);
		if ("file" in $$props) $$invalidate(3, file = $$props.file);
		if ("thumb" in $$props) $$invalidate(2, thumb = $$props.thumb);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [title, subtitle, thumb, file];
}

class Card extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0, subtitle: 1, file: 3, thumb: 2 });

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

	get file() {
		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set file(value) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC4yNDVhMDMyNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ2FyZC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgZXhwb3J0IGxldCB0aXRsZSA9IFwiVGl0bGVcIjtcbiAgZXhwb3J0IGxldCBzdWJ0aXRsZSA9IFwiRGVzY3JpcHRpb25cIjtcbiAgZXhwb3J0IGxldCBmaWxlID0gXCJlbXB0eVwiO1xuICBleHBvcnQgbGV0IHRodW1iID0gXCJwbGFjZWhvbGRlci5wbmdcIjtcblxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gIDxpbWcgc3JjPVwie3RodW1ifVwiIGFsdD1cIlByb2plY3RcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoND48Yj57dGl0bGV9PC9iPjwvaDQ+XG4gICAgPHA+e3N1YnRpdGxlfTwvcD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHN0eWxlPlxuLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIHdpZHRoOiAyMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnB4IDE2cHg7XG59XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBV1ksR0FBSzs7OzBCQUNULEdBQVE7Ozs7Ozs7Ozs7Ozs7O3NDQURKLEdBQUs7Ozs7Ozt5Q0FDVCxHQUFROzs7Ozs7OzhDQUhILEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUVBQUwsR0FBSzs7Ozt1REFFTixHQUFLOzZEQUNULEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQVhILEtBQUssR0FBRyxPQUFPO09BQ2YsUUFBUSxHQUFHLGFBQWE7T0FDeEIsSUFBSSxHQUFHLE9BQU87T0FDZCxLQUFLLEdBQUcsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
