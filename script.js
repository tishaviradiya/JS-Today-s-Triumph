const checkboxList=document.querySelectorAll('.custom-checkbox')
const allInputFields=document.querySelectorAll('.circle-input');
const errLabel=document.querySelector('.error-label');
const progressBar=document.querySelector('.progress-bar')
const progressValue=document.querySelector('.progress-value');
const progressLabel=document.querySelector('.progress-label')

const allQuotes=['Raise the bar by completing your goals!','Well begun is half done!','Just a step away, keep going!','Whoa! You just completed all the goals, time for chill ']


const allGoals=JSON.parse(localStorage.getItem('allGoals'))||{
   first:{
    name:'',
    completed:false,
   },
   second:{
    name:'',
    completed:false,
   },
   third:{
    name:'',
    completed:false,
   }
}

let completedGoals=Object.values(allGoals).filter((goal)=>goal.completed).length
progressValue.style.width=`${(completedGoals/3)*100}%`

progressLabel.innerText=allQuotes[completedGoals]




checkboxList.forEach((checkbox)=>{
    checkbox.addEventListener('click',(e)=>{
        const allGoalsAreAdded=[...allInputFields].every((input)=>{
        // console.log(input.value);
            return input.value;
        })
        console.log(allGoalsAreAdded);
        if(allGoalsAreAdded){  
            checkbox.parentElement.classList.toggle('completed')
            const inputId=checkbox.nextElementSibling.id;
            allGoals[inputId].completed=!allGoals[inputId].completed
             completedGoals=Object.values(allGoals).filter((goal)=>goal.completed).length;
             progressValue.style.width=`${(completedGoals/3)*100}%`
             progressValue.firstElementChild.innerText=`${completedGoals} /3 completed`
             progressLabel.innerText=allQuotes[completedGoals]

            localStorage.setItem('allGoals',JSON.stringify(allGoals));
        }
        else{
            progressBar.classList.add('show-error');
        }
    })
})
allInputFields.forEach((input)=>{
    input.value=allGoals[input.id].name;
    if(allGoals[input.id].completed){
        input.parentElement.classList.add('completed')
    }
    input.addEventListener('focus',()=>{
        progressBar.classList.remove('show-error');
    })
    input.addEventListener('input',(e)=>{
        if(allGoals[input.id].completed){
            input.value=allGoals[input.id].name
            return;
        }
        allGoals[input.id].name=input.value,
        // console.log(allGoals);
        localStorage.setItem('allGoals',JSON.stringify(allGoals))
    })
})















// const checkboxList=document.querySelectorAll('.custom-checkbox')
// const allInputFields=document.querySelectorAll('.circle-input');
// const errLabel=document.querySelector('.error-label');
// const progressBar=document.querySelector('.progress-bar')
// const progressValue=document.querySelector('.progress-value');


// const allGoals=JSON.parse(localStorage.getItem('allGoals'))||{}


// checkboxList.forEach((checkbox)=>{
//     checkbox.addEventListener('click',(e)=>{
//         const allGoalsAreAdded=[...allInputFields].every((input)=>{
//         console.log(input.value);
//             return input.value;
//         })
//         console.log(allGoalsAreAdded);
//         if(allGoalsAreAdded){  
//             checkbox.parentElement.classList.toggle('completed')
//             progressValue.style.width='33.3%'
//             const inputId=checkbox.nextElementSibling.id;
//             allGoals[inputId].completed=!allGoals[inputId].completed
//             localStorage.setItem('allGoals',JSON.stringify(allGoals));
//         }
//         else{
//             progressBar.classList.add('show-error');
//         }
//     })
// })
// allInputFields.forEach((input)=>{
//     input.value=allGoals[input.id].name;
//     if(allGoals[input.id].completed){
//         input.parentElement.classList.add('completed')
//     }
//     input.addEventListener('focus',()=>{
//         progressBar.classList.remove('show-error');
//     })
//     input.addEventListener('input',(e)=>{
//         allGoals[input.id]={
//             name:input.value,
//             completed:false,
//         }
//         console.log(allGoals);
//         localStorage.setItem('allGoals',JSON.stringify(allGoals))
//     })
// })















