gsap.registerPlugin(ScrollTrigger);

chisburgerCloud = () => {
	gsap.to('.chisburger', {
		yoyo: true,
		y: '+=5',
		repeat: -1,
		duration: 2,
	});
};

gsap.from('.chisburger', {
	y: '-=100vh',
	opacity: 0,
	stagger: 0.1,
	ease: 'back',
	duration: 0.5,
	onComplete: chisburgerCloud,
	scrollTrigger: {
		trigger: '#burgers',
		start: 'top 70%',
		end: 'top -5%',
		toggleActions: 'play reverse play reset',
	},
});

leftImages = document.querySelectorAll('.left-images');

leftImages.forEach((element) => {
	gsap.from(element, {
		x: '-100vw',
		y: '+=10',
		opacity: 0,
		scrollTrigger: {
			trigger: element,
			start: 'top 90%',
			end: 'bottom 25%',
			toggleActions: 'play reverse play reverse',
		},
	});
});

rightImages = document.querySelectorAll('.right-images');

rightImages.forEach((element) => {
	gsap.from(element, {
		x: '50vw',
		y: '+=10',
		opacity: 0,
		// duration: 0.5,
		scrollTrigger: {
			trigger: element,
			start: 'top 180%',
			end: 'bottom 25%',
			toggleActions: 'play reverse play reverse',
			scrub: 1,
		},
	});
});

hero = gsap.timeline();
hero.from('.cap', {
	ease: 'bounce',
	y: '-50vh',
	duration: 1.3,
})
	.from(
		'.greeting',
		{
			x: '-=20vw',
			opacity: 0,
			ease: 'back',
			duration: 2,
		},
		'-=1.5'
	)
	.from(
		'.shaker1',
		{
			x: 100,
			opacity: 0,
			stagger: 0.2,
		},
		'-=1.3'
	)
	.from(
		'.shaker2',
		{
			x: 100,
			opacity: 0,
			stagger: 0.2,
		},
		'<='
	)
	.from(
		'.fork',
		{
			x: '-=50vw',
			y: '-=50vh',
		},
		'-=1.5'
	)
	.from(
		'.spoon',
		{
			x: '-=50vw',
			y: '-=50vh',
		},
		'-=1.5'
	)
	.from(
		'.man',
		{
			y: '-20vh',
			opacity: 0,
		},
		'-=1'
	);

nav = document.querySelector('.nav');

homeScroll = ScrollTrigger.create({
	trigger: '#burgers',
	start: '-5% 95%',
	end: '-5% top',
	onEnter: () => nav.classList.add('home-nav'),
	onLeave: () => nav.classList.remove('home-nav'),
	onEnterBack: () => nav.classList.add('home-nav'),
	onLeaveBack: () => nav.classList.remove('home-nav'),
});

homeScroll = ScrollTrigger.create({
	trigger: '#tacos',
	start: '-5% 100%%',
	end: '-5% top',
	onEnter: () => nav.classList.add('burger-nav'),
	onLeave: () => nav.classList.remove('burger-nav'),
	onEnterBack: () => nav.classList.add('burger-nav'),
	onLeaveBack: () => nav.classList.remove('burger-nav'),
});

homeScroll = ScrollTrigger.create({
	trigger: '#wines',
	start: '-5% 100%',
	end: '-5% top',
	onEnter: () => nav.classList.add('taco-nav'),
	onLeave: () => nav.classList.remove('taco-nav'),
	onEnterBack: () => nav.classList.add('taco-nav'),
	onLeaveBack: () => nav.classList.remove('taco-nav'),
});

homeScroll = ScrollTrigger.create({
	trigger: '#wines',
	start: '90% 100%',
	// end: '-5vh top',
	onEnter: () => nav.classList.add('wine-nav'),
	onLeave: () => nav.classList.remove('wine-nav'),
	onEnterBack: () => nav.classList.add('wine-nav'),
	onLeaveBack: () => nav.classList.remove('wine-nav'),
});
