/**
 * Created by smallblack on 2017/11/10.
 */

var variablesSnap;

firebase.database().ref('personal-site').once('value', function(snap){
    variablesSnap = snap.val();
}).then(function(){
    new Vue({
        el: '#app',
        data: {
            message: variablesSnap.greet
        }
    });
});