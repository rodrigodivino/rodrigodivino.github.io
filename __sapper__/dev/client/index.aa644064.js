import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_each_argument, v as validate_slots, e as element, p as create_component, a as space, f as claim_element, g as children, r as claim_component, c as claim_space, b as detach_dev, k as attr_dev, j as add_location, l as insert_dev, u as mount_component, m as append_dev, n as noop, w as transition_in, x as transition_out, y as destroy_component, z as empty, q as query_selector_all, A as check_outros, B as destroy_each, C as group_outros } from './client.cd942cb9.js';
import { C as Card } from './Card.6e980bfb.js';

/* src/routes/blog/index.svelte generated by Svelte v3.23.0 */
const file = "src/routes/blog/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i].title;
	child_ctx[2] = list[i].subtitle;
	child_ctx[3] = list[i].ref;
	child_ctx[4] = list[i].thumb;
	return child_ctx;
}

// (21:0) {#each posts as { title, subtitle, ref, thumb }}
function create_each_block(ctx) {
	let a;
	let t;
	let a_href_value;
	let current;

	const card = new Card({
			props: {
				title: /*title*/ ctx[1],
				subtitle: /*subtitle*/ ctx[2],
				thumb: /*thumb*/ ctx[4]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			a = element("a");
			create_component(card.$$.fragment);
			t = space();
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			claim_component(card.$$.fragment, a_nodes);
			t = claim_space(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", a_href_value = /*ref*/ ctx[3]);
			add_location(a, file, 21, 2, 438);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			mount_component(card, a, null);
			append_dev(a, t);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(card.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(card.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			destroy_component(card);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(21:0) {#each posts as { title, subtitle, ref, thumb }}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let each_1_anchor;
	let current;
	let each_value = /*posts*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-10h7psl\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			document.title = "Blog";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*posts*/ 1) {
				each_value = /*posts*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
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
	const posts = [
		{
			title: "An Introduction to Multivariate Data Analysis",
			subtitle: "What is it used for, and some techniques at your disposal",
			ref: "multivariate-introduction",
			thumb: "placeholder.png"
		}
	];

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blog> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Blog", $$slots, []);
	$$self.$capture_state = () => ({ Card, posts });
	return [posts];
}

class Blog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blog",
			options,
			id: create_fragment.name
		});
	}
}

export default Blog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYWE2NDQwNjQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2FyZC5zdmVsdGVcIjtcbiAgY29uc3QgcG9zdHMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiQW4gSW50cm9kdWN0aW9uIHRvIE11bHRpdmFyaWF0ZSBEYXRhIEFuYWx5c2lzXCIsXG4gICAgICBzdWJ0aXRsZTogXCJXaGF0IGlzIGl0IHVzZWQgZm9yLCBhbmQgc29tZSB0ZWNobmlxdWVzIGF0IHlvdXIgZGlzcG9zYWxcIixcbiAgICAgIHJlZjogXCJtdWx0aXZhcmlhdGUtaW50cm9kdWN0aW9uXCIsXG4gICAgICB0aHVtYjogXCJwbGFjZWhvbGRlci5wbmdcIlxuICAgIH1cbiAgXTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkJsb2c8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxueyNlYWNoIHBvc3RzIGFzIHsgdGl0bGUsIHN1YnRpdGxlLCByZWYsIHRodW1iIH19XG4gIDxhIGhyZWY9e3JlZn0+XG4gICAgPENhcmQge3RpdGxlfSB7c3VidGl0bGV9IHt0aHVtYn0gLz5cbiAgPC9hPlxuey9lYWNofVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQXFCVyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQURQLEdBQUs7Ozs7Z0NBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFBQyxHQUFLOzs7OytCQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQUosTUFBSTs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbEJFLEtBQUs7O0dBRVAsS0FBSyxFQUFFLCtDQUErQztHQUN0RCxRQUFRLEVBQUUsMkRBQTJEO0dBQ3JFLEdBQUcsRUFBRSwyQkFBMkI7R0FDaEMsS0FBSyxFQUFFLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
