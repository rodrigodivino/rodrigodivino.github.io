import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as add_location, k as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.cb005526.js';

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
	let div0;
	let figure;
	let img;
	let img_src_value;
	let t12;
	let figcaption;
	let t13;
	let t14;
	let p3;
	let t15;
	let t16;
	let p4;
	let t17;
	let t18;
	let div1;
	let iframe;
	let iframe_src_value;

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
			div0 = element("div");
			figure = element("figure");
			img = element("img");
			t12 = space();
			figcaption = element("figcaption");
			t13 = text("A tela principal do dashboard que soluciona o VAST Challenge 2019");
			t14 = space();
			p3 = element("p");
			t15 = text("O Dashboard contém quatro visões conectadas por interações. É possível filtrar\n  os dados pelo tempo, ou pelas medidas, e com essas interações é possível\n  responder as perguntas críticas que a situação exige.");
			t16 = space();
			p4 = element("p");
			t17 = text("A submissão acompanhou um vídeo, no qual descrevo cada visualização e as\n  interações interligadas");
			t18 = space();
			div1 = element("div");
			iframe = element("iframe");
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
			div0 = claim_element(nodes, "DIV", { width: true });
			var div0_nodes = children(div0);
			figure = claim_element(div0_nodes, "FIGURE", {});
			var figure_nodes = children(figure);
			img = claim_element(figure_nodes, "IMG", { width: true, src: true, alt: true });
			t12 = claim_space(figure_nodes);
			figcaption = claim_element(figure_nodes, "FIGCAPTION", { class: true });
			var figcaption_nodes = children(figcaption);
			t13 = claim_text(figcaption_nodes, "A tela principal do dashboard que soluciona o VAST Challenge 2019");
			figcaption_nodes.forEach(detach_dev);
			figure_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t14 = claim_space(nodes);
			p3 = claim_element(nodes, "P", {});
			var p3_nodes = children(p3);
			t15 = claim_text(p3_nodes, "O Dashboard contém quatro visões conectadas por interações. É possível filtrar\n  os dados pelo tempo, ou pelas medidas, e com essas interações é possível\n  responder as perguntas críticas que a situação exige.");
			p3_nodes.forEach(detach_dev);
			t16 = claim_space(nodes);
			p4 = claim_element(nodes, "P", {});
			var p4_nodes = children(p4);
			t17 = claim_text(p4_nodes, "A submissão acompanhou um vídeo, no qual descrevo cada visualização e as\n  interações interligadas");
			p4_nodes.forEach(detach_dev);
			t18 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { display: true });
			var div1_nodes = children(div1);

			iframe = claim_element(div1_nodes, "IFRAME", {
				title: true,
				width: true,
				height: true,
				src: true,
				frameborder: true,
				allow: true,
				allowfullscreen: true,
				class: true
			});

			children(iframe).forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 11, 0, 128);
			add_location(p0, file, 13, 0, 184);
			add_location(i, file, 22, 2, 480);
			add_location(p1, file, 18, 0, 307);
			add_location(b, file, 29, 2, 671);
			add_location(p2, file, 27, 0, 605);
			attr_dev(img, "width", "100%");
			if (img.src !== (img_src_value = "vast-challenge-prints/main_screen.PNG")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "A tela principal da submissão para o VAST Challenge 2019");
			add_location(img, file, 36, 4, 945);
			attr_dev(figcaption, "class", "svelte-wond59");
			add_location(figcaption, file, 40, 4, 1095);
			add_location(figure, file, 35, 2, 932);
			attr_dev(div0, "width", "100%");
			add_location(div0, file, 34, 0, 911);
			add_location(p3, file, 47, 0, 1219);
			add_location(p4, file, 53, 0, 1441);
			attr_dev(iframe, "title", "Vídeo da Submissão");
			attr_dev(iframe, "width", "560");
			attr_dev(iframe, "height", "315");
			if (iframe.src !== (iframe_src_value = "https://www.youtube.com/embed/f4k25Djk8HI")) attr_dev(iframe, "src", iframe_src_value);
			attr_dev(iframe, "frameborder", "0");
			attr_dev(iframe, "allow", "accelerometer; autoplay; encrypted-media; gyroscope;\n    picture-in-picture");
			iframe.allowFullscreen = true;
			attr_dev(iframe, "class", "svelte-wond59");
			add_location(iframe, file, 59, 2, 1575);
			attr_dev(div1, "display", "flex");
			add_location(div1, file, 58, 0, 1552);
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
			insert_dev(target, div0, anchor);
			append_dev(div0, figure);
			append_dev(figure, img);
			append_dev(figure, t12);
			append_dev(figure, figcaption);
			append_dev(figcaption, t13);
			insert_dev(target, t14, anchor);
			insert_dev(target, p3, anchor);
			append_dev(p3, t15);
			insert_dev(target, t16, anchor);
			insert_dev(target, p4, anchor);
			append_dev(p4, t17);
			insert_dev(target, t18, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, iframe);
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
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t14);
			if (detaching) detach_dev(p3);
			if (detaching) detach_dev(t16);
			if (detaching) detach_dev(p4);
			if (detaching) detach_dev(t18);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTljZDg1ZjQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
