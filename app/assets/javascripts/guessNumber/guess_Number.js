/*
 * This is a manifest file that'll be compiled into application.css, which will include all the files
 * listed below.
 *
 * Any CSS and SCSS file within this directory, lib/assets/stylesheets, or any plugin's
 * vendor/assets/stylesheets directory can be referenced here using a relative path.
 *
 * You're free to add application-wide styles to this file and they'll appear at the bottom of the
 * compiled file so the styles you add here take precedence over styles defined in any other CSS/SCSS
 * files in this directory. Styles in this file should be added after the last require_* statement.
 * It is generally better to create a new file per style scope.
 *
 *= require_tree .
 *= require_self

 */

function init(){
  //Initialize Genius Count To 0
  sessionStorage.setItem("GENIUSCNT1", "0");
  sessionStorage.setItem("GENIUSCNT2", "0");
  sessionStorage.setItem("GENIUSCNT3", "0");

  //Initialize Number Count To 0
  sessionStorage.setItem("NUMBERCNT2", "0");
  sessionStorage.setItem("NUMBERCNT3", "0");
  sessionStorage.setItem("NUMBERCNT4", "0");
  sessionStorage.setItem("NUMBERCNT6", "0");
  sessionStorage.setItem("NUMBERCNT7", "0");
  sessionStorage.setItem("NUMBERCNT8", "0");
  sessionStorage.setItem("NUMBERCNT9", "0");
  sessionStorage.setItem("NUMBERCNT10", "0");
}
function showGeniusName(geniusNameElement){
  var cnt=0;
    if(geniusNameElement.alt=="Thai Cornelius"){
      cnt=sessionStorage.getItem('GENIUSCNT1');
      cnt=parseInt(cnt)+1;
      sessionStorage.setItem("GENIUSCNT1", cnt);
    }
    else if(geniusNameElement.alt=="Andre Sterling"){
      cnt=sessionStorage.getItem('GENIUSCNT2');
      cnt=parseInt(cnt)+1;
      sessionStorage.setItem("GENIUSCNT2", cnt);
    }
    else if(geniusNameElement.alt=="Qur'An Smith"){
      cnt=sessionStorage.getItem('GENIUSCNT3');
      cnt=parseInt(cnt)+1;
      sessionStorage.setItem("GENIUSCNT3", cnt);
    }else{
      //error
    }

    alert(geniusNameElement.alt+" was selected!\n"+geniusNameElement.alt+" has been selected " + cnt +" times.");

  }
function showNumber(numberElement){
  var cnt=0;
    if(numberElement.alt=="Number 2"){
      cnt=sessionStorage.getItem('NUMBERCNT2');
      cnt=parseInt(cnt)+1;
      sessionStorage.setItem("NUMBERCNT2", cnt);
    }
    if(numberElement.alt=="Number 3"){
      cnt=sessionStorage.getItem('NUMBERCNT3');
      cnt=parseInt(cnt)+1;
      sessionStorage.setItem("NUMBERCNT3", cnt);
    }
    else if(numberElement.alt=="Number 4"){
      cnt=sessionStorage.getItem('NUMBERCNT4');
      cnt=parseInt(cnt)+1;
      sessionStorage.setItem("NUMBERCNT4", cnt);
    }
    else if(numberElement.alt=="Number 6"){
      cnt=sessionStorage.getItem('NUMBERCNT6');
      cnt=parseInt(cnt)+1;
      sessionStorage.setItem("NUMBERCNT6", cnt);
    }
    else if(numberElement.alt=="Number 7"){
      cnt=sessionStorage.getItem('NUMBERCNT7');
      cnt=parseInt(cnt)+1;
      sessionStorage.setItem("NUMBERCNT7", cnt);
    }
    else if(numberElement.alt=="Number 8"){
      cnt=sessionStorage.getItem('NUMBERCNT8');
      cnt=parseInt(cnt)+1;
      sessionStorage.setItem("NUMBERCNT8", cnt);
    }
    else if(numberElement.alt=="Number 9"){
      cnt=sessionStorage.getItem('NUMBERCNT9');
      cnt=parseInt(cnt)+1;
      sessionStorage.setItem("NUMBERCNT9", cnt);
    }
    else if(numberElement.alt=="Number 10"){
      cnt=sessionStorage.getItem('NUMBERCNT10');
      cnt=parseInt(cnt)+1;
      sessionStorage.setItem("NUMBERCNT10", cnt);
    }
    else{
      //error
    }
    alert(numberElement.alt+" was selected!\n"+numberElement.alt+" has been selected " + cnt +" times.");

  }
function results(resultsElement){
  var status="";
  if(resultsElement=="Lose"){
    status="Sorry You ";
  }else{
    status="Yay!!! Congrats You ";
  }
    alert(status+resultsElement);
}
