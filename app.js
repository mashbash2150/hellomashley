const adj = ['Tinkerer', 'Wanderer', 'Solver', ' Ponderer', 'Nature-lover'],
 
    i = 0,
    offset = 0,
    len = adj.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
const wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= adj[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = adj[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};


  wordflick();
