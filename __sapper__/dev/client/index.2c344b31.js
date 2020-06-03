import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_each_argument, v as validate_slots, e as element, p as create_component, a as space, f as claim_element, g as children, r as claim_component, c as claim_space, b as detach_dev, k as attr_dev, j as add_location, l as insert_dev, u as mount_component, m as append_dev, n as noop, w as transition_in, x as transition_out, y as destroy_component, z as empty, A as check_outros, B as destroy_each, C as group_outros } from './client.cb7c8370.js';
import { C as Card } from './Card.39e2edd7.js';

/* src/routes/projects/index.svelte generated by Svelte v3.23.0 */
const file = "src/routes/projects/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i].title;
	child_ctx[2] = list[i].subtitle;
	child_ctx[3] = list[i].ref;
	child_ctx[4] = list[i].thumb;
	return child_ctx;
}

// (17:0) {#each projects as { title, subtitle, ref, thumb }}
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
			add_location(a, file, 17, 2, 365);
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
		source: "(17:0) {#each projects as { title, subtitle, ref, thumb }}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*projects*/ ctx[0];
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
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*projects*/ 1) {
				each_value = /*projects*/ ctx[0];
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
	const projects = [
		{
			title: "VAST Challenge 2019",
			subtitle: "Fictional Earthquake Data Analysis",
			ref: "./projects/vast-challenge",
			thumb: "vast-challenge-prints/main_screen.PNG"
		}
	];

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Projects> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Projects", $$slots, []);
	$$self.$capture_state = () => ({ Card, projects });
	return [projects];
}

class Projects extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Projects",
			options,
			id: create_fragment.name
		});
	}
}

export default Projects;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMmMzNDRiMzEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHJvamVjdHMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcmQuc3ZlbHRlXCI7XG4gIGNvbnN0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIlZBU1QgQ2hhbGxlbmdlIDIwMTlcIixcbiAgICAgIHN1YnRpdGxlOiBcIkZpY3Rpb25hbCBFYXJ0aHF1YWtlIERhdGEgQW5hbHlzaXNcIixcbiAgICAgIHJlZjogXCIuL3Byb2plY3RzL3Zhc3QtY2hhbGxlbmdlXCIsXG4gICAgICB0aHVtYjogXCJ2YXN0LWNoYWxsZW5nZS1wcmludHMvbWFpbl9zY3JlZW4uUE5HXCJcbiAgICB9XG4gIF07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuXG57I2VhY2ggcHJvamVjdHMgYXMgeyB0aXRsZSwgc3VidGl0bGUsIHJlZiwgdGh1bWIgfX1cbiAgPGEgaHJlZj17cmVmfT5cbiAgICA8Q2FyZCB7dGl0bGV9IHtzdWJ0aXRsZX0ge3RodW1ifSAvPlxuICA8L2E+XG57L2VhY2h9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBaUJXLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFEUCxHQUFROzs7O2dDQUFiLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFBQyxHQUFROzs7OytCQUFiLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQUosTUFBSTs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FkRSxRQUFROztHQUVWLEtBQUssRUFBRSxxQkFBcUI7R0FDNUIsUUFBUSxFQUFFLG9DQUFvQztHQUM5QyxHQUFHLEVBQUUsMkJBQTJCO0dBQ2hDLEtBQUssRUFBRSx1Q0FBdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
