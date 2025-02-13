player.onChat("run", function () {
	
})
player.onChat("tower", function (num1) {
    blocks.place(AIR, pos(0, 0, 0))
    loops.pause(1000)
    blocks.place(WATER, pos(0, 0, 0))
    blocks.place(LAVA, pos(0, 0, 0))
})
