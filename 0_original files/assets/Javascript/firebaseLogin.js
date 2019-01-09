(function () {


    //========================================================//
    //config firebase app with config and initialize
    // Initialize Firebase
    //========================================================//
    var config = {
        apiKey: "AIzaSyA60h7wN-Eq96m7_pW3LTgNvBg4RTaoQ14",
        authDomain: "barb-team.firebaseapp.com",
        databaseURL: "https://barb-team.firebaseio.com",
        projectId: "barb-team",
        storageBucket: "barb-team.appspot.com",
        messagingSenderId: "351673724371"
    };
    firebase.initializeApp(config);


    //========================================================//
    // LOGIN HTML PAGE ELEMENTS
    //========================================================//
    var DEBUG = true;

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    var database = firebase.database();


    //========================================================//
    //The USER is LOGGED IN and CLICKS to VIEW PREFERENCES
    //========================================================//
    $("#loggedIn").on("click", "#show-preferences", function () {

        if ($(this).hasClass("fa-plus-square")) {
            $(this).removeClass("fa-plus-square")
        } else {
            $(this).addClass("fa-plus-square");
        }

        $("#preferences").slideToggle(500, "swing", function () {
        });
    });


    //========================================================//
    // Button CLICK for ADD/SAVE User Preferences
    //========================================================//
    //    Grab the User Input
    //    Create an object with the user data
    //    If there are preferences 
    //       update the database
    //    If there are no user preferences, 
    //       push new preferences to the database
    //========================================================//
    $("#user-preferences-btn").on("click", function (event) {
        event.preventDefault();

        var currentUserId = firebase.auth().currentUser.uid;

        // Grabs user input
        var userName = $("#user-name-input").val().trim();
        var windLimit = $("#wind-input").val().trim();
        var precipLimit = $("#precipitation-input").val().trim();
        var tempMin = $("#temperature-min-input").val().trim();
        var tempMax = $("#temperature-max-input").val().trim();

        //@todo - this isn't necessary - find and remove?
        //var preferencesKey = $('#preferences').attr('data-id');


        database.ref('preferences').orderByChild("userId").equalTo(currentUserId).once('value', function (snapshot) {
            //there should only be one record if results exist

            if (snapshot && snapshot.numChildren() > 0) {
                //console.log("UPDATING A USER PREFERENCES RECORD");
                //we have a key, so use the key to update
                snapshot.forEach(function (childSnapshot) {
                    if (childSnapshot.val() && childSnapshot.val().userName != null && childSnapshot.val().userName != '') {
                        $("#greeting").text("Hello " + childSnapshot.val().userName);
                    }
                    database.ref("preferences")
                        .child(childSnapshot.key).update(
                            {
                                userId: currentUserId,
                                userName: userName,
                                windLimit: windLimit,
                                precipLimit: precipLimit,
                                tempMin: tempMin,
                                tempMax: tempMax
                            });
                    $("#updateMsg").text("Your information has been updated");
                    setTimeout(function () {
                        $("#updateMsg").text("");
                      }, 2000);
                });
            } else {
                //preferences have never been saved, so push
                //console.log("no preferences yet, so new db push");

                var userPref = {
                    userId: currentUserId,
                    userName: userName,
                    windLimit: windLimit,
                    precipLimit: precipLimit,
                    tempMin: tempMin,
                    tempMax: tempMax
                };

                $("#greeting").text("Hello " + userName);


                database.ref("preferences").push(userPref);
                //How do I let the user know that the update has been successful?
                if ($('#show-preferences').hasClass("fa-plus-square")) {
                    $('#show-preferences').removeClass("fa-plus-square")
                } else {
                    $('#show-preferences').addClass("fa-plus-square");
                }

                $("#preferences").slideToggle(500, "swing", function () {
                });
                //console.log('key', snapshot.key);
            }

        });


    });
    // Create Firebase event for adding user preferences/profile to the database
    // update html with icons or colors based on preferences
    database.ref('preferences').on("child_added", function (childSnapshot) {
        //console.log(childSnapshot.val());
        //this is called on page load and will return all preferences?
    });



    //=================================================================//
    //  Clicking on a favorite Mountain Icon
    //  Will add/remove the associated mountain to the user favorites
    //=================================================================//
    $(".container").on("click", ".favorite", function () {
        var mtnId = $(this).closest('table').attr("id");
        const auth = firebase.auth();
        var currentUserId = null;
        if (auth.currentUser != null) {
            currentUserId = auth.currentUser.uid;
        }

        if ($(this).attr("value") === "false") {
            $(this).removeClass("far").addClass("fas").attr("value", "true");

            //console.log("ADDING FAVE ID: " + mtnId);
            if (currentUserId) {
                database.ref("mtns").push({
                    name: mtnId,
                    userid: currentUserId
                });
            } else {
                //@TODO use local storage?
            }

        } else {

            $(this).removeClass("fas").addClass("far").attr("value", "false");

            //console.log("REMOVING FAVE ID: " + mtnId);
            if (currentUserId) {
                database.ref('mtns').orderByChild("name").equalTo(mtnId).once('value', function (snapshot) {
                    //snapshot would have list of NODES that satisfies the condition
                    //console.log(snapshot.val())
                    snapshot.forEach(function (childSnapshot) {

                        //easier to remove the entire childSnapshot i.e. record
                        childSnapshot.ref.remove();
                    });
                });
            } else {
                //@TODO remove from local storage
            }
        }
    });



    //========================================================//
    //    LOGIN CLICK EVENTS
    //        Log In, Sign Up, Log out
    //========================================================//

    // ===============================================================//
    // Add Existing User Log In event
    // ==============================================================//
    btnLogin.addEventListener('click', e => {
        console.log("clicked login button");
        //Get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;

        const auth = firebase.auth();
        // Sign In
        const promise = auth.signInWithEmailAndPassword(email, pass);
        $(".msgDiv").text('');
        promise.catch(e => {
            console.log(e.message);
            $(".msgDiv").text(e.message);
        });
    })

    // ===============================================================//
    // Add New User Sign Up event
    // ==============================================================//
    btnSignUp.addEventListener('click', e => {

        //Get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;

        const auth = firebase.auth();
        // Sign Up
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        // promise.then( function(data){
        //     console.log('uid', data.user.uid)
        // } )
        $(".msgDiv").text('');
        promise.catch(e => {
            console.log(e.message);
            $(".msgDiv").text(e.message);
        });
    });


    // ===============================================================//
    // Add User Log Out event
    // ==============================================================//
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();

        //@TODO 
        // What happens to the mountain tables when a user log out
        $(".favorite").removeClass("fas").addClass("far").attr("value", "false");
        // No Preferences
    });

    // ===============================================================//
    // This is called when the page is loaded
    // This is called when a user logs in, logs out, signs up?
    // ==============================================================//
    firebase.auth().onAuthStateChanged(firebaseUser => {
        //console.log(firebaseUser)
        if (firebaseUser) {
            //user is logged in
            console.log(firebaseUser.uid);

            $('#login').hide();
            $('#loggedIn').show();
            $('#preferences').hide();
            $("#show-preferences").addClass("fa-plus-square");
            $("#greeting").text("Hello");
            displayUserPreferences(firebaseUser.uid);

        } else {
            //No user is signed in
            //console.log("====================================Not logged in");
            $('#login').show();
            $('#loggedIn').hide();
            $('#preferences').hide();
        }
    });


    function displayUserPreferences(uid) {
        //The User is Signed In
        //console.log('displayUserPreferences', uid);
        $("#user-name-input").val('');
        $("#wind-input").val('');
        $("#precipitation-input").val('');
        $("#temperature-min-input").val('');
        $("#temperature-max-input").val('');

        database.ref('preferences').orderByChild("userId").equalTo(uid).once('value', function (snapshot) {
           // console.log(snapshot.val());
           // console.log("snapshot.numChildren()", snapshot.numChildren());

            if (snapshot && snapshot.numChildren() > 0) {

                snapshot.forEach(function (childSnapshot) {
                    //console.log("INSIDE SNAPSHOT " + childSnapshot.val().userName);
                    if (childSnapshot.val()
                        && childSnapshot.val().userName != null
                        && childSnapshot.val().userName != '') {
                        $("#greeting").text("Hello " + childSnapshot.val().userName);
                    }
                    $("#user-name-input").val(childSnapshot.val().userName);
                    $("#wind-input").val(childSnapshot.val().windLimit);
                    $("#precipitation-input").val(childSnapshot.val().precipLimit);
                    $("#temperature-min-input").val(childSnapshot.val().tempMin);
                    $("#temperature-max-input").val(childSnapshot.val().tempMax);
                    $('#preferences').attr('data-id', childSnapshot.key);
                });
            } else {
                //console.log('A user is signed in, but has never saved preferences');
                //$('#preferences').attr('data-id', snapshot.key);
            }
        });
        //  if so fetch and display them
        //  if not create blank user preferences
        //  assign a preferences key to the collapsed div
        database.ref('mtns').orderByChild("userid").equalTo(uid).once('value', function (snapshot) {
            //snapshot would have list of NODES that satisfies the condition
            //console.log(snapshot.val())
            snapshot.forEach(function (childSnapshot) {
                var favMtnIcons = $(".favorite");
                //console.log(childSnapshot);
                //this will be the Object Key Unique Id Value 
                var key = childSnapshot.key;
                //this is the data
                var childData = childSnapshot.val();
                //console.log("KEY: " + key);
                //console.log(childData.name);
                for (var i = 0; i < favMtnIcons.length; i++) {
                    var mtnId = $(favMtnIcons[i]).closest('table').attr("id");
                    if (mtnId === childData.name) {
                        $(favMtnIcons[i]).removeClass("far").addClass("fas").attr("value", "true")
                    }
                }
            });
        });

    }

    // var uiConfig = {
    //     signInSuccessUrl: 'loggedIn.html',
    //     signInOptions: [
    //         // Leave the lines as is for the providers you want to offer your users.
    //         firebase.auth.EmailAuthProvider.PROVIDER_ID
    //     ],
    //     // tosUrl and privacyPolicyUrl accept either url string or a callback
    //     // function.
    //     // Terms of service url/callback.
    //     tosUrl: '<your-tos-url>',
    //     // Privacy policy url/callback.
    //     privacyPolicyUrl: function () {
    //         window.location.assign('<your-privacy-policy-url>');
    //     }
    // };

    // // Initialize the FirebaseUI Widget using Firebase.
    // var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // // The start method will wait until the DOM is loaded.
    // ui.start('#firebaseui-auth-container', uiConfig);


    // firebase.auth().onAuthStateChanged(function (user) {
    //     if (user) {
    //         // User is signed in.
    //     } else {
    //         // No user is signed in.
    //     }
    // });

    //existing user
    //auth.signInWithEmailAndPassword(email, pass);
    //auth.creatUserWithEmailAndPasword(email, pass);
    //return promises that asynchronously 

    //firebaseUser if logged in
    //null if logged out
    //auth.onAuthStateChanged(firebaseUser => { });
}());