import game from "./game";

var introduce = function(){
    this.create = function(){
        // 添加背景
        var bg = game.add.image(0, 0, "introduce");
        bg.width = game.world.width;
        bg.height = game.world.height;
        game.input.onTap.add(function() {
            game.state.start('guide');
        });
    }
}

export default introduce;