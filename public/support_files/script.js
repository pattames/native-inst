/*
 * jQuery v1.9.1 included
 */

/**GLOBAL VARIABLES**/




var previousPage= document.referrer;
// Chat widget variables
var loginStatus = false;


/**FUNCTION AREA**/

/* get locale of URL. Returns locale string */

function get_locale_from_url() {
	var path = window.location.pathname.split('/');
  var locale = path[2];
  return locale;
}

/* get ID of URL. Returns ID for HC Categories, Sections, and Articles*/
function get_id_from_url(){
	var path = window.location.pathname.split('/');
  try {

  var urlID = path[4];
    //For subpaths that include canonical names
    if(urlID.indexOf('-') > -1) {
  urlID= urlID.substring(0,urlID.indexOf('-'));
      }

  return urlID;	
    }
catch(e) {
  if(urlID=='undefined') {
  
  	}
	}
}

/* get subdir string Category or Section or Articles or Community*/
function get_subdir_from_url() {
  var subdir;
  var path = window.location.pathname.split('/');
    try {
  subdir = path[3];

  return subdir;	
    }
catch(e) {
  if(urlID=='undefined') {}
   }
  
}


//search_results.hbs
//Status and behavior of filtered search result
function set_result_filter_status() {
  
  var localizedButtons= [
    {language:"en-us", undoText:"Remove Filter"},
    {language:"de", undoText:"Filter entfernen"},
    {language:"fr", undoText:"Retirer un filtre"},
    {language:"es", undoText:"Desactivar el filtro"},
    {language:"ja", undoText:"フィルター削除"},
    {language:"zh-cn", undoText:"移除筛选"},
  ];

  var filterText;
  var locale=get_locale_from_url();
  
  for(i=0; i< localizedButtons.length; i++){
    if(locale==localizedButtons[i].language) {
      filterText=localizedButtons[i].undoText;
      break;
    }
  }

    //Display no or active filter
 if(window.location.href.indexOf("filter_by") > -1) {
     
   //Render filter section visible
   $('.search-results-dropdown-content').css("visibility","visible");  
     
  //get category or topic ID from URL
     var filteredQuery= new URLSearchParams(window.location.search.substring(1));
     var filterParameter;
     
     //Set remove filter button
     if(window.location.href.indexOf('category=') > -1) {
        filterParameter= filteredQuery.get("category");
         $('#kb-results-filter').text(filterText);
         $('#kb-results-filter').css("background-color","#bd3400");
         $('#community-results-filter').css("display","none"); 
        
     }
     
     
//Display active filter
  switch(filterParameter){ 
    //KB filter results
    case "360000053737" : $('#kb-results-filter-list').append("<span> Filter:<strong> Music Production</strong></span>");
     break;

    case "360000053677" : $('#kb-results-filter-list').append("<span> Filter:<strong> Native Access</strong></span>"); 
     break;  
    case "360000053657" : $('#kb-results-filter-list').append("<span> Filter:<strong> Account</strong></span>"); 
    break;

     
    }
 }  
  
}


//API Request and build links for Search results filter dropdown based on current query url
function set_search_filter(button_id) {
  

//Remove filter, go one page back 
if(window.location.href.indexOf("filter_by") > -1) {window.history.back();}
  
 //Reset Filter lists
  $('.search-results-dropdown-content').css("visibility","hidden");
  $('.search-results-dropdown-content ul').empty();
  

//values that depend on filter button id
  var api_search_substring;
  var subfilter_list;
  var url_main_filter;
  var url_subfilter;
  var filter_list;
  
  
 if(button_id == "kb-results-filter") {
   api_search_substring = "articles";
  //KB Categories
   subfilter_list = [
    {id:360000053737,title:"Music Production"},
    {id:360000053677,title:"Download & Installation"},
    {id:360000053657,title:"Account"}
  ]; 
  url_main_filter="category="; 
  url_subfilter="knowledge_base";
  filter_list ="kb-results-filter-list";
   
 }
  
  

  var resultsUrl= window.location.href;
  var apiBaseUrl= "https://nativeinstruments.zendesk.com/api/v2/help_center/"+api_search_substring+"/search.json?query=";
  
  
  //set vars
  var querySubstring= resultsUrl.slice(resultsUrl.indexOf("&query"));
  var query = querySubstring.slice(querySubstring.indexOf("=")+1);

  var filter_type_results =[];
  
  //API Get # of articles in each category
  $.when(
  
  $.get(apiBaseUrl+query+"&"+url_main_filter+subfilter_list[0].id, function(data) {
   filter_type_results[0]= data.count;
  }),


  $.get(apiBaseUrl+query+"&"+url_main_filter+subfilter_list[1].id, function(data) {
   filter_type_results[1]= data.count;
  }),

  
  $.get(apiBaseUrl+query+"&"+url_main_filter+subfilter_list[2].id, function(data) {
   filter_type_results[2]= data.count;
  }),
  
    
    
).then(function() {
    
  //Render available filter list
  for(i=0; i<subfilter_list.length; i++) {
   if(filter_type_results[i] > 0) {
        $('.search-results-dropdown-content ul').append('<li><a href="https://nativeinstruments.zendesk.com/hc/search?'+url_main_filter+subfilter_list[i].id+'&filter_by='+url_subfilter+'&query='+query+'\" class="sidenav-item" target="_self">'+subfilter_list[i].title+' ('+filter_type_results[i]+')</a></li>');

      }
    //Render filter list visible
    $('#'+filter_list).css("visibility","visible");
    //Revert filter button to original status after call is returned
    $(".search-filter-button").removeAttr("disabled");
    $(".search-filter-button").css("opacity","1");
    $(".search-filter-button").text("Filter Results");
    
    }
    
  });
  
}  //End set_search_filter()





//Iterate through Pages of API request        
function get_next_items(array, data) {
  
//Fetch labeled article entries
    for(i=0; i < data.articles.length; i++) {
      if(data.articles[i].label_names.length > 0) {
        for(j=0; j < data.articles[i].label_names.length; j++) {
          var entry = {};
          if(data.articles[i].label_names[j] == "featured_content") {
            entry.title= data.articles[i].title;
            entry.url= "https://nativeinstruments.zendesk.com/hc/articles/"+data.articles[i].id;
            array.push(entry);
          } 	
        }
      }
    }
    
  //Fetch next page request
    if(data.next_page != null) {
      
  $.ajax({
  url: data.next_page,
   }).
  done(function(next_data){
      get_next_items(array, next_data);
    })
     .fail(function() {
    alert( "error" );
    });
        
  }
  //No next-page. Populate list in DOM
  else{
    for(i=0; i < array.length; i++){
     $('#featured-articles-list').append('<li><a href='+array[i].url+'>'+array[i].title+'</a><hr></li>');                          
    }
  }
  
  
}





/*DOCUMENT (PAGE) LOADED*/

$(document).ready(function() {
  
  //Always load page on top
  $(this).scrollTop(0);
  
  
//Detect browser to check for thirdparty navigator.cookieEnabled boolean in iFrame (Widget) 
  const ua = navigator.userAgent;
  let browser;
  

  //Safari / Edge , returns TRUE
  if(ua.match(/safari/i) || ua.match(/edg/i) ) {
    browser = "SafariEdge";
    
  }
   //Firefox / Chromium, returns FALSE
    if(ua.match(/chrome|chromium|crios/i) || ua.match(/firefox|fxios/i) ) {
    browser = "ChromeFirefox";
    
  }
  
  //Event listenter to communicate with iFrame
window.addEventListener('message', function(event) {

  if(event.origin !== "https://ni-service-solutions-prod.web.app") {return;}
  
  if(event.origin === "https://ni-service-solutions-prod.web.app") {
    
    //Close / Minimize / Restore functionality for iFrame component
    if(event.data === "SessionEnd") {
    $('.chatbot-widget').remove();
    sessionStorage.removeItem("se_loaded");
      }
    if(event.data === "Minimize") {
      $('.chatbot-widget').css("height","50px");
      $('.chatbot-widget').css("width","200px");
    }
    
    if(event.data === "Maximize") {
      $('.chatbot-widget').css("height","625px");
      $('.chatbot-widget').css("width","400px");
    }
    
    //Check if third party cookies are enabled in browser config
     if(typeof event.data == "boolean") {
       
       //Third party cookies blocked by browser
       if(browser === "SafariEdge" && event.data === true  || browser === "ChromeFirefox" && event.data === false ){
         let iframe = document.getElementsByClassName('chatbot-widget')[0];
         iframe.contentWindow.postMessage("cookie_blocked", "https://ni-service-solutions-prod.web.app");
         
         
       }  
       
     }
        
}
  

  
});
  
  
  //Load Support Explorer if conversation ongoing
  if(sessionStorage.getItem("se_loaded")) {
        
    //testing with agent parameter agent ID iZotope
        $('#footer').before("<iframe class='chatbot-widget'tabindex='0' frameBorder='0' src='https://ni-service-solutions-prod.web.app/?widget=chatbot&agent=8b9436e8-68f1-4165-ba04-fdb2d1ad6c12' title='React in iFrame'>   <p>Unfortunately your browser does not support iframes, please update your browser.</p></iframe>");   
  }

 
  
    //Load Support Explorer Widget
  $('#support-explorer-launcher').click(function() {
    let se_loaded = sessionStorage.getItem("se_loaded");
     if(!se_loaded) {
    $('#footer').before("<iframe class='chatbot-widget'tabindex='0' frameBorder='0' src='https://ni-service-solutions-prod.web.app/?widget=chatbot&agent=8b9436e8-68f1-4165-ba04-fdb2d1ad6c12' title='React in iFrame'><p>Unfortunately your browser does not support iframes, please update your browser.</p></iframe>");   
       
     sessionStorage.setItem("se_loaded", true);
   }
    
   
});
    
  
//Accordion article click / expand    
$('pre').on('click', function(){
  
  $(this).next().toggle();
  $(this).toggleClass('active');
  });
  
   //Tabbed article  
    $(".tablink").on('click', function () {
      let clicked = '#'+$(this).text();

     $(clicked).siblings().addClass("hidden");
     $(clicked).removeClass("hidden");
      
     $(this).addClass('active'); 
     $(this).siblings().removeClass('active');  
      
  });
  
  
  //Redirects for accordion article (KK integration)
var oldIds = ["4407217146257", "209557849", "212543965", "210844489", "210279905", "4406116795025", "360001200798", "360000533337", "360000647337", "360005289318", "360019532737", "360019681478", "209557689", "360005150138", "360020750537", "115005195369"];
  
  
  for (var i = 0; i < oldIds.length; i++){
    if (window.location.href.indexOf("/articles/"+oldIds[i]) > -1) {
      window.location.href = 'https://support.native-instruments.com/hc/articles/4406832231441'; 
    }
  }
  
  //Redirect archived Typeform Article IDs to corresponding Category / Section of HC:
  
  //1) All other products BATTERY REAKTOR Audio Interfaces SYNTHS GTR & FX
  
  var apIds = ["360009384397", "360009382217", "360003380077", "360009382457", "360009382337","360003345338"];
     //Redirect to All Other Products section
    for (var i = 0; i < apIds.length; i++){
    if (window.location.href.indexOf("/articles/"+apIds[i]) > -1) {
      window.location.href = 'https://support.native-instruments.com/hc/sections/360000950237'; 
    }
  }

  //2) KONTAKT > Kontakt Section
  
    if (window.location.href.indexOf("/articles/360003345398") > -1) {
      window.location.href = 'https://support.native-instruments.com/hc/sections/360000092857'; 
    }
  
    //3) MASCHINE > Maschine Section
  
    if (window.location.href.indexOf("/articles/360003345298") > -1) {
      window.location.href = 'https://support.native-instruments.com/hc/sections/360000091558'; 
    }
  
      //4) TRAKTOR > Traktor Section
  
    if (window.location.href.indexOf("/articles/360003345438") > -1) {
      window.location.href = 'https://support.native-instruments.com/hc/sections/15449821909021'; 
    }
  
        //5) KONTROL > Kontrol Section
  
    if (window.location.href.indexOf("/articles/360003345418") > -1) {
      window.location.href = 'https://support.native-instruments.com/hc/sections/360000091538'; 
    }
  
          //6) Hardware > Music Product Category
  
    if (window.location.href.indexOf("/articles/360009441878") > -1) {
      window.location.href = 'https://support.native-instruments.com/hc/categories/360000053737'; 
    }
  
        //7) Installation > Native Access Category
  
    if (window.location.href.indexOf("/articles/360002705378") > -1) {
      window.location.href = 'https://support.native-instruments.com/hc/categories/360000053677'; 
    }
  
        //8) Account > Account Support Category
    if (window.location.href.indexOf("/articles/360003766298") > -1) {
      window.location.href = 'https://support.native-instruments.com/hc/categories/360000053657'; 
    }
  
  
   //Redirect Product sections DAW Guides , MP HW, Reaktor, Synths, Battery, GR, Audio Interfaces. General and Guidelines to Product Support Main Category:
    var psIds = ["360000899058", "360000906297", "360000091518", "360000091498", "360000092837","360000092817", "360000950277", "360000093237"];
     //Redirect to PS Category
    for (var i = 0; i < psIds.length; i++){
    if (window.location.href.indexOf("/sections/"+psIds[i]) > -1) {
      console.log("LHR");
      window.location.href = 'https://support.native-instruments.com/hc/categories/360000053737'; 
    }
  }

  
   //Redirect Account / Webshop sections to Account Main Category:
  
   // 1) 360000092577 (removed)
   if (window.location.href.indexOf("/sections/360000092577") > -1) {
     window.location.href = 'https://support.native-instruments.com/hc/categories/360000053657'; 
   }
  
  // 2) 360000092537 (removed)
   if (window.location.href.indexOf("sections/360000092537") > -1) {
     window.location.href = 'https://support.native-instruments.com/hc/categories/360000053657'; 
   }
  
  //Redirect NA section to its own main category
  if(window.location.href.indexOf("sections/360000091278") > -1) {
    window.location.href = 'https://support.native-instruments.com/hc/categories/360000053677-Native-Access'; 
  }



  
  // show form controls when the textarea receives focus or backbutton is used and value exists
  var $commentContainerTextarea = $(".comment-container textarea"),
  $commentContainerFormControls = $(".comment-form-controls, .comment-ccs");

  $commentContainerTextarea.one("focus", function() {
    $commentContainerFormControls.show();
  });

  if ($commentContainerTextarea.val() !== "") {
    $commentContainerFormControls.show();
  }

  // Submit requests filter form in the request list page
  $("#request-status-select, #request-organization-select")
    .on("change", function() {
      search();
    });

  // Submit requests filter form in the request list page
  $("#quick-search").on("keypress", function(e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $("#quick-search").val(),
      status: $("#request-status-select").val(),
      organization_id: $("#request-organization-select").val()
    });
  }

  $(".header .icon-menu").on("click", function(e) {
    e.stopPropagation();
    var menu = document.getElementById("user-nav");
    var isExpanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", !isExpanded);
  });

  if ($("#user-nav").children().length === 0) {
    $(".header .icon-menu").hide();
  }

  // Submit organization form in the request page
  $("#request-organization select").on("change", function() {
    this.form.submit();
  });

  // Toggles expanded aria to collapsible elements
 $(".collapsible-nav, .collapsible-sidebar").on("click", function(e) {
    e.stopPropagation();
    var isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
  });
  

    
  //inverting color of category and section icons at hovering
  $(".blocks-item-link").mouseover(function() {
    $(this).find(".category-icon, .section-icon").css("fill","white");
     $(this).find(".category-icon, .section-icon").css("stroke","white");
    $(this).find("#learning-icon #book-symbol").css("stroke","white");
	});
  $(".blocks-item-link").mouseout(function() {
    $(this).find(".category-icon, .section-icon").css("fill","#3e8cbb");
    $(this).find(".category-icon, .section-icon").css("stroke","#3e8cbb");
     $(this).find("#learning-icon #book-symbol").css("stroke","#3e8cbb");
	});
  
  //fill color of typeform text and icon on hovering
  $(".typeform-item").mouseover(function() {
   $(this).find(".category-icon").css({"fill":"#fff", "stroke":"#fff"}); 
   $(this).find(".typeform-text").css({"font-weight":"bolder", "color":"#fff"});
   
  });
  
    $(".typeform-item").mouseout(function() {
      $(this).find(".category-icon").css({"fill":"#144c6d", "stroke":"#3e8cbb"}); 
      $(this).find(".typeform-text").css({"font-weight":"400", "color":"#3e8cbb"});
     
  });
  
  //Increase size of Play button on hover (featured videos)
  $(".category-featured-video").mouseover(function() {
      $(this).find("svg").css('transform', 'scale(1.1,1.1)');   
  });
  
  $(".category-featured-video").mouseout(function() {
      $(this).find("svg").css('transform', 'scale(1,1)');   
  });
  
  //change color of featured content description text on hovering
  $('.category-featured-content').mouseover(function() {
   $(this).find("p").css("color","#144c6d");
  });
  
    $('.category-featured-content').mouseout(function() {
   $(this).find("p").css("color","#000");
  });
  
  
  //additional entries in user login / profile dropdown-menu

  var dc_updates= $('#dc_updates').text();
$('#user-menu').prepend("<a role='menuitem' href='https://www.native-instruments.com/support/downloads/'>" + dc_updates + "</a>");
 var dc_order_history=$('#dc_order_history').text();
  $('#user-menu').prepend("<a role='menuitem' href='https://www.native-instruments.com/my-account/order-history/'>" + dc_order_history+ "</a>");
	var dc_name=$('#dc_name').text();
   $('#user-menu').prepend("<a role='menuitem' href='https://www.native-instruments.com/my-account/account-settings/'>" + dc_name+ "</a>");
  var dc_products=$('#dc_products').text();
  $('#user-menu').prepend("<a role='menuitem' href='https://www.native-instruments.com/my-account/my-products-serials-downloads/'>" + dc_products+ "</a>");  
  var dc_my_account = $('#dc_my_account').text();
  $('#user-menu').prepend("<a role='menuitem' href='https://www.native-instruments.com/my-account/'>" + dc_my_account + "</a>");
  

  //Announcement bar in Home page- button functionality
  $(".announcement > button").click(function () {
    var data = $(".announcement").children('p').eq(0).text();
     var locale = get_locale_from_url();
    if(locale == "en-us"){
     	localStorage.setItem("support-announcement-en", data); 
    }
    else if(locale == "de"){
     	localStorage.setItem("support-announcement-de", data); 
    }
    else if(locale == "es"){
     	localStorage.setItem("support-announcement-es", data); 
    }
    else if(locale == "fr"){
     	localStorage.setItem("support-announcement-fr", data); 
    }
    else if(locale == "ja"){
     	localStorage.setItem("support-announcement-ja", data); 
    }
    else if(locale == "zh-cn"){
     	localStorage.setItem("support-announcement-zh", data); 
    }
    $(".announcement").fadeOut(400, function() { 
    	$(".announcement").remove();
       if ($(window).width() > 768) {
      /*$(".sub-nav").css("marginBottom","80px"); */       
       }
    });
  });

//Announcement bar - LEARN MORE only visible when Dynamic Content is not "-"
var learn_more = $("#announcement_learn_more").text();
if(learn_more != "-"){
   $("#announcement_learn_more").show();
}
  


  
  /*Dynamically Replace Music Production Category icons on mobile*/
  if(window.location.href.indexOf("/categories/360000053737") > -1) {
    
    if ($(window).width() < 768) {
      
      
 const mpImages_maschine = "{{asset 'Section_Maschine.png'}}";
 const mpImages_kontakt = "{{asset 'Section_Kontakt.png'}}";
 const mpImages_traktor = "{{asset 'Section_1x_Traktor.png'}}";
 const mpImages_kontrol = "{{asset 'Section_1x_KompleteKontrol.png'}}";
 const mpImages_all = "{{asset 'Section_1x_Other.png'}}";
      
      
     $("#mp-cat-maschine").attr('src' , mpImages_maschine);
      $("#mp-cat-kontakt").attr('src' , mpImages_kontakt);
      $("#mp-cat-traktor").attr('src' , mpImages_traktor);
      $("#mp-cat-kontrol").attr('src' , mpImages_kontrol);
      $("#mp-cat-other").attr('src' , mpImages_all);
  }

    
   
  }
  
  
  /*Dynamically set links to Community on corresponding categories / section*/

switch (get_id_from_url()) {
    //Native Access Cat
  case "360000053677":
   $('.community-button').attr("href", "https://community.native-instruments.com/categories/native-access?utm_source=help-center-nativeaccess&utm_medium=banner&utm_campaign=Help+Center");
    break;
    //Maschine Section
  case "360000091558":
    $('.community-button').attr("href", "https://community.native-instruments.com/categories/maschine?utm_source=help-center-maschine&utm_medium=banner&utm_campaign=Help+Center");
    break;
    //Kontakt Section
  case "360000092857":
      $('.community-button').attr("href", "https://community.native-instruments.com/categories/kontakt?utm_source=help-center-kontakt&utm_medium=banner&utm_campaign=Help+Center");
    break;
    //Traktor Section
  case "15449821909021":
   $('.community-button').attr("href", "https://community.native-instruments.com/categories/traktor-software-hardware?utm_source=help-center-traktor&utm_medium=banner&utm_campaign=Help+Center");
    break;
    //Komplete Kontrol Section
  case "360000091538":
    $('.community-button').attr("href", "https://community.native-instruments.com/categories/komplete-kontrol?utm_source=help-center-kontrol&utm_medium=banner&utm_campaign=Help+Center");
    break;
    //Other Products Section
  case"360000950237":
      $('.community-button').attr("href", "https://community.native-instruments.com/?utm_source=help-center-others&utm_medium=banner&utm_campaign=Help+Center");
    break;
    //Homepage or fail  
   default:
    $('.community-button').attr("href", "https://community.native-instruments.com/?utm_source=help-center-hp&utm_medium=banner&utm_campaign=Help+Center");
}
  
  



  //Remove "empty" paragraphs for empty sections in Native Access Category > Article List
  $( ".cat-article-container p" ).remove();
   
  
  /*Remove section breadcrumb from article page navbar*/
  if(window.location.href.indexOf("/articles/") > -1) {
  $('.breadcrumbs li').last().remove();
  }
  
  
  
   /*Community Post Page /search results: Back button goes to previous page and if not given, back to Community homepage*/
    $('.btn-back').click(function() {
       
   var locale= get_locale_from_url();
   var communityHome = 'https://support.native-instruments.com/hc/'+locale+'/community/topics/'; //build link to home with current locale
   
    setTimeout(function(){ 
      //update index string to livesystem url
          if (document.referrer.indexOf("support.native-instruments.com") == -1 || document.referrer.indexOf("community/posts/new") > -1 ) {
            //For back to community
            if($(this).hasClass("submit-a-post")) {   
            window.location.href =communityHome; 
            }
          } 
      else {
             window.history.back();
          }
    }, 100);
	});
  
  
  
  
//Cookie consent Init script

// obtain plugin
            var cc = initCookieConsent();

            // run plugin with your configuration
            cc.run({
                current_lang: 'en',
                autoclear_cookies: true,                   // default: false
                theme_css: 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.6.2/dist/cookieconsent.css',  
                page_scripts: true,                        // default: false


                onAccept: function (cookie) {

                
                    cc.accept('all');
                },

    onChange: function (cookie, changed_preferences) {

        cc.accept([]);

        // If analytics category's status was changed ...
        if (changed_preferences.indexOf('analytics') > -1) {


            // If analytics category is disabled ...
            if (!cc.allowedCategory('analytics')) {

                // Disable gtag ...
                window.dataLayer = window.dataLayer || [];

                function gtag() {
                    dataLayer.push(arguments);
                }

                gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'analytics_storage': 'denied'
                });
            }
        }

    },

    onFirstAction: function(cookie) {
  
    },


                languages: {
                    'en': {
                        consent_modal: {
                            title: 'We use cookies!',
                            description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                            primary_btn: {
                                text: 'Accept all',
                                role: 'accept_all'              // 'accept_selected' or 'accept_all'
                            },
                            secondary_btn: {
                                text: 'Reject all',
                                role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                            }
                        },
                        settings_modal: {
                            title: 'Cookie preferences',
                            save_settings_btn: 'Save settings',
                            accept_all_btn: 'Accept all',
                            reject_all_btn: 'Reject all',
                            close_btn_label: 'Close',
                            cookie_table_headers: [
                                {col1: 'Name'},
                                {col2: 'Domain'},
                                {col3: 'Expiration'},
                                {col4: 'Description'}
                            ],
                            blocks: [
                                {
                                    title: 'Cookie usage 📢',
                                    description: 'The NI Community website uses cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="https://www.native-instruments.com/en/company/legal-information/privacy-policy/#data-capture" class="cc-link">privacy policy</a>.'
                                }, {
                                    title: 'Strictly necessary cookies',
                                    description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                                    toggle: {
                                        value: 'necessary',
                                        enabled: true,
                                        readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                                    }
                                }, {
                                    title: 'Performance and Analytics cookies',
                                    description: 'These cookies allow the website to remember the choices you have made in the past',
                                    toggle: {
                                        value: 'analytics',     // your cookie category
                                        enabled: false,
                                        readonly: false
                                    },
                                    cookie_table: [             // list of all expected cookies
                                        {
                                            col1: '^_ga',       // match all cookies starting with "_ga"
                                            col2: 'google.com',
                                            col3: '2 years',
                                            col4: 'description ...',
                                            is_regex: true
                                        },
                                        {
                                            col1: '_gid',
                                            col2: 'google.com',
                                            col3: '1 day',
                                            col4: 'description ...',
                                        }
                                    ]
                                },
                                
                                /* {
                                    title: 'Advertisement and Targeting cookies',
                                    description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                                    toggle: {
                                        value: 'targeting',
                                        enabled: false,
                                        readonly: false
                                    }
                                }, {
                                    title: 'More information',
                                    description: 'For any queries in relation to our policy on cookies, please review our <a class="cc-link" href="https://www.native-instruments.com/en/company/legal-information/privacy-policy/#data-capture">privacy policy</a>.',
                                }*/
                            ]
                        }
                    }
                }
            });

//New request page Redirect to support home
    if(window.location.href.indexOf("requests/new") > -1) 
       {window.location.href= "https://support.native-instruments.com/"}
  

  
 
}); /*End of (document).ready*/

/* Handling of untranslated articles */
function redirect_for_untranslated_articles(){
  

  var pathname = window.location.pathname;
	var url   = window.location.href;
  var pathArray = pathname.split("/");
  var locale = pathArray[2];
  var finalUrl  = location.protocol+'//'+location.hostname; 
  finalUrl += '/hc/en-us/' + pathArray[3] + '/' + pathArray[4];
  
  //Check if article id exists in English
  var request;
	if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
  }  
	else{
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }
	request.open('GET', finalUrl, false);
	request.send(); 
	if (request.status === 404) {
   $('.not_found_error').show();
    return false;
	}
  
  //If page not found is an article
  if(locale != 'en-us' && pathArray[3] == 'articles'){
    
    //If article not found is Typeform Product Support article
     if(sessionStorage.getItem("articleType") =="typeform-product") {
        $('#error-page-title').hide();
        $('.not_found_typeform_product_support').show();
       
       //build both URLs for redirect options
       $('.typeform-redirect-url').attr("href",finalUrl);
      build_community_link_with_locale('#typeform-redirect-go-to-community');
      } 
    
    //If article not found is Typeform Reg Support article
     else if(sessionStorage.getItem("articleType") =="typeform-registration") {
        $('#error-page-title').hide();
        $('.not_found_typeform_reg_support').show();
       
      //build URL for redirect to article
       $('.typeform-redirect-url').attr("href",finalUrl);
      } 
    
     //If article not found is Typeform Order Support article
    else if(sessionStorage.getItem("articleType") =="typeform-webshop") {
        $('#error-page-title').hide();
        $('.not_found_typeform_order_support').show();
       
      //build URL for redirect to article
       $('.typeform-redirect-url').attr("href",finalUrl);
      }    
    
   //If article not found is text Article
  else {
    $('.not_found_error').show();
    $('.not_found_error_untranslated').show();
    var timeleft = 4;
    var downloadTimer = setInterval(function(){
    timeleft--;
   
    if(timeleft <= 0)  {
      clearInterval(downloadTimer);
      window.location = finalUrl;     
          }
      },1000);  
     return true;
    }

  }
  //Generic page not found error
   else{
  $('.not_found_error').show();
    return false;
    } 
  sessionStorage.removeItem("articleType");
}



