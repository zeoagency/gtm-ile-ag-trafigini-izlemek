function () {
  try {
    var trackers = ga.getAll();
    return trackers.map(function(tracker) {
      return tracker.get('clientId')
    }).filter(function(x, y, z) {
      return z.indexOf(x) === y;
    }).join(';');
  } catch(e) {
    return 'na';
  }  
}
