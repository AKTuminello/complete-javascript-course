// this is part 26 of the tutorial: switch statements

const day= `Wednesday`;

switch(day) {
    case 'Monday': // day==='Monday
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday': // day==='Tuesday'
        console.log('Prepare theory videos');
        break;
    case 'Wednesday': // day==='Wednesday'
    case 'Thursday': // day==='Thursday'
        console.log('Write code examples');
        break;
    case 'Friday': // day==='Friday'
        console.lot('Record the videos');
        break;
    case 'Saturday': // day==='Saturday'
    case 'Sunday': // day==='Sunday'
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}

//the same thing in else statements.

if(day ==='Saturday' || day === 'Sunday'){
    console.log('Enjoy the weekend'); 

} else if (day ==='Monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'Tuesday'){
    console.log('Prepare theory videos');
} else if (day === 'Wednesday' || day === 'Thursday'){
    console.log('Write code examples');
} else if (day === 'Friday'){
    console.lot('Record the videos');
} else {
    console.log('Not a valid day');
}
    
    