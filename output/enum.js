"use strict";
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SUN"] = 100] = "SUN";
    DaysOfWeek[DaysOfWeek["MON"] = 101] = "MON";
    DaysOfWeek[DaysOfWeek["TUE"] = 102] = "TUE";
    DaysOfWeek[DaysOfWeek["THU"] = 103] = "THU";
    DaysOfWeek[DaysOfWeek["WED"] = 104] = "WED";
    DaysOfWeek[DaysOfWeek["FRI"] = 105] = "FRI";
    DaysOfWeek[DaysOfWeek["SAT"] = 106] = "SAT";
})(DaysOfWeek || (DaysOfWeek = {}));
var day;
day = DaysOfWeek.MON;
if (day == DaysOfWeek.MON) {
    console.log('GotTo go to the work');
}
