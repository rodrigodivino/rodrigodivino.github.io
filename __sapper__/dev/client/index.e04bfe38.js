import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as add_location, k as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.c1ab512a.js';

/* src/routes/projects/vast-challenge/index.svelte generated by Svelte v3.23.0 */

const file = "src/routes/projects/vast-challenge/index.svelte";

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let p1;
	let t4;
	let i;
	let t5;
	let t6;
	let t7;
	let p2;
	let t8;
	let b;
	let t9;
	let t10;
	let t11;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("VAST Challenge 2019 - Disaster in St. Himark!");
			t1 = space();
			p0 = element("p");
			t2 = text("O VAST Challenge (Visual Analytics Science and Technology Challenge) é um\n  desafio anual de análise de dados.");
			t3 = space();
			p1 = element("p");
			t4 = text("Em 2019, o desafio foi ajudar uma cidade fictícia a entrentar um terremoto. Os\n  habitantes possuem aplicativos no qual podem reportar o nível de destruição, e\n  os\n  ");
			i = element("i");
			t5 = text("decision makers");
			t6 = text("\n  da cidade querem analisar esses dados em tempo real para direcionar os\n  esforços de socorro.");
			t7 = space();
			p2 = element("p");
			t8 = text("Minha solução para esse desafio foi premiada com o título\n  ");
			b = element("b");
			t9 = text("\"Award for Supporting Situation Awareness and Anomaly Detection\"");
			t10 = text("\n  (Prêmio por apoiar a conscientização da situação e a detecção de anomalias). A\n  submissão consiste em um dashboard customizado para o acompanhamento dos dados");
			t11 = space();
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "VAST Challenge 2019 - Disaster in St. Himark!");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "O VAST Challenge (Visual Analytics Science and Technology Challenge) é um\n  desafio anual de análise de dados.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "Em 2019, o desafio foi ajudar uma cidade fictícia a entrentar um terremoto. Os\n  habitantes possuem aplicativos no qual podem reportar o nível de destruição, e\n  os\n  ");
			i = claim_element(p1_nodes, "I", {});
			var i_nodes = children(i);
			t5 = claim_text(i_nodes, "decision makers");
			i_nodes.forEach(detach_dev);
			t6 = claim_text(p1_nodes, "\n  da cidade querem analisar esses dados em tempo real para direcionar os\n  esforços de socorro.");
			p1_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			var p2_nodes = children(p2);
			t8 = claim_text(p2_nodes, "Minha solução para esse desafio foi premiada com o título\n  ");
			b = claim_element(p2_nodes, "B", {});
			var b_nodes = children(b);
			t9 = claim_text(b_nodes, "\"Award for Supporting Situation Awareness and Anomaly Detection\"");
			b_nodes.forEach(detach_dev);
			t10 = claim_text(p2_nodes, "\n  (Prêmio por apoiar a conscientização da situação e a detecção de anomalias). A\n  submissão consiste em um dashboard customizado para o acompanhamento dos dados");
			p2_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);
			img = claim_element(nodes, "IMG", { src: true });
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 0, 0, 0);
			add_location(p0, file, 2, 0, 56);
			add_location(i, file, 11, 2, 352);
			add_location(p1, file, 7, 0, 179);
			add_location(b, file, 18, 2, 543);
			add_location(p2, file, 16, 0, 477);
			if (img.src !== (img_src_value = "vast-challenge-prints/main_screen.PNG")) attr_dev(img, "src", img_src_value);
			add_location(img, file, 23, 0, 783);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t4);
			append_dev(p1, i);
			append_dev(i, t5);
			append_dev(p1, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, p2, anchor);
			append_dev(p2, t8);
			append_dev(p2, b);
			append_dev(b, t9);
			append_dev(p2, t10);
			insert_dev(target, t11, anchor);
			insert_dev(target, img, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(p2);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(img);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Vast_challenge> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Vast_challenge", $$slots, []);
	return [];
}

class Vast_challenge extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Vast_challenge",
			options,
			id: create_fragment.name
		});
	}
}

export default Vast_challenge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZTA0YmZlMzguanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
