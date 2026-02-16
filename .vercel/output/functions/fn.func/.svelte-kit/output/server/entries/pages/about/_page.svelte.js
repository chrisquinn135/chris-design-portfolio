import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, n as null_to_empty } from "../../../chunks/ssr.js";
import { F as Footer } from "../../../chunks/footer.js";
import { P as PageLayout } from "../../../chunks/pageLayout.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid3.svelte-1xqwwsn{display:flex;gap:32px;@media screen and (min-width: 640px) {\n			display: grid;\n			grid-template-columns: 2fr 6fr; /* 1/4, 5/8, 1/8 proportions */\n			gap: 32px;\n		};@media screen and (min-width: 768px) {\n			display: grid;\n			gap: 32px;\n			grid-template-columns: 2fr 5fr 1fr; /* 1/4, 5/8, 1/8 proportions */\n		}}.hover.svelte-1xqwwsn{transform:none;transform-origin:50% 50% 0px;opacity:1;transition:transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.2s ease}.hover.svelte-1xqwwsn:hover{transform:translate3d(0px, -4px, 0px)}",
  map: null
};
let label = "text-text-default font-bold text-base";
let body = "text-text-subdued text-base font-light";
let div = "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16 self-start w-full";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` ${validate_component(PageLayout, "PageLayout").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="hidden sm:block"><section class="pt-6 pb-6 md:pt-8 md:pb-16 sticky top-0 flex flex-col justify-end h-screen"><div class="flex flex-col gap-4 content-end"><nav class="${escape(null_to_empty(label), true) + " svelte-1xqwwsn"}">CONTENTS</nav> <ul class="flex flex-col gap-4 text-text-placeholder" data-svelte-h="svelte-ctm03w"><li><a href="#about" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">About</a></li> <li><a href="#experience" class="block hover:translate-x-4 duration-300 ease-in-out hover:text-text-default">Experience</a></li></ul></div></section></div> <div class="justify-items-center"><section id="top" class="max-w-4xl flex flex-col gap-16 pt-6 pb-6 md:pt-8 md:pb-16"><div class="sm:flex flex-col gap-16 hidden"><div class="flex flex-col gap-4" data-svelte-h="svelte-10g2n78"><div class="flex flex-col gap-2" id="about"><div class="bg-text-default w-full h-0.5"></div> <h2 class="h3">ABOUT</h2></div> <h1 class="h1">Nice to meet you!</h1></div> <div class="grid grid-cols-2 gap-16"><div class="flex flex-col gap-16" data-svelte-h="svelte-1ijqcct"><img${add_attribute("src", "/chris.webp", 0)} alt="hero" class="rounded-lg"> <div class="flex flex-col gap-4"><h3 class="h3">Outside of work, you can find me...</h3> <ul class="flex flex-col gap-4 text-text-subdued text-base font-light"><li>• Coding my next plugin (stay tuned!!) 🖥️</li> <li>• Attempting to learn latte art ☕</li> <li>• Training for my next half marathon 🏃</li> <li>• Trying to keep my plants alive 🪴</li></ul></div></div> <div class="flex flex-col gap-16"><div class="${escape(null_to_empty(body), true) + " svelte-1xqwwsn"}"><div class="flex flex-col gap-4" data-svelte-h="svelte-1clg3v2"><h3 class="h3">I’m Chris, a product designer based in New York!</h3> <span>I bring a unique lens to product design through combining my development
									background and technical know-how with strong design skills and sensibilities. I
									pride myself in bridging the gap between designer and developer, ensuring that the
									perfect experience gets delivered to the users!
									<br><br>
									I’ve had the opportunity to work on a variety of projects across different disciplines,
									including B2B platforms, internal tools, and identity technologies. I am currently
									interested in opportunities that will allow me to leverage my unique position as a
									designer who can talk code and elevate the standard for technical and visual implementations.
									<br><br>
									Feel free to reach out and start a conversation either at christophersu02@gmail.com
									or any of my socials below!</span> <span class="flex flex-row gap-6"><a href="https://www.linkedin.com/in/chrisquinn135/" target="_blank" class="hover svelte-1xqwwsn"><img${add_attribute("src", "/linkedin.svg", 0)} alt="logo" class="w-8 rounded"></a> <a href="https://github.com/chrisquinn135" target="_blank" class="hover svelte-1xqwwsn"><img${add_attribute("src", "/github.png", 0)} alt="logo" class="w-8"></a> <a href="./christopher-su-resume-2025.pdf" target="_blank" class="hover h-8 bg-surface-0 flex items-center px-4 py-2 rounded-lg border-2 border-text-default hover:bg-surface-+3 shadow-[0_2px_0_0_rgba(0,0,0,1)] svelte-1xqwwsn"><span class="text-sm font-bold text-text-default">Resume</span></a></span></div></div> <img${add_attribute("src", "/running.jpg", 0)} alt="hero" class="rounded-lg"></div></div></div> <div class="flex flex-col gap-8 sm:hidden"><div class="flex flex-col gap-4" data-svelte-h="svelte-10g2n78"><div class="flex flex-col gap-2" id="about"><div class="bg-text-default w-full h-0.5"></div> <h2 class="h3">ABOUT</h2></div> <h1 class="h1">Nice to meet you!</h1></div> <div class="flex flex-col gap-16"><img${add_attribute("src", "/chris.webp", 0)} alt="hero" class="rounded-lg"> <div class="${escape(null_to_empty(body), true) + " svelte-1xqwwsn"}"><div class="flex flex-col gap-4" data-svelte-h="svelte-w7xj5j"><h3 class="h3">I’m Chris, a product designer based in New York!</h3> <span>I bring a unique lens to product design through combining my development background
								and technical know-how with strong design skills and sensibilities. I pride myself
								in bridging the gap between designer and developer, ensuring that the perfect
								experience gets delivered to the users!
								<br><br>
								I’ve had the opportunity to work on a variety of projects across different disciplines,
								including B2B platforms, internal tools, and identity technologies. I am currently interested
								in opportunities that will allow me to leverage my unique position as a designer who
								can talk code and elevate the standard for technical and visual implementations.
								<br><br>
								Feel free to reach out and start a conversation either at christophersu02@gmail.com or
								any of my socials below!</span> <span class="flex flex-row gap-6"><a href="https://www.linkedin.com/in/chrisquinn135/" target="_blank" class="hover svelte-1xqwwsn"><img${add_attribute("src", "/linkedin.svg", 0)} alt="logo" class="w-8 rounded"></a> <a href="https://github.com/chrisquinn135" target="_blank" class="hover svelte-1xqwwsn"><img${add_attribute("src", "/github.png", 0)} alt="logo" class="w-8"></a> <a href="./christopher-su-resume-2025.pdf" target="_blank" class="hover svelte-1xqwwsn"><span class="text-sm underline">Resume</span></a></span></div></div> <div class="flex flex-col gap-16" data-svelte-h="svelte-12x7uek"><img${add_attribute("src", "/running.jpg", 0)} alt="hero" class="rounded-lg"> <div class="flex flex-col gap-4"><h3 class="h3">Outside of work, you can find me...</h3> <ul class="flex flex-col gap-4 text-text-subdued text-base font-light"><li>• Coding my next plugin (stay tuned!!) 🖥️</li> <li>• Attempting to learn latte art ☕</li> <li>• Training for my next half marathon 🏃</li> <li>• Trying to keep my plants alive 🪴</li></ul></div></div></div></div> <div class="bg-border-subdued w-full h-px gap-2"></div> <div class="flex flex-col gap-16" id="experience"><div data-svelte-h="svelte-1b7hvnw"><h2 class="h1">Experience</h2></div> <div class="${escape(null_to_empty(div), true) + " svelte-1xqwwsn"}"><span class="h3" data-svelte-h="svelte-8apky7">State Farm</span> <div class="${escape(null_to_empty(body), true) + " svelte-1xqwwsn"}"><p class="${escape(null_to_empty(label), true) + " svelte-1xqwwsn"}">Product Designer, Design Systems — 2024 to Present</p>
						I led the design and development of core components for the State Farm Design System, ensuring
						a future-proof, scalable approach to replace the legacy system with long-term consistency.
						I spearheaded the implementation of design tokens, defining token structure and naming conventions
						while driving cross-functional adoption through education initiatives. Additionally, I facilitated
						collaboration sessions with product teams, owned an in-house design system plugin, and led
						user research studies, resulting in improved designer satisfaction and more efficient workflows.</div></div> <div class="${escape(null_to_empty(div), true) + " svelte-1xqwwsn"}"><span class="h3" data-svelte-h="svelte-6sqk46">Trulioo</span> <div class="${escape(null_to_empty(body), true) + " svelte-1xqwwsn"}"><p class="${escape(null_to_empty(label), true) + " svelte-1xqwwsn"}">Associate UX/UI Designer — 2022 to 2024</p>
						Designed, delivered and launched multiple features for a global B2B SaaS identity solutions
						platform, acquiring a significant number of clients within the first year of launch. Responsibilities
						include ideation, wireframing, prototyping, and visual design to create experiences at the
						global and enterprise level.</div></div> <div class="${escape(null_to_empty(div), true) + " svelte-1xqwwsn"}"><span class="h3" data-svelte-h="svelte-6sqk46">Trulioo</span> <div class="${escape(null_to_empty(body), true) + " svelte-1xqwwsn"}"><p class="${escape(null_to_empty(label), true) + " svelte-1xqwwsn"}">Product Visual Designer Intern — 2022</p>
						Provided support for the Visual design team and contributed to feature releases for a B2B
						SaaS identity solutions platform.</div></div> <div class="${escape(null_to_empty(div), true) + " svelte-1xqwwsn"}"><span class="h3" data-svelte-h="svelte-6nupjj">VentOUT</span> <div class="${escape(null_to_empty(body), true) + " svelte-1xqwwsn"}"><p class="${escape(null_to_empty(label), true) + " svelte-1xqwwsn"}">UX Designer — 2022</p>
						Designed an online chat web application from conception to high-fidelity prototypes over
						a two day timespan for SFHacks 2022, SFSU’s hackathon with over 200 participants.</div></div> <div class="${escape(null_to_empty(div), true) + " svelte-1xqwwsn"}"><span class="h3" data-svelte-h="svelte-6ctyqa">Ditto</span> <div class="${escape(null_to_empty(body), true) + " svelte-1xqwwsn"}"><p class="${escape(null_to_empty(label), true) + " svelte-1xqwwsn"}">UX Designer and iOS Developer — 2021</p>
						Designed and developed a mobile app that allows users to share photos based on location;
						Developed a proof-of-concept app using Swift UI to generate over 20 user interests.</div></div></div> <img${add_attribute("src", "/cover.jpg", 0)} alt="cover" class="rounded-lg"> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</section></div> <div class="hidden md:block" data-svelte-h="svelte-15tgt84"><section class="sticky top-0 flex flex-col items-end justify-end h-screen pt-6 pb-6 md:pt-8 md:pb-16"></section></div>`;
    }
  })}`;
});
export {
  Page as default
};
