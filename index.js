function CountingMinutesI(str) { 

    // code goes here
    const times = str.split("-");
  
    function getTime(time){
      const splitTime = time.split(":") 
      let hrs = Number(splitTime[0]);
      const mins = Number(splitTime[1].slice(0,2))
      const ampm = splitTime[1].slice(2)
  
     if (ampm === "am" & hrs === 12) {
              hrs = 0;
          }
  
          if (ampm === "pm" && hrs !== 12) {
              hrs += 12;
          }
  
          hrs *= 60;
  
      const fulltimeinMins = Number(hrs) + Number(mins)
      return fulltimeinMins;
    }
  
    const time1 = getTime(times[0])
      const time2 = getTime(times[1])
  
          if (time2 > time1) {
          return time2 - time1;
      } else {
          return (time2 - time1) + 1440;
      }
  }
    CountingMinutesI("12:30pm-12:00am")
    CountingMinutesI("1:23am-1:08am")