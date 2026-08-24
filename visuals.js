const repBase='https://exercise-dataset.com/images/flat/';
const repVisuals={
bridge:['glute-bridge-start.webp','glute-bridge-peak.webp'],
hinge:['romanian-deadlift-start.webp','romanian-deadlift-peak.webp'],
birddog:['bird-dog-hold-main.webp'],
lunge:['reverse-lunge-start.webp','reverse-lunge-peak.webp'],
deadbug:['dead-bug-start.webp','dead-bug-peak.webp'],
plank:['plank-main.webp'],
squat:['bodyweight-squat-start.webp','bodyweight-squat-peak.webp'],
split:['dumbbell-split-squat-start.webp','dumbbell-split-squat-peak.webp'],
singlehinge:['kettlebell-single-leg-deadlift-start.webp','kettlebell-single-leg-deadlift-peak.webp'],
calf:['bodyweight-calf-raise-start.webp','bodyweight-calf-raise-peak.webp'],
sideplank:['side-plank-main.webp'],
pushup:['incline-push-ups-start.webp','incline-push-ups-peak.webp'],
hipthrust:['hip-thrust-start.webp','hip-thrust-peak.webp'],
child:['bench-childs-pose-main.webp'],
row:['cable-bent-over-row-start.webp','cable-bent-over-row-peak.webp'],
pullapart:['face-pull-start.webp','face-pull-peak.webp'],
step:['bodyweight-squat-start.webp','bodyweight-squat-peak.webp'],
balance:['kettlebell-single-leg-deadlift-start.webp'],
bear:['bird-dog-hold-main.webp'],
bandwalk:['bodyweight-squat-start.webp','bodyweight-squat-peak.webp']
};
const originalFigure=window.figure;
window.figure=function(type){const imgs=repVisuals[type];if(!imgs)return originalFigure(type);return `<div class="rep-poses">${imgs.map((f,i)=>`<img loading="lazy" src="${repBase+f}" alt="${i?'Finish':'Start'} position exercise illustration" onerror="this.closest('.rep-poses').innerHTML=window.originalFigureFallback('${type}')">`).join('')}</div>`};
window.originalFigureFallback=t=>originalFigure(t);
const oldOpen=window.openWorkout;
window.openWorkout=function(id,route=true){oldOpen(id,route);const table=document.querySelector('.exercise-table');if(table&&!table.querySelector('.rep-credit')){const c=document.createElement('div');c.className='rep-credit';c.innerHTML='Exercise illustrations: <a href="https://repdb.co/" target="_blank" rel="noopener">RepDB</a>. Some visuals show the same movement pattern with different equipment; follow the exercise name and cue in this program.';table.appendChild(c)}};
if(location.hash.startsWith('#workout-')){const id=location.hash.replace('#workout-','');setTimeout(()=>window.openWorkout(id,false),0)}