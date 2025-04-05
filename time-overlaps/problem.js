class Schedule {
	
	constructor(id, startTime, endTime){
			this.startTime = startTime;
			this.endTime = endTime;
			this.id = id
	}
}



const s1 = new Schedule(1, new Date('2024-12-11T16:24:44.000Z'), new Date('2024-12-11T17:30:44.000Z'))
const s2 = new Schedule(2, new Date('2024-11-11T04:24:44.000Z'), new Date('2024-11-11T07:30:44.000Z'))
const s3 = new Schedule(3, new Date('2024-11-11T09:30:45.000Z'), new Date('2024-11-11T09:40:44.000Z'))

const req = {
	startTime: new Date('2024-11-11T05:30:44.000Z'),
	endTime: new Date('2024-11-11T09:30:44.000Z')
}

const result = [s1, s2, s3].filter(s=>{
	return s.endTime.getTime() < req.startTime.getTime() || s.startTime.getTime() > req.endTime.getTime()
})

const busySchedules = [s1,s2,s3].filter(s=>{
	const startTimeFallsInsideSchedule = s.startTime.getTime() <= req.startTime.getTime() && s.endTime.getTime() >= req.startTime.getTime()
	if(startTimeFallsInsideSchedule) return true;
	const endTimeFallsInsideSchedule = s.endTime.getTime() >= req.endTime.getTime() && s.startTime.getTime() <= req.endTime.getTime()
	return endTimeFallsInsideSchedule
})
console.log(result, busySchedules)
