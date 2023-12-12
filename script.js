var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Carolina Ventura')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora Web')
    .pauseFor(2500)
    .deleteAll()
    .start();