function log(m){
  console.log("AWS COLORS: ", m);
}
log('init');

//window.addEventListener("load", function(){
//none of the load/domready events work... sigh.
setTimeout(function(){
  var region;
  log('onReady');
  // var regionobj = $('[title=Regions]');
  // above doesn't work for some reason...
  var regionobjs = document.querySelectorAll('[aria-controls="menu--regions"]');
  if( regionobjs.length !== 1 ){
    console.log('no menu region match');
  }else{
    var regionobj = regionobjs[0]
    region = regionobj.innerText;
    log(region);
    data = [
      { "name": "N. Virginia", "code": "us-east-1", "color": "#e6194b", "country": "us", "az":6 },
      { "name": "Ohio", "code": "us-east-2", "color": "#3cb44b", "country": "us", "az":3 },
      { "name": "N. California", "code": "us-west-1", "color": "#e58e00", "country": "us", "az":2 },
      { "name": "Oregon", "code": "us-west-2", "color": "#4363d8", "country": "us", "az":2 },
      { "name": "Central", "code": "ca-central-1", "color": "#f58231", "country": "ca", "az":2 },
      { "name": "Frankfurt", "code": "eu-central-1", "color": "#911eb4", "country": "de", "az":3 },
      { "name": "Ireland", "code": "eu-west-1", "color": "#31a8a8", "country": "ir", "az":3 },
      { "name": "London", "code": "eu-west-2", "color": "#f032e6", "country": "uk", "az":3 },
      { "name": "Paris", "code": "eu-west-3", "color": "#83ac08", "country": "fr", "az":3 },
      { "name": "Stockholm", "code": "eu-north-1", "color": "#c89898", "country": "sw", "az":3 },
      { "name": "Hong Kong", "code": "ap-east-1", "color": "#008080", "country": "hk", "az":"N/A" },
      { "name": "Mumbai", "code": "ap-south-1", "color": "#8a7299", "country": "ia", "az":3 },
      { "name": "Seoul", "code": "ap-northeast-2", "color": "#9a6324", "country": "kr", "az":3 },
      { "name": "Singapore", "code": "ap-southeast-1", "color": "#ccc8a0", "country": "sg", "az":3 },
      { "name": "Sydney", "code": "ap-southeast-2", "color": "#800000", "country": "au", "az":3 },
      { "name": "Tokyo", "code": "ap-northeast-1", "color": "#669975", "country": "jp", "az":3 },
      { "name": "Bahrain", "code": "me-south-1", "color": "#808000", "country": "ba", "az":"N/A" },
      { "name": "São Paulo", "code": "sa-east-1", "color": "#b2977b", "country": "br", "az":3 }
    ];

    matches = data.filter(d => d.name == region);
    var color;

    if( matches.length != 1 ){
      console.log("didn't match region correction. got " + matches.length + " matches");
      // default color?
    }else{
      console.log("match with " + matches[0].name +".");
      color = matches[0].color;

      var navbars = document.querySelectorAll('[aria-label="Navigation bar"]');
      if( navbars.length < 1 ){
        console.log('no navbar found! painting body margins!');
        document.body.style.border = "5px solid "+color+"";
      }else{
        navbars.forEach(
          (currentValue, currentIndex, listObj) => {
            currentValue.style.backgroundColor = color;
          }
        );
      }
    }
  }
}, 1000);
