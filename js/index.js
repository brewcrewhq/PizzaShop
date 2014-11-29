/**
 * Created by brewela on 11/12/2014.
 * Self executing anonymous function
 * (function () {
 *
 * })();
 *
 */
(function () {
    "use strict";

    /**
     * Throws alert for boolean parameter.
     * @param {Boolean} someTrueFalseValue
     */
    function throwAlert(someTrueFalseValue) {
        alert(someTrueFalseValue);
    }

    $(document).ready(function(){
        $("#mainMenu").click(function(){
            throwAlert("notBoolean");
        })
    })

    var ex = "[0-9A-Za-z ]*"

})();
