import { exerciseCardTemplate } from './exerciseCard.template';
import { ExerciseSelectComponent } from './../exercise_select/exerciseSelect.component';
import { AlertComponent } from './../alert/alert.component';
import { Exercises } from './../../util/exercise';
import { getMetaDataRef, saveMetaData, updateMetaData } from './../../repository/metadata';
import { getExerciseRef, saveExercise, updateExercise } from './../../repository/exercises';
import { TodayCardComponent } from './../today_card/todayCard.component';

export const ExerciseCardComponent = {

    init(idElement, user, todayCardId, date) {
        this.user = user;
        this.componentElement = document.querySelector(idElement);
        this.todayCardId = todayCardId;
        this.model = {
            id: 'log-exercise-card',
            date: date,
            selectModel: {
                id: 'exercise-select-component',
            }
        };
        this.render();
    },

    render() {
        this.componentElement.innerHTML = exerciseCardTemplate(this.model);
        const selectComponent = document.getElementById(this.model.id + 'Select');
        selectComponent.innerHTML = ExerciseSelectComponent.render(this.model.selectModel);
        this.afterRender();
    },

    afterRender() {
        const model = this.model;
        const user = this.user;
        const todayCardId = this.todayCardId;
        const submitBtn = document.getElementById(model.id + 'Submit');
        submitBtn.addEventListener('click', event => {
            const selectComponent = document.getElementById(model.selectModel.id);
            const repetition = document.getElementById(model.id + 'Rep');
            const weight = document.getElementById(model.id + 'Weight');
            if (validData(selectComponent, repetition, weight)) {
                let data = {
                    repetitions: [repetition.value],
                    weights: [weight.value]
                };
                saveOrUpdate(selectComponent.value, user, model.date, data, todayCardId);
            }
        });
        ExerciseSelectComponent.afterRender(this.model.selectModel);
    },

    displayAlert(innerHTML) {
        let alertDiv = document.querySelector('#log-exercise-cardAlert');
        alertDiv.innerHTML = innerHTML;
    },
};

function validData(selectComponent, repetition, weight) {
    return selectComponent.value !== '' && repetition.value !== '' && weight.value !== ''
}

function saveOrUpdate(exercise, userEmail, newDate, data, todayCardId) {
    const docMetaRef = getMetaDataRef(userEmail, newDate);
    docMetaRef.get().then(function (doc) {
        
    }).catch(function (error) {
        console.log("Error getting document:", error);
        const alert = AlertComponent.renderBasic("alert-warning", "Error <strong>getting</strong> document.");
        ExerciseCardComponent.displayAlert(alert);
    });

    const docRef = getExerciseRef(exercise, userEmail, newDate);
    docRef.get().then(function (doc) {
        
    }).catch(function (error) {
        console.log("Error getting document:", error);
        const alert = AlertComponent.renderBasic("alert-warning", "Error <strong>getting</strong> document.");
        ExerciseCardComponent.displayAlert(alert);
    });
}
