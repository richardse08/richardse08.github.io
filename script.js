$(document).ready(function(){
    
    

    // Fade-out body on load
    $(function() {
        $('body').removeClass('fade-out');
    });
    
    
    
    // Creating data lists for different projects
    var pageLink = ['', 'https://erics-voting-app.herokuapp.com/', 'https://codepen.io/richardse08/full/qmvvGZ/', 'https://codepen.io/richardse08/full/vmvovM/', 'https://codepen.io/richardse08/full/wdvWRj/', 'https://codepen.io/richardse08/full/GWMRMM/', 'https://codepen.io/richardse08/full/BpqJeP/', 'https://codepen.io/richardse08/full/EZegMN/', 'https://codepen.io/richardse08/full/JEMXdd/', 'https://codepen.io/richardse08/full/ggWBGO/', 'https://codepen.io/richardse08/full/vKpPoQ/'];
    
    
    var imageLink = ['', 'images/voting-app.png','images/simon-says.png', 'images/tic-tac-toe.png', 'images/pomodoro.png', 'images/calculator.png', 'images/twitch.png', 'images/wikipedia.png', 'images/weather.png', 'images/random-quote.png', 'images/tribute.png'];
    
    
    var description = 
['', 'This is my voting app', 'Play a round of Simon Says with this interactive game! Give Strict Mode a shot for an extra challenge! Made with <code>HTML</code>, <code>CSS</code>, <code>JavaScript</code> and <code>JQuery</code>', 
'Play a match or two of the classic game Tic-Tac-Toe, built with an intelligent machine opponent! Made with <code>HTML</code>, <code>CSS</code>, <code>JavaScript</code> and <code>JQuery</code>', 
'Feeling lazy? Check out The Pomodoro Clock: a machinification of the famous "Pomodoro Technique"! Made with <code>HTML</code>, <code>CSS</code>, <code>JavaScript</code> and <code>JQuery</code>', 
'An accurate replica of the iPhone calculator app! Made with <code>HTML</code>, <code>CSS</code>, <code>JavaScript</code> and <code>JQuery</code>', 
'Use an AJAX request to access information about different gamers on twitch.tv! Made with <code>HTML</code>, <code>CSS</code>, <code>JavaScript</code>, <code>jQuery</code> and <code>AJAX APIs</code>',
'Use this Wikipedia viewer to quickly search for the top 10 results of any query! Made with <code>HTML</code>, <code>CSS</code>, <code>Bootstrap</code>, <code>JavaScript</code>, <code>JQuery</code> and <code>AJAX APIs</code>', 
'Find your local weather without lifting a finger via this geolocation-enabled weather app! Made with <code>HTML</code>, <code>CSS</code>, <code>Bootstrap</code>, <code>JavaScript</code>, <code>JQuery</code> and <code>AJAX APIs</code>', 
'Click a link and get a random quote from my favorite actor! Made with <code>HTML</code>, <code>CSS</code>, <code>JavaScript</code> and <code>JQuery</code>', 
'Need some inspiration? Check out this tribute to Colonel Sanders! Made with <code>HTML</code> and <code>CSS</code>'];
        
    
    
    
    // Open and close windows
    function windowLoader(num) {
        // Passed in a number since each item involves a drag, handle and an id (each item has their own number)
        var html = '    <div id="drag-' + [num] + '" class="draggable"> ';
                html += '   <div id="handle' + [num] + '"> ';
                    html += '   <div class="window-header"> ';
                        html += '<div class="red-dot"></div>';
                        html += '<div class="yellow-dot"></div>';   
                        html += '<div class="green-dot"></div>';
                        html += '<div class="window-url">' + pageLink[num] + '</div>'
                    html += '</div>';
                    html += '<div class="project-image">';
                        html += '<a href="' + pageLink[num] + '"><img src="' + imageLink[num] + '" class="img-responsive"></a>';
                    html += '</div>';
                    html += ' <div class="clear text-center">';
                        html += '<p2>' + description[num] + '</p2>';
                    html += '</div>';
                html += '</div>';
            html += '</div>';
        $("#iconWindow" + num).html(html);
    };
    
    
    // When any divs with icons class is clicked
    // Grab its id and pass it into windowLoader to render html window
    $(".footer-icon").click(function(){
        windowLoader(this.id);  
        $('.about-me').addClass('display-none');
    });
    

    // When a red-dot is clicked 
    // Find the 3rd parent and eliminate it
    $(this).on('click', '.red-dot', function(){
        $($(this).parent().parent().parent().parent()).html('');
    });
    
    
    
 
    /////////////////////////// DRAG & RESIZE  /////////////////////////////
    interact('.draggable')
        .draggable({
            inertia: false,
            autoScroll: true,
            onmove: dragMoveListener,
        })
    
        // Limit what areas allow box to be dragged
        .allowFrom('#drag-1, #drag-2, #drag-3, #drag-4, #drag-5, #drag-6, #drag-7, #drag-8, #drag-9, #drag10')
        .ignoreFrom('.window-url, .red-dot, .yellow-dot, .green-dot')
        .resizable({
            preserveAspectRatio: false,
            edges: { left: true, right: true, bottom: true, top: true }
        })
        .on('resizemove', function (event) {
            console.log("on resize move");
            var target = event.target,
                x = (parseFloat(target.getAttribute('data-x')) || 0),
                y = (parseFloat(target.getAttribute('data-y')) || 0);
        
            // update the element's style
            target.style.width  = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';

            // translate when resizing from top or left edges
            x += event.deltaRect.left;
            y += event.deltaRect.top;

            target.style.webkitTransform = target.style.transform =
                'translate(' + x + 'px,' + y + 'px)';

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
            // target.textContent = Math.round(event.rect.width) + '×' + Math.round(event.rect.height);
        });
    ;
  
        
    function dragMoveListener (event) {
        var target = event.target,

            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform =
            target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

        // update the position attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);

    } // End dragMoveEventListener()

    
   
    
    // Define page transition functions /////////////////////////////////////////////////////////////////////
    function mainFade() {
        var mainFadeInt = setInterval(function() {
            clearInterval(mainFadeInt);
            $('body').removeClass('fade-out');
        }, 1000);
    };
    
    
    function mainTransitionDelay() {
        $('body').addClass('fade-out');
        mainFade();
    };
    
    
    // Launch aboutMe page as introduction
    function aboutMe() {
          
        setTimeout(function() {
            $('.about-me').removeClass('display-none'); 
        }, 3000);
        
    };
    
    
    
    // Load up the main page and simultaneously add transition delay
    function mainPage() {
        mainTransitionDelay();
        $(".lock-screen").addClass("display-none");
        $(".main-screen").removeClass("display-none");
        $(".main-screen").addClass("wrapper");
        $(".desktop-background").addClass("desktop-margin");
        credentials();
        aboutMe();
    };
    
    

    
    
    
    // User inputs /////////////////////////////////////////////
    
    // Enter icon fires main page
    $("#enter-icon").click(function(){
        mainPage();
    });
    
    // Click enter key to save username and open desktop
    $("#username-enter").keyup(function (enterEvent) {
        var key = enterEvent.which;
        if(key == 13) {
            $("#enter-icon").click();
        }
    });
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 
    // Gathering credentials ///////////////////////////////////////////////////
    function credentials() {        
        var inputValue = $("#username-enter").val();
        $("#user-name").html(inputValue);
    };
    

    
    // Time and date function fires on load //////////////////////////////////////
    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        
        function checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        
        
        // Pass min through function to ensure no leading zeros exist
        min = checkTime(m);

        // Convert hours to standard 1-12 w/ AM/PM
        if(h <= 12) {
            $("#time").html(h + ":" + min + " AM");
            $("#intro-time").html(h + ":" + min + " AM");
        }
        else if (h > 12) {
            h = h - 12;
            $("#time").html(h + ":" + min + " PM");
            $("#intro-time").html(h + ":" + min + " PM");
        }
        t = setTimeout(function () {
            startTime();
        }, 1000);
    }
    startTime();
    function startDate() {
        var date = new Date();
        var n = date.toDateString();
        var time = date.toLocaleTimeString();

        document.getElementById('currentDate').innerHTML = n;
    };
    startDate();

    

    
    
    
    
    
}); // End document ready