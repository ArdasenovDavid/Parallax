function parallax(event) {
	this.querySelectorAll('.layer').forEach(layer => {
		let speed = layer.getAttribute('data-speeeeeed')
		layer.style.transform = `translateX(${event.clientX * speed/500}px)`
	})

}
document.addEventListener('mousemove', parallax);