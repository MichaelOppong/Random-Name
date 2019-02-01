function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

$('#go').click(function(){
    let names = [];
    
    names.push($('#nameone').val());
    names.push($('#nametwo').val());
    
    let driver = names[getRandomInt(0, 2)];
    let navigator = (names[0] === driver) ? names[1] : names[0];
    
    if (driver === "" || navigator === ""){
        $('#answer').text("Please enter two names!");
        $('img').attr('src', 'https://media.giphy.com/media/4OYhFoyXqQKBO/giphy.gif');
    } else if (driver === navigator) {
        $('#answer').text("It's not that helpful if you enter the exact same name!");
        $('img').attr('src', 'https://media.giphy.com/media/4OYhFoyXqQKBO/giphy.gif');
    } else {
        $('#answer').text(driver + ' ' + 'is the driver!' + ' ' + navigator + ' ' + 'is the navigator!');
        $('img').attr('src', 'https://media.giphy.com/media/9qvpvUBsRmdCU/giphy.gif');
    }
});